# Running the System — Step-by-Step Guide

This guide walks you through operating Pair Tracker WiFi step-by-step in order, from starting the server to exporting motion capture data.

---

## 1. Start the Local Server

The FastAPI backend coordinates all trackers, serves the real-time WebSocket ingest stream, records sessions, and serves the dashboard.

### Command
```bash
make run-server
```
*(Or directly: `. .venv/bin/activate && uvicorn server.main:app --host 0.0.0.0 --port 8000 --reload`)*

### Configuration & Credentials
- **Port:** `8000` (configurable via `SERVER_PORT=8000`).
- **Host:** `0.0.0.0` (listens on all network interfaces).
- **Admin Token:** Used for authorized endpoints (`POST /v1/sessions`, `POST /v1/devices/{id}/ota`, `POST /v1/devices/{id}/command`). Configured via the `PAIR_ADMIN_TOKEN` environment variable in [`server/config.py`](../server/config.py); defaults to:
  ```
  pair_admin_secret
  ```
- **mDNS Hostname:** Advertises on your local network as `pair.local` on UDP port 5353.

### Expected Terminal Output
```
INFO:     Will watch for changes in: ['/Users/.../pair-tracker-wifi/server']
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using StatReload
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
mDNS: Advertising pair.local for 0.0.0.0:8000
INFO:     Application startup complete.
```

---

## 2. Open the Dashboard

The dashboard is a single-page WebGL application built with Three.js, TypeScript, and Vite.

### Mode A: Production Built Mode (Recommended)
FastAPI serves the pre-built static assets directly from `dashboard/dist/`.
1. Open your web browser (Chrome or Edge recommended).
2. Navigate to: **[http://localhost:8000](http://localhost:8000)**

If you make modifications to frontend code, recompile the bundle:
```bash
make build-dashboard
```

### Mode B: Frontend Development Mode (Hot Reload)
To develop frontend UI with instant hot module replacement (HMR):
```bash
cd dashboard
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)**. Vite automatically proxies API requests to the FastAPI backend running on port 8000.

### What to Look At:
- **Left Panel:** 3D viewport displaying a dark studio grid and an uncalibrated 3D avatar rig.
- **Right Panel:** Tabbed interface with **Required Body Roles**, **Flash & Provision**, and **Sessions**.
- **Role Summary Badge:** Displays `0 / 7 Online` with cards marked in red (`MISSING / OFFLINE`).

---

## 3. Test with No Hardware: Run Fake Trackers

You can simulate physical hardware using the multi-node software tracker simulator.

### Command (in a separate terminal)
```bash
make run-fake
```
*(Or with custom parameters: `. .venv/bin/activate && python3 tools/fake_tracker.py --server http://localhost:8000 --roles required --loss 0.02 --skew 25`)*

### Expected Terminal Output
```
[SIM] Registered simulated device 02:00:00:00:00:01 as 'chest'
[SIM] Registered simulated device 02:00:00:00:00:0c as 'left_thigh'
[SIM] Registered simulated device 02:00:00:00:00:0d as 'right_thigh'
[SIM] Registered simulated device 02:00:00:00:00:0e as 'left_shin'
[SIM] Registered simulated device 02:00:00:00:00:0f as 'right_shin'
[SIM] Registered simulated device 02:00:00:00:00:10 as 'left_foot'
[SIM] Registered simulated device 02:00:00:00:00:11 as 'right_foot'
[chest] Connected to WebSocket stream!
[left_thigh] Connected to WebSocket stream!
[right_thigh] Connected to WebSocket stream!
...
[chest] ClockSync: offset = +12 ms, RTT = 4 ms
```

### What to Look At:
1. **Dashboard Status:** The header badge updates to **`7 / 7 Online`** in green.
2. **Card Indicators:** Each body card turns dark slate with a green `ONLINE` pill, showing battery (~95%), simulated packet loss (~0.00% to 2.00%), and firmware `v1.0.0`.
3. **Live 3D Avatar:** The avatar limbs will immediately begin moving with smooth biomechanical sinusoidal motion.
4. **Latency Indicator:** Displays live hardware-to-screen end-to-end latency (typically `70 - 95 ms`).

---

## 4. Flash and Provision a Real Tracker

For physical hardware nodes:
1. Connect a Seeed Studio XIAO ESP32-C6 tracker to your computer using a USB-C data cable.
2. In the dashboard, switch to the **Flash & Provision** tab.
3. Select your intended body role from the dropdown (e.g. `chest`).
4. Enter your 2.4 GHz WiFi SSID and password.
5. Click **Connect & Flash Tracker**.
6. Select the serial port in Chrome's permission prompt (e.g. `USB JTAG/serial debug unit`).
7. Wait ~20 seconds for the flash to complete and credentials to be provisioned over serial.
*(For complete details, see [docs/FLASHING.md](FLASHING.md)).*

---

## 5. Switch ON Tracker and Verify Connection

1. Disconnect the USB-C cable (or leave it connected to charge).
2. Toggle the physical slide switch to **ON**.
3. Watch the onboard user LED (GPIO 15):
   - **Blinks / Off:** Joining WiFi and performing mDNS lookup.
   - **Solid ON:** Successfully connected to WebSocket stream on the server.
4. Look at the dashboard **Trackers** panel:
   - The card matching your programmed role switches from red to green.
   - Real battery percentage, battery millivolts, and WiFi RSSI appear.

---

## 6. Pose Calibration and Bone Verification

Before recording, you must calibrate the tracker coordinate frames to align individual sensor orientations with the avatar skeleton.

### Step 1: Stand in N-Pose
- Stand upright with feet parallel, shoulder-width apart, facing straight ahead.
- Let arms hang naturally down at your sides with palms facing inward toward your thighs.
- Keep your head level and still.

```
       O       (Head facing forward)
      /|\      (Arms straight down at sides)
     / | \     (Palms facing inward)
      / \      (Legs straight, feet forward)
     |   |
```

### Step 2: Click "Calibrate pose"
- In the dashboard, click the blue **Calibrate pose** button.
- The system captures the instantaneous quaternion from each connected tracker and computes a per-bone rotation offset matrix:
  $$\mathbf{Q}_{\text{offset}} = \mathbf{Q}_{\text{target}}^{\text{world}} \otimes \mathbf{Q}_{\text{sensor}}^{-1}$$
- The 3D avatar instantly snaps into alignment with your physical posture.

### Step 3: Verify Limb Movement
- Raise your right leg or right arm.
- Confirm that the corresponding bone on the screen mirrors your movement within **~100 ms**.
- If heading drift occurs after extended motion, face forward in your calibration stance and click **Re-zero** to correct yaw without altering limb offsets.

---

## 7. Record, Playback, and Export

### 1. Start Recording
1. In the **Record Session** card at the top, enter a session name (e.g. `Walking_Test_01`).
2. Click **Start Recording**.
   - *Requirement:* All 7 required roles (`chest`, `left_thigh`, `right_thigh`, `left_shin`, `right_shin`, `left_foot`, `right_foot`) must be online. If any role is missing, a modal blocks recording and highlights the missing trackers.
3. The recording banner flashes **● RECORDING** and displays elapsed recording time and live samples written.

### 2. Stop Recording
1. Click **Stop Recording**.
2. The server closes the active Parquet dataset, writes session metadata to disk, and sends a `stop` command to all nodes.

### 3. Review in 3D Playback
1. Switch to the **Sessions** tab.
2. Find your session in the list and click **▶ Play in 3D**.
3. The 3D visualizer enters playback mode:
   - **Scrubber:** Drag the timeline slider to scrub backward and forward in time.
   - **Play / Pause:** Press Space or click the Play/Pause button.
   - **Speed:** Select `0.5x`, `1.0x`, `2.0x`, or `4.0x` playback speed.
   - **Exit:** Click **✕ Exit Playback** to return to live streaming.

### 4. Export Mocap Files
1. In the Sessions tab, click **⤓ Export** on the session card.
2. Select your desired format:
   - **BVH (.bvh):** Biovision Hierarchy format with ZXY Euler angles, data-driven skeleton offsets, and 30 Hz resampling. Ready for Blender, Maya, Unreal Engine, or MotionBuilder.
   - **CSV (.csv):** Raw calibrated quaternions $(x, y, z, w)$ per timestamp.
   - **Parquet (.parquet):** Resampled columnar dataset for data science, ML training, or Python analysis.
3. Choose the sampling rate (default: `30` Hz).
4. Click **⬇ Download Export**.

---

## 8. Maintenance & Operational Tips

### How to Stop Everything
- Press `Ctrl + C` in any terminal running the server, dashboard, or fake tracker.

### Where Data is Stored on Disk
- **SQLite Database:** `data/pair.db` (contains registered device MACs, tokens, session metadata).
- **Raw Session Recordings:** `sessions_data/<session_id>.parquet`.
- **Exported Mocap Files:** `sessions_data/<session_id>_mocap_<rate>hz_tall.parquet`.
- **Session Metadata Records:** `sessions_data/<session_id>_metadata.json`.

### How to Reset the Database & Clear Sessions
To wipe all recorded sessions and registered device entries for a fresh start:
```bash
make clean
```
*(Removes `data/` and `sessions_data/` directories. They will be automatically recreated on next server boot).*

### Running on a Different Port or Remote Host
To bind the server to a different port or allow external access across your LAN:
```bash
SERVER_PORT=9000 SERVER_HOST=0.0.0.0 make run-server
```
Trackers will automatically discover the server on port 9000 via mDNS, or you can configure them directly via the USB serial CLI:
```
set server 192.168.1.100
set port 9000
reboot
```
