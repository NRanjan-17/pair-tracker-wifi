# Eidon Tracker WiFi

Autonomous WiFi-based IMU body tracking system featuring:
1. **ESP32-C6 Firmware** (Seeed Studio XIAO ESP32-C6 + BNO085 over I2C).
2. **Local High-Performance API & Backend** (FastAPI, WebSockets, SQLite, PyArrow Parquet, Zeroconf mDNS).
3. **Fake Tracker Simulator** (`tools/fake_tracker.py`) with configurable loss, skew, and ring buffer disconnect backfill.

---

## Architecture Overview

```
                      +-----------------------------+
                      |   ESP32-C6 Tracker Nodes    |
                      |  - BNO085 48Hz IMU          |
                      |  - FreeRTOS Tasks           |
                      |  - WiFi Station Mode        |
                      +--------------+--------------+
                                     |
                                     | Binary WS stream (LE, 48Hz)
                                     | Control JSON / Heartbeat
                                     v
                      +-----------------------------+
                      |       Local Server          |
                      |  - mDNS: eidon.local        |
                      |  - REST & WebSocket Ingest  |
                      |  - Loss & Gap Accounting    |
                      |  - Live Fan-out (/dashboard)|
                      |  - Parquet Export (PyArrow) |
                      +-----------------------------+
```

---

## Quick Start

### 1. Install Dependencies
```bash
make install
```

### 2. Run Test Suite
```bash
make test
```

### 3. Start Local Server
```bash
make run-server
```
Visit http://localhost:8000 for the real-time status dashboard and session management.

### 4. Run Fake Tracker Simulation
Simulate the required body tracker set streaming in real-time:
```bash
make run-fake
```
Or customize options:
```bash
python3 tools/fake_tracker.py --server http://localhost:8000 --roles required --loss 0.02 --raw
```

---

## Documentation
See [docs/PROTOCOL.md](docs/PROTOCOL.md) for complete details on:
- Binary frame layouts & flags
- JSON control & clock synchronization
- REST endpoints and error codes
- Parquet storage schema
