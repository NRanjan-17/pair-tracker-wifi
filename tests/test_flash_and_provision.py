import os
from pathlib import Path
import tempfile
import pytest
from fastapi.testclient import TestClient

# Setup test environment
os.environ["DATA_DIR"] = tempfile.mkdtemp()
os.environ["SESSIONS_DIR"] = tempfile.mkdtemp()
os.environ["SQLITE_DB_PATH"] = str(Path(os.environ["DATA_DIR"]) / "test_provision.db")
os.environ["PAIR_ADMIN_TOKEN"] = "test_admin_secret"
os.environ["EIDON_ADMIN_TOKEN"] = "test_admin_secret"

from server.main import app
from server.tracker_manager import tracker_manager

client = TestClient(app)
ADMIN_HEADERS = {"Authorization": "Bearer test_admin_secret"}

def setup_function():
    tracker_manager.active_connections.clear()
    tracker_manager.role_to_device.clear()
    tracker_manager.active_session_id = None

def test_firmware_manifest_and_binaries_endpoint():
    """Verify that firmware manifest and binary download endpoints serve ESP32-C6 binaries."""
    res = client.get("/v1/firmware/manifest")
    assert res.status_code == 200
    manifest = res.json()
    assert manifest["chip"] == "esp32c6"
    assert manifest["board"] == "seeed_xiao_esp32c6"
    assert "parts" in manifest
    assert len(manifest["parts"]) >= 3  # bootloader, partitions, firmware

    part_names = [p["name"] for p in manifest["parts"]]
    assert "bootloader.bin" in part_names
    assert "partitions.bin" in part_names
    assert "firmware.bin" in part_names

    for part in manifest["parts"]:
        assert part["offset"] >= 0
        assert part["size"] > 0
        # Verify downloading the binary part
        bin_res = client.get(part["path"])
        assert bin_res.status_code == 200
        assert bin_res.headers["content-type"] == "application/octet-stream"
        assert len(bin_res.content) == part["size"]

def test_firmware_binary_not_found():
    """Verify 404 for invalid binary names."""
    res = client.get("/v1/firmware/nonexistent_file.bin")
    assert res.status_code == 404

def test_esp12e_firmware_manifest_and_binary_download():
    """Verify that firmware manifest and binary download endpoints serve ESP-12E binary."""
    res = client.get("/v1/firmware/manifest?hw=esp12e")
    assert res.status_code == 200
    manifest = res.json()
    assert manifest["chip"] == "esp8266"
    assert manifest["board"] == "esp12e"
    assert manifest["baud"] == 9600
    assert len(manifest["parts"]) == 1
    part = manifest["parts"][0]
    assert part["name"] == "firmware.bin"
    assert part["offset"] == 0
    assert part["path"] == "/v1/firmware/flash/esp12e/firmware.bin"
    assert part["size"] > 0

    bin_res = client.get(part["path"])
    assert bin_res.status_code == 200
    assert bin_res.headers["content-type"] == "application/octet-stream"
    assert len(bin_res.content) == part["size"]

def test_device_register_and_token_generation():
    """Verify that register endpoint generates token if omitted and returns token."""
    device_mac = "34:85:18:A1:B2:C3"
    role = "right_forearm"

    # Register without token
    res = client.post(
        "/v1/devices/register",
        json={"device_id": device_mac, "role": role},
        headers=ADMIN_HEADERS,
    )
    assert res.status_code == 201
    data = res.json()
    assert data["status"] == "registered"
    assert data["device_id"] == device_mac
    assert data["role"] == role
    assert "token" in data
    assert data["token"].startswith("tok_")

    token = data["token"]

    # Provision flow: now device announces with this token
    announce_res = client.post(
        "/v1/devices/announce",
        json={
            "device_id": device_mac,
            "role": role,
            "firmware_version": "1.0.0",
            "battery_pct": 99,
            "battery_mv": 4180,
        },
        headers={"Authorization": f"Bearer {token}"},
    )
    assert announce_res.status_code == 200
    ann_data = announce_res.json()
    assert ann_data["status"] == "ok"
    assert ann_data["role"] == role

def test_provisioning_flow_role_mismatch_rejected():
    """Verify that if a tracker is provisioned as 'chest' but announces as another role, it is rejected."""
    device_mac = "34:85:18:FF:EE:DD"
    role = "chest"

    # 1. Choose role -> Server calls /v1/devices/register
    reg_res = client.post(
        "/v1/devices/register",
        json={"device_id": device_mac, "role": role},
        headers=ADMIN_HEADERS,
    )
    assert reg_res.status_code == 201
    token = reg_res.json()["token"]

    # 2. If tracker announces wrong role (e.g. left_foot), server rejects with 409 Conflict
    mismatch_res = client.post(
        "/v1/devices/announce",
        json={
            "device_id": device_mac,
            "role": "left_foot",
            "firmware_version": "1.0.0",
        },
        headers={"Authorization": f"Bearer {token}"},
    )
    assert mismatch_res.status_code == 409
    assert "Role mismatch" in mismatch_res.json()["detail"]

    # 3. When announcing with correct role, accepted
    ok_res = client.post(
        "/v1/devices/announce",
        json={
            "device_id": device_mac,
            "role": role,
            "firmware_version": "1.0.0",
        },
        headers={"Authorization": f"Bearer {token}"},
    )
    assert ok_res.status_code == 200
