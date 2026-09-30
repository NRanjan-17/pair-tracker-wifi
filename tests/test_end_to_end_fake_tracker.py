import asyncio
import os
from pathlib import Path
import tempfile
import pytest
import pyarrow.parquet as pq

# Set test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_e2e.db")
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

import uvicorn
from server.config import ADMIN_TOKEN
from server.db import db
from server.main import app
from server.roles import roles_registry
from tools.fake_tracker import SimulatedTracker

@pytest.mark.anyio
async def test_fake_tracker_full_cycle():
    # Run uvicorn server in background task
    config = uvicorn.Config(app, host="127.0.0.1", port=8899, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    # Wait for server to be ready
    await asyncio.sleep(0.5)

    try:
        # Pre-register devices for all required roles
        trackers = []
        for i, role in enumerate(roles_registry.required_roles):
            dev_id = f"AA:BB:CC:DD:00:{i+1:02X}"
            token = f"tok_{role}"
            db.register_device(dev_id, role, token)

            tracker = SimulatedTracker(
                device_id=dev_id,
                role=role,
                token=token,
                server_url="http://127.0.0.1:8899",
                packet_loss_rate=0.0,
                clock_skew_ms=25,
                include_raw=True,
            )
            trackers.append(tracker)

        # Run trackers in background
        tracker_tasks = [asyncio.create_task(t.run()) for t in trackers]

        # Let trackers connect, announce and stream
        await asyncio.sleep(1.0)

        # Verify all required devices are online via REST
        import httpx
        async with httpx.AsyncClient() as client:
            res = await client.get("http://127.0.0.1:8899/v1/devices")
            assert res.status_code == 200
            devices = res.json()
            online_roles = {d["role"] for d in devices if d["online"]}
            for req_role in roles_registry.required_roles:
                assert req_role in online_roles

            # Start a recording session
            res = await client.post(
                "http://127.0.0.1:8899/v1/sessions",
                json={"name": "Integration Test Session"},
                headers={"Authorization": f"Bearer {ADMIN_TOKEN}"},
            )
            assert res.status_code == 201
            session_data = res.json()
            session_id = session_data["session_id"]

            # Stream for 1.5 seconds during active session
            await asyncio.sleep(1.5)

            # End session
            res = await client.post(
                f"http://127.0.0.1:8899/v1/sessions/{session_id}/end",
                headers={"Authorization": f"Bearer {ADMIN_TOKEN}"},
            )
            assert res.status_code == 200
            ended_data = res.json()
            assert ended_data["status"] == "completed"
            assert ended_data["total_samples"] > 0

            # Export Parquet
            res = await client.get(f"http://127.0.0.1:8899/v1/sessions/{session_id}/export")
            assert res.status_code == 200
            assert len(res.content) > 0

            # Read Parquet content
            sess = db.get_session(session_id)
            parquet_path = sess["parquet_path"]
            table = pq.read_table(parquet_path)
            assert len(table) > 0
            assert "recording_id" in table.column_names
            assert "time_ms" in table.column_names
            assert "quat_w" in table.column_names
            assert "accel_x" in table.column_names
            # Since include_raw was True, accel_x should not be null
            assert table["accel_x"][0].as_py() is not None

        # Stop trackers
        for t in trackers:
            t.running = False
        for task in tracker_tasks:
            task.cancel()

    finally:
        server.should_exit = True
        await server_task
