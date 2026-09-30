# Pair Tracker WiFi

Autonomous, open-source, WiFi-based full-body motion capture (mocap) tracking system supporting **Seeed Studio XIAO ESP32-C6** (primary target) and **ESP-12E / NodeMCU ESP8266** (secondary target) microcontrollers with **BNO085 9-DOF IMUs**.

The system provides end-to-end IMU orientation streaming at 48 Hz with sub-100 ms latency, automatic zero-configuration server discovery via mDNS (`pair.local`), a real-time Three.js 3D avatar dashboard, one-click N-pose calibration, Parquet session recording, Web Serial USB flashing with auto chip detection, fail-safe dual-slot OTA firmware updates, and standard mocap export to BVH, CSV, and Parquet.

---

## Architecture Overview

```
 +-------------------------------------------------------------------------------+
 |                        TRACKERS (ESP32-C6 / ESP-12E + BNO085)                 |
 |  - BNO085 Game Rotation Vector (48 Hz) via I2C (100-400 kHz) or SPI           |
 |  - Dual-core FreeRTOS (ESP32-C6) or non-blocking cooperative loop (ESP-12E)  |
 |  - Synced server clock timestamps, disconnect backfill ring buffer            |
 +---------------------------------------+---------------------------------------+
                                         |
                                         | 2.4 GHz WiFi (Station Mode)
                                         | Binary WebSocket stream (LE, 48 Hz batches)
                                         | JSON control, time sync, and heartbeats
                                         v
 +-------------------------------------------------------------------------------+
 |                           LOCAL SERVER (FastAPI + Python)                     |
 |  - mDNS announcement (`pair.local`)                                           |
 |  - High-performance WebSocket binary ingest & sample unbatching               |
 |  - Sequence gap detection & per-device packet loss tracking                   |
 |  - Multi-target OTA binary distribution & job state machine (esp32c6, esp12e) |
 +-------------------+---------------------------------------+-------------------+
                     |                                       |
                     | WebSocket fan-out                     | Parquet writer
                     v                                       v
 +-----------------------------------+   +---------------------------------------+
 |     DASHBOARD (Vite + Three.js)   |   |           RECORDING & STORAGE         |
 |  - 3D Biomechanical Avatar Rig    |   |  - Zero-copy PyArrow Parquet writer   |
 |  - 75 ms Jitter Buffer + SLERP    |   |  - Sessions SQLite metadata DB        |
 |  - N-pose calibration & Re-zero   |   |  - Gap accounting & device telemetry  |
 |  - Web Serial flasher & provision |   +-------------------+-------------------+
 |  - OTA firmware update triggers   |                       |
 +-----------------------------------+                       | GET /v1/sessions/{id}/export
                                                             v
                                         +---------------------------------------+
                                         |              MOCAP EXPORT             |
                                         |  - BVH (ZXY Euler, skeleton offsets)  |
                                         |  - Calibrated CSV (x, y, z, w quats)  |
                                         |  - Columnar Parquet (30 Hz resampled) |
                                         |  - Complete session metadata JSON     |
                                         +---------------------------------------+
```

---

## Project Status

| Feature | Status | Notes |
|:---|:---:|:---|
| **Primary Target (ESP32-C6)** | **Working** | Full FreeRTOS dual-task, NVS config, 115200 baud Serial CLI, 4-partition OTA |
| **Secondary Target (ESP-12E)** | **Supported** | 160 MHz single-loop, LittleFS config, 9600 baud Serial CLI, single-bin OTA (`TODO: verify physical sensor stream`) |
| **WiFi Streaming** | **Working** | 48 Hz binary packet batches, disconnect ring buffer backfill, clock sync |
| **Dashboard Live Avatar** | **Working** | Three.js visualizer, 75 ms jitter buffer, SLERP interpolation, hardware badge & heap display |
| **N-Pose Calibration** | **Working** | Sensor-to-bone offset alignment, yaw drift Re-zero button |
| **Session Recording** | **Working** | Guarded by required roles check, columnar Parquet streaming storage |
| **Session Playback** | **Working** | Scrubber, play/pause, variable playback speeds (0.5x, 1x, 2x, 4x) |
| **Mocap Export** | **Working** | BVH (Biovision Hierarchy), raw calibrated CSV, resampled Parquet, metadata JSON |
| **USB Flashing & Provisioning** | **Working** | Web Serial via `esptool-js` with automatic chip detection (ESP32-C6 vs ESP8266) |
| **OTA Firmware Updates** | **Working** | Hardware-aware release distribution under `server/firmware_bin/<hw>/<version>/` |
| **IMU Bus Options** | **Working** | Build flag `-DIMU_BUS=1` (I2C) or `-DIMU_BUS=2` (SPI, `TODO: verify on physical hardware`) |

---

## Quick Start (No Hardware Required)

Clone the repository and see a simulated 7-tracker avatar moving on screen in under 2 minutes:

### 1. Clone & Setup Environment
```bash
git clone https://github.com/pair-ai/pair-tracker-wifi.git
cd pair-tracker-wifi
make setup
```

### 2. Verify Your Toolchain
```bash
make doctor
```

### 3. Start the Server
```bash
make run-server
```
Open **[http://localhost:8000](http://localhost:8000)** in Google Chrome or Microsoft Edge.

### 4. Run the Fake Tracker Simulation
In a second terminal window, run:
```bash
make run-fake
```
Look at the dashboard: all 7 required body tracker cards will switch to **ONLINE** (green), and the 3D avatar on screen will begin oscillating smoothly driven by live quaternions.

---

## Repository Layout

```
pair-tracker-wifi/
├── Makefile                 # Top-level workflow targets (setup, doctor, test, run-*, pio-build)
├── README.md                # Project overview and quick start guide
├── requirements.txt         # Python server and toolchain dependencies
├── pyproject.toml           # Pytest test configuration
├── roles.yaml               # Body tracking roles and required session role constraints
├── firmware/                # Embedded C++ firmware for ESP32-C6 & ESP-12E
│   ├── platformio.ini       # PlatformIO build configuration (esp32c6 & esp12e environments)
│   ├── partitions_two_ota.csv # Dual 1984 KB OTA application slot partition table (ESP32-C6)
│   └── src/
│       ├── main.cpp         # Unified entry point (FreeRTOS for C6, cooperative loop for ESP-12E)
│       ├── boards/          # Pin assignments & hardware specs (esp32c6.h, esp12e.h, board.h)
│       ├── core/            # Protocol, RingBuffer, Config, ClockSync, CommandParser, SerialCLI
│       └── hal/             # Hardware Abstraction Layer (IMUBus I2C/SPI, LED, Battery, Storage, OTA, Scheduler)
├── server/                  # FastAPI backend server
│   ├── main.py              # REST API & WebSocket endpoints (/stream, /sessions, /firmware, /ota)
│   ├── tracker_manager.py   # Connection state, clock sync, packet loss accounting, OTA jobs
│   ├── mocap_exporter.py    # BVH, CSV, and Parquet motion capture resampler and exporter
│   ├── parquet_writer.py    # Zero-copy PyArrow recording writer
│   ├── protocol.py          # Binary frame decoder and frame structure validators
│   ├── roles.py             # YAML roles loader and required roles validator
│   ├── db.py                # SQLite database interface (devices, sessions, metadata)
│   ├── config.py            # Environment configuration paths and network defaults
│   └── firmware_bin/        # Staged firmware binaries and versioned release manifests
├── dashboard/               # Frontend single-page application
│   ├── package.json         # Dashboard dependencies (three, esptool-js, vite, typescript)
│   ├── index.html           # Dashboard UI layout (Trackers, Flash & Provision, Sessions)
│   ├── dist/                # Pre-built production frontend assets served by FastAPI
│   └── src/
│       ├── main.ts          # Main dashboard coordinator and WebSocket event dispatcher
│       ├── three_view.ts    # Three.js 3D scene, lighting, camera controls, coordinate mapper
│       ├── avatar.ts        # Biomechanical avatar hierarchy, bone math, pose calibration
│       ├── skeleton.json    # Data-driven skeleton topology, bone lengths, and initial offsets
│       ├── jitter_buffer.ts # 50-100 ms jitter buffer with spherical linear interpolation (SLERP)
│       ├── playback.ts      # Session scrubber, playback controller, variable speeds
│       └── flasher.ts       # Web Serial esptool-js USB flasher and automatic provisioning
├── tools/                   # Developer and hardware utilities
│   ├── doctor.py            # Environment prerequisite and toolchain diagnostic validator
│   ├── fake_tracker.py      # Multi-tracker simulator (loss, clock skew, disconnect backfill, OTA)
│   ├── hw_check.py          # Live hardware validation script (sample rate, loss, clock offset)
│   ├── test_e2e.py          # Automated end-to-end 7-tracker simulation and mocap export test
│   └── release_firmware.py  # Firmware release packager and manifest generator
├── tests/                   # Automated pytest validation test suites
│   ├── test_avatar_acceptance.py          # Coordinate math, slerp, calibration formula tests
│   ├── test_commands_and_multidevice.py   # Multi-device WebSocket ingest and command tests
│   ├── test_dashboard_live.py             # Headless live dashboard fan-out tests
│   ├── test_flash_and_provision.py        # Web Serial API endpoints and registration tests
│   ├── test_mocap_export.py               # BVH roundtrip, slerp resampling, gap detection tests
│   ├── test_ota_pipeline.py               # OTA download, authentication, rollback recovery tests
│   ├── test_server.py                     # Protocol decoding and SQLite schema tests
│   └── test_session_recording_and_playback.py # Recording and Parquet streaming tests
└── docs/                    # Technical documentation
    ├── INSTALL.md           # Step-by-step installation instructions for macOS, Linux, Windows
    ├── RUN.md               # Complete operational guide from startup to mocap export
    ├── HARDWARE.md          # Bill of materials, wiring tables, schematic diagrams, battery safety
    ├── FLASHING.md          # Web Serial USB flashing, PlatformIO CLI, provisioning commands
    ├── DASHBOARD.md         # UI reference, N-pose calibration posture, Re-zero, visualizer limits
    ├── TESTING.md           # Testing guide (make test, test-e2e, test-hw, manual checklist)
    ├── TROUBLESHOOTING.md   # Comprehensive symptom -> cause -> fix resolution table
    ├── PROTOCOL.md          # Wire-level binary & JSON communication protocol specification
    └── OTA.md               # Dual-slot OTA partition table, bootloader rollback, and release guide
```

---

## Documentation Index

- **[Installation Guide (docs/INSTALL.md)](docs/INSTALL.md)** — Complete step-by-step setup for macOS, Linux, and Windows.
- **[Operation & Running Guide (docs/RUN.md)](docs/RUN.md)** — Starting the system, running simulations, recording, and exporting.
- **[Hardware & Wiring Guide (docs/HARDWARE.md)](docs/HARDWARE.md)** — Pinout tables, wiring diagrams, battery monitoring, and enclosure assembly.
- **[Flashing & Provisioning Guide (docs/FLASHING.md)](docs/FLASHING.md)** — Web Serial flashing, CLI upload, role assignments, and serial commands.
- **[Dashboard Reference (docs/DASHBOARD.md)](docs/DASHBOARD.md)** — 3D avatar visualizer, N-pose calibration guide, and export options.
- **[Testing & Validation (docs/TESTING.md)](docs/TESTING.md)** — Unit tests, end-to-end pipeline verification, hardware health check, and soak testing.
- **[Troubleshooting Guide (docs/TROUBLESHOOTING.md)](docs/TROUBLESHOOTING.md)** — Diagnostic solutions for WiFi, Web Serial, IMU, and drift issues.
- **[Protocol Specification (docs/PROTOCOL.md)](docs/PROTOCOL.md)** — Binary frame schemas, JSON control commands, and clock synchronization.
- **[OTA Firmware Updates (docs/OTA.md)](docs/OTA.md)** — Dual-slot partition table layout, bootloader rollback, and wireless update verification.

---

## License

Eidon Tracker WiFi is open-source software licensed under the MIT License. See `LICENSE` for details.
