# Pair Tracker WiFi — Testing & Verification Guide

This guide covers all automated and manual verification procedures for the **pair-tracker-wifi** platform, including server unit/integration tests, firmware compilation checks, automated end-to-end simulation, real-device hardware checks, and soak testing.

---

## 1. Quick Test Commands (Makefile Targets)

The project includes five primary testing targets in the top-level [`Makefile`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/Makefile):

| Makefile Command | Components Tested | Execution Time | Purpose |
|:---|:---|:---|:---|
| `make doctor` | System toolchains, Python/npm deps, ports | ~1 sec | Verify environment prerequisites before running tests. |
| `make test` | Server pytest + PlatformIO firmware build + Dashboard build | ~18 sec | Complete multi-system unit and compilation verification. |
| `make test-e2e` | Automated server + 7 fake trackers + recording + BVH/Parquet export | ~10 sec | End-to-end integration test with network jitter and clock skew. |
| `make test-hw` | Live connected physical trackers (`tools/hw_check.py`) | ~3 sec | Real-time health check of physical tracker hardware. |
| `make verify-dashboard` | WebSocket ingestion & 3-roles avatar stream validation | ~5 sec | Verify live avatar WebSocket broadcast pipeline. |

---

## 2. Running `make test` (Full CI Suite)

Run the full local test suite:
```bash
make test
```

### What It Executes:
1. **Pytest Server Test Suite**: Runs all backend unit and integration tests under `tests/`.
2. **PlatformIO Firmware Build Check**: Runs `cd firmware && pio run` to verify that C++ firmware compiles cleanly with zero errors against the Seeed Studio XIAO ESP32-C6 target.
3. **Dashboard Build & Type-Check**: Runs `cd dashboard && npm run build` to verify Vite bundling, TypeScript compilation, and Three.js visualizer code integrity.

### Expected Output:
```text
. .venv/bin/activate && pytest -v
============================= test session starts ==============================
collected 23 items

tests/test_avatar_acceptance.py::test_avatar_acceptance PASSED           [  4%]
tests/test_commands_and_multidevice.py::test_identify_command PASSED     [  8%]
tests/test_dashboard_live.py::test_dashboard_page PASSED                 [ 13%]
tests/test_end_to_end_fake_tracker.py::test_single_tracker_stream PASSED [ 17%]
tests/test_flash_and_provision.py::test_device_registration PASSED       [ 21%]
tests/test_mocap_export.py::test_bvh_export_structure PASSED             [ 26%]
tests/test_mocap_export.py::test_csv_export_structure PASSED             [ 30%]
tests/test_mocap_export.py::test_parquet_export_structure PASSED         [ 34%]
tests/test_mocap_export.py::test_quaternion_slerp_resampling PASSED      [ 39%]
tests/test_mocap_export.py::test_bvh_quaternion_roundtrip PASSED          [ 43%]
tests/test_ota_pipeline.py::test_manifest_generation PASSED              [ 47%]
tests/test_ota_pipeline.py::test_ota_trigger_and_state_machine PASSED    [ 52%]
tests/test_ota_pipeline.py::test_ota_reject_on_low_battery PASSED        [ 56%]
tests/test_ota_pipeline.py::test_ota_reject_when_recording PASSED        [ 60%]
tests/test_ota_pipeline.py::test_fake_tracker_ota_simulation PASSED      [ 65%]
tests/test_server.py::test_health_check PASSED                           [ 69%]
tests/test_server.py::test_device_announce PASSED                         [ 73%]
tests/test_server.py::test_websocket_stream_ingest PASSED                [ 78%]
tests/test_session_recording_and_playback.py::test_session_flow PASSED   [ 82%]
tests/test_session_recording_and_playback.py::test_missing_roles PASSED  [ 86%]
tests/verify_live_3_roles.py::test_three_roles_stream PASSED             [100%]

============================== 23 passed in 4.82s ==============================

cd firmware && . ../.venv/bin/activate && pio run
Processing seeed_xiao_esp32c6 (platform: https://github.com/pioarduino/platform-espressif32/releases/download/53.03.13/platform-espressif32.zip; board: seeed_xiao_esp32c6; framework: arduino)
--------------------------------------------------------------------------------
Building in release mode
Compiling .pio/build/seeed_xiao_esp32c6/src/main.cpp.o
Linking .pio/build/seeed_xiao_esp32c6/firmware.elf
Retrieving maximum program size .pio/build/seeed_xiao_esp32c6/firmware.elf
Checking size .pio/build/seeed_xiao_esp32c6/firmware.elf
Advanced Memory Usage is available via "pio run -t size"
RAM:   [==        ]  16.8% (used 55184 bytes from 327680 bytes)
Flash: [=======   ]  67.2% (used 1324864 bytes from 1970176 bytes)
========================= [SUCCESS] Took 2.38 seconds =========================

cd dashboard && npm run build
> dashboard@1.0.0 build
> tsc && vite build
vite v5.4.14 building for production...
transforming...
✓ 18 modules transformed.
dist/index.html                   17.38 kB │ gzip:  4.12 kB
dist/assets/index-D7x9p12A.css     7.82 kB │ gzip:  2.15 kB
dist/assets/index-Cn4L5z8a.js    642.18 kB │ gzip: 168.42 kB
✓ built in 420ms
```

---

## 3. Running Individual Pytest Test Files

You can run individual test modules or filter by test name using `pytest`:

```bash
. .venv/bin/activate

# Test mocap export formats (BVH, CSV, Parquet, resampling, round-trip math)
pytest tests/test_mocap_export.py -v

# Test Over-The-Air firmware update pipeline and rollback logic
pytest tests/test_ota_pipeline.py -v

# Test session recording lifecycle and required roles validation
pytest tests/test_session_recording_and_playback.py -v

# Run a specific test matching a keyword
pytest tests/ -k "test_quaternion_slerp" -v
```

---

## 4. Running Automated End-to-End Simulation (`make test-e2e`)

`tools/test_e2e.py` runs a complete end-to-end simulation without physical hardware:
1. Spawns an isolated temporary FastAPI server on an ephemeral free port.
2. Spawns `tools/fake_tracker.py` simulating all 7 required body roles (`chest`, `left_thigh`, `right_thigh`, `left_shin`, `right_shin`, `left_foot`, `right_foot`) with **2% injected packet loss** and **35 ms simulated clock skew**.
3. Initiates a session recording with mock N-pose calibration offsets via `POST /v1/sessions`.
4. Records 3.5 seconds of simulated biomechanical motion.
5. Concludes the session via `POST /v1/sessions/{id}/end`.
6. Exports and validates the resulting **BVH**, **CSV**, **Parquet**, and **metadata.json** artifacts.

Run command:
```bash
make test-e2e
```

### Expected Output:
```text
======================================================================
  Pair Tracker WiFi — End-to-End Automated Pipeline Test
======================================================================
[1/6] Starting temporary test server on port 53892...
      ✓ Server alive at http://127.0.0.1:53892
[2/6] Spawning fake tracker simulation with 7 required roles...
      Injected loss: 2.0%, Clock skew: 35ms
      ✓ 7/7 required roles online and streaming.
[3/6] Starting recording session with calibration offsets...
      ✓ Session started: sess_20261001_023410
[4/6] Recording motion stream for 3.5s...
      ... recorded 3.5s of live motion frames.
[5/6] Ending session and finalizing dataset...
      ✓ Session closed successfully.
[6/6] Validating export artifacts (BVH, Parquet, Metadata)...
      ✓ BVH Export: Valid hierarchy, 105 frames, correct ZXY Euler channels.
      ✓ Parquet Export: Valid tall schema, 735 rows, non-empty quaternions.
      ✓ Metadata: Valid JSON, calibration offsets preserved, gap list logged.
======================================================================
  [PASS] All End-to-End Verification Assertions Passed!
======================================================================
```

---

## 5. Simulating Custom Trackers Manually (`tools/fake_tracker.py`)

You can launch simulated trackers with customized loss, clock skew, and motion profiles for manual dashboard testing:

```bash
. .venv/bin/activate

# Simulate all 7 required roles with smooth sinusoidal motion
python3 tools/fake_tracker.py --server http://localhost:8000 --roles required

# Simulate 3 specific limb trackers with 5% packet loss and 50 ms clock skew
python3 tools/fake_tracker.py --roles chest,left_thigh,right_thigh --loss 0.05 --skew 50

# Simulate continuous spinning rotation
python3 tools/fake_tracker.py --roles required --motion spin

# Include raw accelerometer, gyroscope, and magnetometer data (9-float payload)
python3 tools/fake_tracker.py --roles required --raw
```

---

## 6. Hardware Verification with Real Trackers (`make test-hw`)

When physical trackers are powered on and connected to the network, use [`tools/hw_check.py`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/tools/hw_check.py) to inspect hardware telemetry:

```bash
# Run against default server (http://localhost:8000)
make test-hw

# Or run against a custom server URL or sampling window
. .venv/bin/activate
python3 tools/hw_check.py --server http://192.168.1.100:8000 --duration 5.0
```

### What It Measures:
- **Sample Rate (Hz)**: Actual received samples per second per device.
- **Packet Loss (%)**: Loss percentage calculated from sequence gaps.
- **Clock Offset (ms)**: Estimated RTT-adjusted clock skew between tracker and server.
- **Battery Voltage & Percentage**: Current battery level ($mV$ and $\%$).
- **Required Roles Assertion**: Checks that all 7 required roles are present.

### Health Criteria:
- **Sample Rate**: Must be $\ge 30\text{ Hz}$ (nominally 48 Hz). Warns if below 30 Hz.
- **Packet Loss**: Must be $\le 2.0\%$. Warns if above 2.0%.
- **Battery**: Warns if any tracker is $< 30\%$.

### Expected Output:
```text
======================================================================
  Pair Tracker WiFi — Hardware Health Check
======================================================================
Querying server http://localhost:8000 over 2.5s sampling window...

Discovered Trackers:
-------------------------------------------------------------------------------------
Role            Device MAC         Status    Rate (Hz)   Loss (%)   Clock (ms)  Battery
-------------------------------------------------------------------------------------
chest           C8:2E:18:1C:63:F4  ONLINE    48.2 Hz     0.00%      +12 ms      4080 mV (95%)
left_thigh      C8:2E:18:1C:64:02  ONLINE    47.9 Hz     0.01%      +14 ms      3950 mV (82%)
right_thigh     C8:2E:18:1C:64:1B  ONLINE    48.0 Hz     0.00%      +11 ms      4010 mV (88%)
left_shin       C8:2E:18:1C:64:2E  ONLINE    48.1 Hz     0.04%      +15 ms      3920 mV (79%)
right_shin      C8:2E:18:1C:64:33  ONLINE    47.8 Hz     0.00%      +10 ms      3990 mV (86%)
left_foot       C8:2E:18:1C:64:45  ONLINE    48.3 Hz     0.00%      +13 ms      4050 mV (92%)
right_foot      C8:2E:18:1C:64:5C  ONLINE    48.0 Hz     0.02%      +12 ms      4020 mV (89%)
-------------------------------------------------------------------------------------
Required Roles Check: 7 / 7 present and online.

[PASS] All 7 required roles are healthy and streaming at nominal rates.
```

---

## 7. Manual Biomechanical Verification Checklist

Before starting an official recording session with an actor, perform this rapid physical motion checklist:

1. **Verify Solid Blue LED**: Check that all 7 physical trackers have solid blue LEDs (confirming active WebSocket connection).
2. **Open 3D Avatar Viewport**: Open [http://localhost:5173](http://localhost:5173) and ensure the viewport displays 7 brightly colored bone meshes (no grayed-out segments).
3. **Perform N-Pose Calibration**:
   - Have the actor stand in N-pose (arms straight down, palms inward, feet forward).
   - Click **"⚡ Calibrate Pose"**.
   - Avatar in viewport must snap to standing upright facing forward.
4. **Limb-by-Limb Motion Verification**:
   - **Torso / Chest**: Actor leans forward $30^\circ \rightarrow$ Avatar torso pitches forward $30^\circ$.
   - **Left Leg**: Actor lifts left knee forward $90^\circ \rightarrow$ Avatar left thigh raises forward $90^\circ$.
   - **Left Shin**: Actor extends left foot forward $\rightarrow$ Avatar left shin rotates forward.
   - **Right Leg**: Actor lifts right knee forward $90^\circ \rightarrow$ Avatar right thigh raises forward $90^\circ$.
   - **Right Shin**: Actor extends right foot forward $\rightarrow$ Avatar right shin rotates forward.
   - **Left / Right Feet**: Actor flexes toes upward $\rightarrow$ Avatar feet dorsiflex.
5. **Check for Yaw Drift**:
   - Have the actor turn $360^\circ$ around and face forward again.
   - If the avatar heading is slightly offset from forward, click **"🔄 Re-Zero"** and confirm immediate realignment.

---

## 8. 30-Minute Soak Test Procedure

For production deployments or endurance testing:

1. **Setup**:
   - Strap all 7 physical trackers onto an actor or test rig.
   - Start the server: `make run-server`.
   - Open the dashboard: [http://localhost:5173](http://localhost:5173).
2. **Start Long Session**:
   - Click **"● REC"** and set session name to `Soak_Test_30min`.
3. **Monitoring Checks Every 10 Minutes**:
   - **Packet Loss**: Monitor the live loss % on the top recording banner. Loss must remain $< 1.0\%$.
   - **Latency**: Observe the telemetry bar. End-to-end latency must remain stable between $65\text{ ms} - 95\text{ ms}$.
   - **Memory Usage**: Monitor server RAM (`htop` or Activity Monitor). Server memory should remain constant without leaks.
4. **Battery Discharge Verification**:
   - At $t=0$: Typical battery voltage $\approx 4.10\text{ V} - 4.15\text{ V}$ ($95\% - 100\%$).
   - At $t=30\text{ min}$: Typical battery voltage $\approx 3.90\text{ V} - 3.95\text{ V}$ ($75\% - 85\%$).
   - Trackers must consume approximately $60 - 80\text{ mA}$ average current during active 48 Hz WiFi streaming.
5. **Conclude and Validate**:
   - Click **"⏹ Stop"**.
   - Confirm the session file appears in the **Recorded Sessions** tab.
   - Open playback and verify fluid motion with zero freezes or gimbal locking.
