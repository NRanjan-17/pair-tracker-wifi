#!/usr/bin/env python3
"""
Pair Tracker WiFi - End-to-End Pipeline Test
Starts the server, connects 7 simulated trackers with packet loss and clock skew,
records a live session, and verifies exported BVH and Parquet datasets.
"""

import asyncio
import os
import signal
import socket
import subprocess
import sys
import time
from pathlib import Path

import httpx
import pyarrow.parquet as pq

REPO_ROOT = Path(__file__).resolve().parent.parent

GREEN = "\033[92m"
RED = "\033[91m"
BOLD = "\033[1m"
RESET = "\033[0m"


def find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


async def wait_for_server(url: str, timeout: float = 10.0) -> bool:
    start = time.time()
    async with httpx.AsyncClient() as client:
        while time.time() - start < timeout:
            try:
                r = await client.get(f"{url}/healthz", timeout=1.0)
                if r.status_code == 200:
                    return True
            except Exception:
                await asyncio.sleep(0.2)
    return False


async def run_e2e():
    print(f"\n{BOLD}======================================================================{RESET}")
    print(f"{BOLD}           Pair Tracker WiFi - End-to-End Pipeline Test              {RESET}")
    print(f"{BOLD}======================================================================{RESET}\n")

    port = find_free_port()
    server_url = f"http://127.0.0.1:{port}"
    print(f"1. Spawning FastAPI test server on port {port}...")

    server_env = os.environ.copy()
    server_env["SERVER_PORT"] = str(port)
    server_env["SERVER_HOST"] = "127.0.0.1"
    server_env["DATA_DIR"] = str(REPO_ROOT / f"data_test_e2e_{port}")
    server_env["SESSIONS_DIR"] = str(REPO_ROOT / f"sessions_test_e2e_{port}")

    server_proc = subprocess.Popen(
        [sys.executable, "-m", "uvicorn", "server.main:app", "--host", "127.0.0.1", "--port", str(port)],
        cwd=str(REPO_ROOT),
        env=server_env,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )

    fake_proc = None
    try:
        ready = await wait_for_server(server_url, timeout=12.0)
        if not ready:
            print(f"{RED}Server failed to start within timeout.{RESET}")
            sys.exit(1)
        print(f"   {GREEN}✓ Server online at {server_url}{RESET}")

        print("2. Spawning fake tracker simulation with 7 required roles (2% loss, 35ms skew)...")
        fake_proc = subprocess.Popen(
            [
                sys.executable,
                "tools/fake_tracker.py",
                "--server",
                server_url,
                "--roles",
                "required",
                "--loss",
                "0.02",
                "--skew",
                "35",
                "--motion",
                "sinusoid",
            ],
            cwd=str(REPO_ROOT),
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )

        async with httpx.AsyncClient() as client:
            print("3. Waiting for all 7 required roles to connect and stream...")
            all_online = False
            for _ in range(30):
                await asyncio.sleep(0.5)
                r = await client.get(f"{server_url}/v1/devices")
                if r.status_code == 200:
                    devs = r.json()
                    online_roles = [d["role"] for d in devs if d.get("online")]
                    if len(online_roles) >= 7:
                        all_online = True
                        break

            if not all_online:
                print(f"{RED}Error: Not all 7 required roles connected within timeout.{RESET}")
                sys.exit(1)
            print(f"   {GREEN}✓ All 7 required roles online and streaming{RESET}")

            print("4. Starting recording session with calibration offsets...")
            calib_payload = {
                "name": "E2E Automated Session",
                "calibration_offsets": {
                    "chest": [0.0, 0.0, 0.0, 1.0],
                    "left_thigh": [0.0, 0.0, 0.0, 1.0],
                    "right_thigh": [0.0, 0.0, 0.0, 1.0],
                    "left_shin": [0.0, 0.0, 0.0, 1.0],
                    "right_shin": [0.0, 0.0, 0.0, 1.0],
                    "left_foot": [0.0, 0.0, 0.0, 1.0],
                    "right_foot": [0.0, 0.0, 0.0, 1.0],
                },
            }
            start_resp = await client.post(
                f"{server_url}/v1/sessions",
                headers={"Authorization": "Bearer pair_admin_secret"},
                json=calib_payload,
            )
            if start_resp.status_code != 201:
                print(f"{RED}Failed to start session: {start_resp.text}{RESET}")
                sys.exit(1)

            session_id = start_resp.json()["session_id"]
            print(f"   {GREEN}✓ Session started: {session_id}{RESET}")

            print("5. Recording motion data for 3.5 seconds...")
            await asyncio.sleep(3.5)

            print("6. Ending session...")
            end_resp = await client.post(
                f"{server_url}/v1/sessions/{session_id}/end",
                headers={"Authorization": "Bearer pair_admin_secret"},
            )
            if end_resp.status_code != 200:
                print(f"{RED}Failed to end session: {end_resp.text}{RESET}")
                sys.exit(1)
            total_samples = end_resp.json()["total_samples"]
            print(f"   {GREEN}✓ Session ended. Recorded {total_samples} samples.{RESET}")

            print("7. Testing Mocap Export formats...")
            # BVH
            bvh_resp = await client.get(f"{server_url}/v1/sessions/{session_id}/export?format=bvh&rate=30")
            assert bvh_resp.status_code == 200, f"BVH export failed: {bvh_resp.status_code}"
            bvh_text = bvh_resp.text
            assert "HIERARCHY" in bvh_text
            assert "ROOT chest" in bvh_text
            assert "MOTION" in bvh_text
            assert "Frames:" in bvh_text
            assert "Frame Time: 0.033333" in bvh_text
            print(f"   {GREEN}✓ BVH export valid ({len(bvh_text)} bytes){RESET}")

            # Parquet
            pq_resp = await client.get(f"{server_url}/v1/sessions/{session_id}/export?format=parquet&rate=30")
            assert pq_resp.status_code == 200, f"Parquet export failed: {pq_resp.status_code}"
            tmp_pq = Path(f"/tmp/{session_id}_test.parquet")
            tmp_pq.write_bytes(pq_resp.content)
            table = pq.read_table(str(tmp_pq))
            assert table.num_rows > 0
            assert "time_ms" in table.column_names
            assert "bone" in table.column_names
            assert "w" in table.column_names
            tmp_pq.unlink(missing_ok=True)
            print(f"   {GREEN}✓ Parquet export valid ({table.num_rows} resampled rows){RESET}")

            # Metadata
            meta_resp = await client.get(f"{server_url}/v1/sessions/{session_id}/metadata")
            assert meta_resp.status_code == 200
            meta = meta_resp.json()
            assert meta["session_id"] == session_id
            assert "calibration_offsets" in meta
            print(f"   {GREEN}✓ Session metadata JSON valid{RESET}")

        print(f"\n{GREEN}{BOLD}✓ E2E PIPELINE PASSED: Full recording and mocap export lifecycle verified!{RESET}\n")

    finally:
        if fake_proc:
            fake_proc.terminate()
            try:
                fake_proc.wait(timeout=2.0)
            except Exception:
                fake_proc.kill()
        if server_proc:
            server_proc.terminate()
            try:
                server_proc.wait(timeout=2.0)
            except Exception:
                server_proc.kill()
        # Cleanup test directories
        shutil_rm = Path(server_env["DATA_DIR"])
        if shutil_rm.exists():
            import shutil
            shutil.rmtree(shutil_rm, ignore_errors=True)
        shutil_sess = Path(server_env["SESSIONS_DIR"])
        if shutil_sess.exists():
            import shutil
            shutil.rmtree(shutil_sess, ignore_errors=True)


if __name__ == "__main__":
    asyncio.run(run_e2e())
