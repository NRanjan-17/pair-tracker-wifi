import asyncio
import json
import math
import os
from pathlib import Path
import random
import tempfile
import time
import httpx
import pyarrow as pa
import pyarrow.parquet as pq
import pytest
import uvicorn

# Test environment configuration
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_mocap_export.db")
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

from server.config import SESSIONS_DIR
from server.main import app
from server.mocap_exporter import (
    bno_to_three_quat,
    euler_zxy_to_quat,
    generate_bvh,
    generate_csv,
    generate_parquet,
    load_skeleton,
    quat_inv,
    quat_mult,
    quat_slerp,
    quat_to_euler_zxy,
    MocapSessionProcessor,
)
from server.roles import roles_registry
from server.tracker_manager import tracker_manager
from tools.fake_tracker import SimulatedTracker

TEST_PORT = 8899
BASE_URL = f"http://127.0.0.1:{TEST_PORT}"
ADMIN_HEADERS = {"Authorization": "Bearer test_admin_secret"}


def test_quaternion_euler_zxy_roundtrip():
    """
    Requirement 6: Verify quaternion -> Euler (ZXY) -> quaternion round-trips within a small tolerance.
    """
    # 1. Identity quaternion
    q_id = (0.0, 0.0, 0.0, 1.0)
    rz, rx, ry = quat_to_euler_zxy(*q_id)
    assert abs(rz) < 1e-6 and abs(rx) < 1e-6 and abs(ry) < 1e-6
    q_id_back = euler_zxy_to_quat(rz, rx, ry)
    assert abs(q_id_back[3] - 1.0) < 1e-6

    # 2. Pure axis rotations
    # 45 deg around X
    ang = math.radians(45.0)
    q_x = (math.sin(ang / 2), 0.0, 0.0, math.cos(ang / 2))
    rz, rx, ry = quat_to_euler_zxy(*q_x)
    assert abs(rx - ang) < 1e-5
    q_back = euler_zxy_to_quat(rz, rx, ry)
    dot = abs(sum(a * b for a, b in zip(q_x, q_back)))
    assert abs(dot - 1.0) < 1e-5

    # 3. 500 Random 3D Quaternions
    for _ in range(500):
        rx_val = random.uniform(-1.0, 1.0)
        ry_val = random.uniform(-1.0, 1.0)
        rz_val = random.uniform(-1.0, 1.0)
        rw_val = random.uniform(-1.0, 1.0)
        norm = math.sqrt(rx_val**2 + ry_val**2 + rz_val**2 + rw_val**2)
        q_orig = (rx_val / norm, ry_val / norm, rz_val / norm, rw_val / norm)

        rz, rx, ry = quat_to_euler_zxy(*q_orig)
        q_recon = euler_zxy_to_quat(rz, rx, ry)

        # Quaternion antipodal equivalence: dot product magnitude == 1
        dot = abs(sum(a * b for a, b in zip(q_orig, q_recon)))
        assert abs(dot - 1.0) < 1e-4, f"Failed round-trip: orig={q_orig}, recon={q_recon}, dot={dot}"


def test_bno_coordinate_conversion_and_slerp():
    """
    Verifies coordinate frame mapping from BNO085 (Z-up) to Three.js (Y-up) and slerp behavior.
    """
    # Pure pitch in BNO085: qw=cos(theta/2), qx=sin(theta/2)
    # Mapping: x_three=qx, y_three=qz, z_three=-qy, w_three=qw
    q_three = bno_to_three_quat(qw=0.92388, qx=0.38268, qy=0.0, qz=0.0)
    assert abs(q_three[0] - 0.38268) < 1e-4  # x
    assert abs(q_three[1] - 0.0) < 1e-4      # y
    assert abs(q_three[2] - 0.0) < 1e-4      # z
    assert abs(q_three[3] - 0.92388) < 1e-4  # w

    # Slerp at boundaries
    q0 = (0.0, 0.0, 0.0, 1.0)
    q1 = (0.707106, 0.0, 0.0, 0.707106)
    assert quat_slerp(q0, q1, 0.0) == q0
    assert quat_slerp(q0, q1, 1.0) == q1
    mid = quat_slerp(q0, q1, 0.5)
    norm = math.sqrt(sum(x * x for x in mid))
    assert abs(norm - 1.0) < 1e-5


def test_gap_detection_and_hold_last_value(tmp_path):
    """
    Requirement 2: For gaps longer than 200 ms, hold the last value and record the gap in metadata; do not invent motion.
    """
    # Write a test parquet with an intentional 350 ms gap between samples
    test_parquet = tmp_path / "gap_test.parquet"
    schema = pa.schema([
        ("recording_id", pa.string()),
        ("time_ms", pa.int64()),
        ("role", pa.string()),
        ("seq", pa.uint32()),
        ("server_rx_ms", pa.int64()),
        ("quat_w", pa.float32()),
        ("quat_x", pa.float32()),
        ("quat_y", pa.float32()),
        ("quat_z", pa.float32()),
        ("accel_x", pa.float32()),
        ("accel_y", pa.float32()),
        ("accel_z", pa.float32()),
        ("gyro_x", pa.float32()),
        ("gyro_y", pa.float32()),
        ("gyro_z", pa.float32()),
        ("mag_x", pa.float32()),
        ("mag_y", pa.float32()),
        ("mag_z", pa.float32()),
    ])

    # Sample 0 at 0ms, Sample 1 at 20ms, Sample 2 at 370ms (gap of 350 ms!)
    times = [1000, 1020, 1370, 1390]
    quats = [
        (1.0, 0.0, 0.0, 0.0), # w, x, y, z
        (0.92388, 0.38268, 0.0, 0.0),
        (0.7071, 0.0, 0.7071, 0.0),
        (0.7071, 0.0, 0.7071, 0.0),
    ]

    pydict = {
        "recording_id": ["rec_gap"] * 4,
        "time_ms": times,
        "role": ["chest"] * 4,
        "seq": [1, 2, 3, 4],
        "server_rx_ms": times,
        "quat_w": [q[0] for q in quats],
        "quat_x": [q[1] for q in quats],
        "quat_y": [q[2] for q in quats],
        "quat_z": [q[3] for q in quats],
        "accel_x": [0.0] * 4,
        "accel_y": [9.8] * 4,
        "accel_z": [0.0] * 4,
        "gyro_x": [0.0] * 4,
        "gyro_y": [0.0] * 4,
        "gyro_z": [0.0] * 4,
        "mag_x": [0.0] * 4,
        "mag_y": [0.0] * 4,
        "mag_z": [0.0] * 4,
    }
    table = pa.Table.from_pydict(pydict, schema=schema)
    pq.write_table(table, str(test_parquet))

    processor = MocapSessionProcessor(
        parquet_path=test_parquet,
        rate=30.0,
        gap_threshold_ms=200.0,
    )
    processor.process()

    # Gap of 350 ms must be detected in gap_list
    assert len(processor.gap_list) >= 1
    gap = processor.gap_list[0]
    assert gap["role"] == "chest"
    assert gap["duration_ms"] >= 340.0

    # During the gap (e.g. at 200 ms), the quaternion must hold the value from sample 1 (no invented motion)
    expected_held = bno_to_three_quat(0.92388, 0.38268, 0.0, 0.0)
    # Find frame closest to 200ms
    mid_frames = [f for f in processor.resampled_frames if 50.0 < f["time_ms"] < 350.0]
    assert len(mid_frames) > 0
    for f in mid_frames:
        held_q = f["world_quats"]["chest"]
        # Must match expected_held within floating tolerance
        dot = abs(sum(a * b for a, b in zip(expected_held, held_q)))
        assert abs(dot - 1.0) < 1e-4, f"Motion was invented during gap: {held_q} != {expected_held}"


@pytest.mark.anyio
async def test_full_session_mocap_export_pipeline():
    """
    End-to-End Acceptance Test for Mocap Export (BVH, CSV, Parquet, Metadata):
    1. Connect 3 simulated trackers (required roles: chest, left_hand, right_hand).
    2. Start recording with pose calibration offsets stored in metadata.
    3. Stream motion samples for 2.0 seconds.
    4. End session.
    5. Export as BVH:
       - Verify headers, conventions, ZXY Euler order, rotation channels, origin-fixed root.
       - Verify frame count = duration x rate.
       - Parse Euler angles and check quaternion round-trip.
    6. Export as CSV:
       - Verify raw calibrated quaternions per bone per timestamp (x, y, z, w).
    7. Export as Parquet:
       - Verify parquet schema and column values.
    8. Check metadata.json:
       - Verify session id, start time, rate, roles, bone lengths, calibration offsets,
         gap list, per-device loss %, firmware versions.
    9. Test uncalibrated export warning / allow_uncalibrated flag.
    """
    tracker_manager.active_connections.clear()
    tracker_manager.role_to_device.clear()
    tracker_manager.active_session_id = None

    config = uvicorn.Config(app, host="127.0.0.1", port=TEST_PORT, log_level="warning")
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve())

    # Wait for server ready
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
            # 1. Register and start simulated trackers for required roles
            for i, role in enumerate(roles_registry.required_roles):
                mac = f"02:CD:EF:01:{i+1:02X}:AA"
                token = f"tok_mocap_{role}"
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
                    motion="sinusoid" if "hand" in role else "static",
                )
                trackers.append(tracker)
                tracker_tasks.append(asyncio.create_task(tracker.run()))

            # Allow devices to announce and establish WebSocket streams
            await asyncio.sleep(1.0)

            # 2. Start session WITH pose-calibration offsets
            # Simulate calibration offsets captured during N-pose
            test_calib_offsets = {
                "chest": [0.0, 0.0, 0.0, 1.0],
                "left_hand": [0.1, 0.0, 0.0, 0.994987],
                "right_hand": [-0.1, 0.0, 0.0, 0.994987],
            }
            session_name = "Mocap Export Acceptance Run"
            start_res = await client.post(
                f"{BASE_URL}/v1/sessions",
                json={
                    "name": session_name,
                    "description": "Validation of BVH, CSV, Parquet, and metadata",
                    "calibration_offsets": test_calib_offsets,
                },
                headers=ADMIN_HEADERS,
            )
            assert start_res.status_code == 201
            session_id = start_res.json()["session_id"]

            # 3. Stream motion for 2.0 seconds
            await asyncio.sleep(2.0)

            # 4. End session
            end_res = await client.post(
                f"{BASE_URL}/v1/sessions/{session_id}/end",
                headers=ADMIN_HEADERS,
            )
            assert end_res.status_code == 200
            end_data = end_res.json()
            assert end_data["status"] == "completed"
            assert end_data["total_samples"] > 0

            # 5. Export as BVH at 30 Hz
            rate = 30.0
            bvh_res = await client.get(f"{BASE_URL}/v1/sessions/{session_id}/export?format=bvh&rate={rate}")
            assert bvh_res.status_code == 200
            assert "text/plain" in bvh_res.headers.get("Content-Type", "")
            bvh_text = bvh_res.text

            # Verify BVH header comment documenting conventions
            assert "# Eidon Mocap BVH Export" in bvh_text
            assert "Right-handed Y-up" in bvh_text
            assert "Zrotation Xrotation Yrotation" in bvh_text
            assert "Euler order: ZXY" in bvh_text
            assert "meters for bone offsets" in bvh_text
            assert "degrees for rotation channels" in bvh_text

            # Verify BVH HIERARCHY
            assert "HIERARCHY" in bvh_text
            assert "ROOT chest" in bvh_text
            assert "OFFSET 0.000000 0.000000 0.000000" in bvh_text
            assert "CHANNELS 3 Zrotation Xrotation Yrotation" in bvh_text
            assert "JOINT left_hand" in bvh_text
            assert "JOINT right_hand" in bvh_text
            assert "End Site" in bvh_text

            # Verify BVH MOTION section
            assert "MOTION" in bvh_text
            lines = [l.strip() for l in bvh_text.splitlines() if l.strip()]
            motion_idx = lines.index("MOTION")
            frames_line = lines[motion_idx + 1]
            frame_time_line = lines[motion_idx + 2]

            assert frames_line.startswith("Frames:")
            bvh_frame_count = int(frames_line.split(":")[1].strip())
            assert frame_time_line.startswith("Frame Time:")
            frame_time = float(frame_time_line.split(":")[1].strip())
            assert abs(frame_time - (1.0 / rate)) < 1e-4

            # Verify frame count = duration x rate
            # Session duration was ~2.0s -> ~60 frames
            expected_frames_approx = int(round(2.0 * rate))
            assert abs(bvh_frame_count - expected_frames_approx) <= 15, f"Frame count {bvh_frame_count} vs {expected_frames_approx}"

            # Parse motion frame lines and verify quaternion round-trip
            motion_frame_lines = lines[motion_idx + 3:]
            assert len(motion_frame_lines) == bvh_frame_count

            # Each frame line must have 15 joints x 3 channels = 45 float values
            first_frame_vals = [float(x) for x in motion_frame_lines[0].split()]
            assert len(first_frame_vals) == 15 * 3

            # Check quaternion -> Euler -> quaternion round-trip on all frame values
            for f_line in motion_frame_lines[::5]:  # sample every 5th frame
                vals = [float(x) for x in f_line.split()]
                for j in range(0, len(vals), 3):
                    z_deg, x_deg, y_deg = vals[j], vals[j+1], vals[j+2]
                    z_rad = math.radians(z_deg)
                    x_rad = math.radians(x_deg)
                    y_rad = math.radians(y_deg)

                    # Euler -> Quat
                    q = euler_zxy_to_quat(z_rad, x_rad, y_rad)
                    # Quat -> Euler
                    rz_back, rx_back, ry_back = quat_to_euler_zxy(*q)
                    # Quat roundtrip
                    q_back = euler_zxy_to_quat(rz_back, rx_back, ry_back)
                    dot = abs(sum(a * b for a, b in zip(q, q_back)))
                    assert abs(dot - 1.0) < 1e-4, f"Round-trip failed on Euler ({z_deg}, {x_deg}, {y_deg}): dot={dot}"

            # 6. Export as CSV
            csv_res = await client.get(f"{BASE_URL}/v1/sessions/{session_id}/export?format=csv&rate={rate}")
            assert csv_res.status_code == 200
            assert "text/csv" in csv_res.headers.get("Content-Type", "")
            csv_lines = [l.strip() for l in csv_res.text.splitlines() if l.strip()]
            header = csv_lines[0].split(",")
            # Tall format check
            assert "frame" in header
            assert "time_s" in header
            assert "bone" in header
            assert "x" in header
            assert "y" in header
            assert "z" in header
            assert "w" in header
            # Verify rows are non-empty and quaternions are normalized
            sample_row = csv_lines[1].split(",")
            qx = float(sample_row[header.index("x")])
            qy = float(sample_row[header.index("y")])
            qz = float(sample_row[header.index("z")])
            qw = float(sample_row[header.index("w")])
            norm = math.sqrt(qx**2 + qy**2 + qz**2 + qw**2)
            assert abs(norm - 1.0) < 1e-3

            # 7. Export as Parquet
            pq_res = await client.get(f"{BASE_URL}/v1/sessions/{session_id}/export?format=parquet&rate={rate}")
            assert pq_res.status_code == 200
            assert "application/vnd.apache.parquet" in pq_res.headers.get("Content-Type", "")
            # Parquet content can be read back with PyArrow
            pq_bytes = pq_res.content
            temp_pq = Path(tempfile.gettempdir()) / "test_download.parquet"
            temp_pq.write_bytes(pq_bytes)
            downloaded_table = pq.read_table(str(temp_pq))
            assert "frame" in downloaded_table.column_names
            assert "bone" in downloaded_table.column_names
            assert "x" in downloaded_table.column_names
            assert "w" in downloaded_table.column_names
            assert len(downloaded_table) > 0

            # 8. Check metadata.json (Requirement 5)
            meta_res = await client.get(f"{BASE_URL}/v1/sessions/{session_id}/metadata")
            assert meta_res.status_code == 200
            metadata = meta_res.json()

            assert metadata["session_id"] == session_id
            assert "start_time" in metadata
            assert metadata["rate"] == rate
            assert len(metadata["roles"]) == len(roles_registry.required_roles)
            assert "bone_lengths" in metadata
            assert len(metadata["bone_lengths"]) == 15
            assert metadata["is_calibrated"] is True
            assert "calibration_offsets" in metadata
            assert "chest" in metadata["calibration_offsets"]
            assert "gap_list" in metadata
            assert "per_device_loss_pct" in metadata
            assert "firmware_versions" in metadata

            # Check metadata.json was written to disk
            disk_meta_file = SESSIONS_DIR / f"{session_id}_metadata.json"
            assert disk_meta_file.exists()
            with open(disk_meta_file, "r") as f:
                disk_meta = json.load(f)
            assert disk_meta["session_id"] == session_id

            # 9. Test session recorded without calibration
            uncalib_start = await client.post(
                f"{BASE_URL}/v1/sessions",
                json={"name": "Uncalibrated Run"},
                headers=ADMIN_HEADERS,
            )
            assert uncalib_start.status_code == 201
            uncalib_id = uncalib_start.json()["session_id"]
            await asyncio.sleep(0.5)
            await client.post(f"{BASE_URL}/v1/sessions/{uncalib_id}/end", headers=ADMIN_HEADERS)

            # Rejection if allow_uncalibrated=false
            reject_res = await client.get(f"{BASE_URL}/v1/sessions/{uncalib_id}/export?format=bvh&allow_uncalibrated=false")
            assert reject_res.status_code == 400
            assert "no pose calibration" in reject_res.json().get("detail", "")

            # Success if allow_uncalibrated=true (default)
            allow_res = await client.get(f"{BASE_URL}/v1/sessions/{uncalib_id}/export?format=bvh&allow_uncalibrated=true")
            assert allow_res.status_code == 200
            allow_meta = await client.get(f"{BASE_URL}/v1/sessions/{uncalib_id}/metadata")
            assert allow_meta.json()["is_calibrated"] is False

    finally:
        for t in trackers:
            t.stop()
        for task in tracker_tasks:
            task.cancel()
        await asyncio.gather(*tracker_tasks, return_exceptions=True)

        server.should_exit = True
        await server_task
