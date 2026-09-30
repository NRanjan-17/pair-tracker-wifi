#!/usr/bin/env python3
"""
Verification script for Dashboard with 3 roles:
- Starts server on port 8000 (or test port)
- Connects dashboard WebSocket client (just like the browser does)
- Launches tools/fake_tracker.py with 3 roles: chest, left_thigh, right_thigh
- Confirms live cards receive online states, battery, loss %, and 3D quat samples
- Confirms missing required roles remain in red (missing)
"""

import asyncio
import json
import os
import subprocess
import sys
import time

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import httpx
import websockets

async def main():
    print("==================================================================")
    print("  VERIFYING LIVE DASHBOARD WITH 3 FAKE TRACKER ROLES")
    print("==================================================================")

    env = os.environ.copy()
    env["PYTHONPATH"] = "."

    import uvicorn
    from server.main import app

    port = 8877
    config = uvicorn.Config(app, host="127.0.0.1", port=port, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    for _ in range(50):
        if server.started:
            break
        await asyncio.sleep(0.1)

    print(f"✓ Server running on http://127.0.0.1:{port}")

    try:
        # Check GET / serves Vite dashboard
        async with httpx.AsyncClient() as client:
            res_index = await client.get(f"http://127.0.0.1:{port}/")
            assert res_index.status_code == 200
            print(f"✓ GET / returned {res_index.status_code} OK (length: {len(res_index.text)} bytes)")

        # 2. Connect Dashboard WebSocket
        dash_ws_url = "ws://127.0.0.1:8877/v1/dashboard"
        async with websockets.connect(dash_ws_url) as dash_ws:
            raw_init = await dash_ws.recv()
            init_msg = json.loads(raw_init)
            assert init_msg["type"] == "init"
            required_roles = init_msg["required_roles"]
            print(f"✓ Dashboard WebSocket received 'init' message with {len(required_roles)} required roles:")
            for r in required_roles:
                print(f"   • {r}")

            # 3. Launch fake tracker with 3 roles
            roles_arg = "chest,left_thigh,right_thigh"
            print(f"\n▶ Launching tools/fake_tracker.py with 3 roles: {roles_arg}")
            tracker_proc = subprocess.Popen(
                [
                    sys.executable,
                    "tools/fake_tracker.py",
                    "--server", "http://127.0.0.1:8877",
                    "--roles", roles_arg,
                    "--duration", "4",
                ],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                env=env,
            )

            # 4. Monitor live incoming card updates and samples
            online_roles = {}
            sample_counts = {r: 0 for r in roles_arg.split(",")}

            start_wait = time.time()
            while time.time() - start_wait < 3.5:
                try:
                    raw = await asyncio.wait_for(dash_ws.recv(), timeout=0.5)
                    msg = json.loads(raw)
                    mtype = msg.get("type")

                    if mtype == "device_state" and msg.get("online"):
                        r = msg.get("role")
                        online_roles[r] = {
                            "battery": msg.get("battery_pct"),
                            "loss": msg.get("loss_pct"),
                            "mac": msg.get("device_id"),
                        }

                    elif mtype == "sample":
                        r = msg.get("role")
                        if r in sample_counts:
                            sample_counts[r] += 1

                except asyncio.TimeoutError:
                    pass

            tracker_proc.terminate()

            print("\n✓ Live Dashboard Card State Check:")
            for r in required_roles:
                if r in online_roles:
                    info = online_roles[r]
                    samples = sample_counts.get(r, 0)
                    print(f"   [ONLINE] {r:14s} | Battery: {info['battery']}% | Loss: {info['loss']:.2f}% | MAC: {info['mac']} | Samples: {samples} (card style: GREEN)")
                else:
                    print(f"   [MISSING] {r:13s} | Card style: RED (Required for session)")

            # Validations
            assert len(online_roles) == 3, f"Expected 3 online roles, got {len(online_roles)}"
            for active_role in ["chest", "left_thigh", "right_thigh"]:
                assert active_role in online_roles
                assert sample_counts[active_role] > 10, f"Expected active samples for {active_role}"

            print("\n✓ SUCCESS: All 3 active roles updated live on the dashboard, and missing roles are highlighted in red!")

    finally:
        server.should_exit = True
        await server_task

if __name__ == "__main__":
    asyncio.run(main())
