import asyncio
import os
from pathlib import Path
import tempfile
import pytest
import pyarrow.parquet as pq

# Set test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_cmd_multi.db")
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

import uvicorn
import httpx
from server.config import ADMIN_TOKEN
from server.db import db
from server.main import app
from server.roles import roles_registry
from tools.fake_tracker import SimulatedTracker

@pytest.mark.anyio
async def test_commands_and_multidevice_session():
    # Spin up test server on dedicated port 8898
    config = uvicorn.Config(app, host="127.0.0.1", port=8898, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    await asyncio.sleep(0.5)

    try:
        admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}

        # 1. Spawn trackers for all 7 required roles
        trackers = []
        for i, role in enumerate(roles_registry.required_roles):
            dev_id = f"11:22:33:44:55:{i+1:02X}"
            token = f"tok_cmd_{role}"
            db.register_device(dev_id, role, token)

            # Introduce 2% simulated packet loss and varying clock skews
            tracker = SimulatedTracker(
                device_id=dev_id,
                role=role,
                token=token,
                server_url="http://127.0.0.1:8898",
                packet_loss_rate=0.02,
                clock_skew_ms=i * 15,
                include_raw=True,
            )
            trackers.append(tracker)

        tracker_tasks = [asyncio.create_task(t.run()) for t in trackers]

        # Let trackers connect and announce
        await asyncio.sleep(1.0)

        async with httpx.AsyncClient() as client:
            # Verify devices listed
            res = await client.get("http://127.0.0.1:8898/v1/devices")
            assert res.status_code == 200
            devices = res.json()
            assert len(devices) >= len(roles_registry.required_roles)

            # 2. Test Commands dispatch (identify, calibrate, reboot)
            test_dev = trackers[0].device_id
            for cmd_type in ["identify", "calibrate"]:
                res = await client.post(
                    f"http://127.0.0.1:8898/v1/devices/{test_dev}/command",
                    json={"type": cmd_type, "duration_ms": 1000},
                    headers=admin_headers,
                )
                assert res.status_code == 200
                assert res.json()["status"] == "command_sent"

            # Test command to non-existent device -> 404
            res = await client.post(
                "http://127.0.0.1:8898/v1/devices/FF:FF:FF:FF:FF:FF/command",
                json={"type": "identify"},
                headers=admin_headers,
            )
            assert res.status_code == 404

            # 3. Start Multi-Device Session
            res = await client.post(
                "http://127.0.0.1:8898/v1/sessions",
                json={"name": "Multi-Tracker Workout Trial", "description": "7 trackers active"},
                headers=admin_headers,
            )
            assert res.status_code == 201
            session_data = res.json()
            session_id = session_data["session_id"]
            recording_id = session_data["recording_id"]
            assert len(session_data["participating_devices"]) >= 7

            # Stream data across all 7 devices for 2.0 seconds
            await asyncio.sleep(2.0)

            # Check that trackers received start command and set recording = True
            for t in trackers:
                assert t.recording is True
                assert t.active_session_id == session_id

            # 4. End Session
            res = await client.post(
                f"http://127.0.0.1:8898/v1/sessions/{session_id}/end",
                headers=admin_headers,
            )
            assert res.status_code == 200
            end_data = res.json()
            assert end_data["status"] == "completed"
            assert end_data["total_samples"] > 100

            # Check that trackers received stop command
            await asyncio.sleep(0.2)
            for t in trackers:
                assert t.recording is False

            # 5. Export and Validate Multi-Device Parquet Dataset
            res = await client.get(f"http://127.0.0.1:8898/v1/sessions/{session_id}/export")
            assert res.status_code == 200
            assert res.headers["content-type"] == "application/vnd.apache.parquet"

            sess = db.get_session(session_id)
            table = pq.read_table(sess["parquet_path"])
            assert len(table) > 100

            # Verify every participating role has samples in the Parquet file
            recorded_roles = set(table["role"].to_pylist())
            for req_role in roles_registry.required_roles:
                assert req_role in recorded_roles

            # Verify schema columns
            expected_cols = [
                "recording_id", "time_ms", "role", "seq", "server_rx_ms",
                "quat_w", "quat_x", "quat_y", "quat_z",
                "accel_x", "accel_y", "accel_z",
                "gyro_x", "gyro_y", "gyro_z",
                "mag_x", "mag_y", "mag_z",
            ]
            for col in expected_cols:
                assert col in table.column_names

        # Cleanup trackers
        for t in trackers:
            t.running = False
        for task in tracker_tasks:
            task.cancel()

    finally:
        server.should_exit = True
        await server_task
