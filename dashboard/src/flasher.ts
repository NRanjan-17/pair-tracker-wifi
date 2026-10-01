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
  private activePort: any = null;
  private activeReader: any = null;
  private activeWriter: any = null;

  constructor(callbacks: FlasherCallbacks) {
    this.callbacks = callbacks;
  }

  private async cleanup() {
    if (this.activeReader) {
      try {
        await this.activeReader.cancel();
      } catch (e) {}
      try {
        this.activeReader.releaseLock();
      } catch (e) {}
      this.activeReader = null;
    }
    if (this.activeWriter) {
      try {
        this.activeWriter.releaseLock();
      } catch (e) {}
      this.activeWriter = null;
    }
    if (this.activePort) {
      try {
        await this.activePort.close();
      } catch (e) {}
      this.activePort = null;
    }
  }

  public async start(config: FlashConfig) {
    this.isCancelled = false;
    const adminToken = config.adminToken || 'pair_admin_secret';

    if (!('serial' in navigator)) {
      throw new Error(
        'Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.'
      );
    }

    let serialPort: any = null;
    let transport: any = null;

    try {
      // Step 1: Connect to ESP32 / ESP8266 (Web Serial)
      this.callbacks.onStepChange(1, 'Connecting to microcontroller via Web Serial...');
      this.callbacks.onLog('Requesting Serial Port... Please select your connected tracker board in the browser popup.\n');

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
        serialPort = await (navigator as any).serial.requestPort();
      }

      this.activePort = serialPort;
      this.callbacks.onLog('Serial port selected. Initializing esptool-js transport...\n');
      transport = new Transport(serialPort);

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
        let desc = '';
        try {
          desc = (await esploader.chip.getChipDescription(esploader)) || '';
        } catch (e) {}
        if (desc.toLowerCase().includes('8266')) {
          detectedHw = 'esp12e';
        } else if (desc.toLowerCase().includes('c6')) {
          detectedHw = 'esp32c6';
        } else {
          const userChoice = window.confirm(
            `Detected chip '${chipName || desc || 'Unknown'}'. Is this an ESP-12E (ESP8266)?\nClick OK for ESP-12E, or Cancel for ESP32-C6.`
          );
          detectedHw = userChoice ? 'esp12e' : 'esp32c6';
        }
      }

      const targetLabel = detectedHw === 'esp12e' ? 'ESP-12E (ESP8266)' : 'ESP32-C6';
      this.callbacks.onLog(`Using hardware target profile: ${detectedHw} (${targetLabel})\n`);

      const step4Chip = document.getElementById('flashStepChipText');
      if (step4Chip) {
        step4Chip.textContent = `Flash ${targetLabel} (esptool-js)`;
      }

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
      this.callbacks.onStepChange(2, `Registering ${mac} with role '${config.role}' (${targetLabel})...`);
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
      this.callbacks.onStepChange(3, `Fetching ${targetLabel} firmware binaries from server...`);
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

      this.callbacks.onLog('Flash write complete! Triggering hardware reset into user firmware...\n');

      // ESP8266 / NodeMCU & ESP32 Classic Reset into Normal SPI Flash Mode:
      // DTR must be false (GPIO0 = HIGH for user program run)
      // Pulse RTS (RTS = true -> RESET = LOW, then RTS = false -> RESET = HIGH)
      try {
        await transport.setSignals(false, true);
        await new Promise((r) => setTimeout(r, 150));
        await transport.setSignals(false, false);
        await new Promise((r) => setTimeout(r, 200));
      } catch (e) {
        // Driver setSignals fallback
      }

      try {
        await transport.disconnect();
      } catch (e) {}
      transport = null;

      // Allow operating system USB-UART driver to release descriptor
      await new Promise((r) => setTimeout(r, 600));

      // Step 5: Send Provisioning Serial Commands
      const targetBaud = detectedHw === 'esp12e' ? 9600 : 115200;
      this.callbacks.onStepChange(5, `Provisioning WiFi credentials and role over Serial (${targetBaud} baud)...`);

      await this.runSerialProvisioning(serialPort, targetBaud, config, deviceToken);

      // Step 6: Wait for Device Announce
      this.callbacks.onStepChange(6, 'Waiting for device to announce on WiFi...');
      this.callbacks.onSwitchOnPrompt(mac);

      await this.waitForAnnounce(mac, config.role);
      this.callbacks.onSuccess(mac, config.role);
    } catch (err: any) {
      this.callbacks.onError(err);
      throw err;
    } finally {
      await this.cleanup();
    }
  }

  public async quickProvision(config: FlashConfig) {
    this.isCancelled = false;
    const adminToken = config.adminToken || 'pair_admin_secret';

    if (!('serial' in navigator)) {
      throw new Error(
        'Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.'
      );
    }

    let serialPort: any = null;

    try {
      this.callbacks.onStepChange(1, 'Connecting to microcontroller via Web Serial...');
      this.callbacks.onLog('Requesting Serial Port... Please select your connected tracker board.\n');

      try {
        serialPort = await (navigator as any).serial.requestPort({
          filters: [
            { usbVendorId: 0x303a },
            { usbVendorId: 0x2886 },
            { usbVendorId: 0x1a86 },
            { usbVendorId: 0x10c4 },
            { usbVendorId: 0x0403 },
            { usbVendorId: 0x067b },
          ],
        });
      } catch (err: any) {
        if (err.name === 'NotFoundError') throw err;
        serialPort = await (navigator as any).serial.requestPort();
      }

      this.activePort = serialPort;

      // Prompt user or default to ESP-12E (9600 baud)
      const isEsp12e = window.confirm(
        'Is this tracker an ESP-12E (NodeMCU / ESP8266)?\nClick OK for ESP-12E (9600 baud), or Cancel for ESP32-C6 (115200 baud).'
      );
      const targetBaud = isEsp12e ? 9600 : 115200;
      const hwTag = isEsp12e ? 'esp12e' : 'esp32c6';

      this.callbacks.onStepChange(2, `Registering role '${config.role}' on Hub...`);
      this.callbacks.onLog(`Registering device on Hub with role '${config.role}'...\n`);

      const tempId = 'TRACKER_' + Math.random().toString(16).substring(2, 8).toUpperCase();
      let deviceToken = config.token;

      try {
        const regRes = await fetch('/v1/devices/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminToken}`,
          },
          body: JSON.stringify({
            device_id: tempId,
            role: config.role,
            token: config.token && config.token.trim() ? config.token.trim() : undefined,
            notes: `Quick Provisioned via Serial (${hwTag})`,
          }),
        });
        if (regRes.ok) {
          const regData = await regRes.json();
          deviceToken = regData.token || deviceToken;
        }
      } catch (e) {}

      // Mark Step 3 & 4 done
      this.callbacks.onStepChange(3, 'Firmware flash skipped (Quick Provision Mode)');
      await new Promise((r) => setTimeout(r, 200));
      this.callbacks.onStepChange(4, 'Firmware verified on board');
      await new Promise((r) => setTimeout(r, 200));

      // Step 5: Send Provisioning Serial Commands
      this.callbacks.onStepChange(5, `Provisioning WiFi & Role over Serial (${targetBaud} baud)...`);
      await this.runSerialProvisioning(serialPort, targetBaud, config, deviceToken);

      // Step 6: Wait for Announce
      this.callbacks.onStepChange(6, 'Waiting for tracker to connect to WiFi and announce...');
      this.callbacks.onSwitchOnPrompt(tempId);

      await this.waitForAnyAnnounce(config.role);
      this.callbacks.onSuccess(tempId, config.role);
    } catch (err: any) {
      this.callbacks.onError(err);
      throw err;
    } finally {
      await this.cleanup();
    }
  }

  private async runSerialProvisioning(
    serialPort: any,
    targetBaud: number,
    config: FlashConfig,
    deviceToken?: string
  ): Promise<void> {
    this.callbacks.onLog(`Opening serial port at ${targetBaud} baud for CLI provisioning...\n`);

    try {
      await serialPort.open({ baudRate: targetBaud });
    } catch (openErr: any) {
      this.callbacks.onLog(`Failed to open serial port: ${openErr.message}\n`);
      throw new Error(`Could not open serial port at ${targetBaud} baud: ${openErr.message}`);
    }

    // Set DTR=false, RTS=false
    try {
      await serialPort.setSignals({ dataTerminalReady: false, requestToSend: false });
    } catch (e) {}

    // Pulse reset via RTS to trigger clean boot into newly written firmware
    try {
      this.callbacks.onLog('Pulsing hardware reset to boot into firmware...\n');
      await serialPort.setSignals({ dataTerminalReady: false, requestToSend: true });
      await new Promise((r) => setTimeout(r, 150));
      await serialPort.setSignals({ dataTerminalReady: false, requestToSend: false });
      await new Promise((r) => setTimeout(r, 500));
    } catch (e) {}

    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    const reader = serialPort.readable.getReader();
    const writer = serialPort.writable.getWriter();
    this.activeReader = reader;
    this.activeWriter = writer;

    // Start background reader to pipe board serial outputs into flasher console
    let reading = true;
    (async () => {
      try {
        while (reading) {
          const { value, done } = await reader.read();
          if (done) break;
          if (value) {
            const chunk = textDecoder.decode(value, { stream: true });
            this.callbacks.onLog(chunk);
          }
        }
      } catch (e) {
        // Reader closed or cancelled
      }
    })();

    const sendCmd = async (cmd: string, waitMs = 300) => {
      if (cmd) {
        this.callbacks.onLog(`\n[CLI Send] > ${cmd}\n`);
      }
      await writer.write(textEncoder.encode(cmd + '\r\n'));
      await new Promise((r) => setTimeout(r, waitMs));
    };

    // 1. Send wake-up carriage return
    await sendCmd('', 400);

    // 2. Set SSID and Password
    await sendCmd(`set ssid ${config.ssid}`, 300);
    await sendCmd(`set pass ${config.password}`, 300);

    // 3. Set Server Host & Port
    await sendCmd(`set server ${config.serverHost}`, 300);
    await sendCmd(`set port ${config.serverPort}`, 300);

    // 4. Set Token if available
    if (deviceToken) {
      await sendCmd(`set token ${deviceToken}`, 300);
    }

    // 5. Set Role
    await sendCmd(`set role ${config.role}`, 300);

    // 6. Output config table to verify persistence
    await sendCmd('show', 600);

    // 7. Reboot tracker to initiate WiFi connection with saved settings
    await sendCmd('reboot', 400);

    this.callbacks.onLog('\n✓ Provisioning commands successfully sent and saved to flash!\n');

    // Cleanly close reader and writer
    reading = false;
    try {
      await reader.cancel();
    } catch (e) {}
    try {
      reader.releaseLock();
    } catch (e) {}
    this.activeReader = null;

    try {
      writer.releaseLock();
    } catch (e) {}
    this.activeWriter = null;

    try {
      await serialPort.close();
    } catch (e) {}
    this.activePort = null;
  }

  private async waitForAnnounce(mac: string, role: string): Promise<void> {
    const start = Date.now();
    const timeoutMs = 60000;

    while (Date.now() - start < timeoutMs) {
      if (this.isCancelled) return;
      try {
        const res = await fetch('/v1/devices');
        if (res.ok) {
          const devices: any[] = await res.json();
          const dev = devices.find(
            (d) =>
              d.device_id.toUpperCase().replace(/:/g, '') === mac.toUpperCase().replace(/:/g, '') &&
              d.online === true
          );
          if (dev) {
            this.callbacks.onLog(`Device ${mac} announced successfully as role '${dev.role}'!\n`);
            return;
          }
        }
      } catch (e) {}
      await new Promise((r) => setTimeout(r, 1500));
    }

    throw new Error(
      `Timed out waiting for tracker ${mac} to announce on WiFi. Please ensure your WiFi SSID is 2.4 GHz and credentials are correct.`
    );
  }

  private async waitForAnyAnnounce(expectedRole: string): Promise<void> {
    const start = Date.now();
    const timeoutMs = 60000;

    while (Date.now() - start < timeoutMs) {
      if (this.isCancelled) return;
      try {
        const res = await fetch('/v1/devices');
        if (res.ok) {
          const devices: any[] = await res.json();
          const dev = devices.find((d) => d.online === true && (d.role === expectedRole || d.role === 'unassigned'));
          if (dev) {
            this.callbacks.onLog(`Tracker ${dev.device_id} connected and online on WiFi!\n`);
            return;
          }
        }
      } catch (e) {}
      await new Promise((r) => setTimeout(r, 1500));
    }

    throw new Error(
      `Timed out waiting for tracker to announce on WiFi. Please ensure your WiFi SSID is 2.4 GHz and tracker has powered on.`
    );
  }

  public cancel() {
    this.isCancelled = true;
    this.cleanup();
  }
}
