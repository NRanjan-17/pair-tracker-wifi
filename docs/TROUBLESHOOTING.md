# Pair Tracker WiFi — Troubleshooting Guide

This guide provides symptom $\rightarrow$ cause $\rightarrow$ resolution steps for common issues encountered during installation, flashing, network discovery, hardware assembly, and live biomechanical tracking.

---

## 1. Quick Troubleshooting Reference Table

| Category | Symptom | Likely Cause | Primary Fix |
|:---|:---|:---|:---|
| **Install** | PlatformIO platform download fails | GitHub rate limit or network timeout on large pioarduino zip | Run `pio run` again or manually download the platform zip. |
| **Install** | Python version error during `make setup` | Python $< 3.11$ active in shell | Install Python 3.11 or 3.12 (`brew install python@3.11` / `apt install python3.11`). |
| **Install** | `npm install` fails with engine warnings | Node.js $< 18$ | Install Node.js LTS (v18 or v20). |
| **Install** | Serial port permission denied on Linux | User not in `dialout` group | Run `sudo usermod -a -G dialout $USER` and log out/in. |
| **Flashing** | Web Serial API unavailable in browser | Browser is not Chrome/Edge or opened over insecure remote HTTP | Use Chrome or Edge on `http://localhost:5173` or `http://localhost:8000`. |
| **Flashing** | esptool cannot sync with chip (`A fatal error occurred`) | USB cable is charge-only or chip needs manual bootloader mode | Hold BOOT button on XIAO, plug in cable, release BOOT; use data cable. |
| **Network** | Tracker fails to join WiFi (LED stays OFF) | WiFi network is 5 GHz only, or password typo | Connect to 2.4 GHz network; verify credentials with `set ssid` / `set pass`. |
| **Network** | `pair.local` does not resolve on Windows or Android | mDNS / Bonjour not running on client | Use server's local LAN IP (e.g. `192.168.1.100`) instead of `pair.local`. |
| **Network** | Tracker connects to WiFi but not server | Server firewall blocking port 8000 or AP Client Isolation enabled | Open port 8000 in firewall; disable AP Client Isolation on router. |
| **Hardware** | Firmware hangs with `Failed to find BNO085` | I2C address mismatch or loose wiring (ADR not HIGH) | Ensure ADR pin is connected to GPIO 18 (driven HIGH for address `0x4B`). |
| **Hardware** | Fast battery drain ($< 1.5\text{ hours}$) | Faulty 1S LiPo, shorted circuit, or continuous WiFi reconnect | Check battery capacity; verify current draw is $\sim 60-80\text{ mA}$ during stream. |
| **Avatar** | Avatar limbs move backwards or inverted | Tracker strapped upside down or uncalibrated | Mount tracker with USB facing downward; perform N-pose calibration. |
| **Avatar** | Avatar heading slowly drifts left or right (yaw drift) | Magnetic interference on BNO085 magnetometer | Click **"🔄 Re-Zero"** button on dashboard to immediately fix yaw heading. |
| **Avatar** | High packet loss ($> 2\%$) or jerky motion | 2.4 GHz channel congestion or weak WiFi signal | Move closer to router; switch router to an uncongested 2.4 GHz channel (1, 6, 11). |

---

## 2. Installation & Setup Issues

### PlatformIO Platform Download Fails or Hangs
- **Cause**: PlatformIO is downloading the custom `pioarduino/platform-espressif32` zip release (~150 MB) from GitHub. If the download is interrupted or throttled, PlatformIO can hang.
- **Fix**:
  1. Interrupt with `Ctrl+C`.
  2. Clear incomplete downloads:
     ```bash
     rm -rf ~/.platformio/.cache ~/.platformio/platforms/espressif32*
     ```
  3. Re-run with verbose output:
     ```bash
     cd firmware && pio run -v
     ```

### Python Version Mismatch
- **Symptom**: `ImportError`, syntax errors, or `Python 3.11+ required` when running `make doctor`.
- **Fix**: Verify your active Python version:
  ```bash
  python3 --version
  ```
  If Python is older than 3.11:
  - **macOS**: `brew install python@3.11 && python3.11 -m venv .venv`
  - **Linux (Debian/Ubuntu)**: `sudo apt install python3.11 python3.11-venv`
  - **Windows**: Download Python 3.11 from [python.org](https://www.python.org/downloads/) and enable "Add Python to PATH".

### Serial Port Permission Denied on Linux
- **Symptom**: `serial.serialutil.SerialException: [Errno 13] could not open port /dev/ttyACM0: [Errno 13] Permission denied`.
- **Fix**:
  ```bash
  sudo usermod -a -G dialout $USER
  ```
  Log out and log back into Linux, or reload group permissions:
  ```bash
  newgrp dialout
  ```

---

## 3. Flashing & Provisioning Issues

### Web Serial Not Supported / Disabled
- **Symptom**: Red warning in Flash & Provision page: `Web Serial API is not supported in this browser`.
- **Cause**:
  1. Browser is Firefox, Safari, or mobile browser (Web Serial is only supported in Chromium-based browsers: Chrome, Edge, Brave, Opera).
  2. Page accessed over remote HTTP (e.g. `http://192.168.1.50:5173`). Browsers enforce a strict security policy allowing Web Serial only on `localhost` or over secure `https://`.
- **Fix**: Open the dashboard in **Google Chrome** or **Microsoft Edge** at [http://localhost:5173](http://localhost:5173) or [http://localhost:8000](http://localhost:8000).

### ESP32-C6 Bootloader Sync Failure (`Failed to connect`)
- **Symptom**: Flasher displays `Timed out waiting for packet header` or `A fatal error occurred: Failed to connect to ESP32-C6`.
- **Cause**:
  1. The USB-C cable is a power-only charging cable without D+/D- data lines.
  2. Another application (such as `pio device monitor`, Arduino IDE, or a terminal program) is holding the serial port open.
  3. The ESP32-C6 is running a tight FreeRTOS loop and failed to enter ROM bootloader mode automatically.
- **Fix**:
  1. Verify the cable: unplug and verify that a serial port appears in `ls /dev/cu.*` (macOS) or `ls /dev/ttyACM*` (Linux).
  2. Close any open serial monitors or terminal windows.
  3. **Manual Bootloader Recovery**:
     - Locate the two tiny tactile buttons on the Seeed Studio XIAO ESP32-C6: **B** (Boot) and **R** (Reset).
     - Press and **HOLD the 'B' button**.
     - While holding 'B', tap the **'R' button** (or plug in the USB-C cable).
     - **Release the 'B' button**. The chip is now forced into ROM download mode.
     - Retry the flashing command.

### Unknown Role Error during Serial Provisioning
- **Symptom**: Serial monitor prints `Error: unknown role 'LeftThigh'`.
- **Cause**: Role names must exactly match the lowercase identifiers defined in [`roles.yaml`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/roles.yaml).
- **Fix**: Use exact lowercase names:
  ```text
  set role chest
  set role left_thigh
  set role right_thigh
  set role left_shin
  set role right_shin
  set role left_foot
  set role right_foot
  ```

---

## 4. WiFi & Network Connection Issues

### Tracker LED Stays Off / Tracker Does Not Connect to WiFi
- **Symptom**: Tracker powers on, but the blue LED remains off indefinitely.
- **Cause**:
  1. Tracker is configured to connect to a **5 GHz** WiFi network. The ESP32-C6 radio supports **2.4 GHz only** (802.11 b/g/n/ax).
  2. WiFi SSID or password was entered incorrectly.
  3. Router uses enterprise authentication (802.1X EAP), which is unsupported.
- **Fix**:
  1. Ensure your WiFi access point broadcasts a distinct 2.4 GHz SSID.
  2. Connect tracker over USB and check serial debug log:
     ```bash
     pio device monitor -d firmware -b 115200
     ```
  3. Re-enter credentials using `set ssid <name>` and `set pass <password>`, then type `reboot`.

### `pair.local` Hostname Does Not Resolve
- **Symptom**: Tracker logs `Failed to resolve server: pair.local` or browser cannot open `http://pair.local:8000`.
- **Cause**: mDNS (Multicast DNS / Bonjour) is not enabled on your router or client OS. Windows (without Bonjour) and Android lack universal mDNS resolution.
- **Fix**:
  1. Find your server machine's local LAN IP:
     - **macOS**: `ipconfig getifaddr en0` (or `en1`)
     - **Linux**: `hostname -I | awk '{print $1}'`
     - **Windows**: `ipconfig` (IPv4 Address)
  2. Provision the tracker with the explicit IP address instead of `pair.local`:
     ```text
     set server 192.168.1.150
     set port 8000
     reboot
     ```

### Tracker Connects to WiFi but Does Not Appear on Dashboard
- **Cause**:
  1. **Firewall Blocking Port 8000**: The host computer's firewall is dropping incoming TCP packets from the tracker.
  2. **AP Client Isolation**: Many guest WiFi networks isolate wireless clients from communicating with local network servers.
  3. **Token Authentication Mismatch**: The tracker's saved token does not match the server's registered token.
- **Fix**:
  1. Open port 8000 in your computer's firewall:
     - **macOS**: System Settings $\rightarrow$ Network $\rightarrow$ Firewall $\rightarrow$ Options (allow python/uvicorn).
     - **Linux**: `sudo ufw allow 8000/tcp`
     - **Windows**: Add an inbound rule in Windows Defender Firewall for TCP port 8000.
  2. Disable "AP Isolation" or "Guest Mode" in your WiFi router settings.
  3. Verify device registration: Open [http://localhost:8000/v1/devices](http://localhost:8000/v1/devices) in your browser to inspect registered tokens.

---

## 5. Hardware & Sensor Issues

### BNO085 IMU Not Detected (`Failed to find BNO085`)
- **Symptom**: Serial output displays:
  ```text
  [IMU] Initializing BNO085 on I2C address 0x4B...
  [IMU] ERROR: BNO085 not detected at address 0x4B!
  ```
- **Cause**:
  1. **I2C Address Pin (ADR) Miswired**: The BNO085 breakout defaults to address `0x4A` unless its ADR/DI pin is pulled HIGH to 3.3V (which sets it to address `0x4B`). In Pair Tracker firmware, `IMUManager::begin()` configures GPIO 18 (D10) as `OUTPUT HIGH` to select `0x4B`. If the ADR pin is floating, disconnected, or grounded, the sensor will respond at `0x4A` instead of `0x4B`.
  2. **Loose SDA or SCL jumper wire**: Bad solder joint or intermittent breadboard wire.
  3. **Missing Power / Ground**: Sensor is unpowered.
- **Fix**:
  1. Verify the wiring against [`docs/HARDWARE.md`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/docs/HARDWARE.md):
     - XIAO GPIO 18 (D10) $\rightarrow$ BNO085 ADR (DI) pin.
     - XIAO GPIO 20 (D9) $\rightarrow$ BNO085 SDA.
     - XIAO GPIO 19 (D8) $\rightarrow$ BNO085 SCL.
     - XIAO 3V3 $\rightarrow$ BNO085 VCC.
     - XIAO GND $\rightarrow$ BNO085 GND.
  2. Use a multimeter to measure 3.3V at the BNO085 VCC and ADR pins.

### Rapid Battery Depletion ($< 1.5\text{ hours}$)
- **Cause**:
  1. Degraded LiPo battery capacity or incorrect nominal rating ($< 350\text{ mAh}$).
  2. High packet retransmission rate due to extremely poor WiFi signal (causes ESP32 radio to operate at continuous maximum TX power of +20 dBm).
- **Fix**:
  1. Ensure you are using a healthy $\ge 400\text{ mAh}$ 1S 3.7V LiPo cell.
  2. Verify that packet loss is $< 1\%$. An uncongested WiFi link allows the ESP32-C6 modem power management to operate efficiently.

---

## 6. Biomechanical Tracking & 3D Avatar Issues

### Avatar Limbs Move in Reverse or Twist Unnaturally
- **Cause**:
  1. Tracker is mounted upside down or backward on the limb.
  2. Actor did not stand in the specified neutral **N-pose** when clicking **"Calibrate Pose"**.
- **Fix**:
  1. Ensure physical tracker mounting orientation matches specification:
     - **Chest**: Center of chest, USB-C port pointing straight downward.
     - **Thighs / Shins**: Strapped to front/outer face of leg, USB-C port pointing downward.
     - **Feet**: Strapped to dorsum of shoe, USB-C port pointing toward the ankle.
  2. Have the actor assume the standard N-pose: standing straight, arms hanging down, palms facing inward against the thighs, feet pointing forward.
  3. Click **"⚡ Calibrate Pose"** in the dashboard viewport header.

### Avatar Heading Gradually Drifts (Yaw Drift)
- **Cause**: MEMS magnetometers and gyroscopes naturally accumulate heading drift in indoor environments due to steel rebars in floors, computer power supplies, and magnetic anomalies.
- **Fix**:
  - Have the actor face forward and click the **"🔄 Re-Zero"** button on the dashboard.
  - This immediately extracts the yaw discrepancy from the chest tracker and applies a counter-rotation offset, snapping the avatar forward without resetting your individual limb calibrations.

### Avatar Jitters or Freezes Periodically
- **Cause**: WiFi sequence gaps or network jitter exceeding the client-side jitter buffer window (75 ms).
- **Fix**:
  1. Check the telemetry bar at the bottom of the dashboard:
     - If **End-to-End Latency** is yellow or red ($> 150\text{ ms}$), the local WiFi network has latency spikes.
     - If **Avg Loss** is $> 1.0\%$, move the WiFi router closer to the capture area or switch to an unoccupied 2.4 GHz channel (channels 1, 6, or 11).
  2. Check for interference from Bluetooth devices or microwave ovens operating on 2.4 GHz.

---

## 7. ESP-12E / ESP8266 Specific Troubleshooting

### Flashing Fails with `Invalid head of packet (0xE0)`
- **Symptom**: `esptool.py` fails during upload at 921,600 baud with packet errors.
- **Cause**: Cheap CH340 or CP2102 USB-to-UART bridge chips on NodeMCU/ESP-12E boards cannot sustain 921,600 baud without bit corruption.
- **Fix**: Flash at 115,200 baud (configured in `platformio.ini` as `upload_speed = 115200`). Both the Web Serial flasher and PlatformIO upload use 115,200 baud for ESP-12E.

### Garbled Characters in Serial Monitor
- **Symptom**: Serial monitor displays `?` or gibberish.
- **Cause**: Baud rate mismatch. The ESP-12E runtime Serial CLI runs at **9600 bps** (as specified on board silkscreen), while the ESP32-C6 runs at 115,200 bps.
- **Fix**: Open the serial monitor at 9600 baud:
  ```bash
  pio device monitor -d firmware -e esp12e -b 9600
  ```

### ESP-12E Boot Loop / Fails to Boot into Firmware
- **Cause**: Hardware strapping pin violation during reset:
  - If **GPIO 15** is pulled HIGH externally, the ESP8266 attempts an SDIO boot and hangs. GPIO 15 must be pulled LOW to GND.
  - If **GPIO 0** or **GPIO 2** are pulled LOW externally during reset, the ESP8266 enters UART download mode.
- **Fix**: Ensure strapping pins are not pulled to conflicting logic levels during power-on. BNO085 lines should be wired to GPIO 4 (SDA) and GPIO 5 (SCL), leaving GPIO 0, 2, and 15 free of conflicting pull-ups/pull-downs.

### High Dropped Sample Count on ESP-12E Heartbeat
- **Symptom**: Dashboard card shows increasing `dropped_samples` for ESP-12E tracker.
- **Cause**: The ESP8266 has limited free heap (~45 KB). If the WiFi network suffers transient disconnection, the 120-sample ring buffer fills up and drops oldest frames to prevent out-of-memory kernel panics.
- **Fix**:
  1. Improve WiFi signal strength or reduce router congestion.
  2. Keep WebSocket stream loop non-blocking (cooperative scheduler handles this automatically).

