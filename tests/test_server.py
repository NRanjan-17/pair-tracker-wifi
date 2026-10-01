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

def test_frame_encode_overflow_protection_uint32():
    # Large timestamps (e.g. Unix epoch ms ~ 1.77e12) and large sequence numbers (> 65535)
    s1 = TrackerSample(
        seq=70000,
        t_ms=1770000000000,
        quat_w=1.0,
        quat_x=0.0,
        quat_y=0.0,
        quat_z=0.0,
    )
    raw_bytes = encode_frame(role=1, samples=[s1])
    decoded = decode_frame(raw_bytes)
    assert decoded.samples[0].seq == 70000 & 0xFFFF
    assert decoded.samples[0].t_ms == 1770000000000 & 0xFFFFFFFF

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

# 7. Multi-Target ESP-12E and Hardware Telemetry Tests
def test_esp12e_device_announce_and_telemetry():
    admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}
    dev_id = "EE:12:E0:AA:BB:CC"
    tok = "tok_esp12e_test"

    # Register device
    res = client.post(
        "/v1/devices/register",
        json={"device_id": dev_id, "role": "chest", "token": tok},
        headers=admin_headers,
    )
    assert res.status_code == 201

    # Announce with esp12e hardware telemetry
    res = client.post(
        "/v1/devices/announce",
        json={
            "device_id": dev_id,
            "role": "chest",
            "firmware_version": "1.0.0",
            "protocol_version": 1,
            "battery_pct": 88,
            "battery_mv": 3950,
            "hw": "esp12e",
            "flash_size": 4194304,
            "free_heap": 46500,
        },
        headers={"Authorization": f"Bearer {tok}"},
    )
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "ok"
    assert data["role_id"] == 1

    # Verify device record in DB
    dev_row = db.get_device(dev_id)
    assert dev_row is not None
    assert dev_row["hw"] == "esp12e"
    assert dev_row["flash_size"] == 4194304
    assert dev_row["free_heap"] == 46500

    # Connect WebSocket and send heartbeat with updated free heap
    with client.websocket_connect(f"/v1/devices/{dev_id}/stream?token={tok}") as ws:
        hb = {
            "type": "heartbeat",
            "hw": "esp12e",
            "flash_size": 4194304,
            "free_heap": 44200,
            "battery_pct": 87,
            "battery_mv": 3940,
            "rssi": -62,
            "uptime_s": 120,
            "dropped_samples": 0,
        }
        ws.send_json(hb)
        import time
        time.sleep(0.05)

        # Check in tracker_manager
        conn = tracker_manager.active_connections[dev_id]
        assert conn.hw == "esp12e"
        assert conn.free_heap == 44200
        assert conn.flash_size == 4194304

    tracker_manager.active_connections.clear()
    tracker_manager.role_to_device.clear()

def test_firmware_manifests_multi_target():
    # ESP-12E (ESP8266) manifest
    res_12e = client.get("/v1/firmware/manifest?hw=esp12e")
    assert res_12e.status_code == 200
    m_12e = res_12e.json()
    assert m_12e["chip"] == "esp8266"
    assert m_12e["board"] == "esp12e"
    assert m_12e["baud"] == 9600
    assert len(m_12e["parts"]) == 1
    assert m_12e["parts"][0]["offset"] == 0
    assert m_12e["parts"][0]["name"] == "firmware.bin"

    # ESP32-C6 manifest
    res_c6 = client.get("/v1/firmware/manifest?hw=esp32c6")
    assert res_c6.status_code == 200
    m_c6 = res_c6.json()
    assert m_c6["chip"] == "esp32c6"
    assert m_c6["board"] == "seeed_xiao_esp32c6"
    assert m_c6["baud"] == 115200
    assert len(m_c6["parts"]) >= 3
    offsets = [p["offset"] for p in m_c6["parts"]]
    assert 0 in offsets  # bootloader
    assert 32768 in offsets  # partitions (0x8000)
    assert 65536 in offsets  # firmware (0x10000)

    # Latest firmware queries
    res_lat_12e = client.get("/v1/firmware/latest?hw=esp12e")
    assert res_lat_12e.status_code == 200
    assert res_lat_12e.json().get("hw") == "esp12e"

    res_lat_c6 = client.get("/v1/firmware/latest?hw=esp32c6")
    assert res_lat_c6.status_code == 200
    assert res_lat_c6.json().get("hw") == "esp32c6"

def test_device_role_update_endpoint():
    admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}
    dev_id = "5C:CF:7F:11:22:33"

    # 1. Announce with role unassigned
    res = client.post(
        "/v1/devices/announce",
        json={"device_id": dev_id, "role": "unassigned", "hw": "esp12e", "free_heap": 40960},
    )
    assert res.status_code == 200

    # 2. Update role to chest via /role endpoint
    res = client.post(
        f"/v1/devices/{dev_id}/role",
        json={"role": "chest"},
        headers=admin_headers,
    )
    assert res.status_code == 200
    assert res.json()["role"] == "chest"
    assert res.json()["status"] == "role_updated"

    # 3. Verify in device list
    res = client.get("/v1/devices")
    assert res.status_code == 200
    devices = res.json()
    matched = [d for d in devices if d["device_id"] == dev_id]
    assert len(matched) == 1
    assert matched[0]["role"] == "chest"
    assert matched[0]["hw"] == "esp12e"

    # 4. Invalid role rejected
    res = client.post(
        f"/v1/devices/{dev_id}/role",
        json={"role": "invalid_banana_role"},
        headers=admin_headers,
    )
    assert res.status_code == 400


def test_paired_devices_unpair_and_cleanup_endpoints():
    admin_headers = {"Authorization": f"Bearer {ADMIN_TOKEN}"}
    dev1 = "TESTMACPAIRED1"
    dev2 = "TESTMACPAIRED2"

    # Register dev1 and dev2
    client.post("/v1/devices/announce", json={"device_id": dev1, "role": "unassigned", "hw": "esp12e"})
    client.post("/v1/devices/announce", json={"device_id": dev2, "role": "unassigned", "hw": "esp32c6"})

    # Check /v1/devices/paired returns both
    res = client.get("/v1/devices/paired", headers=admin_headers)
    assert res.status_code == 200
    paired_ids = [d["device_id"] for d in res.json()["devices"]]
    assert dev1 in paired_ids
    assert dev2 in paired_ids

    # Unpair dev1
    del_res = client.delete(f"/v1/devices/{dev1}", headers=admin_headers)
    assert del_res.status_code == 200
    assert del_res.json()["deleted"] is True

    # Check dev1 is gone
    res = client.get("/v1/devices/paired", headers=admin_headers)
    paired_ids = [d["device_id"] for d in res.json()["devices"]]
    assert dev1 not in paired_ids
    assert dev2 in paired_ids

    # Cleanup offline devices
    cleanup_res = client.post("/v1/devices/cleanup", json={"mode": "offline"}, headers=admin_headers)
    assert cleanup_res.status_code == 200
    assert cleanup_res.json()["deleted_count"] >= 1

    # Check dev2 is also gone (was offline)
    res = client.get("/v1/devices/paired", headers=admin_headers)
    paired_ids = [d["device_id"] for d in res.json()["devices"]]
    assert dev2 not in paired_ids

