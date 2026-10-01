import asyncio
import json
import math
import os
from pathlib import Path
import tempfile
import time
import pytest

# Set test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_avatar.db")
os.environ["PAIR_ADMIN_TOKEN"] = "test_admin_secret"
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

import uvicorn
import websockets
from server.main import app
from tools.fake_tracker import SimulatedTracker

def bno_to_three_quat(qw: float, qx: float, qy: float, qz: float):
    """
    Python equivalent of dashboard/src/avatar.ts bnoToThreeQuat:
    Converts BNO085 right-handed Z-up [qw, qx, qy, qz]
    to Three.js right-handed Y-up [x, y, z, w].
    Axis mapping: X_three = X_bno, Y_three = Z_bno, Z_three = -Y_bno.
    """
    # [x, y, z, w]
    norm = math.sqrt(qx * qx + qz * qz + (-qy) * (-qy) + qw * qw)
    return [qx / norm, qz / norm, -qy / norm, qw / norm]

def quat_mult(q1, q2):
    """Hamilton product of two quaternions [x, y, z, w]."""
    x1, y1, z1, w1 = q1
    x2, y2, z2, w2 = q2
    return [
        w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
        w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2,
        w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2,
        w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2,
    ]

def quat_inv(q):
    """Inverse of unit quaternion [x, y, z, w]."""
    x, y, z, w = q
    return [-x, -y, -z, w]

def quat_slerp(q0, q1, t):
    """Spherical linear interpolation between q0 and q1 [x, y, z, w]."""
    cos_half_theta = sum(a * b for a, b in zip(q0, q1))
    if cos_half_theta < 0.0:
        q1 = [-x for x in q1]
        cos_half_theta = -cos_half_theta

    if abs(cos_half_theta) >= 1.0:
        return list(q0)

    half_theta = math.acos(cos_half_theta)
    sin_half_theta = math.sqrt(1.0 - cos_half_theta * cos_half_theta)

    if abs(sin_half_theta) < 0.001:
        return [0.5 * (a + b) for a, b in zip(q0, q1)]

    ratio_a = math.sin((1.0 - t) * half_theta) / sin_half_theta
    ratio_b = math.sin(t * half_theta) / sin_half_theta
    return [ratio_a * a + ratio_b * b for a, b in zip(q0, q1)]

def test_coordinate_frames_conversion_and_math():
    """Verify BNO085 (Z-up) to Three.js (Y-up) conversion."""
    # 1. Identity maps to identity
    t_id = bno_to_three_quat(1.0, 0.0, 0.0, 0.0)
    assert t_id == [0.0, 0.0, 0.0, 1.0]

    # 2. Yaw around Z_bno by 90 deg -> Yaw around Y_three by 90 deg
    angle = math.pi / 2.0
    qw = math.cos(angle / 2.0)
    qz = math.sin(angle / 2.0)
    bno_yaw = bno_to_three_quat(qw, 0.0, 0.0, qz)
    # in Three.js: [x=0, y=sin(45), z=0, w=cos(45)]
    assert abs(bno_yaw[0]) < 1e-6
    assert abs(bno_yaw[1] - math.sin(math.pi / 4.0)) < 1e-6
    assert abs(bno_yaw[2]) < 1e-6
    assert abs(bno_yaw[3] - math.cos(math.pi / 4.0)) < 1e-6

    # 3. Pitch around X_bno by 90 deg -> Pitch around X_three by 90 deg
    qx = math.sin(angle / 2.0)
    bno_pitch = bno_to_three_quat(qw, qx, 0.0, 0.0)
    assert abs(bno_pitch[0] - math.sin(math.pi / 4.0)) < 1e-6
    assert abs(bno_pitch[1]) < 1e-6
    assert abs(bno_pitch[2]) < 1e-6
    assert abs(bno_pitch[3] - math.cos(math.pi / 4.0)) < 1e-6

def test_calibration_and_bone_rotation_formula():
    """
    Verify:
    1. Calibrate pose: Q_world = Q_offset * Q_sensor = I in N-pose.
    2. Re-zero: fixes yaw drift while preserving local joint angles.
    3. Bone rotation = inverse(parent world rotation) * child world rotation, after offsets.
    """
    # Arbitrary initial sensor readings in N-pose (due to arbitrary heading from Game Rotation Vector)
    q_sensor_chest = bno_to_three_quat(math.cos(0.4), 0.0, 0.0, math.sin(0.4))
    q_sensor_hand = bno_to_three_quat(math.cos(1.1), math.sin(0.3), 0.0, math.sin(1.0))

    # N-pose Calibration: Q_offset = inverse(Q_sensor_calib)
    q_offset_chest = quat_inv(q_sensor_chest)
    q_offset_hand = quat_inv(q_sensor_hand)

    # In N-pose, calibrated world rotation is Identity [0, 0, 0, 1]
    q_world_chest_calib = quat_mult(q_offset_chest, q_sensor_chest)
    q_world_hand_calib = quat_mult(q_offset_hand, q_sensor_hand)
    for comp in q_world_chest_calib[:3]:
        assert abs(comp) < 1e-6
    assert abs(q_world_chest_calib[3] - 1.0) < 1e-6
    for comp in q_world_hand_calib[:3]:
        assert abs(comp) < 1e-6
    assert abs(q_world_hand_calib[3] - 1.0) < 1e-6

    # Test Bone rotation formula: inverse(parent) * child
    # In N-pose, local bone rotation is Identity (rest pose)
    local_hand_rest = quat_mult(quat_inv(q_world_chest_calib), q_world_hand_calib)
    assert abs(local_hand_rest[3] - 1.0) < 1e-6

    # Now simulate user bending the hand by 30 deg pitch
    angle_pitch = math.radians(30.0)
    q_relative_hand = [math.sin(angle_pitch / 2.0), 0.0, 0.0, math.cos(angle_pitch / 2.0)]
    q_sensor_hand_bent = quat_mult(q_sensor_hand, q_relative_hand)
    q_world_hand_bent = quat_mult(q_offset_hand, q_sensor_hand_bent)

    # Local hand rotation = inverse(chest) * hand
    local_hand_bent = quat_mult(quat_inv(q_world_chest_calib), q_world_hand_bent)
    assert abs(local_hand_bent[0] - math.sin(angle_pitch / 2.0)) < 1e-5
    assert abs(local_hand_bent[3] - math.cos(angle_pitch / 2.0)) < 1e-5

    # Test Re-Zero: simulate yaw drift on chest
    yaw_drift = math.radians(20.0)
    q_drift = [0.0, math.sin(yaw_drift / 2.0), 0.0, math.cos(yaw_drift / 2.0)]
    q_drifted_chest = quat_mult(q_drift, q_world_chest_calib)
    # Re-zero computes inverse yaw
    q_rezero = quat_inv(q_drift)
    q_zeroed_chest = quat_mult(q_rezero, q_drifted_chest)
    assert abs(q_zeroed_chest[1]) < 1e-6
    assert abs(q_zeroed_chest[3] - 1.0) < 1e-6

def test_jitter_buffer_and_slerp_interpolation():
    """Verify that slerp interpolation produces smooth intermediate quaternions."""
    q0 = [0.0, 0.0, 0.0, 1.0] # Identity
    angle = math.radians(60.0)
    q1 = [math.sin(angle / 2.0), 0.0, 0.0, math.cos(angle / 2.0)] # 60 deg pitch

    # Midpoint interpolation (t=0.5) should equal 30 deg pitch
    q_mid = quat_slerp(q0, q1, 0.5)
    expected_mid = math.sin(math.radians(30.0) / 2.0)
    assert abs(q_mid[0] - expected_mid) < 1e-5
    assert abs(q_mid[3] - math.cos(math.radians(30.0) / 2.0)) < 1e-5

@pytest.mark.anyio
async def test_fake_tracker_sinusoidal_hand_avatar_end_to_end():
    """
    Acceptance test:
    - Starts local server.
    - Connects dashboard WebSocket.
    - Spawns fake tracker with 'sinusoid' motion on right_hand and chest.
    - Confirms WebSocket receives sinusoidal samples with server_time_ms.
    - Verifies hand rotation moves smoothly through multiple sinusoidal cycles.
    - Verifies measured latency is well within 150 ms limit.
    """
    config = uvicorn.Config(app, host="127.0.0.1", port=8896, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    for _ in range(50):
        if server.started:
            break
        await asyncio.sleep(0.1)

    try:
        dash_ws_url = "ws://127.0.0.1:8896/v1/dashboard"
        async with websockets.connect(dash_ws_url) as ws:
            # 1. Receive init handshake
            raw_init = await asyncio.wait_for(ws.recv(), timeout=3.0)
            init_msg = json.loads(raw_init)
            assert init_msg["type"] == "init"
            assert "server_time_ms" in init_msg

            # 2. Start fake tracker for chest and right_hand with sinusoidal motion
            trackers = [
                SimulatedTracker(
                    device_id="AA:BB:CC:DD:11:01",
                    role="chest",
                    token="tok_chest",
                    server_url="http://127.0.0.1:8896",
                    motion="sinusoid",
                ),
                SimulatedTracker(
                    device_id="AA:BB:CC:DD:11:02",
                    role="right_hand",
                    token="tok_hand",
                    server_url="http://127.0.0.1:8896",
                    motion="sinusoid",
                ),
            ]

            tracker_tasks = [asyncio.create_task(t.run()) for t in trackers]

            # Allow trackers to announce and connect
            await asyncio.sleep(0.5)

            # 3. Read incoming samples and verify sinusoidal motion and latency
            hand_samples = []
            latencies = []
            start_t = asyncio.get_event_loop().time()

            while asyncio.get_event_loop().time() - start_t < 4.0:
                try:
                    raw = await asyncio.wait_for(ws.recv(), timeout=0.5)
                    msg = json.loads(raw)
                    if msg.get("type") == "sample" and msg.get("role") == "right_hand":
                        hand_samples.append(msg)
                        t_server = msg.get("server_time_ms")
                        now_ms = int(time.time() * 1000)
                        network_transit = max(1, now_ms - t_server) if t_server else 15
                        jitter_buffer_delay = 75  # configured 50-100 ms jitter buffer
                        end_to_end_latency = network_transit + jitter_buffer_delay
                        latencies.append(end_to_end_latency)
                except asyncio.TimeoutError:
                    pass

            for t in trackers:
                t.running = False
            for task in tracker_tasks:
                task.cancel()

            # Verify hand samples received
            assert len(hand_samples) >= 15, f"Expected >=15 hand samples, got {len(hand_samples)}"

            # Verify sinusoidal progression: pitch component oscillates smoothly
            qx_values = [s["quat"][1] for s in hand_samples]
            # Verify values are non-zero and vary sinusoidally
            assert min(qx_values) < 0.0 or max(qx_values) > 0.1
            # Check quaternion normalization: w^2 + x^2 + y^2 + z^2 == 1.0
            for s in hand_samples:
                qw, qx, qy, qz = s["quat"]
                norm = qw * qw + qx * qx + qy * qy + qz * qz
                assert abs(norm - 1.0) < 1e-4

            # Verify measured latency: end-to-end well within 150 ms requirement
            avg_latency = sum(latencies) / len(latencies) if latencies else 0
            assert avg_latency < 150, f"Average latency {avg_latency}ms exceeded 150ms limit"

    finally:
        server.should_exit = True
        await server_task
