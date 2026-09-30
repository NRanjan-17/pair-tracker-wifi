import asyncio
import os
from pathlib import Path
import struct
import tempfile
import pytest
from fastapi.testclient import TestClient
import pyarrow.parquet as pq

# Set test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test.db")
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

from server.config import ADMIN_TOKEN
from server.db import db
from server.main import app
from server.protocol import (
    FLAG_BACKFILL,
    FLAG_RAW_PRESENT,
    HEADER_SIZE,
    PROTOCOL_VERSION,
    QUAT_SAMPLE_SIZE,
    TrackerSample,
    compute_sequence_gap,
    decode_frame,
    encode_frame,
)
from server.roles import roles_registry
from server.tracker_manager import tracker_manager

client = TestClient(app)

# 1. Roles Registry Tests
def test_roles_registry():
    assert len(roles_registry.name_to_id) == 18  # unassigned + 17 roles
    assert roles_registry.get_role_id("chest") == 1
    assert roles_registry.get_role_name(1) == "chest"
    assert roles_registry.get_role_name(17) == "right_foot"
    assert "chest" in roles_registry.required_roles
    assert roles_registry.is_valid_role("left_thigh")
    assert not roles_registry.is_valid_role("head")

# 2. Binary Protocol Encoder & Decoder Tests
def test_frame_encode_decode_quat_only():
    s1 = TrackerSample(seq=100, t_ms=1000, quat_w=1.0, quat_x=0.0, quat_y=0.0, quat_z=0.0)
    s2 = TrackerSample(seq=101, t_ms=1020, quat_w=0.9, quat_x=0.1, quat_y=0.2, quat_z=0.3)

    raw_bytes = encode_frame(role=1, samples=[s1, s2], is_backfill=False, include_raw=False)
    # Header: 4 bytes, 2 samples * 22 bytes = 48 bytes
    assert len(raw_bytes) == 48

    decoded = decode_frame(raw_bytes)
    assert decoded.version == PROTOCOL_VERSION
    assert decoded.role == 1
    assert not decoded.raw_present
    assert not decoded.is_backfill
    assert decoded.count == 2
    assert decoded.samples[0].seq == 100
    assert decoded.samples[0].t_ms == 1000
    assert pytest.approx(decoded.samples[0].quat_w, 0.001) == 1.0
    assert decoded.samples[1].seq == 101
    assert pytest.approx(decoded.samples[1].quat_y, 0.001) == 0.2

def test_frame_encode_decode_with_raw_imu():
    s1 = TrackerSample(
        seq=200,
        t_ms=2000,
        quat_w=0.707,
        quat_x=0.707,
        quat_y=0.0,
        quat_z=0.0,
        accel_x=0.1,
        accel_y=9.81,
        accel_z=-0.05,
        gyro_x=0.01,
        gyro_y=-0.02,
        gyro_z=0.05,
        mag_x=22.5,
        mag_y=-14.2,
        mag_z=40.0,
    )
    s2 = TrackerSample(
        seq=201,
        t_ms=2021,
        quat_w=0.707,
        quat_x=0.707,
        quat_y=0.0,
        quat_z=0.0,
        accel_x=0.2,
        accel_y=9.80,
        accel_z=-0.04,
        gyro_x=0.02,
        gyro_y=-0.01,
        gyro_z=0.04,
        mag_x=22.6,
        mag_y=-14.1,
        mag_z=40.1,
    )

    raw_bytes = encode_frame(role=12, samples=[s1, s2], is_backfill=True, include_raw=True)
    # Header: 4 bytes, 2 samples * 58 bytes = 120 bytes
    assert len(raw_bytes) == 120

    decoded = decode_frame(raw_bytes)
    assert decoded.role == 12
    assert decoded.raw_present
    assert decoded.is_backfill
    assert decoded.count == 2
    assert pytest.approx(decoded.samples[0].accel_y, 0.001) == 9.81
    assert pytest.approx(decoded.samples[1].mag_z, 0.001) == 40.1

def test_frame_decode_errors():
    with pytest.raises(ValueError, match="too short for header"):
        decode_frame(b"\x01\x01")

    with pytest.raises(ValueError, match="Unsupported protocol version"):
        # version 99
        bad_header = struct.pack("<BBBB", 99, 1, 0, 2) + b"\x00" * 44
        decode_frame(bad_header)

    with pytest.raises(ValueError, match="payload too short"):
        short_payload = struct.pack("<BBBB", 1, 1, 0, 2) + b"\x00" * 10
        decode_frame(short_payload)

# 3. Sequence Gap and Wraparound Tests
def test_sequence_gap_logic():
    # Initial sample
    dropped, valid = compute_sequence_gap(seq=1, last_seq=None)
    assert (dropped, valid) == (0, True)

    # In-order normal increment
    dropped, valid = compute_sequence_gap(seq=2, last_seq=1)
    assert (dropped, valid) == (0, True)

    # Packet drop (seq jumped by 5)
    dropped, valid = compute_sequence_gap(seq=7, last_seq=2)
    assert (dropped, valid) == (4, True)

    # Wraparound without loss (65535 -> 0)
    dropped, valid = compute_sequence_gap(seq=0, last_seq=65535)
    assert (dropped, valid) == (0, True)

    # Wraparound with loss (65534 -> 2: lost 65535, 0, 1 = 3 drops)
    dropped, valid = compute_sequence_gap(seq=2, last_seq=65534)
    assert (dropped, valid) == (3, True)

    # Duplicate packet (delta == 0)
    dropped, valid = compute_sequence_gap(seq=10, last_seq=10)
    assert (dropped, valid) == (0, False)

    # Out-of-order / stale packet (delta >= 32768)
    dropped, valid = compute_sequence_gap(seq=10, last_seq=100)
    assert (dropped, valid) == (0, False)

# 4. Device Registration and Announce Role Rules
def test_device_registration_and_announce_rules():
    admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}

    # Register device AA:BB:01 as chest
    res = client.post(
        "/v1/devices/register",
        json={"device_id": "AA:BB:01", "role": "chest", "token": "tok_01", "notes": "chest test"},
        headers=admin_headers,
    )
    assert res.status_code == 201
    assert res.json()["role"] == "chest"

    # Announce with correct role -> 200 OK
    res = client.post(
        "/v1/devices/announce",
        json={"device_id": "AA:BB:01", "role": "chest", "firmware_version": "1.0.0", "battery_pct": 90},
        headers={"Authorization": "Bearer tok_01"},
    )
    assert res.status_code == 200
    assert res.json()["status"] == "ok"
    assert res.json()["role_id"] == 1

    # Announce with wrong role -> 409 Conflict
    res = client.post(
        "/v1/devices/announce",
        json={"device_id": "AA:BB:01", "role": "left_shoulder"},
        headers={"Authorization": "Bearer tok_01"},
    )
    assert res.status_code == 409
    assert "Role mismatch" in res.json()["detail"]

# 5. Required Roles Check for Session Creation
def test_required_roles_session_check():
    admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}

    # Clean active connections
    tracker_manager.active_connections.clear()
    tracker_manager.role_to_device.clear()

    # Attempt to start session without required roles online
    res = client.post("/v1/sessions", json={"name": "Test Run"}, headers=admin_headers)
    assert res.status_code == 409
    assert "Missing required roles" in res.json()["detail"]

# 6. WebSocket Streaming & Parquet Export Verification
def test_websocket_stream_and_parquet_export():
    admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}

    # Mock all required roles connected
    for role in roles_registry.required_roles:
        tracker_manager.role_to_device[role] = f"DEV_{role}"

    # Start session
    res = client.post("/v1/sessions", json={"name": "EndToEnd Test"}, headers=admin_headers)
    assert res.status_code == 201
    session_data = res.json()
    session_id = session_data["session_id"]
    recording_id = session_data["recording_id"]

    # Ingest data directly through WebSocket endpoint
    with client.websocket_connect(f"/v1/devices/DEV_TEST/stream?token=tok_test") as ws:
        # Connect tracker
        s1 = TrackerSample(seq=1, t_ms=1000, quat_w=1.0, quat_x=0.0, quat_y=0.0, quat_z=0.0)
        s2 = TrackerSample(seq=2, t_ms=1021, quat_w=0.9, quat_x=0.1, quat_y=0.0, quat_z=0.0)
        frame_bytes = encode_frame(role=1, samples=[s1, s2])

        ws.send_bytes(frame_bytes)

        # Send heartbeat
        ws.send_json({"type": "heartbeat", "battery_pct": 95, "rssi": -60})

    # End session
    res = client.post(f"/v1/sessions/{session_id}/end", headers=admin_headers)
    assert res.status_code == 200

    # Verify Parquet export
    res = client.get(f"/v1/sessions/{session_id}/export")
    assert res.status_code == 200
    assert res.headers["content-type"] == "application/vnd.apache.parquet"

    # Read exported Parquet file using PyArrow
    sess_record = db.get_session(session_id)
    parquet_path = sess_record["parquet_path"]
    table = pq.read_table(parquet_path)

    assert "recording_id" in table.column_names
    assert "time_ms" in table.column_names
    assert "quat_w" in table.column_names
    assert "quat_x" in table.column_names
    assert "accel_x" in table.column_names
    assert len(table) == 2
    assert table["recording_id"][0].as_py() == recording_id

    # Clean active connections and mock roles
    tracker_manager.active_connections.clear()
    tracker_manager.role_to_device.clear()
    tracker_manager.active_session_id = None
