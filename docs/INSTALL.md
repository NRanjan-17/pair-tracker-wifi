# Installation Guide — Pair Tracker WiFi

This guide provides step-by-step instructions to set up the complete Pair Tracker WiFi environment from scratch on **macOS**, **Linux**, and **Windows**.

---

## 1. Required System Tools

| Tool | Minimum Version | Verified Version | Purpose | Download Link |
|:---|:---:|:---:|:---|:---|
| **Git** | `2.0+` | `2.54.0` | Source code version control and cloning | [git-scm.com](https://git-scm.com/) |
| **Python** | `3.11+` | `3.14.7` | FastAPI server, PyArrow Parquet engine, simulator | [python.org/downloads](https://www.python.org/downloads/) |
| **Node.js** | `v18.0.0+` (LTS) | `v26.10.0` | Vite build system and Three.js frontend runtime | [nodejs.org](https://nodejs.org/) |
| **npm** | `9.0.0+` | `11.19.1` | Node package dependency manager | Included with Node.js |
| **PlatformIO Core** | `6.0.0+` | `6.2.0` | Embedded toolchain & ESP32-C6 firmware compiler | [platformio.org](https://platformio.org/) (`pip install platformio`) |
| **Google Chrome / Microsoft Edge** | Modern (100+) | Modern | Web Serial API access for in-browser USB tracker flashing | [google.com/chrome](https://www.google.com/chrome/) |
| **USB-C Cable** | USB 2.0+ Data | Tested | Physical programming and serial provisioning | Hardware data cable (not charge-only) |
| **VS Code** *(Optional)* | Modern | Tested | IDE with PlatformIO & Python extensions | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Docker** *(Optional)* | 20.10+ | — | Containerized backend server deployment | [docker.com](https://www.docker.com/) *(TODO: verify)* |

> [!IMPORTANT]
> **ESP32-C6 Platform Requirement:**
> The ESP32-C6 microcontroller is built on a RISC-V architecture requiring Arduino-ESP32 Core 3.x. Standard PlatformIO upstream `espressif32` lacks full ESP32-C6 support in older releases. As configured in [`firmware/platformio.ini`](../firmware/platformio.ini), this project utilizes the **pioarduino** release:
> `platform = https://github.com/pioarduino/platform-espressif32/releases/download/53.03.13/platform-espressif32.zip` with `framework-arduinoespressif32 @ 3.1.3`. PlatformIO automatically downloads and manages this package during the first compilation.

---

## 2. Dependencies & Libraries Tables

### 2.1 Python Server Dependencies ([requirements.txt](../requirements.txt))

| Package | Version Specifier | Installed Version | Purpose |
|:---|:---:|:---:|:---|
| `fastapi` | `>=0.115.0` | `0.142.1` | High-performance asynchronous REST & WebSocket API framework |
| `uvicorn` | `>=0.30.0` | `0.54.0` | Lightning-fast ASGI web server implementation |
| `pyarrow` | `>=17.0.0` | `25.0.1` | High-throughput columnar Parquet storage writer & reader |
| `pyyaml` | `>=6.0.2` | `6.0.3` | Parser for `roles.yaml` body role configuration |
| `zeroconf` | `>=0.132.0` | `0.151.5` | Multicast DNS (mDNS) responder advertising `pair.local` |
| `pytest` | `>=8.0.0` | `9.1.1` | Test framework for unit, integration, and E2E suites |
| `httpx` | `>=0.27.0` | `0.28.1` | Asynchronous HTTP client for testing and simulation |
| `websockets` | `>=13.0` | `17.1` | WebSocket client for fake tracker and stress test tools |
| `platformio` | `>=6.2.0` | `6.2.0` | CLI build system for compiling and flashing embedded firmware |
| `pyserial` | `>=3.5` | `3.5` | Serial port hardware enumeration for `tools/doctor.py` |

### 2.2 Dashboard Dependencies ([dashboard/package.json](../dashboard/package.json))

| Package | Version | Type | Purpose |
|:---|:---:|:---:|:---|
| `esptool-js` | `0.7.0` | Runtime | In-browser Web Serial bootloader and flash programmer |
| `three` | `0.170.0` | Runtime | WebGL 3D avatar scene graph, bones, and quaternion rotations |
| `@types/three` | `0.170.0` | Dev | TypeScript type declarations for Three.js objects |
| `typescript` | `5.9.3` | Dev | Static type analysis and compilation for dashboard source |
| `vite` | `6.4.3` | Dev | Next-generation frontend bundler, HMR server, and minifier |

### 2.3 Firmware Embedded Libraries ([firmware/platformio.ini](../firmware/platformio.ini))

| Library | Version Specifier | Resolved Version | Purpose |
|:---|:---:|:---:|:---|
| `Adafruit BNO08x` | `^1.2.5` | `1.2.7` | I2C sensor driver for Hillcrest/CEVA BNO085 9-DOF IMU |
| `ArduinoJson` | `^7.2.0` | `7.4.3` | Memory-efficient zero-copy JSON parsing & serialization |
| `WebSockets` | `^2.6.1` | `2.7.3` | High-frequency binary and text WebSocket client for ESP32 |
| `WiFi` | Built-in (3.1.3) | `3.1.3` | ESP32-C6 802.11 b/g/n Station mode network stack |
| `ESPmDNS` | Built-in (3.1.3) | `3.1.3` | mDNS resolver looking up `pair.local` on LAN |
| `HTTPClient` | Built-in (3.1.3) | `3.1.3` | HTTP stream client for binary OTA firmware downloads |
| `Update` | Built-in (3.1.3) | `3.1.3` | Dual-slot SPI NOR flash write & bootloader partition swap API |
| `Preferences` | Built-in (3.1.3) | `3.1.3` | Non-Volatile Storage (NVS) configuration persistence |
| `Wire` | Built-in (3.1.3) | `3.1.3` | Hardware I2C master driver configured at 400 kHz |

---

## 3. Step-by-Step Installation

### Step 1: Clone the Repository

#### macOS / Linux
```bash
git clone https://github.com/pair-ai/pair-tracker-wifi.git
cd pair-tracker-wifi
```

#### Windows (PowerShell) <!-- TODO: verify on Windows -->
```powershell
git clone https://github.com/pair-ai/pair-tracker-wifi.git
cd pair-tracker-wifi
```

---

### Step 2: Automated Installation (`make setup`)

If you have `make` installed, run the single setup command to initialize all components automatically:

```bash
make setup
```

This single command:
1. Creates a Python virtual environment in `.venv/`.
2. Installs all server and testing dependencies via `pip install -r requirements.txt`.
3. Installs all dashboard npm dependencies via `cd dashboard && npm install`.
4. Executes the initial firmware compilation via `pio run -d firmware`.

---

### Step 3: Manual Installation (Step-by-Step Alternative)

If you prefer installing components manually, or do not have `make` available:

#### 1. Set Up Python Virtual Environment

##### macOS
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

##### Linux
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

##### Windows (PowerShell) <!-- TODO: verify on Windows -->
```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

#### 2. Install Dashboard Dependencies
```bash
cd dashboard
npm install
cd ..
```

#### 3. Build Firmware
```bash
# Ensure virtualenv is activated so PlatformIO Core is available
pio run -d firmware
```
> [!NOTE]
> **Compilation Duration:**
> - **First Build:** Takes approximately **1 to 2 minutes** while PlatformIO downloads the ESP32-C6 toolchain (`toolchain-riscv32-esp`) and the `pioarduino` framework.
> - **Incremental Builds:** Complete in **2 to 5 seconds** (measured: ~2.37s on Apple Silicon).

---

## 4. Hardware Permissions & Serial Drivers

### macOS
- **Driver:** No third-party drivers are required. macOS includes native CDC ACM driver support for the ESP32-C6 native USB interface.
- **Port Naming:** Devices appear as `/dev/cu.usbmodem*` or `/dev/cu.wchusbserial*`.

### Linux (Ubuntu / Debian / Arch / Fedora) <!-- TODO: verify on Linux -->
1. Add your user account to the `dialout` group to permit non-root access to serial devices:
   ```bash
   sudo usermod -a -G dialout $USER
   ```
2. Install PlatformIO udev rules:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/develop/platformio/assets/system/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules
   sudo udevadm control --reload-rules
   sudo udevadm trigger
   ```
3. Log out and log back in for group changes to take effect.
4. **Port Naming:** Devices appear as `/dev/ttyACM0` or `/dev/ttyUSB0`.

### Windows 10 / 11 <!-- TODO: verify on Windows -->
- **Driver:** Windows 10/11 automatically installs the Microsoft USB Serial (CDC) driver when plugging in Seeed Studio XIAO ESP32-C6.
- If the device is marked with an exclamation mark in Device Manager, download the CP210x or CH340 driver depending on your USB-to-UART adapter.
- **Port Naming:** Devices appear as `COM3`, `COM4`, etc.

---

## 5. Local Network & Firewall Rules (Port 8000)

Trackers communicate with the server over local TCP/HTTP and WebSockets on port **8000**. Ensure incoming traffic on port 8000 is allowed through your firewall.

### macOS
1. Open **System Settings** → **Network** → **Firewall**.
2. If the firewall is active, allow Python (`.venv/bin/python3`) to accept incoming connections when prompted.

### Linux (`ufw`) <!-- TODO: verify on Linux -->
```bash
sudo ufw allow 8000/tcp comment 'Pair Tracker WiFi Server'
```

### Windows Firewall (PowerShell as Administrator) <!-- TODO: verify on Windows -->
```powershell
netsh advfirewall firewall add rule name="Pair Tracker Server" dir=in action=allow protocol=TCP localport=8000
```

---

## 6. Verification Step: `make doctor`

Run the diagnostic doctor tool to verify that all tools, libraries, virtual environment bindings, and port access are ready:

```bash
make doctor
```

### Expected Output

```
======================================================
       Pair Tracker WiFi - Environment Doctor       
======================================================

 [PASS] Git CLI
        git version 2.54.0 (Apple Git-157)
 [PASS] Python Interpreter (3.14.7)
        Location: /Users/nalinishranjan/Desktop/pair-tracker-wifi/.venv/bin/python3
 [PASS] Node.js
        v26.10.0 (Location: /opt/homebrew/bin/node)
 [PASS] npm
        v11.19.1 (Location: /opt/homebrew/bin/npm)
 [PASS] PlatformIO Core CLI
        PlatformIO Core, version 6.2.0 (Location: /Users/nalinishranjan/Desktop/pair-tracker-wifi/.venv/bin/pio)
 [PASS] Python Dependencies
        All 9 core packages imported successfully
 [PASS] Dashboard Dependencies
        Three.js, esptool-js, Vite, and TypeScript installed
 [PASS] USB Serial Hardware
        Found 1 port(s): /dev/cu.usbmodem1101 (USB JTAG/serial debug unit)
 [PASS] Server Port (8000)
        TCP port 8000 is free and ready for binding

------------------------------------------------------
 ✓ ALL CHECKS PASSED: System is ready for development & tracking.
```

If any check returns `[FAIL]`, follow the remediation command printed by the doctor tool. Once all checks pass, proceed to [docs/RUN.md](RUN.md).
