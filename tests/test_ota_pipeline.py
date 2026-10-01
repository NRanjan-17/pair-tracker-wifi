import asyncio
import hashlib
import json
import os
from pathlib import Path
import tempfile
import time
import pytest
import httpx
import uvicorn
import websockets

# Set test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_ota.db")
os.environ["PAIR_ADMIN_TOKEN"] = "test_admin_secret"
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

import shutil
from server.config import ADMIN_TOKEN
from server.db import db
from server.main import app, FIRMWARE_BIN_DIR
from server.tracker_manager import tracker_manager
from tools.fake_tracker import SimulatedTracker

@pytest.fixture(scope="module", autouse=True)
def setup_firmware_release():
    """Ensure a release exists for tests"""
    release_dir = FIRMWARE_BIN_DIR / "1.0.0"
    created_release_dir = False
    if not release_dir.exists():
        release_dir.mkdir(parents=True, exist_ok=True)
        created_release_dir = True

    bin_file = release_dir / "firmware.bin"
    if not bin_file.exists():
        bin_data = b"\xAA\xBB\xCC\xDD" * 256
        bin_file.write_bytes(bin_data)
    else:
        bin_data = bin_file.read_bytes()

    sha256 = hashlib.sha256(bin_data).hexdigest()
    manifest = {
        "version": "1.0.0",
        "sha256": sha256,
        "size": len(bin_data),
        "min_protocol": 1,
    }
    (release_dir / "manifest.json").write_text(json.dumps(manifest, indent=2))

    # Also prepare a simulated 1.0.1 release
    rel_101 = FIRMWARE_BIN_DIR / "1.0.1"
    rel_101.mkdir(parents=True, exist_ok=True)
    bin_101_data = b"ESP32_FIRMWARE_V101_TEST_PAYLOAD" * 32
    (rel_101 / "firmware.bin").write_bytes(bin_101_data)
    manifest_101 = {
        "version": "1.0.1",
        "sha256": hashlib.sha256(bin_101_data).hexdigest(),
        "size": len(bin_101_data),
        "min_protocol": 1,
    }
    (rel_101 / "manifest.json").write_text(json.dumps(manifest_101, indent=2))

    c6_101 = FIRMWARE_BIN_DIR / "esp32c6" / "1.0.1"
    c6_101.mkdir(parents=True, exist_ok=True)
    (c6_101 / "firmware.bin").write_bytes(bin_101_data)
    (c6_101 / "manifest.json").write_text(json.dumps(manifest_101, indent=2))

    yield

    shutil.rmtree(rel_101, ignore_errors=True)
    shutil.rmtree(c6_101, ignore_errors=True)
    if created_release_dir:
        shutil.rmtree(release_dir, ignore_errors=True)

@pytest.mark.anyio
async def test_ota_manifest_and_download_auth():
    config = uvicorn.Config(app, host="127.0.0.1", port=8910, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())
    await asyncio.sleep(0.5)

    try:
        async with httpx.AsyncClient() as client:
            # 1. GET /v1/firmware/latest
            res = await client.get("http://127.0.0.1:8910/v1/firmware/latest")
            assert res.status_code == 200
            latest = res.json()
            assert latest["version"] in ("1.0.1", "1.0.2")
            latest_ver = latest["version"]
            assert "sha256" in latest
            assert "size" in latest

            # 2. GET /v1/firmware/<version>/firmware.bin without token -> 401
            res = await client.get(f"http://127.0.0.1:8910/v1/firmware/{latest_ver}/firmware.bin")
            assert res.status_code == 401

            # 3. GET with invalid token -> 403
            res = await client.get(
                f"http://127.0.0.1:8910/v1/firmware/{latest_ver}/firmware.bin",
                headers={"Authorization": "Bearer bad_token_123"},
            )
            assert res.status_code == 403

            # 4. Register a device token in DB and test authenticated download
            dev_id = "11:22:33:44:55:66"
            tok = "valid_device_tok_777"
            db.register_device(dev_id, "chest", tok)

            res = await client.get(
                f"http://127.0.0.1:8910/v1/firmware/{latest_ver}/firmware.bin",
                headers={"Authorization": f"Bearer {tok}"},
            )
            assert res.status_code == 200
            downloaded = res.content
            assert len(downloaded) == latest["size"]
            assert hashlib.sha256(downloaded).hexdigest() == latest["sha256"]

            # Query param token authentication also works
            res = await client.get(f"http://127.0.0.1:8910/v1/firmware/{latest_ver}/firmware.bin?token={tok}")
            assert res.status_code == 200
            assert res.content == downloaded

            # Admin token authentication also works
            res = await client.get(
                f"http://127.0.0.1:8910/v1/firmware/{latest_ver}/firmware.bin",
                headers={"Authorization": f"Bearer {ADMIN_TOKEN}"},
            )
            assert res.status_code == 200
    finally:
        server.should_exit = True
        await server_task

@pytest.mark.anyio
async def test_ota_conflict_rejections_409():
    config = uvicorn.Config(app, host="127.0.0.1", port=8911, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())
    await asyncio.sleep(0.5)

    try:
        admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}
        async with httpx.AsyncClient() as client:
            dev_offline_id = "00:11:22:33:44:99"

            # 1. Device offline -> 409 Conflict
            res = await client.post(
                f"http://127.0.0.1:8911/v1/devices/{dev_offline_id}/ota",
                json={"version": "1.0.1"},
                headers=admin_headers,
            )
            assert res.status_code == 409
            assert "offline" in res.json()["detail"].lower()

            # 2. Connect a tracker with low battery (< 30%)
            dev_low_batt = "00:11:22:33:44:11"
            tok_low = "tok_low_batt"
            db.register_device(dev_low_batt, "pelvis", tok_low)

            tracker_low = SimulatedTracker(
                device_id=dev_low_batt,
                role="pelvis",
                token=tok_low,
                server_url="http://127.0.0.1:8911",
            )
            tracker_low.battery_pct = 20  # Below 30%
            tracker_task = asyncio.create_task(tracker_low.run())
            await asyncio.sleep(1.0)

            # Attempt OTA -> 409 Conflict due to battery < 30%
            res = await client.post(
                f"http://127.0.0.1:8911/v1/devices/{dev_low_batt}/ota",
                json={"version": "1.0.1"},
                headers=admin_headers,
            )
            assert res.status_code == 409
            assert "battery is too low" in res.json()["detail"].lower()

            tracker_low.stop()
            await asyncio.sleep(0.2)
            tracker_task.cancel()

            # 3. Recording session active -> 409 Conflict
            # Connect all 7 required roles
            from server.roles import roles_registry
            rec_trackers = []
            rec_tasks = []
            for i, r in enumerate(roles_registry.required_roles):
                d_id = f"12:34:56:78:90:{i+1:02X}"
                d_tok = f"tok_rec_{r}"
                db.register_device(d_id, r, d_tok)
                t = SimulatedTracker(device_id=d_id, role=r, token=d_tok, server_url="http://127.0.0.1:8911")
                rec_trackers.append(t)
                rec_tasks.append(asyncio.create_task(t.run()))

            await asyncio.sleep(1.0)

            # Start recording
            res = await client.post(
                "http://127.0.0.1:8911/v1/sessions",
                json={"name": "Active Rec Session"},
                headers=admin_headers,
            )
            assert res.status_code == 201

            # Now attempt OTA on one of the active trackers -> 409 Conflict
            target_id = rec_trackers[0].device_id
            res = await client.post(
                f"http://127.0.0.1:8911/v1/devices/{target_id}/ota",
                json={"version": "1.0.1"},
                headers=admin_headers,
            )
            assert res.status_code == 409
            assert "recording session is active" in res.json()["detail"].lower()

            # End session
            sess_id = res.json()  # Ended below
            if tracker_manager.active_session_id:
                await tracker_manager.end_session()

            for t in rec_trackers:
                t.stop()
            for task in rec_tasks:
                task.cancel()
    finally:
        server.should_exit = True
        await server_task

@pytest.mark.anyio
async def test_ota_full_lifecycle_success():
    config = uvicorn.Config(app, host="127.0.0.1", port=8912, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())
    await asyncio.sleep(0.5)

    try:
        admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}
        dev_id = "AA:BB:CC:11:22:33"
        tok = "tok_ota_success"
        db.register_device(dev_id, "chest", tok)

        tracker = SimulatedTracker(
            device_id=dev_id,
            role="chest",
            token=tok,
            server_url="http://127.0.0.1:8912",
            firmware_version="1.0.0",
        )
        tracker_task = asyncio.create_task(tracker.run())
        await asyncio.sleep(1.0)

        async with httpx.AsyncClient() as client:
            # Check device status: firmware is 1.0.0
            res = await client.get("http://127.0.0.1:8912/v1/devices")
            assert res.status_code == 200
            devs = [d for d in res.json() if d["device_id"] == dev_id]
            assert len(devs) == 1
            assert devs[0]["firmware_version"] == "1.0.0"

            # Connect a dashboard websocket to observe job progress messages
            async with websockets.connect("ws://127.0.0.1:8912/v1/dashboard") as dash_ws:
                init_msg = json.loads(await dash_ws.recv())
                assert init_msg["type"] == "init"
                assert "latest_firmware" in init_msg

                # Trigger OTA to 1.0.1
                ota_res = await client.post(
                    f"http://127.0.0.1:8912/v1/devices/{dev_id}/ota",
                    json={"version": "1.0.1"},
                    headers=admin_headers,
                )
                assert ota_res.status_code == 200
                job_info = ota_res.json()["job"]
                assert job_info["status"] == "queued"
                assert job_info["version"] == "1.0.1"

                # Wait for tracker to receive OTA, download, verify, reboot and re-announce
                success = False
                for _ in range(30):
                    await asyncio.sleep(0.3)
                    job_res = await client.get(f"http://127.0.0.1:8912/v1/devices/{dev_id}/ota")
                    if job_res.status_code == 200:
                        job_data = job_res.json()
                        if job_data["status"] == "success":
                            success = True
                            assert job_data["progress_pct"] == 100
                            break

                assert success, "OTA job failed to reach 'success' state"

                # Verify device is now running v1.0.1
                devs_after = (await client.get("http://127.0.0.1:8912/v1/devices")).json()
                chest_dev = next(d for d in devs_after if d["device_id"] == dev_id)
                assert chest_dev["firmware_version"] == "1.0.1"

        tracker.stop()
        tracker_task.cancel()
    finally:
        server.should_exit = True
        await server_task

@pytest.mark.anyio
async def test_ota_sha256_mismatch_failure():
    config = uvicorn.Config(app, host="127.0.0.1", port=8913, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())
    await asyncio.sleep(0.5)

    try:
        admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}
        dev_id = "AA:BB:CC:88:88:88"
        tok = "tok_ota_fail"
        db.register_device(dev_id, "head", tok)

        tracker = SimulatedTracker(
            device_id=dev_id,
            role="head",
            token=tok,
            server_url="http://127.0.0.1:8913",
            firmware_version="1.0.0",
            simulate_ota_corrupt_hash=True,  # Will fail verification!
        )
        tracker_task = asyncio.create_task(tracker.run())
        await asyncio.sleep(1.0)

        async with httpx.AsyncClient() as client:
            # Trigger OTA
            res = await client.post(
                f"http://127.0.0.1:8913/v1/devices/{dev_id}/ota",
                json={"version": "1.0.1"},
                headers=admin_headers,
            )
            assert res.status_code == 200

            # Wait for failure reporting
            failed = False
            for _ in range(20):
                await asyncio.sleep(0.3)
                job_res = await client.get(f"http://127.0.0.1:8913/v1/devices/{dev_id}/ota")
                if job_res.status_code == 200:
                    data = job_res.json()
                    if data["status"] == "failed":
                        failed = True
                        assert "mismatch" in data["error_message"].lower()
                        break

            assert failed, "Expected OTA job to report failure on SHA-256 mismatch"

            # Device must stay on current firmware v1.0.0
            devs = (await client.get("http://127.0.0.1:8913/v1/devices")).json()
            head_dev = next(d for d in devs if d["device_id"] == dev_id)
            assert head_dev["firmware_version"] == "1.0.0"

        tracker.stop()
        tracker_task.cancel()
    finally:
        server.should_exit = True
        await server_task

@pytest.mark.anyio
async def test_protocol_version_outdated_flag():
    config = uvicorn.Config(app, host="127.0.0.1", port=8914, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())
    await asyncio.sleep(0.5)

    try:
        dev_id = "AA:BB:CC:99:99:99"
        tok = "tok_outdated_proto"
        db.register_device(dev_id, "left_hand", tok)

        # Device announces with protocol_version = 0 (older than required 1)
        async with httpx.AsyncClient() as client:
            announce_payload = {
                "device_id": dev_id,
                "role": "left_hand",
                "firmware_version": "0.9.0",
                "protocol_version": 0,
                "battery_pct": 80,
                "battery_mv": 3900,
            }
            res = await client.post("http://127.0.0.1:8914/v1/devices/announce", json=announce_payload)
            assert res.status_code == 200

            # List devices and verify protocol_outdated is True
            res = await client.get("http://127.0.0.1:8914/v1/devices")
            assert res.status_code == 200
            dev_summary = next(d for d in res.json() if d["device_id"] == dev_id)
            assert dev_summary["protocol_version"] == 0
            assert dev_summary["protocol_outdated"] is True
    finally:
        server.should_exit = True
        await server_task
