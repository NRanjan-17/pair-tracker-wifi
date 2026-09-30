# Eidon Tracker WiFi — Protocol Specification

Version: `1.0.0`  
Status: **Proposed**

---

## 1. Overview & Architecture

The **eidon-tracker-wifi** system is an end-to-end IMU body tracking infrastructure composed of:
1. **ESP32-C6 WiFi Trackers**: Autonomous wearable sensor nodes running FreeRTOS and Arduino framework with Seeed Studio XIAO ESP32-C6 and BNO085 IMU.
2. **Local Eidon Server**: High-throughput FastAPI / Uvicorn server providing mDNS discovery (`eidon.local`), device registration/announcement, low-latency binary WebSocket ingestion, real-time live streaming fan-out, sequence-gap loss accounting, and Parquet dataset export.

```
+-----------------------------------------------------------+
|                     ESP32-C6 Tracker                      |
|                                                           |
|  [BNO085 IMU]                                             |
|        | 48 Hz (Game Rotation Vector + Accel/Gyro/Mag)   |
|        v                                                  |
|  [Sensor Task] ---> [FreeRTOS Queue / Ring Buffer]        |
|                            |                              |
|                            v                              |
|  [Network Task] <------------------------------------+    |
+--------|---------------------------------------------|----+
         |                                             |
         | 1. WiFi Station 2.4 GHz                     |
         | 2. mDNS discovery (eidon.local)             |
         | 3. POST /v1/devices/announce                |
         | 4. WS /v1/devices/{id}/stream (Bearer token)|
         v                                             |
+------------------------------------------------------|----+
|                       Local Server                   |    |
|                                                      |    |
|  FastAPI / Uvicorn (eidon.local:8000)                |    |
|  - REST API & Health Check                           |    |
|  - WebSocket Ingest (/v1/devices/{id}/stream)        |    |
|  - Clock Sync (NTP-style RTT ping-pong) ------------>+    |
|  - Seq-gap loss detection (uint16 wrap handling)          |
|  - SQLite Device Registry & Session Metadata              |
|  - Real-time Dashboards (/v1/dashboard & /)               |
|  - Per-Session Batched Parquet Writer (PyArrow)           |
+-----------------------------------------------------------+
```

---

## 2. Roles Specification

Each tracker is assigned **one fixed body role** during provisioning, persisted in non-volatile storage (NVS). Auto-detection is not used.

Roles are represented as a `uint8` on the wire:

| ID (`uint8`) | Role Identifier (`roles.yaml`) | Description |
|:---:|:---|:---|
| `0` | `unassigned` | Unconfigured / default tracker |
| `1` | `chest` | Chest / Torso |
| `2` | `left_shoulder` | Left Shoulder |
| `3` | `right_shoulder` | Right Shoulder |
| `4` | `left_upper_arm` | Left Upper Arm |
| `5` | `right_upper_arm` | Right Upper Arm |
| `6` | `left_elbow` | Left Elbow |
| `7` | `right_elbow` | Right Elbow |
| `8` | `left_forearm` | Left Forearm |
| `9` | `right_forearm` | Right Forearm |
| `10` | `left_hand` | Left Hand |
| `11` | `right_hand` | Right Hand |
| `12` | `left_thigh` | Left Thigh |
| `13` | `right_thigh` | Right Thigh |
| `14` | `left_shin` | Left Shin |
| `15` | `right_shin` | Right Shin |
| `16` | `left_foot` | Left Foot |
| `17` | `right_foot` | Right Foot |

### Session Role Validation Rule
A recording session cannot start (`POST /v1/sessions` returns `409 Conflict`) unless all roles listed under `required_roles` in `roles.yaml` are online and connected with an active stream.

---

## 3. Wire Format: Binary Sensor Frames

Trackers stream sensor data over WebSocket (`/v1/devices/{id}/stream`) using binary frames formatted in **little-endian**.

Each frame batches **2 samples** per message (at 48 Hz sensor sampling rate, this yields 24 frames/sec per tracker, optimizing IP packet overhead while keeping network latency below 21 ms).

### 3.1 Frame Header Layout (4 bytes)

| Byte Offset | Field | Type | Description |
|:---:|:---|:---|:---|
| `0` | `version` | `uint8` | Protocol version = `1` |
| `1` | `role` | `uint8` | Tracker role ID (`1`..`17`) |
| `2` | `flags` | `uint8` | Bit flags (see below) |
| `3` | `count` | `uint8` | Number of samples in payload (normally `2`) |

#### Flags Bitfield:
- **Bit 0 (`0x01`)**: `raw_present` — `1` if raw IMU (accel, gyro, mag) is present; `0` if quaternion-only.
- **Bit 1 (`0x02`)**: `backfill` — `1` if frame was read from disconnect ring buffer; `0` for live frames.
- **Bits 2–7**: Reserved, must be `0`.

---

### 3.2 Sample Layout

Each sample in the payload immediately follows the header.

#### A. Quaternion-Only Sample (`flags & 0x01 == 0`): 22 bytes per sample

| Offset | Field | Type | Unit / Range | Description |
|:---:|:---|:---|:---|:---|
| `0..1` | `seq` | `uint16` (LE) | `0..65535` | Monotonically incrementing sample sequence number |
| `2..5` | `t_ms` | `uint32` (LE) | Milliseconds | Server-synchronized sample timestamp |
| `6..9` | `quat_w` | `float32` (LE) | `[-1.0, 1.0]` | Quaternion W (scalar) |
| `10..13`| `quat_x` | `float32` (LE) | `[-1.0, 1.0]` | Quaternion X |
| `14..17`| `quat_y` | `float32` (LE) | `[-1.0, 1.0]` | Quaternion Y |
| `18..21`| `quat_z` | `float32` (LE) | `[-1.0, 1.0]` | Quaternion Z |

> **Total Frame Size (2 samples)**: `4 + 2 * 22 = 48 bytes`.

#### B. Full Sample with Raw IMU (`flags & 0x01 == 1`): 58 bytes per sample

| Offset | Field | Type | Unit | Description |
|:---:|:---|:---|:---|:---|
| `0..21` | *Same as Quaternion Sample* | — | — | `seq`, `t_ms`, `quat_w,x,y,z` (22 bytes) |
| `22..25`| `accel_x` | `float32` (LE) | $\text{m/s}^2$ | Linear acceleration X |
| `26..29`| `accel_y` | `float32` (LE) | $\text{m/s}^2$ | Linear acceleration Y |
| `30..33`| `accel_z` | `float32` (LE) | $\text{m/s}^2$ | Linear acceleration Z |
| `34..37`| `gyro_x` | `float32` (LE) | $\text{rad/s}$ | Angular velocity X |
| `38..41`| `gyro_y` | `float32` (LE) | $\text{rad/s}$ | Angular velocity Y |
| `42..45`| `gyro_z` | `float32` (LE) | $\text{rad/s}$ | Angular velocity Z |
| `46..49`| `mag_x` | `float32` (LE) | $\mu\text{T}$ | Magnetic field X |
| `50..53`| `mag_y` | `float32` (LE) | $\mu\text{T}$ | Magnetic field Y |
| `54..57`| `mag_z` | `float32` (LE) | $\mu\text{T}$ | Magnetic field Z |

> **Total Frame Size (2 samples)**: `4 + 2 * 58 = 120 bytes`.

---

### 3.3 Sequence Gap & Packet Loss Detection

`seq` is a 16-bit rolling counter (`0` to `65535`). To handle counter wraparound:

$$\Delta = (\text{seq} - \text{last\_seq}) \ \& \ \text{0xFFFF}$$

- If $\Delta == 1$: Expected in-order sample. No loss.
- If $1 < \Delta < 32768$: Sample drop detected.
  $$\text{dropped\_samples} = \Delta - 1$$
- If $\Delta == 0$: Duplicate sample (discard or ignore for loss calculation).
- If $\Delta \ge 32768$: Out-of-order or delayed backfill sample. Handled according to timestamp without incrementing packet loss counters.

---

### 3.4 Mount Correction
By default, trackers apply a mounting correction corresponding to a 180° rotation around the Z-axis:
$$(w, -x, -y, z)$$
This is enabled via compile-time flag `#define EIDON_MOUNT_CORRECTION 1`.

---

## 4. Text (JSON) Control Messages over WebSocket

Both binary sensor frames and text JSON frames share the `/v1/devices/{id}/stream` WebSocket connection.

### 4.1 Device $\to$ Server Messages

#### A. Periodic Heartbeat (Every 5 seconds)
```json
{
  "type": "heartbeat",
  "battery_pct": 88,
  "battery_mv": 3950,
  "rssi": -64,
  "uptime_s": 342,
  "dropped_samples": 0
}
```

#### B. Clock Sync Response
```json
{
  "type": "time_sync_resp",
  "t0": 1727670000100,
  "t1": 45120,
  "t2": 45121
}
```

---

### 4.2 Server $\to$ Device Commands

#### A. Clock Sync Request
The server triggers periodic clock synchronization (e.g. every 15 seconds):
```json
{
  "type": "time_sync",
  "t0": 1727670000100
}
```

**Clock Offset Estimation Algorithm:**
1. Server records server epoch time $T_0$ (ms) and sends `time_sync`.
2. Device records local receive timestamp $T_1 = \text{millis()}$.
3. Device records local transmit timestamp $T_2 = \text{millis()}$ and echoes $T_0, T_1, T_2$ in `time_sync_resp`.
4. Server receives response at $T_3 = \text{epoch\_ms()}$.
5. Round-trip network time: $\text{RTT} = (T_3 - T_0) - (T_2 - T_1)$.
6. Clock offset to map device local time to server time:
   $$\text{offset\_ms} = \frac{(T_0 - T_1) + (T_3 - T_2)}{2}$$
7. Server sends `time_sync_ack`:
   ```json
   {
     "type": "time_sync_ack",
     "offset_ms": 1727669954980,
     "rtt_ms": 12
   }
   ```
8. The tracker sets `server_time_offset_ms = offset_ms`. Any sensor reading at local time $t_{\text{local}}$ is stamped as:
   $$t_{\text{ms}} = t_{\text{local}} + \text{offset\_ms}$$

#### B. Control Commands
- **Start Recording Session**:
  ```json
  {
    "type": "start",
    "session_id": "sess_f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
    "recording_id": "rec_001"
  }
  ```
- **Stop Recording Session**:
  ```json
  {
    "type": "stop"
  }
  ```
- **Identify Device (Blink LED on GPIO 15)**:
  ```json
  {
    "type": "identify",
    "duration_ms": 3000
  }
  ```
- **Calibrate IMU**:
  ```json
  {
    "type": "calibrate"
  }
  ```
- **Reboot Tracker**:
  ```json
  {
    "type": "reboot"
  }
  ```

---

## 5. REST API Specification

### Authentication
- **Admin Endpoints**: Require HTTP Header `Authorization: Bearer <ADMIN_TOKEN>`. The admin token is read from server environment variable `EIDON_ADMIN_TOKEN` (default: `eidon_admin_secret`).
- **Device Endpoints**: Require HTTP Header `Authorization: Bearer <DEVICE_TOKEN>` or query parameter `?token=<DEVICE_TOKEN>`.

---

### 5.1 Device Endpoints

#### `POST /v1/devices/register`
Admin endpoint to register or pre-authorize a tracker with a designated role and security token.

- **Auth**: Admin Bearer Token
- **Request Body**:
  ```json
  {
    "device_id": "CC:BA:79:3A:45:90",
    "role": "chest",
    "token": "tok_tracker_chest_01",
    "notes": "Tracker #1 mounted on torso"
  }
  ```
- **Response** (`201 Created` or `200 OK`):
  ```json
  {
    "status": "registered",
    "device_id": "CC:BA:79:3A:45:90",
    "role": "chest",
    "role_id": 1
  }
  ```

---

#### `POST /v1/devices/announce`
Called by the tracker immediately after WiFi connection.

- **Auth**: Device Bearer Token
- **Request Body**:
  ```json
  {
    "device_id": "CC:BA:79:3A:45:90",
    "role": "chest",
    "firmware_version": "0.1.0",
    "battery_pct": 98,
    "battery_mv": 4120
  }
  ```
- **Validation Rule**:
  If the announced `role` differs from the registered role in the server database, the server returns `409 Conflict`:
  ```json
  {
    "detail": "Role mismatch: announced 'left_shoulder' but registered as 'chest'"
  }
  ```
- **Response** (`200 OK`):
  ```json
  {
    "status": "ok",
    "role": "chest",
    "role_id": 1,
    "session_active": false,
    "recording_id": null,
    "server_time_ms": 1727670005432
  }
  ```

---

#### `GET /v1/devices`
List all registered devices, their online/streaming status, battery, loss %, and telemetry.

- **Auth**: None (or Admin)
- **Response** (`200 OK`):
  ```json
  [
    {
      "device_id": "CC:BA:79:3A:45:90",
      "role": "chest",
      "role_id": 1,
      "online": true,
      "firmware_version": "0.1.0",
      "battery_pct": 98,
      "battery_mv": 4120,
      "rssi": -58,
      "loss_pct": 0.02,
      "total_samples": 4820,
      "dropped_samples": 1,
      "last_seen_ms": 1727670010000
    }
  ]
  ```

---

### 5.2 Session & Export Endpoints

#### `POST /v1/sessions`
Start a recording session.

- **Auth**: Admin Bearer Token
- **Request Body**:
  ```json
  {
    "name": "Squat Trial 01",
    "description": "Athlete performing 10 reps"
  }
  ```
- **Validation Rule**:
  Returns `409 Conflict` if any role specified in `roles.yaml -> required_roles` is missing or offline:
  ```json
  {
    "detail": "Cannot start session: missing required roles",
    "missing_roles": ["left_foot", "right_foot"]
  }
  ```
- **Response** (`201 Created`):
  ```json
  {
    "session_id": "sess_8f2b3e81-2856-42bb-85bb-65231c5187cb",
    "recording_id": "rec_squat_trial_01",
    "name": "Squat Trial 01",
    "status": "active",
    "started_at": 1727670020000,
    "participating_devices": [
      { "device_id": "CC:BA:79:3A:45:90", "role": "chest" }
    ]
  }
  ```

---

#### `POST /v1/sessions/{id}/end`
End the current recording session and finalize the Parquet file.

- **Auth**: Admin Bearer Token
- **Response** (`200 OK`):
  ```json
  {
    "session_id": "sess_8f2b3e81-2856-42bb-85bb-65231c5187cb",
    "status": "completed",
    "ended_at": 1727670140000,
    "duration_s": 120.0,
    "total_samples": 5760,
    "parquet_path": "sessions_data/sess_8f2b3e81-2856-42bb-85bb-65231c5187cb.parquet"
  }
  ```

---

---

#### `GET /v1/sessions`
List all recorded sessions stored in the SQLite database, ordered by start time descending.

- **Response** (`200 OK`):
  ```json
  [
    {
      "session_id": "sess_8f2b3e81-2856-42bb-85bb-65231c5187cb",
      "recording_id": "rec_1727670020",
      "name": "Squat Trial 01",
      "description": "Athlete performing 10 reps",
      "status": "completed",
      "started_at": 1727670020000,
      "ended_at": 1727670140000,
      "total_samples": 5760,
      "parquet_path": "sessions_data/sess_8f2b3e81-2856-42bb-85bb-65231c5187cb.parquet"
    }
  ]
  ```

---

#### `GET /v1/sessions/{id}`
Retrieve metadata, sample counts, and loss statistics for a session.

- **Response** (`200 OK`):
  ```json
  {
    "session_id": "sess_8f2b3e81-2856-42bb-85bb-65231c5187cb",
    "name": "Squat Trial 01",
    "status": "completed",
    "started_at": 1727670020000,
    "ended_at": 1727670140000,
    "duration_s": 120.0,
    "total_samples": 5760,
    "loss_stats": {
      "chest": { "samples": 5760, "dropped": 2, "loss_pct": 0.035 }
    }
  }
  ```

---

#### `GET /v1/sessions/{id}/data`
Extract and return motion capture time-series samples directly from the session's Apache Parquet file for 3D viewport playback and scrubbing. Timestamps are normalized to relative milliseconds (`t_ms = 0` at recording start).

- **Response** (`200 OK`):
  ```json
  {
    "session_id": "sess_8f2b3e81-2856-42bb-85bb-65231c5187cb",
    "recording_id": "rec_1727670020",
    "name": "Squat Trial 01",
    "status": "completed",
    "started_at": 1727670020000,
    "ended_at": 1727670140000,
    "total_samples": 5760,
    "duration_ms": 120000,
    "roles": ["chest", "left_thigh", "right_thigh"],
    "samples": [
      {
        "t_ms": 0,
        "role": "chest",
        "seq": 100,
        "quat": [0.9998, 0.0012, -0.0145, 0.0032],
        "accel": [0.05, 9.81, 0.12]
      },
      {
        "t_ms": 20,
        "role": "chest",
        "seq": 101,
        "quat": [0.9997, 0.0014, -0.0148, 0.0033],
        "accel": [0.06, 9.80, 0.11]
      }
    ]
  }
  ```

---

#### `GET /v1/sessions/{id}/export`
Download the recorded session dataset as an Apache Parquet file.

- **Response**: `200 OK` with `Content-Type: application/vnd.apache.parquet` or `application/octet-stream`.

---

#### `GET /healthz`
Health check endpoint.
- **Response** (`200 OK`):
  ```json
  {
    "status": "healthy",
    "uptime_s": 1420,
    "connected_devices": 3,
    "active_session": null
  }
  ```

---

#### `GET /`
Serves the compiled Vite + TypeScript + Three.js web dashboard (`dashboard/dist`). Fallback to inline status page if static build is absent.

---

### 5.3 Live Dashboard WebSocket (`/v1/dashboard`)

The `/v1/dashboard` endpoint provides a high-throughput, low-overhead WebSocket stream for real-time visualization, 3D pose playback, device telemetry, and session monitoring.

#### A. Initial State Handshake
Immediately upon establishing a WebSocket connection, the server pushes an `init` message containing the system configuration and current device inventory:
```json
{
  "type": "init",
  "required_roles": [
    "chest",
    "left_thigh",
    "right_thigh",
    "left_shin",
    "right_shin",
    "left_foot",
    "right_foot"
  ],
  "devices": [
    {
      "device_id": "AA:BB:CC:11:22:01",
      "role": "chest",
      "role_id": 1,
      "online": true,
      "firmware_version": "1.0.0",
      "battery_pct": 92,
      "battery_mv": 3980,
      "rssi": -55,
      "uptime_s": 120,
      "total_samples": 5760,
      "dropped_samples": 2,
      "loss_pct": 0.035,
      "last_seen_ms": 1727670000000,
      "clock_offset_ms": 15,
      "clock_rtt_ms": 8
    }
  ],
  "active_session": null
}
```

#### B. Device State Changes (`device_state`)
Broadcast in real-time whenever a device connects, disconnects, or sends updated battery, RSSI, or packet loss telemetry:
```json
{
  "type": "device_state",
  "device_id": "AA:BB:CC:11:22:01",
  "role": "chest",
  "role_id": 1,
  "online": true,
  "battery_pct": 92,
  "battery_mv": 3980,
  "rssi": -55,
  "uptime_s": 120,
  "total_samples": 5760,
  "dropped_samples": 2,
  "loss_pct": 0.035,
  "last_seen_ms": 1727670000000
}
```
When a device disconnects, `online` is set to `false`.

#### C. Decoded Sensor Samples Throttled to 60 Hz (`sample`)
Sensor frames received over the tracker ingest stream are decoded and streamed as JSON, strictly rate-limited to a maximum of **60 Hz per device** (minimum 16.67 ms interval between sample broadcasts for any single tracker):
```json
{
  "type": "sample",
  "device_id": "AA:BB:CC:11:22:01",
  "role": "chest",
  "seq": 1420,
  "t_ms": 1727670000120,
  "quat": [0.999, 0.012, -0.034, 0.005],
  "accel": [0.02, 9.80, 0.05],
  "gyro": [0.01, -0.02, 0.00],
  "mag": [21.5, -14.8, 42.1],
  "loss_pct": 0.035
}
```
*Note*: `accel`, `gyro`, and `mag` arrays are `null` if the tracker transmitted a quaternion-only frame (`flags & 0x01 == 0`).

#### D. Session State Changes
- `session_started`: Broadcast when a recording session begins.
- `session_ended`: Broadcast when a recording session is finalized.

---

## 6. Parquet Dataset Schema

Each recorded session is written to a Parquet file structured with PyArrow:

| Column Name | Arrow Type | Nullable | Description |
|:---|:---|:---:|:---|
| `recording_id` | `pa.string()` | No | Unique session or recording identifier |
| `time_ms` | `pa.int64()` | No | Server-synced sample timestamp (ms) |
| `role` | `pa.string()` | No | Human-readable role (e.g. `"chest"`) |
| `seq` | `pa.uint32()` | No | Sample sequence number (`0..65535`) |
| `server_rx_ms` | `pa.int64()` | No | Server timestamp when frame arrived (ms) |
| `quat_w` | `pa.float32()` | No | Normalized Quaternion W component |
| `quat_x` | `pa.float32()` | No | Normalized Quaternion X component |
| `quat_y` | `pa.float32()` | No | Normalized Quaternion Y component |
| `quat_z` | `pa.float32()` | No | Normalized Quaternion Z component |
| `accel_x` | `pa.float32()` | Yes | Linear acceleration X ($\text{m/s}^2$) |
| `accel_y` | `pa.float32()` | Yes | Linear acceleration Y ($\text{m/s}^2$) |
| `accel_z` | `pa.float32()` | Yes | Linear acceleration Z ($\text{m/s}^2$) |
| `gyro_x` | `pa.float32()` | Yes | Calibrated angular velocity X ($\text{rad/s}$) |
| `gyro_y` | `pa.float32()` | Yes | Calibrated angular velocity Y ($\text{rad/s}$) |
| `gyro_z` | `pa.float32()` | Yes | Calibrated angular velocity Z ($\text{rad/s}$) |
| `mag_x` | `pa.float32()` | Yes | Calibrated magnetic field X ($\mu\text{T}$) |
| `mag_y` | `pa.float32()` | Yes | Calibrated magnetic field Y ($\mu\text{T}$) |
| `mag_z` | `pa.float32()` | Yes | Calibrated magnetic field Z ($\mu\text{T}$) |

---

## 7. Firmware Architecture & NVS Provisioning

### 7.1 FreeRTOS Architecture
The firmware operates two dedicated FreeRTOS tasks to guarantee IMU read regularity:
1. **Sensor Task (Core 0 / Priority 5)**:
   - Polls BNO085 at 48 Hz (~20.83 ms interval).
   - Generates samples with sequence numbers and synced timestamps.
   - Pushes to an internal FreeRTOS queue (`xQueueSend`).
   - If network is disconnected, samples are queued into a 5-second circular ring buffer (~240 samples).
   - **Never blocks on network or WiFi operations.**
2. **Network Task (Core 1 / Priority 3)**:
   - Manages WiFi connection with exponential backoff (`1s`, `2s`, `4s`, max `30s`).
   - Resolves `eidon.local` via mDNS (fallback to configured IP/host).
   - Performs `POST /v1/devices/announce`.
   - Maintains WebSocket connection `/v1/devices/{id}/stream`.
   - Flushes ring buffer with `flags bit 1 (backfill) = 1` upon reconnect.
   - Batches 2 samples per binary frame.
   - Dispatches incoming control commands and executes clock synchronization.

### 7.2 USB Serial Provisioning Protocol
Provisioning occurs over USB CDC Serial at 115200 baud with a line protocol:
```text
set ssid <WiFi SSID>
set pass <WiFi Password>
set server <Server Host or IP>
set port <Server Port>
set token <Device Auth Token>
set role <role_name>
show
reboot
```
All parameters are stored in ESP32 NVS under namespace `eidon_cfg`. No secrets are kept in source code.

### 7.3 Web Serial Flashing & Browser Provisioning (`esptool-js`)

The web dashboard provides an in-browser **Flash & Provision** tool using `esptool-js` over the Web Serial API.

#### Browser & Environment Compatibility
- **Supported Browsers**: Google Chrome, Microsoft Edge, and Chromium-based browsers supporting the Web Serial API (`navigator.serial`).
- **Origin Security**: Web Serial is strictly restricted by browser security policies to `localhost` or secure HTTPS origins (`https://...`).

#### Workflow Sequence
1. **Role & Network Selection**: Operator selects the tracker's body role from the list of valid roles, and inputs local WiFi credentials and server endpoint.
2. **Device Detection & Registration**:
   - The browser prompts for the Seeed XIAO ESP32-C6 USB serial port.
   - `esptool-js` syncs with the ROM bootloader, identifies the chip, and reads the factory MAC address from eFuse.
   - The frontend calls `POST /v1/devices/register` with `{ device_id: MAC, role: role }`. The server returns the assigned per-device bearer token.
3. **Binary Flashing**:
   - Frontend requests `GET /v1/firmware/manifest` to retrieve the ESP32-C6 flash partition layout (`bootloader.bin` @ `0x0`, `partitions.bin` @ `0x8000`, `boot_app0.bin` @ `0xe000`, `firmware.bin` @ `0x10000`).
   - Downloads each binary via `GET /v1/firmware/{filename}` and writes to flash via `esploader.writeFlash()`.
   - Issues a hard reset command.
4. **NVS Provisioning**:
   - Re-opens serial communication at 115200 baud.
   - Sends the line protocol CLI commands:
     `set ssid <SSID>`
     `set pass <PASSWORD>`
     `set server <HOST>`
     `set port <PORT>`
     `set token <TOKEN>`
     `set role <ROLE>`
     `show`
     `reboot`
5. **Switch ON Tracker & Announce Verification**:
   - UI prompts: *"Switch ON the tracker"*.
   - Tracker boots, initializes IMU, connects to WiFi, and performs `POST /v1/devices/announce`.
   - The dashboard detects the incoming announcement and highlights a bright green success confirmation.

> **Note on OTA (Over-The-Air)**:  
> OTA firmware updating is currently **out of scope** for this milestone.  
> *TODO: Implement WiFi-based OTA updates (`POST /v1/firmware/ota` and tracker background pull) in a future milestone.*

---

## 8. 3D Biomechanical Avatar & Kinematics Engine

The web dashboard incorporates a Three.js biomechanical avatar driven in real-time by the incoming quaternion stream.

### 8.1 Coordinate Frame Transformation
The BNO085 IMU reports rotations in a right-handed **Z-up** reference frame ($+X = \text{Right}, +Y = \text{Forward}, +Z = \text{Up}$). Three.js renders in a right-handed **Y-up** reference frame ($+X = \text{Right}, +Y = \text{Up}, +Z = \text{Backward} / -\text{Forward}$).

Conversion is executed in a single dedicated function (`bnoToThreeQuat`):
$$\mathbf{q}_{\text{three}} = \begin{bmatrix} q_x \\ q_z \\ -q_y \\ q_w \end{bmatrix}$$
where Three.js quaternion components are $(x, y, z, w)$.

### 8.2 Data-Driven Skeleton Hierarchy (`skeleton.json`)
The avatar skeleton is configured via a data-driven JSON document specifying parent relationships, bone lengths, and rest positions:
- **Upper Body Chain**:
  - `chest` (root, position: `[0, 1.25, 0]`)
  - `left_shoulder` $\rightarrow$ `left_upper_arm` $\rightarrow$ `left_forearm` $\rightarrow$ `left_hand`
  - `right_shoulder` $\rightarrow$ `right_upper_arm` $\rightarrow$ `right_forearm` $\rightarrow$ `right_hand`
- **Lower Body Chain** (configured for future multi-point tracking):
  - `left_thigh` $\rightarrow$ `left_shin` $\rightarrow$ `left_foot`
  - `right_thigh` $\rightarrow$ `right_shin` $\rightarrow$ `right_foot`

### 8.3 N-Pose Calibration & Heading Re-Zero
Because the firmware operates Game Rotation Vector without magnetometer reliance, each sensor initializes with an arbitrary yaw heading:
1. **Calibrate Pose**:
   - The user stands facing forward in an N-pose (arms down alongside torso).
   - The dashboard captures each sensor's converted orientation $\mathbf{Q}_{\text{sensor, calib}}$.
   - Per-bone mounting/heading offset is computed as:
     $$\mathbf{Q}_{\text{offset}} = \mathbf{Q}_{\text{sensor, calib}}^{-1}$$
   - In rest N-pose, calibrated world rotation evaluates to Identity ($\mathbf{Q}_{\text{world}} = \mathbf{I}$).
2. **Re-Zero Yaw**:
   - Compiles heading drift around the vertical $Y$ axis without disturbing joint offsets:
     $$\psi = \text{atan2}(2(w \cdot y + x \cdot z), 1 - 2(y^2 + z^2))$$
     $$\mathbf{Q}_{\text{re-zero}} = \begin{bmatrix} 0 \\ \sin(-\psi / 2) \\ 0 \\ \cos(-\psi / 2) \end{bmatrix}$$
   - Rotates all bones to align the chest forward along the viewing axis.

### 8.4 Hierarchical Forward Kinematics
For each bone in the skeletal hierarchy:
$$\mathbf{R}_{\text{bone local}} = \mathbf{R}_{\text{parent world}}^{-1} \otimes \mathbf{R}_{\text{child world}}$$
where $\mathbf{R}_{\text{child world}} = \mathbf{Q}_{\text{re-zero}} \otimes (\mathbf{Q}_{\text{offset}} \otimes \mathbf{Q}_{\text{sensor}})$. If an intermediate or child bone tracker is offline, it inherits its parent's world orientation (local identity) and its mesh is styled in muted slate gray (`#475569`).

### 8.5 60 FPS Jitter Buffer & Latency Measurement
- **Jitter Buffer**: Stores samples in a 50–100 ms buffer (default: 75 ms) to absorb network transmission jitter.
- **Slerp Interpolation**: Evaluates poses at $t = t_{\text{now}} - \Delta_{\text{buffer}}$ via spherical linear interpolation (`slerp`) between adjacent samples.
- **Latency Monitoring**: Measured end-to-end hardware-to-screen latency is computed and displayed live in the UI (target: $< 150\text{ ms}$).

---

## 9. Over-The-Air (OTA) Firmware Updates & Protocol Versioning

### 9.1 Partition Layout & Dual-Slot Boot
To ensure fail-safe updates, the ESP32-C6 firmware utilizes a two-slot OTA partition table (`partitions_two_ota.csv`):
- `otadata` (`0x00e000`, 8 KB): Bootloader partition selection & rollback record.
- `app0` (`0x010000`, 1984 KB): Primary firmware application slot.
- `app1` (`0x200000`, 1984 KB): Secondary firmware application slot.

Switching an existing hardware node from single-slot to two-slot OTA requires an initial flash over USB. Subsequent updates occur wirelessly.

### 9.2 Device Announcement & Protocol Versioning
Every device announce (`POST /v1/devices/announce`) transmits the node's protocol version:
```json
{
  "device_id": "AA:BB:CC:11:22:33",
  "role": "chest",
  "firmware_version": "1.0.0",
  "protocol_version": 1,
  "battery_pct": 95,
  "battery_mv": 4150
}
```
The server checks `protocol_version` against `REQUIRED_PROTOCOL_VERSION` (currently `1`). If `protocol_version < REQUIRED_PROTOCOL_VERSION`, the server sets `protocol_outdated: true` in device state summaries and the dashboard alerts the user.

### 9.3 Release Manifest & Authenticated Binary Distribution
Firmware builds are versioned in `server/firmware_bin/<version>/` via `make release`:
- `GET /v1/firmware/latest`: Returns latest release manifest (`version`, `sha256`, `size`, `min_protocol`).
- `GET /v1/firmware/{version}/firmware.bin`: Binary download endpoint authenticated with device bearer token (`Authorization: Bearer <token>` or `?token=<token>`). Unauthenticated requests are rejected with HTTP 401; unauthorized tokens return HTTP 403.

### 9.4 OTA Trigger Endpoint & Rejection Rules
- `POST /v1/devices/{device_id}/ota` triggers an update for the specified node.
- **Rejection Conditions (HTTP 409 Conflict):**
  1. A recording session is currently active (`active_session_id is not None`).
  2. The target device is offline.
  3. The target device's last reported battery level is below **30%**.

### 9.5 WebSocket Command & Progress Protocol
1. **Server Command (`"ota"`)**: Dispatched over the device's stream WebSocket:
   ```json
   {
     "type": "ota",
     "version": "1.0.1",
     "url": "/v1/firmware/1.0.1/firmware.bin",
     "sha256": "3bf586472d4f29b6590788aa67ccf04c9fd99da229bde9c74eea07346b749099",
     "size": 1314944,
     "min_protocol": 1
   }
   ```
2. **Device Progress Feedback (`"ota_progress"`)**: Streamed by the tracker:
   ```json
   {
     "type": "ota_progress",
     "status": "downloading",
     "progress_pct": 45
   }
   ```
   Valid statuses: `downloading`, `verifying`, `rebooting`, `failed`.
3. **Dashboard Live Broadcast (`"ota_job_update"`)**:
   ```json
   {
     "type": "ota_job_update",
     "job": {
       "job_id": "job_ota_abc123",
       "device_id": "AA:BB:CC:11:22:33",
       "version": "1.0.1",
       "status": "downloading",
       "progress_pct": 45,
       "error_message": null,
       "created_at_ms": 1727720000000,
       "updated_at_ms": 1727720005000
     }
   }
   ```

### 9.6 Verification, Reboot, and Rollback
- While downloading, the tracker computes the SHA-256 hash across incoming chunks using `mbedtls_sha256`.
- If the computed hash fails to match the manifest hash, the tracker aborts the update, emits `{"status": "failed", "error": "SHA-256 mismatch"}`, and resumes sensor streaming without rebooting.
- If verified, the tracker reboots into the updated slot.
- Upon booting, the new slot is in `ESP_OTA_IMG_PENDING_VERIFY`. Only after successfully connecting to WiFi and establishing a WebSocket connection to the server does the tracker call `esp_ota_mark_app_valid_cancel_rollback()`. If a crash or boot failure occurs prior to verification, the hardware bootloader automatically reverts to the previous working slot.

