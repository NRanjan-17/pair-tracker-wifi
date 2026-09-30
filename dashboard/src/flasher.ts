import { ESPLoader, Transport } from 'esptool-js';

export interface FlashConfig {
  role: string;
  ssid: string;
  password: string;
  serverHost: string;
  serverPort: number;
  token?: string;
  adminToken?: string;
}

export interface FlasherCallbacks {
  onStepChange: (step: number, stepName: string) => void;
  onProgress: (statusText: string, percent: number) => void;
  onLog: (text: string) => void;
  onSwitchOnPrompt: (mac: string) => void;
  onSuccess: (mac: string, role: string) => void;
  onError: (err: Error) => void;
}

export class TrackerFlasher {
  private callbacks: FlasherCallbacks;
  private isCancelled = false;

  constructor(callbacks: FlasherCallbacks) {
    this.callbacks = callbacks;
  }

  public async start(config: FlashConfig) {
    this.isCancelled = false;
    const adminToken = config.adminToken || 'pair_admin_secret';

    if (!('serial' in navigator)) {
      throw new Error(
        'Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.'
      );
    }

    try {
      // Step 1: Connect to ESP32 / ESP8266 (Web Serial)
      this.callbacks.onStepChange(1, 'Connecting to microcontroller via Web Serial...');
      this.callbacks.onLog('Requesting Serial Port... Please select your connected tracker board in the browser popup.\n');

      let serialPort: any;
      try {
        serialPort = await (navigator as any).serial.requestPort({
          filters: [
            { usbVendorId: 0x303a }, // Espressif VID
            { usbVendorId: 0x2886 }, // Seeed VID
            { usbVendorId: 0x1a86 }, // CH340 VID (common on ESP-12E / NodeMCU)
            { usbVendorId: 0x10c4 }, // Silicon Labs CP210x
            { usbVendorId: 0x0403 }, // FTDI
            { usbVendorId: 0x067b }, // Prolific
          ],
        });
      } catch (err: any) {
        if (err.name === 'NotFoundError') throw err; // User cancelled
        // If filtered request failed, allow selecting any serial device
        serialPort = await (navigator as any).serial.requestPort();
      }

      this.callbacks.onLog('Serial port selected. Initializing esptool-js transport...\n');
      const transport = new Transport(serialPort);

      // Connect at 115200 baud (native bootloader baud rate for ESP8266 and ESP32-C6)
      const esploader = new ESPLoader({
        transport,
        baudrate: 115200,
        terminal: {
          clean: () => {},
          writeLine: (data: string) => this.callbacks.onLog(data + '\n'),
          write: (data: string) => this.callbacks.onLog(data),
        },
      });

      this.callbacks.onLog('Syncing with ROM bootloader...\n');
      const chipName = (await esploader.main()) || '';
      this.callbacks.onLog(`Detected chip: ${chipName || 'Unknown'}\n`);

      let detectedHw = 'esp32c6';
      if (chipName.toLowerCase().includes('8266')) {
        detectedHw = 'esp12e';
      } else if (chipName.toLowerCase().includes('c6')) {
        detectedHw = 'esp32c6';
      } else {
        // Fallback check on chip description
        let desc = '';
        try {
          desc = (await esploader.chip.getChipDescription(esploader)) || '';
        } catch (e) {
          // ignore
        }
        if (desc.toLowerCase().includes('8266')) {
          detectedHw = 'esp12e';
        } else if (desc.toLowerCase().includes('c6')) {
          detectedHw = 'esp32c6';
        } else {
          // Prompt user if chip cannot be determined automatically
          const userChoice = window.confirm(
            `Detected chip '${chipName || desc || 'Unknown'}'. Is this an ESP-12E (ESP8266)?\nClick OK for ESP-12E, or Cancel for ESP32-C6.`
          );
          detectedHw = userChoice ? 'esp12e' : 'esp32c6';
        }
      }
      this.callbacks.onLog(`Using hardware target profile: ${detectedHw}\n`);

      // Read MAC address
      let mac = '';
      try {
        mac = (await esploader.chip.readMac(esploader)).toUpperCase();
      } catch (e: any) {
        this.callbacks.onLog(`Warning: Could not read MAC from chip eFuse: ${e.message}\n`);
        mac = 'ESP_' + Math.random().toString(16).substring(2, 8).toUpperCase();
      }
      this.callbacks.onLog(`Device MAC Address: ${mac}\n`);

      // Step 2: Register device on server
      this.callbacks.onStepChange(2, `Registering ${mac} with role '${config.role}' (${detectedHw})...`);
      this.callbacks.onLog(`Calling POST /v1/devices/register on server...\n`);

      const regRes = await fetch('/v1/devices/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          device_id: mac,
          role: config.role,
          token: config.token && config.token.trim() ? config.token.trim() : undefined,
          notes: `Provisioned via Web Serial for role ${config.role} (${detectedHw})`,
        }),
      });

      if (!regRes.ok) {
        const errText = await regRes.text();
        throw new Error(`Server registration failed (${regRes.status}): ${errText}`);
      }

      const regData = await regRes.json();
      const deviceToken = regData.token || config.token;
      this.callbacks.onLog(`Registration successful! Role: ${regData.role}, Token: ${deviceToken}\n`);

      // Step 3: Fetch Firmware Manifest and Binaries
      this.callbacks.onStepChange(3, `Fetching ${detectedHw} firmware binaries from server...`);
      this.callbacks.onLog(`Fetching /v1/firmware/manifest?hw=${detectedHw}...\n`);

      const manifestRes = await fetch(`/v1/firmware/manifest?hw=${detectedHw}`);
      if (!manifestRes.ok) {
        throw new Error(`Failed to fetch firmware manifest (${manifestRes.status})`);
      }
      const manifest = await manifestRes.json();
      if (!manifest.parts || manifest.parts.length === 0) {
        throw new Error(`Firmware manifest for ${detectedHw} contains no binary parts. Run "make firmware-bin" first.`);
      }

      const fileArray: Array<{ data: Uint8Array; address: number }> = [];
      const fetchHeaders: Record<string, string> = {};
      if (deviceToken) {
        fetchHeaders['Authorization'] = `Bearer ${deviceToken}`;
      }

      for (const part of manifest.parts) {
        this.callbacks.onLog(`Downloading ${part.name} (offset 0x${part.offset.toString(16)})...\n`);
        const partRes = await fetch(part.path, { headers: fetchHeaders });
        if (!partRes.ok) {
          throw new Error(`Failed to download ${part.name} from ${part.path} (${partRes.status} ${partRes.statusText})`);
        }
        const buf = await partRes.arrayBuffer();
        fileArray.push({
          data: new Uint8Array(buf),
          address: part.offset,
        });
      }

      // Step 4: Flash firmware via esptool-js
      const targetLabel = detectedHw === 'esp12e' ? 'ESP-12E (ESP8266)' : 'ESP32-C6';
      this.callbacks.onStepChange(4, `Flashing firmware to ${targetLabel}...`);
      this.callbacks.onLog(`Starting flash write for ${fileArray.length} binary partitions...\n`);

      await esploader.writeFlash({
        fileArray,
        flashSize: 'keep',
        flashMode: 'keep',
        flashFreq: 'keep',
        eraseAll: false,
        compress: true,
        reportProgress: (fileIndex, written, total) => {
          const pct = Math.round((written / total) * 100);
          const name = manifest.parts[fileIndex]?.name || 'binary';
          this.callbacks.onProgress(`Flashing ${name} (${pct}%)`, pct);
        },
      });

      this.callbacks.onLog('Firmware flash complete!\nResetting chip into runtime mode...\n');
      try {
        await esploader.after('hard_reset');
      } catch (e) {
        // hard_reset might disconnect transport
      }
      try {
        await transport.disconnect();
      } catch (e) {
        // ignore
      }

      // Step 5: Send Provisioning Serial Commands
      const targetBaud = detectedHw === 'esp12e' ? 9600 : 115200;
      this.callbacks.onStepChange(5, 'Provisioning WiFi credentials and role over Serial...');
      this.callbacks.onLog(`Opening serial port at ${targetBaud} baud for line protocol CLI...\n`);

      // Allow chip to finish reset and boot into firmware
      const waitMs = detectedHw === 'esp12e' ? 2500 : 1500;
      await new Promise((r) => setTimeout(r, waitMs));

      try {
        await serialPort.open({ baudRate: targetBaud });
        const textEncoder = new TextEncoder();
        const writer = serialPort.writable.getWriter();

        // Clear any startup serial buffer noise
        await writer.write(textEncoder.encode('\r\n\r\n'));
        await new Promise((r) => setTimeout(r, 200));

        const commands = [
          `set ssid ${config.ssid}\n`,
          `set pass ${config.password}\n`,
          `set server ${config.serverHost}\n`,
          `set port ${config.serverPort}\n`,
          `set token ${deviceToken}\n`,
          `set role ${config.role}\n`,
          `show\n`,
          `reboot\n`,
        ];

        for (const cmd of commands) {
          this.callbacks.onLog(`> ${cmd.trim()}\n`);
          await writer.write(textEncoder.encode(cmd));
          await new Promise((r) => setTimeout(r, 150));
        }

        writer.releaseLock();
        await serialPort.close();
        this.callbacks.onLog('Provisioning commands applied and device reboot command issued.\n');
      } catch (provErr: any) {
        this.callbacks.onLog(`Note: Automatic serial provisioning could not open port (${provErr.message}). You can provision via CLI monitor at ${targetBaud} baud.\n`);
      }

      // Step 6: Wait for Device Announce
      this.callbacks.onStepChange(6, 'Waiting for device to announce on WiFi...');
      this.callbacks.onSwitchOnPrompt(mac);

      await this.waitForAnnounce(mac, config.role);
      this.callbacks.onSuccess(mac, config.role);
    } catch (err: any) {
      this.callbacks.onError(err);
      throw err;
    }
  }

  private async waitForAnnounce(mac: string, role: string): Promise<void> {
    const start = Date.now();
    const timeoutMs = 60000; // 60s timeout

    while (Date.now() - start < timeoutMs) {
      if (this.isCancelled) return;
      try {
        const res = await fetch('/v1/devices');
        if (res.ok) {
          const devices: any[] = await res.json();
          const dev = devices.find(
            (d) => d.device_id.toUpperCase() === mac.toUpperCase() && d.online === true
          );
          if (dev) {
            this.callbacks.onLog(`Device ${mac} announced successfully as role '${dev.role}'!\n`);
            return;
          }
        }
      } catch (e) {
        // Retry
      }
      await new Promise((r) => setTimeout(r, 1500));
    }

    throw new Error(
      `Timed out waiting for tracker ${mac} to announce on WiFi. Please check that WiFi credentials are correct and tracker is powered ON.`
    );
  }

  public cancel() {
    this.isCancelled = true;
  }
}
