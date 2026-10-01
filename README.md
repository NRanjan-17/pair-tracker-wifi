# Eidon Tracker WiFi

Autonomous, open-source, WiFi-based full-body motion capture (mocap) tracking system supporting **Seeed Studio XIAO ESP32-C6** (primary target) and **ESP-12E / NodeMCU ESP8266** (secondary target) microcontrollers with **BNO085 9-DOF IMUs**.

The system provides end-to-end IMU orientation streaming at 48 Hz with sub-100 ms latency, automatic zero-configuration server discovery via mDNS (`pair.local`), a modern workstation 3D avatar dashboard, one-click N-pose calibration, Parquet session recording, in-browser Web Serial USB flashing with auto chip detection, fail-safe dual-slot OTA firmware updates with USB battery override, paired device lifecycle management, and standard mocap export to BVH, CSV, and Parquet.

---

## Key Features

- **Multi-Target Hardware**: First-class support for both ESP32-C6 (FreeRTOS dual-task, NVS) and ESP-12E / NodeMCU ESP8266 (160 MHz cooperative loop, LittleFS).
- **Zero-Config Streaming**: Automatic mDNS discovery (`pair.local`), 48 Hz binary packet batches over WebSockets, clock synchronization, and disconnect ring-buffer backfill.
- **Professional Workstation Dashboard**: Dark-mode Linear-aesthetic UI featuring segmented pill filters (All, Core, Arms, Legs, Online), real-time loss and heap telemetry, and live streaming console drawer.
- **Real-Time 3D Biomechanical Visualizer**: Three.js kinematic avatar with 75 ms jitter buffer and SLERP interpolation, bone-aligned tracker indicators, N-pose calibration, and yaw drift re-zeroing.
- **Web Serial USB Flashing**: In-browser firmware flashing via Web Serial (`esptool-js`) with automatic chip detection (ESP8266, ESP32-C6, ESP32-S3), custom WiFi credential provisioning, and role assignment.
- **Over-The-Air (OTA) Updates**: Hardware-aware binary distribution with automatic manifest synthesis, progress telemetry, dual-slot rollback protection, and **USB low-battery override** for benchtop testing.
- **Clean ESP8266 Hardware Reboot**: Boot strapping pin release (`GPIO0`, `GPIO2`, `GPIO15`) and clean connection teardown prior to hardware reset to prevent ESP-12E bootloader hangs.
- **Paired Devices Management**: Dedicated modal to inspect all registered trackers, unpair individual devices, or perform one-click cleanup of offline/stale devices from the SQLite database.
- **High-Throughput Recording & Export**: Zero-copy PyArrow Parquet recording, session playback with scrubbing and variable speeds, and export to BVH (ZXY Euler), calibrated CSV, resampled Parquet, and session metadata JSON.

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
 |  - SQLite device registry & metadata store                                    |
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
 |  - Paired Devices registry modal  |                       |
 |  - OTA triggers & USB override    |                       | GET /v1/sessions/{id}/export
 +-----------------------------------+                       v
                                         +---------------------------------------+
                                         |              MOCAP EXPORT             |
                                         |  - BVH (ZXY Euler, skeleton offsets)  |
                                         |  - Calibrated CSV (x, y, z, w quats)  |
                                         |  - Columnar Parquet (30 Hz resampled) |
                                         |  - Complete session metadata JSON     |
                                         +---------------------------------------+
```

---

## Hardware Target Matrix

| Feature | ESP32-C6 (Primary) | ESP-12E / NodeMCU ESP8266 (Secondary) |
|:---|:---|:---|
| **CPU Architecture** | 32-bit RISC-V @ 160 MHz | 32-bit Xtensa LX106 @ 160 MHz |
| **Concurrency Model** | FreeRTOS Dual-Task (Sensor + Comms) | Non-blocking cooperative polling loop |
| **Configuration Storage** | Non-Volatile Storage (NVS) | LittleFS Flash File System |
| **Serial CLI Baud** | 115,200 baud | 9,600 baud (ESP-12E crystal compatibility) |
| **OTA Mechanism** | Dual 1984 KB partitions (`app0`/`app1`) | Single flash binary replace + clean strapping reboot |
| **I2C Pinout** | SDA: GPIO21, SCL: GPIO22 | SDA: GPIO4 (D2), SCL: GPIO5 (D1) |
| **Reboot Strapping Pins** | Internal ROM reset | Pin release (`GPIO0`/`GPIO2` pull-up, `GPIO15` pull-down) |

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
All 7 required body tracker cards will switch to **ONLINE** (green), and the 3D avatar on screen will begin oscillating smoothly driven by live simulated quaternions.

---

## Building Firmware

Build embedded binaries for either hardware platform using PlatformIO:

```bash
# Build firmware for Seeed Studio XIAO ESP32-C6
pio run -d firmware -e esp32c6

# Build firmware for ESP-12E / NodeMCU ESP8266
pio run -d firmware -e esp12e

# Package a versioned release manifest for OTA distribution
python3 tools/release_firmware.py 1.0.2
```

---

## Repository Layout

```
eidon-tracker-wifi/
├── Makefile                 # Top-level workflow targets (setup, doctor, test, run-*, pio-build)
├── README.md                # Project overview and quick start guide
├── LICENSE                  # MIT License
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
│       └── hal/             # Hardware Abstraction Layer (IMUBus I2C/SPI, LED, Battery, Storage, OTA)
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
│       ├── style.css        # Linear-inspired dark-mode workstation stylesheet
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

Eidon Tracker WiFi is open-source software licensed under the MIT License. See [LICENSE](LICENSE) for details.
