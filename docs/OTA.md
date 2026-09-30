# Eidon Tracker WiFi — Over-The-Air (OTA) Firmware Updates

This document describes the design, partition layout, bootloader rollback mechanism, server architecture, and real-device verification procedures for Over-The-Air (OTA) firmware updates in the Eidon Tracker ecosystem.

---

## 1. Two-Slot OTA Partition Table

The ESP32-C6 has 4MB (0x400000 bytes) of onboard SPI NOR flash. To support robust failsafe OTA updates without risk of bricking devices, the tracker uses a two-slot OTA partition table defined in [`firmware/partitions_two_ota.csv`](file:///Users/nalinishranjan/Desktop/eidon-tracker-wifi/firmware/partitions_two_ota.csv).

### Partition Layout

| Name | Type | SubType | Offset | Size | Size (Human) | Purpose |
|:---|:---|:---|:---|:---|:---|:---|
| `nvs` | `data` | `nvs` | `0x9000` | `0x5000` | 20 KB | WiFi credentials, role, server IP, token |
| `otadata` | `data` | `ota` | `0xe000` | `0x2000` | 8 KB | Bootloader OTA selection & rollback state |
| `app0` | `app` | `ota_0` | `0x10000` | `0x1f0000` | 1984 KB (~1.98 MB) | Primary OTA application slot |
| `app1` | `app` | `ota_1` | `0x200000` | `0x1f0000` | 1984 KB (~1.98 MB) | Secondary OTA application slot |
| `coredump`| `data` | `coredump` | `0x3f0000` | `0x10000` | 64 KB | Crash debugging core dump storage |

> [!IMPORTANT]
> **One-Time USB Flash Required When Changing Partitions:**
> Because partition table offsets differ from the single-app `min_spiffs.csv` layout, existing devices running on older partition tables must be flashed **once over USB** (via `esptool-js` Web Serial or `pio run -t upload`) with `bootloader.bin`, `partitions.bin`, `boot_app0.bin`, and `firmware.bin`. Subsequent updates occur entirely over WiFi.

---

## 2. Bootloader Rollback & App Self-Validation

### Rollback Support in ESP32-C6 Core
The ESP32-C6 Arduino framework (`framework-arduinoespressif32 @ 3.1.3`, ESP-IDF 5.3) has `CONFIG_BOOTLOADER_APP_ROLLBACK_ENABLE=y` enabled by default in `sdkconfig.h`.

### Rollback Lifecycle
1. When a new binary is written to the inactive slot (e.g., `app1`) via the ESP32 `Update` API, the bootloader marks that partition state as `ESP_OTA_IMG_PENDING_VERIFY`.
2. Upon restart, the 2nd stage bootloader boots into the new slot.
3. If the application crashes, enters a boot loop, or fails to connect to WiFi, the bootloader automatically reverts to the previously working slot on the next reboot and marks the failing slot as `ESP_OTA_IMG_INVALID`.
4. When the firmware successfully connects to WiFi, resolves the server, and establishes a WebSocket streaming connection to `/v1/devices/{device_id}/stream`, `TrackerNetwork::validateAppRollback()` calls:
   ```cpp
   esp_ota_mark_app_valid_cancel_rollback();
   ```
   This confirms the new firmware is stable and cancels the rollback timer.

---

## 3. Server Architecture & Endpoints

### 1. Release Packaging (`make release`)
The Makefile target `make release` (or `make release VERSION=x.y.z`):
- Builds the firmware via PlatformIO.
- Copies the binary to `server/firmware_bin/<version>/firmware.bin`.
- Computes SHA-256 and byte size.
- Writes `server/firmware_bin/<version>/manifest.json`:
  ```json
  {
    "version": "1.0.1",
    "sha256": "3bf586472d4f29b6590788aa67ccf04c9fd99da229bde9c74eea07346b749099",
    "size": 1314944,
    "min_protocol": 1
  }
  ```

### 2. REST Endpoints
- `GET /v1/firmware/latest`: Returns the manifest of the highest semver release.
- `GET /v1/firmware/{version}/firmware.bin`: Streams the versioned binary. **Device-token authenticated** via `Authorization: Bearer <token>` or `?token=<token>`. Rejects unauthenticated requests with `401` and unauthorized requests with `403`.
- `POST /v1/devices/{id}/ota`: Initiates an OTA update for device `{id}`.
  - **Conflict Safety Guarantees (HTTP 409 Conflict):**
    - Rejected with `409` if a session recording is currently active (`active_session_id is not None`).
    - Rejected with `409` if the device is offline.
    - Rejected with `409` if the device's last reported battery is below `30%`.
  - Dispatches JSON `"ota"` command over device's WebSocket.
- `GET /v1/devices/{id}/ota`: Returns active or last known OTA job for device.
- `GET /v1/ota/jobs`: Returns list of all tracked OTA jobs.

### 3. OTA Job State Machine
Each OTA operation is tracked as a state machine job with real-time WebSocket broadcast to the dashboard (`type: "ota_job_update"`):

```
[queued] ---> [downloading (0-100%)] ---> [verifying] ---> [rebooting] ---> [success]
   |                   |                      |                  |
   +-------------------+----------------------+------------------+---> [failed] (with reason)
```

- When the device reboots and calls `POST /v1/devices/announce`, the server verifies the announced `firmware_version`. If it matches the target version, the job transitions to `success`. If a rollback occurred (announced version differs from target), the job transitions to `failed` with a rollback notification.

---

## 4. Protocol Version Flagging

Every announce payload includes the device's protocol version:
```json
{
  "device_id": "AA:BB:CC:DD:EE:FF",
  "role": "right_hand",
  "firmware_version": "1.0.0",
  "protocol_version": 1,
  "battery_pct": 92,
  "battery_mv": 4050
}
```

The server compares `protocol_version` against `REQUIRED_PROTOCOL_VERSION` (currently `1`). If `protocol_version < REQUIRED_PROTOCOL_VERSION`, the server flags the device with `protocol_outdated: true`. The dashboard displays a red warning badge: `⚠️ Proto vX outdated`.

---

## 5. Dashboard UI Controls

- **Latest Firmware Header**: Shows `Latest: vX.Y.Z` with real-time update alerts.
- **Per-Device Cards**:
  - Displays `Firmware: v<current>` with `✓ Up to date` or `⬆️ v<latest> avail`.
  - Live OTA job progress bar and status badge (`DOWNLOADING 45%`, `VERIFYING`, `REBOOTING`, `SUCCESS`, `FAILED`).
  - **"Update" Button**: Triggers OTA for individual device. Disabled if device is offline or battery is below 30%.
  - **"Update all (one at a time)" Button**: Sequentially queues and updates all outdated online devices one after another, waiting for each device to reboot and report `success` before proceeding to the next.

---

## 6. Real-Device Verification Test Plan

Follow these steps with physical hardware to verify OTA functionality:

### Step 1: Initial Baseline Flash over USB (v0.1.0)
1. In `firmware/src/Version.h`, temporarily set `FIRMWARE_VERSION "0.1.0"`.
2. Connect tracker via USB-C to computer.
3. Flash baseline firmware with the new two-slot partition table:
   ```bash
   make firmware-bin
   # Flash over Web Serial on Dashboard "Flash & Provision" tab or:
   cd firmware && pio run -t upload
   ```
4. Verify tracker boots, connects to WiFi, announces with `v0.1.0`, and appears on the Dashboard.

### Step 2: Build & Release Target Firmware (v0.1.1)
1. Edit `firmware/src/Version.h` and update to `0.1.1`.
2. Run `make release VERSION=0.1.1`:
   ```bash
   make release VERSION=0.1.1
   ```
3. Confirm `server/firmware_bin/0.1.1/manifest.json` is generated with valid SHA-256 and byte size.
4. On Dashboard, confirm device card now displays:
   `FW: v0.1.0` `⬆️ v0.1.1 avail`.

### Step 3: Trigger Live OTA from Dashboard
1. Ensure tracker battery is $\ge 30\%$.
2. Click the **"Update"** button on the device card.
3. Observe live dashboard progress:
   - Status transitions to `DOWNLOADING` with percentage incrementing (`0%` $\to$ `100%`).
   - Status transitions to `VERIFYING`.
   - Status transitions to `REBOOTING`.
4. In serial console (`pio device monitor`), observe:
   - Sensor streaming pauses.
   - HTTP download streams chunks into flash partition `app1`.
   - SHA-256 computed on the fly matches manifest hash.
   - `ESP.restart()` executes.
5. After reboot, tracker connects to WiFi, calls `/v1/devices/announce` with `firmware_version: "0.1.1"`.
6. Observer server logs: OTA job transitions to `success`.
7. Dashboard card updates live to `FW: v0.1.1` `✓ Up to date`.

### Step 4: Corrupted Binary & Hash Verification Rejection
1. Create a corrupted release in `server/firmware_bin/0.1.2/`:
   ```bash
   mkdir -p server/firmware_bin/0.1.2
   echo "CORRUPTED_BYTES" > server/firmware_bin/0.1.2/firmware.bin
   ```
2. In `manifest.json`, specify an intentionally invalid SHA-256 hash or mismatched content.
3. Click "Update" on the device card.
4. Observe tracker serial console and Dashboard:
   - Device streams the corrupted file.
   - During verification, `mbedtls_sha256` mismatch is detected.
   - Tracker aborts `Update.abort()`, sends failure message: `{"type": "ota_progress", "status": "failed", "error": "SHA-256 mismatch"}`.
   - Tracker **does not reboot**, stays on `v0.1.1`, and resumes regular sensor streaming.
   - Dashboard displays red badge: `OTA: FAILED (SHA-256 mismatch)`.

### Step 5: Sequential Multi-Device Update ("Update all")
1. Power on multiple physical trackers (or fake trackers).
2. Click **"Update all (one at a time)"**.
3. Confirm tracker 1 updates first while tracker 2 continues normal streaming.
4. Once tracker 1 completes and re-announces, confirm tracker 2 automatically begins its OTA update.
