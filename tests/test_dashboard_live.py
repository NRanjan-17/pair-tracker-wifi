import asyncio
import json
import os
from pathlib import Path
import tempfile
import pytest

# Set test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_dash.db")
os.environ["PAIR_ADMIN_TOKEN"] = "test_admin_secret"
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

import uvicorn
import httpx
import websockets
from server.config import ADMIN_TOKEN
from server.db import db
from server.main import app
from server.roles import roles_registry
from tools.fake_tracker import SimulatedTracker

@pytest.mark.anyio
async def test_dashboard_websocket_and_live_3_roles_update():
    # Spin up test server on port 8895
    config = uvicorn.Config(app, host="127.0.0.1", port=8895, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    for _ in range(50):
        if server.started:
            break
        await asyncio.sleep(0.1)

    try:
        # Connect Dashboard WebSocket client to /v1/dashboard
        dash_ws_url = "ws://127.0.0.1:8895/v1/dashboard"
        async with websockets.connect(dash_ws_url) as dash_ws:
            # 1. Verify initial 'init' handshake message
            raw_init = await asyncio.wait_for(dash_ws.recv(), timeout=3.0)
            init_msg = json.loads(raw_init)
            assert init_msg["type"] == "init"
            assert "required_roles" in init_msg
            assert len(init_msg["required_roles"]) == 7
            for req in ["chest", "left_thigh", "right_thigh", "left_shin", "right_shin", "left_foot", "right_foot"]:
                assert req in init_msg["required_roles"]

            # 2. Spawn fake trackers for exactly 3 roles: chest, left_thigh, right_thigh
            active_3_roles = ["chest", "left_thigh", "right_thigh"]
            trackers = []
            for i, role in enumerate(active_3_roles):
                dev_id = f"DE:AD:BE:EF:03:{i+1:02X}"
                tok = f"tok_3role_{role}"
                db.register_device(dev_id, role, tok)
                t = SimulatedTracker(
                    device_id=dev_id,
                    role=role,
                    token=tok,
                    server_url="http://127.0.0.1:8895",
                    packet_loss_rate=0.01,
                    clock_skew_ms=10,
                    include_raw=False,
                )
                trackers.append(t)

            tracker_tasks = [asyncio.create_task(t.run()) for t in trackers]

            # 3. Read incoming dashboard messages and verify device_state & samples for the 3 roles
            received_states = set()
            received_samples = set()

            start_t = asyncio.get_event_loop().time()
            while asyncio.get_event_loop().time() - start_t < 3.0:
                try:
                    raw_msg = await asyncio.wait_for(dash_ws.recv(), timeout=1.0)
                    msg = json.loads(raw_msg)
                    mtype = msg.get("type")

                    if mtype == "device_state":
                        role = msg.get("role")
                        if msg.get("online"):
                            received_states.add(role)
                            assert msg.get("battery_pct") is not None
                            assert "loss_pct" in msg

                    elif mtype == "sample":
                        role = msg.get("role")
                        received_samples.add(role)
                        assert len(msg.get("quat")) == 4
                        assert "seq" in msg
                        assert "loss_pct" in msg

                except asyncio.TimeoutError:
                    break

            # Confirm all 3 simulated roles sent device_state and live samples
            for r in active_3_roles:
                assert r in received_states, f"Did not receive device_state for {r}"
                assert r in received_samples, f"Did not receive sample for {r}"

            # 4. Verify that missing roles are NOT in received_states
            missing_roles = [r for r in roles_registry.required_roles if r not in active_3_roles]
            assert len(missing_roles) == 4  # left_shin, right_shin, left_foot, right_foot
            for mr in missing_roles:
                assert mr not in received_states

            # 5. Verify REST endpoint confirms 409 Conflict because missing roles are red/offline
            async with httpx.AsyncClient() as client:
                res = await client.post(
                    "http://127.0.0.1:8895/v1/sessions",
                    json={"name": "Attempt with only 3 roles"},
                    headers={"Authorization": f"Bearer {ADMIN_TOKEN}"},
                )
                assert res.status_code == 409
                err_body = res.json()
                assert "Missing required roles" in err_body["detail"]
                for mr in missing_roles:
                    assert mr in err_body["detail"]

            # Stop trackers
            for t in trackers:
                t.running = False
            for task in tracker_tasks:
                task.cancel()

    finally:
        server.should_exit = True
        await server_task
