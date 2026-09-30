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
    const adminToken = config.adminToken || 'eidon_admin_secret';

    if (!('serial' in navigator)) {
      throw new Error(
        'Web Serial API is not supported in this browser. Please use Google Chrome or Microsoft Edge on localhost or HTTPS.'
      );
    }

    try {
      // Step 1: Connect to ESP32 (Web Serial)
      this.callbacks.onStepChange(1, 'Connecting to ESP32 via Web Serial...');
      this.callbacks.onLog('Requesting Serial Port... Please select your Seeed XIAO ESP32-C6 in the browser popup.\n');

      const serialPort = await (navigator as any).serial.requestPort({
        filters: [
          { usbVendorId: 0x303a }, // Espressif VID
          { usbVendorId: 0x2886 }, // Seeed VID
        ],
      });

      this.callbacks.onLog('Serial port selected. Initializing esptool-js transport...\n');
      const transport = new Transport(serialPort);

      const esploader = new ESPLoader({
        transport,
        baudrate: 921600,
        terminal: {
          clean: () => {},
          writeLine: (data: string) => this.callbacks.onLog(data + '\n'),
          write: (data: string) => this.callbacks.onLog(data),
        },
      });

      this.callbacks.onLog('Syncing with ROM bootloader...\n');
      await esploader.main();

      let chipName = 'ESP32-C6';
      try {
        chipName = await esploader.chip.getChipDescription(esploader);
      } catch (e) {
        // Fallback
      }
      this.callbacks.onLog(`Detected chip: ${chipName}\n`);

      // Read MAC address
      let mac = '';
      try {
        mac = (await esploader.chip.readMac(esploader)).toUpperCase();
      } catch (e: any) {
        this.callbacks.onLog(`Could not read MAC from chip eFuse: ${e.message}\n`);
        throw new Error(`Failed to read MAC address from ESP32: ${e.message}`);
      }
      this.callbacks.onLog(`Device MAC Address: ${mac}\n`);

      // Step 2: Register device on server
      this.callbacks.onStepChange(2, `Registering ${mac} with role '${config.role}'...`);
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
          notes: `Provisioned via Web Serial for role ${config.role}`,
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
      this.callbacks.onStepChange(3, 'Fetching firmware binaries from server...');
      this.callbacks.onLog('Fetching /v1/firmware/manifest...\n');

      const manifestRes = await fetch('/v1/firmware/manifest');
      if (!manifestRes.ok) {
        throw new Error(`Failed to fetch firmware manifest (${manifestRes.status})`);
      }
      const manifest = await manifestRes.json();
      if (!manifest.parts || manifest.parts.length === 0) {
        throw new Error('Firmware manifest contains no binary parts. Run "make firmware-bin" first.');
      }

      const fileArray: Array<{ data: Uint8Array; address: number }> = [];
      for (const part of manifest.parts) {
        this.callbacks.onLog(`Downloading ${part.name} (offset 0x${part.offset.toString(16)})...\n`);
        const partRes = await fetch(part.path);
        if (!partRes.ok) {
          throw new Error(`Failed to download ${part.name} from ${part.path}`);
        }
        const buf = await partRes.arrayBuffer();
        fileArray.push({
          data: new Uint8Array(buf),
          address: part.offset,
        });
      }

      // Step 4: Flash ESP32-C6 via esptool-js
      this.callbacks.onStepChange(4, 'Flashing firmware to ESP32-C6...');
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
      await transport.disconnect();

      // Step 5: Send Provisioning Serial Commands
      this.callbacks.onStepChange(5, 'Provisioning WiFi credentials and role over Serial...');
      this.callbacks.onLog('Opening serial port at 115200 baud for line protocol CLI...\n');

      await new Promise((r) => setTimeout(r, 1200)); // Allow chip to boot into firmware

      await serialPort.open({ baudRate: 115200 });
      const textEncoder = new TextEncoder();
      const writer = serialPort.writable.getWriter();

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
