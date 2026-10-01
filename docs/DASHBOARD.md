# Pair Tracker WiFi — Dashboard & Live Visualizer Guide

The Pair Tracker Dashboard is a real-time web application built with **Vite, TypeScript, and Three.js**. It provides live device monitoring, 3D biomechanical avatar visualization, session recording, interactive playback, and motion capture dataset export.

---

## 1. Accessing the Dashboard

The dashboard is accessible via your web browser:
- **Development Mode**: [http://localhost:5173](http://localhost:5173) (run `make run-dashboard`)
- **Production Server**: [http://localhost:8000](http://localhost:8000) or `http://pair.local:8000` (run `make run-server` with built assets)

---

## 2. Dashboard Interface Overview

```
+-----------------------------------------------------------------------------------------------+
| PAIR TRACKER WiFi    pair.local                      [WebSocket: CONNECTED] [REC] [Session]   |
+------------------------------------------------------+----------------------------------------+
| TABS: [📡 Live Trackers] [📁 Sessions] [⚡ Flash]     | 3D BIOMECHANICAL AVATAR                |
|                                                      | [Needs Calib] [⚡ Calib] [🔄 Re-Zero]  |
| Required Body Roles (7/7 Online)     [Update All]    |                                        |
| +-------------------------+ +----------------------+ |           O    (Cyber Visor)           |
| | CHEST          [ONLINE] | | LEFT THIGH  [ONLINE] | |          /|\   (Torso)                  |
| | Batt: 94%   Loss: 0.00% | | Batt: 88%  Loss: 0.02%| |          / \   (Limbs)                  |
| | FW: v1.0.0 (Up to date) | | FW: v1.0.0           | |                                        |
| | [Blink] [Reboot] [Upd]  | | [Blink] [Reboot]     | |  [▶ Play] [===|====] 00:04.2 / 00:15.0  |
| +-------------------------+ +----------------------+ |----------------------------------------|
| Additional Devices (0)                               | Latency: 72 ms | Jitter: 75 ms | 60 FPS|
+------------------------------------------------------+----------------------------------------+
```

---

## 3. Device Cards & Field Definitions

Each connected or configured tracker is displayed in a reactive card under the **Live Trackers** tab:

### Card Header
- **Role Title**: Display name (e.g. `chest`, `left shin`, `right foot`).
- **Tag Badge**: Wire identifier string used in `roles.yaml`.
- **Status Indicator**:
  - `ONLINE` (green border and glowing badge): Device is connected to WebSocket and streaming IMU frames.
  - `MISSING / OFFLINE` (red border and red badge): Device is offline, powered off, or disconnected from WiFi.

### Metrics Grid
- **Battery**: Real-time battery percentage (`%`) calculated from 1S LiPo ADC curve. Displays `—` if offline. Displays an alert if battery $< 30\%$.
- **Loss**: Cumulative packet loss percentage (`%`) detected via sequence gap accounting. Loss $> 1.0\%$ is highlighted in red.
- **Last Seen**: Relative time since last received packet (e.g. `1s ago`, `5m ago`, or `Never`).
- **Firmware Version**:
  - Displays current active version (e.g., `v1.0.0`).
  - Badge `✓ Up to date` if matching the dynamically resolved latest manifest from `/v1/firmware/manifest`.
  - Badge `⬆️ v<latest> avail` if a newer release exists on disk.
  - Badge `⚠️ Proto vX outdated` if the device's protocol version is below `REQUIRED_PROTOCOL_VERSION`.
- **OTA Job Panel**: Appears dynamically during firmware updates showing status (`QUEUED`, `DOWNLOADING (X%)`, `VERIFYING`, `REBOOTING`, `SUCCESS`, or `FAILED`) with a progress bar.

### Card Footer & Actions
- **MAC Address**: Hardware identifier (e.g., `C8:2E:18:1C:63:F4`).
- **Blink (`Identify`)**: Sends an identify command over WebSocket. The tracker's onboard status LED pulses with a high-speed 10 Hz strobe (50 ms toggle) for 5 seconds to pinpoint physical hardware.
- **Reboot**: Sends a reboot command to cleanly restart the microcontroller remotely.
- **Update**: Triggers an Over-The-Air firmware upgrade to the latest dynamically resolved version. Enabled when battery $\ge 30\%$.
- **⚡ Update (USB)**: Displayed when device battery is $< 30\%$ or when operating on USB benchtop power. Bypasses the battery threshold (`force=true`) so developers can update tethered hardware.

### Paired Devices Management Modal
Clicking the **"Paired Devices"** button in the top navigation toolbar opens a management modal:
- **Registry Inspection**: Displays all registered trackers saved in the server's SQLite database (`db.py`).
- **Device Details**: Shows MAC address, assigned role, reported firmware version, hardware architecture (`esp32c6` / `esp12e`), token status, and last seen relative timestamp.
- **Unpair Individual Device**: Removes the tracker record from SQLite, clearing any persistent role conflicts.
- **Clean Offline**: Purges all currently offline devices from the database in a single click, keeping the environment clean.

---

## 4. Pose Calibration & Re-Zero

Accurate motion capture requires aligning the physical mounting angle of each tracker with the anatomical coordinate frame of the 3D avatar.

### 4.1 Standing Posture for Calibration (N-Pose)
Before clicking **Calibrate Pose**, the actor must stand in the standard neutral **N-pose**:
1. **Torso**: Spine upright, head level, facing directly forward.
2. **Feet**: Positioned shoulder-width apart, feet parallel and pointing straight forward.
3. **Arms**: Hanging relaxed and straight down along the lateral sides of the thighs.
4. **Palms**: Facing flat inward against the outer thighs, thumbs pointing forward.
5. **Hold Still**: Maintain this posture motionless for 2 seconds.

```
       O         <-- Head level, eyes looking forward
      /|\        <-- Arms straight down along sides
     | | |       <-- Palms facing inward against thighs
      / \        <-- Legs straight, shoulder-width apart
     |   |       <-- Feet parallel, pointing straight forward
```

### 4.2 Calibrate Pose Action
1. Click the **"⚡ Calibrate Pose"** button in the 3D viewport header.
2. **Algorithm**: The client samples the instantaneous quaternion $Q_{\text{sensor}}$ of each online tracker. Because the user is standing in neutral N-pose (where anatomical rotation is Identity), the calibration offset is computed as:
   $$Q_{\text{offset}} = Q_{\text{sensor}}^{-1}$$
   Such that:
   $$Q_{\text{calibrated}} = Q_{\text{offset}} \cdot Q_{\text{sensor}} = \mathbf{I}$$
3. The viewport calibration badge transitions from `Needs N-Pose Calib` (yellow) to `Calibrated` (green). Offsets are stored in memory and attached to subsequent recording sessions.

### 4.3 Re-Zero (Fixing Yaw Drift)
Unlike full calibration, **Re-Zero** corrects heading/yaw drift without altering individual limb alignment:
- **When to use**: If the avatar gradually turns slightly left or right over a long session due to magnetic drift.
- **How to use**: Stand facing forward and click **"🔄 Re-Zero"**.
- **Algorithm**:
  1. Reads the current calibrated rotation of the `chest` tracker.
  2. Extracts the yaw angle $\theta_{\text{yaw}}$ around the vertical $Y$-up axis:
     $$\theta_{\text{yaw}} = \text{atan2}(2(wy + xz), 1 - 2(y^2 + z^2))$$
  3. Computes a counter-rotation quaternion $Q_{\text{re-zero}}$ around the $Y$-axis by $-\theta_{\text{yaw}}$:
     $$Q_{\text{re-zero}} = \left[0, \; \sin(-\theta_{\text{yaw}} / 2), \; 0, \; \cos(-\theta_{\text{yaw}} / 2)\right]$$
  4. Applies $Q_{\text{re-zero}}$ to all bone rotations. The avatar immediately snaps back to facing forward without disturbing joint angles.

---

## 5. Live 3D Avatar Engine & Known Limits

### Coordinate Frame Mapping
The BNO085 sensor outputs quaternions in a right-handed $Z$-up navigation frame ($X$=Right, $Y$=Forward, $Z$=Up).
Three.js uses a right-handed $Y$-up coordinate system ($X$=Right, $Y$=Up, $Z$=Backward).

Conversion from sensor quaternion $(q_w, q_x, q_y, q_z)$ to Three.js $(x, y, z, w)$ is performed via:
```typescript
function bnoToThreeQuat(qw: number, qx: number, qy: number, qz: number): THREE.Quaternion {
  return new THREE.Quaternion(qx, qz, -qy, qw).normalize();
}
```

### Forward Kinematics (FK) Formula
World orientations are mapped down the skeleton hierarchy from root (`chest`) to leaves (`hands`, `feet`):
$$\text{LocalBoneQuat} = Q_{\text{parent\_world}}^{-1} \cdot Q_{\text{child\_world}}$$

If a tracker disconnects or goes offline, its corresponding bone segment is rendered in a **muted slate gray transparent material** ($45\%$ opacity) while continuing to follow its parent joint.

### Jitter Buffer & Latency
- Packets arrive over WiFi at ~48 Hz.
- An adaptive **75 ms jitter buffer** smooths network packet inter-arrival variance using Spherical Linear Interpolation (**SLERP**).
- **Latency Indicator**:
  - Green: $< 100\text{ ms}$ (optimal).
  - Amber: $100\text{ ms} - 150\text{ ms}$ (acceptable).
  - Red: $> 150\text{ ms}$ (network congestion or buffer buildup).

### Known Architectural Limits
1. **Rotation-Only Tracking (3-DOF per bone)**: IMUs measure angular orientation, not absolute 3D position in the room. The avatar's pelvis/chest is fixed at origin $(0, 0, 0)$. Foot stepping or lateral translation does not move the avatar through world space.
2. **Yaw Drift**: BNO085 sensor fusion uses magnetometers and gyroscopes. Near ferrous metal furniture or heavy electronic equipment, magnetometer heading may drift slowly over 15–30 minutes. Use the **Re-Zero** button to correct.

---

## 6. Session Recording & Playback

### Recording a Session
1. Enter an optional session name in the top input box (e.g. `Walking_Trial_01`).
2. Click the **"● REC"** button.
3. **Role Validation Guard**:
   - The server verifies that all 7 required roles (`chest`, `left_thigh`, `right_thigh`, `left_shin`, `right_shin`, `left_foot`, `right_foot`) are online and actively streaming.
   - If any required role is offline, recording is blocked with a modal popup listing exactly which devices are missing.
4. **During Recording**:
   - The top banner turns deep red with a pulsing indicator and live timer (`00:00:00`).
   - Active pose calibration offsets are locked into session metadata.
   - Per-device packet loss is calculated and displayed live.
5. Click **"⏹ Stop"** to end recording. The server flushes and finalizes the Parquet dataset on disk in `server/data/sessions/{id}.parquet`.

### Interactive 3D Playback
1. Switch to the **"📁 Recorded Sessions"** tab.
2. Click **"▶ Play"** on any recorded session card.
3. The 3D viewport switches to **Playback Mode** with a dedicated control overlay:
   - **Play / Pause**: Start or pause animation playback.
   - **Timeline Scrubber**: Drag slider to scrub to any millisecond of the recording.
   - **Time Display**: Shows current time and total duration (`MM:SS.s / MM:SS.s`).
   - **Speed Multipliers**: `0.25x`, `0.5x`, `1.0x`, `1.5x`, `2.0x`.
   - **Exit Playback**: Closes playback and returns to live tracker streaming.

---

## 7. Mocap Data Export

Recorded sessions can be exported directly from the **Recorded Sessions** tab by clicking the **"Export"** button on any session card.

### Export Modal Options
- **Format**: Select from BVH, CSV, or Parquet.
- **Sampling Rate (Hz)**: Configurable from 1 to 120 Hz (default **30 Hz**).
- **Calibration Warning**: If the session was recorded without prior N-pose calibration, a warning is displayed:
  > *Warning: This session was recorded without pose calibration. The export will preserve raw sensor orientations without N-pose alignment.*

### Export File Formats & Structures

#### 1. Biovision Hierarchy (`.bvh`)
- **Hierarchy**: Defined from [`skeleton.json`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/dashboard/src/skeleton.json) with `chest` as `ROOT`, bone lengths configured as `OFFSET` values in meters, and rotation-only channels:
  ```text
  HIERARCHY
  ROOT chest
  {
    OFFSET 0.000000 0.000000 0.000000
    CHANNELS 6 Xposition Yposition Zposition Zrotation Xrotation Yrotation
    ...
  }
  MOTION
  Frames: 300
  Frame Time: 0.033333
  ```
- **Euler Order**: `ZXY` in degrees (standard for Euler conversions from Three.js quaternions).
- **Position Channels**: Root translation fixed at origin `(0, 0, 0)`.

#### 2. Calibrated Quaternions (`.csv`)
Raw calibrated quaternions per bone per frame with no loss of gimbal or Euler conversion information:
```csv
frame,time_s,time_ms,bone,x,y,z,w,local_x,local_y,local_z,local_w
0,0.000000,0,chest,0.0012,0.0003,-0.0001,0.9999,0.0012,0.0003,-0.0001,0.9999
0,0.000000,0,left_thigh,-0.0412,0.0123,-0.0051,0.9990,-0.0424,0.0120,-0.0050,0.9990
```

#### 3. Parquet Dataset (`.parquet`)
High-performance columnar storage containing resampled timestamps, bone labels, world quaternions, and local hierarchical quaternions.

#### 4. Session Metadata (`metadata.json`)
Accompanying metadata file containing:
- `session_id`: Unique identifier (e.g. `sess_20261001_023000`).
- `name`: Human-readable session label.
- `start_time`: ISO 8601 UTC timestamp.
- `duration_s`: Total duration in seconds.
- `rate_hz`: Resampled fixed frame rate.
- `roles`: List of tracked roles present.
- `bone_lengths`: Metric lengths from skeleton configuration.
- `calibration_offsets`: Per-role quaternion offsets applied.
- `is_calibrated`: Boolean calibration status.
- `gap_list`: Array of sequence gaps $> 200\text{ ms}$ where zero-order hold was applied.
- `per_device_loss`: Packet loss percentages per role.
- `firmware_versions`: Active firmware version reported by each device.
