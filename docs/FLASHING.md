# Pair Tracker WiFi — Flashing & Provisioning Guide

This guide covers everything required to flash initial firmware onto the **Seeed Studio XIAO ESP32-C6**, provision WiFi credentials and body tracking roles, and verify proper device connection.

---

## 1. Overview of Provisioning Methods

There are two methods to flash and provision a tracker:

1. **Dashboard Web Serial Flasher (Recommended)**: An in-browser GUI powered by `esptool-js`. Flashes the binary partitions, registers the device with the server, sends serial provisioning commands, and confirms WiFi announcement in a single guided wizard.
2. **PlatformIO CLI (Fallback / Headless)**: Command-line flashing via `pio run -t upload` followed by provisioning over the serial monitor (`pio device monitor`).

---

## 2. Prerequisites & Preparation

### Hardware Requirements
- **Seeed Studio XIAO ESP32-C6** tracker unit.
- **USB-C Data Cable** (verify it is a data cable, not charge-only).
- Computer running macOS, Linux, or Windows with Google Chrome or Microsoft Edge (for Web Serial).

### Server Preparation
Ensure the server is running and firmware binaries are prepared:
```bash
# Terminal 1: Build firmware and copy binaries into server/firmware_bin
make firmware-bin

# Terminal 2: Start the server
make run-server
```
The server will serve:
- `GET /v1/firmware/manifest` (manifest of partitions, offsets, and checksums)
- `GET /v1/firmware/bin/{filename}` (binary chunks: `bootloader.bin`, `partitions.bin`, `boot_app0.bin`, `firmware.bin`)

---

## 3. Method A: Dashboard Web Serial Flasher (Recommended)

> [!IMPORTANT]
> **Browser & Localhost Requirement:**
> The Web Serial API is supported in **Google Chrome** and **Microsoft Edge** (version 89+). For security reasons, browsers only allow Web Serial access on `localhost` (e.g. `http://localhost:5173` or `http://localhost:8000`) or over an encrypted HTTPS connection. It will not work over insecure remote HTTP (e.g. `http://192.168.1.50:5173`).

### Step-by-Step Dashboard Wizard

1. **Open the Dashboard**:
   Navigate to [http://localhost:5173](http://localhost:5173) (or [http://localhost:8000](http://localhost:8000) if serving built assets).
2. **Navigate to the Flash Tab**:
   Click on the **"⚡ Flash & Provision"** tab in the top navigation bar.
3. **Fill in Provisioning Parameters**:
   - **Role**: Select the physical body placement for this tracker (e.g., `chest`, `left_thigh`, `right_foot`).
   - **WiFi SSID**: Enter your 2.4 GHz WiFi network name (both ESP32-C6 and ESP8266 support 2.4 GHz networks; 5 GHz networks are not supported).
   - **WiFi Password**: Enter your WiFi network passphrase.
   - **Server Host**: The IP address or hostname of your Pair server (defaults to `pair.local` or the server's local LAN IP e.g. `192.168.1.100`).
   - **Server Port**: Port `8000`.
   - **Device Token (Optional)**: Leave empty to auto-generate a secure token, or provide a specific token.
4. **Connect Tracker via USB Cable**:
   Plug the tracker board (Seeed XIAO ESP32-C6 or NodeMCU / ESP-12E) into your computer using a data cable.
5. **Click "Connect & Flash Tracker"**:
   A native browser device chooser modal will pop up. Select the device matching:
   - For ESP32-C6: `USB JTAG/serial debug unit` or `Seeed Studio XIAO ESP32C6` (Vendor ID: `0x303a` or `0x2886`).
   - For ESP-12E: `USB-Serial Controller` (CH340 `0x1a86`, CP210x `0x10c4`, or FTDI `0x0403`).
   - Click **Connect**.
6. **Watch the Automated Multi-Target Execution**:
   The flasher executes 6 automated steps:
   - **Step 1: Connecting via Web Serial**: Syncs with ROM bootloader, identifies the chip family (ESP32-C6 vs ESP8266 / ESP-12E; prompts user if ambiguous), and reads the hardware MAC address.
   - **Step 2: Registering Device**: Calls `POST /v1/devices/register` with the MAC address and role.
   - **Step 3: Downloading Target Binaries**:
     - *For ESP32-C6*: Fetches `/v1/firmware/manifest?hw=esp32c6` and downloads 4 partitions: `bootloader.bin` (0x0), `partitions.bin` (0x8000), `boot_app0.bin` (0xe000), and `firmware.bin` (0x10000).
     - *For ESP-12E*: Fetches `/v1/firmware/manifest?hw=esp12e` and downloads a single flat image `firmware.bin` (0x0).
   - **Step 4: Writing Flash**: Compresses and writes the partitions to SPI NOR flash with a live progress bar.
   - **Step 5: Serial Provisioning**: Performs a hardware reset, opens the serial CLI at **115,200 baud for ESP32-C6** or **9600 baud for ESP-12E**, sends the `set` commands (`ssid`, `pass`, `server`, `port`, `token`, `role`), and issues `reboot`.
   - **Step 6: WiFi Announce**: Prompts **"Switch ON the tracker"** (if powered by battery switch) and polls `GET /v1/devices` until the tracker announces.
7. **Success Confirmation**:
   The wizard displays a green success badge showing the tracker's MAC address, hardware model, assigned role, and online status. Disconnect the USB cable and label the tracker.

---

## 4. Method B: CLI Flashing (PlatformIO Fallback)

If you are running headless on a server, working over SSH, or prefer command-line tools:

### Step 1: Plug in the Tracker
Connect the XIAO ESP32-C6 via USB-C. Identify the serial port:
- **macOS**: `/dev/cu.usbmodem*`
- **Linux**: `/dev/ttyACM*` or `/dev/ttyUSB*`
- **Windows**: `COM3`, `COM4`, etc.

### Step 2: Build and Upload via PlatformIO

Run the upload command for your target environment:

**For Seeed Studio XIAO ESP32-C6 (Primary Target):**
```bash
. .venv/bin/activate
pio run -d firmware -e seeed_xiao_esp32c6 -t upload
```

**For ESP-12E / NodeMCU ESP8266 (Secondary Target):**
```bash
. .venv/bin/activate
pio run -d firmware -e esp12e -t upload
```
*(Upload speed is 115200 baud for maximum CH340 / CP2102 reliability).*

---

## 5. Serial Provisioning CLI Protocol

Once firmware is uploaded, the tracker runs an interactive line-oriented serial configuration interface (`\n` line endings):
- **ESP32-C6**: Operates at **115,200 baud** (persisted in NVS namespace `pair_cfg`).
- **ESP-12E**: Operates at **9600 baud** (persisted in LittleFS file `/pair_cfg.json`).

Open the serial monitor for your device:
```bash
# For ESP32-C6
pio device monitor -d firmware -e seeed_xiao_esp32c6 -b 115200

# For ESP-12E
pio device monitor -d firmware -e esp12e -b 9600
```

### Available Commands

| Command | Format / Example | Description |
|:---|:---|:---|
| `set ssid` | `set ssid MyHomeWiFi` | Sets 2.4 GHz WiFi SSID (up to 32 chars). |
| `set pass` | `set pass Secret1234` | Sets WiFi WPA2/WPA3 passphrase (up to 64 chars). |
| `set server` | `set server 192.168.1.100` | Sets Pair server IP or mDNS hostname (`pair.local`). |
| `set port` | `set port 8000` | Sets Pair server HTTP/WS port (default `8000`). |
| `set token` | `set token dev_sec_abc123` | Sets device authentication Bearer token. |
| `set role` | `set role chest` | Sets body role identifier (see table below). |
| `show` | `show` | Dumps current non-volatile settings from NVS / LittleFS. |
| `reboot` | `reboot` | Saves configuration and restarts the microcontroller. |

### Provisioning Example Session
```text
--- Terminal on /dev/cu.usbmodem1101 | 115200 8-N-1 ---
set ssid MyHomeWiFi
OK: ssid set to 'MyHomeWiFi'
set pass MySecretPass
OK: pass set
set server 192.168.1.150
OK: server set to '192.168.1.150'
set port 8000
OK: port set to 8000
set token c1b3a58e-0f4b-4c2f-b49d-a11223344556
OK: token set
set role chest
OK: role set to 'chest' (1)
show
--- Pair Tracker Configuration ---
Role: chest (1)
SSID: MyHomeWiFi
Password: [SET]
Server: 192.168.1.150:8000
Token: [SET]
-----------------------------------
reboot
Rebooting device...
```

---

## 6. Tracker Role Mapping Table

Body roles are defined in [`roles.yaml`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/roles.yaml) and encoded as a `uint8` identifier:

| ID | Role Identifier | Required for Session | Physical Placement & Sensor Orientation |
|:---:|:---|:---:|:---|
| `0` | `unassigned` | No | Default unconfigured state. |
| `1` | `chest` | **Yes** | Center of sternum, facing outward, USB port pointing down. |
| `2` | `left_shoulder` | No | Top outer edge of left clavicle / acromion. |
| `3` | `right_shoulder` | No | Top outer edge of right clavicle / acromion. |
| `4` | `left_upper_arm` | No | Lateral midpoint of left bicep / tricep. |
| `5` | `right_upper_arm` | No | Lateral midpoint of right bicep / tricep. |
| `6` | `left_elbow` | No | Outer lateral side of left elbow joint. |
| `7` | `right_elbow` | No | Outer lateral side of right elbow joint. |
| `8` | `left_forearm` | No | Posterior flat surface of left forearm (dorsal side). |
| `9` | `right_forearm` | No | Posterior flat surface of right forearm (dorsal side). |
| `10` | `left_hand` | No | Back of left hand (dorsal metacarpal area). |
| `11` | `right_hand` | No | Back of right hand (dorsal metacarpal area). |
| `12` | `left_thigh` | **Yes** | Front-lateral face of left quadriceps, 10 cm above knee. |
| `13` | `right_thigh` | **Yes** | Front-lateral face of right quadriceps, 10 cm above knee. |
| `14` | `left_shin` | **Yes** | Lateral side of left tibia / calf, 10 cm above ankle. |
| `15` | `right_shin` | **Yes** | Lateral side of right tibia / calf, 10 cm above ankle. |
| `16` | `left_foot` | **Yes** | Dorsum (top laces area) of left shoe/foot, facing forward. |
| `17` | `right_foot` | **Yes** | Dorsum (top laces area) of right shoe/foot, facing forward. |

> [!NOTE]
> To record a session (`POST /v1/sessions`), all **7 required roles** (`chest`, `left_thigh`, `right_thigh`, `left_shin`, `right_shin`, `left_foot`, `right_foot`) must be online.

---

## 7. First Power-On Checklist

Before strapping a tracker to an actor, perform this rapid physical checkout:

1. **Battery Voltage**: Connect LiPo battery and measure with multimeter or check serial output. Voltage must be $\ge 3.7\text{ V}$ (never below $3.0\text{ V}$).
2. **Power Switch**: Slide toggle switch to ON.
3. **LED Behavior**:
   - **LED OFF**: Initial boot and WiFi association in progress (1–3 seconds).
   - **LED SOLID ON**: Connected to WiFi, resolved server, and WebSocket `/v1/devices/{id}/stream` established.
   - **FAST BLINK (150 ms pulse)**: Identify command triggered from dashboard.
4. **Dashboard Check**:
   - Open [http://localhost:5173](http://localhost:5173).
   - Confirm tracker card appears in **Trackers** tab.
   - Verify battery percentage is reported accurately ($\ge 30\%$).
   - Verify loss % is $< 1\%$.
5. **Physical Labeling**:
   - Affix a visible label with the tracker's role name (e.g. `CHEST`, `L-THIGH`, `R-FOOT`) on both the top enclosure and elastic strap.

---

## 8. Over-The-Air (OTA) Updates

Once a tracker is flashed with initial firmware over USB, all subsequent firmware upgrades can be performed wirelessly over WiFi without physical access or cables.

Refer to [`docs/OTA.md`](file:///Users/nalinishranjan/Desktop/pair-tracker-wifi/docs/OTA.md) for full documentation on:
- Two-slot A/B partition layout (`partitions_two_ota.csv`).
- Failsafe bootloader rollback mechanism (`CONFIG_BOOTLOADER_APP_ROLLBACK_ENABLE`).
- Building releases with `make release VERSION=x.y.z`.
- Single-click dashboard updates (`Update` and `Update all (one at a time)`).
