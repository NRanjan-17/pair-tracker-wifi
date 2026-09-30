# Pair Tracker WiFi

Autonomous, open-source, WiFi-based full-body motion capture (mocap) tracking system built on **Seeed Studio XIAO ESP32-C6** microcontrollers and **BNO085 9-DOF IMUs**.

The system provides end-to-end IMU orientation streaming at 48 Hz with sub-100 ms latency, automatic zero-configuration server discovery via mDNS (`pair.local`), a real-time Three.js 3D avatar dashboard, one-click N-pose calibration, Parquet session recording, Web Serial USB flashing, fail-safe dual-slot OTA firmware updates, and standard mocap export to BVH, CSV, and Parquet.

---

## Architecture Overview

```
 +-------------------------------------------------------------------------------+
 |                           TRACKERS (ESP32-C6 + BNO085)                        |
 |  - BNO085 Game Rotation Vector (48 Hz)                                        |
 |  - FreeRTOS dual-task architecture (Sensor Core 0, Network Core 0)            |
 |  - Synced server clock timestamps, 120-frame disconnect backfill buffer       |
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
 |  - Dual-slot OTA binary distribution & job state machine                      |
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
| **WiFi Streaming** | **Working** | 48 Hz binary packet batches, disconnect ring buffer backfill, clock sync |
| **Dashboard Live Avatar** | **Working** | Three.js visualizer, 75 ms jitter buffer, SLERP interpolation, latency meter |
| **N-Pose Calibration** | **Working** | Sensor-to-bone offset alignment, yaw drift Re-zero button |
| **Session Recording** | **Working** | Guarded by required roles check, columnar Parquet streaming storage |
| **Session Playback** | **Working** | Scrubber, play/pause, variable playback speeds (0.5x, 1x, 2x, 4x) |
| **Mocap Export** | **Working** | BVH (Biovision Hierarchy), raw calibrated CSV, resampled Parquet, metadata JSON |
| **USB Flashing & Provisioning** | **Working** | Browser Web Serial via `esptool-js`, token issuance, serial CLI setup |
| **OTA Firmware Updates** | **Working** | Dual-slot partitions, bootloader rollback protection, live dashboard progress |

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
├── firmware/                # ESP32-C6 Arduino / PlatformIO embedded firmware
│   ├── platformio.ini       # PlatformIO build configuration (pioarduino ESP32-C6 platform)
│   ├── partitions_two_ota.csv # Dual 1984 KB OTA application slot partition table
│   └── src/
│       ├── main.cpp         # FreeRTOS setup, sensor task (48 Hz), network task
│       ├── Hardware.h       # Pin definitions (I2C SDA=GPIO20, SCL=GPIO19, ADR=GPIO18, LED=GPIO15, ADC=GPIO0)
│       ├── IMUManager.cpp   # BNO085 initialization, SH2 report configuration, mount corrections
│       ├── Battery.h        # 1:2 voltage divider ADC reader (3.0V - 4.2V LiPo)
│       ├── TrackerNetwork.cpp # WiFi STA, mDNS discovery, binary WS streaming, OTA engine
│       ├── SerialCLI.cpp    # USB Serial provisioning commands (set ssid/pass/server/role/token)
│       ├── Roles.h          # Role enumeration and string mapping matching roles.yaml
│       └── Protocol.h       # Binary batch frame definitions matching server protocol
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
