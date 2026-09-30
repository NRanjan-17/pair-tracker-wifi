import asyncio
import os
from pathlib import Path
import tempfile
import time
import httpx
import pytest
import uvicorn

# Test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_session_playback.db")
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

from server.main import app
from server.roles import roles_registry
from server.tracker_manager import tracker_manager
from tools.fake_tracker import SimulatedTracker

TEST_PORT = 8898
BASE_URL = f"http://127.0.0.1:{TEST_PORT}"
ADMIN_HEADERS = {"Authorization": "Bearer test_admin_secret"}

@pytest.mark.anyio
async def test_session_recording_blocked_and_playback_pipeline():
    """
    Acceptance test for Session Recording and 3D Playback:
    1. Rec is blocked with clear message when required roles are missing (409 Conflict).
    2. Required trackers connect and stream.
    3. Start recording session via POST /v1/sessions.
    4. Motion samples stream and are captured into Parquet dataset.
    5. Stop recording session via POST /v1/sessions/{id}/end.
    6. Verify GET /v1/sessions lists recorded session with metadata.
    7. Verify GET /v1/sessions/{id}/data returns normalized time-series samples for 3D playback.
    """
    # Clean any prior in-memory state
    tracker_manager.active_connections.clear()
    tracker_manager.role_to_device.clear()
    tracker_manager.active_session_id = None

    config = uvicorn.Config(app, host="127.0.0.1", port=TEST_PORT, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    # Wait for server to be responsive
    async with httpx.AsyncClient() as client:
        for _ in range(30):
            try:
                res = await client.get(f"{BASE_URL}/healthz")
                if res.status_code == 200:
                    break
            except Exception:
                await asyncio.sleep(0.1)

    trackers = []
    tracker_tasks = []

    try:
        async with httpx.AsyncClient() as client:
            # 1. Verify blocked session start if required roles are missing
            res = await client.post(
                f"{BASE_URL}/v1/sessions",
                json={"name": "Premature Session"},
                headers=ADMIN_HEADERS,
            )
            assert res.status_code == 409
            detail = res.json().get("detail", "")
            assert "Missing required roles" in detail
            for r in roles_registry.required_roles:
                assert r in detail

            # 2. Register and start all required trackers
            for i, role in enumerate(roles_registry.required_roles):
                mac = f"02:AA:BB:CC:11:{i+1:02X}"
                token = f"tok_test_{role}"
                reg_res = await client.post(
                    f"{BASE_URL}/v1/devices/register",
                    json={"device_id": mac, "role": role, "token": token},
                    headers=ADMIN_HEADERS,
                )
                assert reg_res.status_code in (200, 201)

                tracker = SimulatedTracker(
                    device_id=mac,
                    role=role,
                    token=token,
                    server_url=BASE_URL,
                    motion="sinusoid" if "hand" in role or "arm" in role or "thigh" in role else "static",
                )
                trackers.append(tracker)
                tracker_tasks.append(asyncio.create_task(tracker.run()))

            # Allow trackers to announce and establish WebSocket streams
            await asyncio.sleep(1.0)

            # Check that all devices are online
            dev_res = await client.get(f"{BASE_URL}/v1/devices")
            assert dev_res.status_code == 200
            devices_info = dev_res.json()
            online_roles = {d["role"] for d in devices_info if d.get("online")}
            for req in roles_registry.required_roles:
                assert req in online_roles

            # 3. Start recording session via POST /v1/sessions
            session_name = "Acceptance Test Recording"
            start_res = await client.post(
                f"{BASE_URL}/v1/sessions",
                json={"name": session_name, "description": "Verification of recording & playback"},
                headers=ADMIN_HEADERS,
            )
            assert start_res.status_code == 201
            session_data = start_res.json()
            session_id = session_data["session_id"]
            assert session_data["status"] == "active"
            assert session_data["name"] == session_name

            # 4. Stream motion samples for 1.5 seconds
            await asyncio.sleep(1.5)

            # 5. Stop recording session via POST /v1/sessions/{id}/end
            end_res = await client.post(
                f"{BASE_URL}/v1/sessions/{session_id}/end",
                headers=ADMIN_HEADERS,
            )
            assert end_res.status_code == 200
            end_data = end_res.json()
            assert end_data["status"] == "completed"
            assert end_data["total_samples"] > 0
            assert "parquet_path" in end_data

            parquet_file = Path(end_data["parquet_path"])
            assert parquet_file.exists()
            assert parquet_file.stat().st_size > 0

            # 6. Verify GET /v1/sessions lists the recorded session
            sessions_list_res = await client.get(f"{BASE_URL}/v1/sessions")
            assert sessions_list_res.status_code == 200
            sessions_list = sessions_list_res.json()
            assert len(sessions_list) >= 1
            found = next((s for s in sessions_list if s["session_id"] == session_id), None)
            assert found is not None
            assert found["name"] == session_name
            assert found["status"] == "completed"
            assert found["total_samples"] == end_data["total_samples"]

            # 7. Verify GET /v1/sessions/{session_id}/data returns normalized playback samples
            playback_res = await client.get(f"{BASE_URL}/v1/sessions/{session_id}/data")
            assert playback_res.status_code == 200
            pb_data = playback_res.json()

            assert pb_data["session_id"] == session_id
            assert pb_data["name"] == session_name
            assert pb_data["status"] == "completed"
            assert pb_data["total_samples"] == end_data["total_samples"]
            assert pb_data["duration_ms"] > 0
            assert len(pb_data["roles"]) == len(roles_registry.required_roles)

            samples = pb_data["samples"]
            assert len(samples) == end_data["total_samples"]

            # Verify first sample starts at relative t_ms = 0
            assert samples[0]["t_ms"] == 0

            # Verify samples are sorted by t_ms
            for i in range(1, len(samples)):
                assert samples[i]["t_ms"] >= samples[i-1]["t_ms"]

            # Verify quaternions are normalized unit quaternions
            for s in samples:
                assert "t_ms" in s
                assert "role" in s
                assert "seq" in s
                assert len(s["quat"]) == 4
                qw, qx, qy, qz = s["quat"]
                norm_sq = qw * qw + qx * qx + qy * qy + qz * qz
                assert abs(norm_sq - 1.0) < 1e-3, f"Non-unit quaternion: {s['quat']}"

            print(f"\n[Test Success] Recorded {len(samples)} samples over {pb_data['duration_ms']} ms across roles {pb_data['roles']}")

    finally:
        # Stop trackers
        for tracker in trackers:
            tracker.stop()
        for task in tracker_tasks:
            task.cancel()
        await asyncio.gather(*tracker_tasks, return_exceptions=True)

        # Stop server
        server.should_exit = True
        await server_task
