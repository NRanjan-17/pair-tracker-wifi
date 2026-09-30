import './style.css';
import { ThreeVisualizer } from './three_view';
import { DeviceState, InitMessage, SampleMessage, SessionInfo } from './types';

// Admin token for session controls
const ADMIN_TOKEN = 'eidon_admin_secret';

class DashboardApp {
  private visualizer!: ThreeVisualizer;
  private ws: WebSocket | null = null;
  private requiredRoles: string[] = [];
  private devices: Map<string, DeviceState> = new Map(); // device_id -> DeviceState
  private roleToDevice: Map<string, DeviceState> = new Map(); // role -> DeviceState
  private activeSession: SessionInfo | null = null;

  // Telemetry metrics
  private sampleCount = 0;
  private lastRateCheck = Date.now();
  private streamRateHz = 0;

  constructor() {
    this.initDOM();
    this.initVisualizer();
    this.connectWebSocket();
    this.startPeriodicUpdates();
  }

  private initDOM() {
    const btnStart = document.getElementById('btnStartSession') as HTMLButtonElement;
    const btnEnd = document.getElementById('btnEndSession') as HTMLButtonElement;
    const btnResetCam = document.getElementById('btnResetCamera') as HTMLButtonElement;
    const btnCalib = document.getElementById('btnCalibratePose') as HTMLButtonElement;
    const btnReZero = document.getElementById('btnReZero') as HTMLButtonElement;

    btnStart.addEventListener('click', () => this.startSession());
    btnEnd.addEventListener('click', () => this.endSession());
    btnResetCam.addEventListener('click', () => this.visualizer.resetCamera());

    if (btnCalib) {
      btnCalib.addEventListener('click', () => this.calibratePose());
    }
    if (btnReZero) {
      btnReZero.addEventListener('click', () => this.reZeroYaw());
    }
  }

  private initVisualizer() {
    const container = document.getElementById('threeContainer')!;
    this.visualizer = new ThreeVisualizer(container);

    const valLatency = document.getElementById('valLatency');
    this.visualizer.onLatencyUpdate = (latencyMs: number) => {
      if (valLatency) {
        valLatency.innerText = `${latencyMs} ms`;
        if (latencyMs < 100) {
          valLatency.className = 'val text-success';
        } else if (latencyMs < 150) {
          valLatency.className = 'val text-warning';
        } else {
          valLatency.className = 'val';
        }
      }
    };

    const valFps = document.getElementById('valFps');
    this.visualizer.onFpsUpdate = (fps: number) => {
      if (valFps) {
        valFps.innerText = `${fps}`;
      }
    };
  }

  public calibratePose() {
    this.visualizer.calibratePose();
    const badge = document.getElementById('calibBadge');
    if (badge) {
      badge.className = 'badge-calib badge-calib-done';
      badge.innerText = '✓ N-Pose Calibrated';
    }
  }

  public reZeroYaw() {
    this.visualizer.reZeroYaw();
  }

  private connectWebSocket() {
    const badge = document.getElementById('wsBadge')!;
    badge.className = 'badge badge-disconnected';
    badge.innerText = 'Connecting...';

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/v1/dashboard`;

    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      badge.className = 'badge badge-connected';
      badge.innerText = 'Connected Live';
    };

    this.ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        this.handleMessage(msg);
      } catch (err) {
        console.error('Failed to parse WS message:', err);
      }
    };

    this.ws.onclose = () => {
      badge.className = 'badge badge-disconnected';
      badge.innerText = 'Disconnected (Reconnecting...)';
      setTimeout(() => this.connectWebSocket(), 2000);
    };
  }

  private handleMessage(msg: any) {
    switch (msg.type) {
      case 'init': {
        const init = msg as InitMessage;
        this.requiredRoles = init.required_roles || [];
        this.devices.clear();
        this.roleToDevice.clear();

        if (init.server_time_ms) {
          this.visualizer.jitterBuffer.setServerTimeSync(init.server_time_ms);
        }

        if (init.devices) {
          for (const d of init.devices) {
            this.devices.set(d.device_id, d);
            if (d.online) {
              this.roleToDevice.set(d.role, d);
            }
          }
        }
        this.activeSession = init.active_session;
        this.updateSessionUI();
        this.renderCards();
        break;
      }

      case 'device_state': {
        const d = msg as DeviceState;
        this.devices.set(d.device_id, d);
        if (d.online) {
          this.roleToDevice.set(d.role, d);
        } else {
          if (this.roleToDevice.get(d.role)?.device_id === d.device_id) {
            this.roleToDevice.delete(d.role);
          }
        }
        this.renderCards();
        break;
      }

      case 'sample':
      case 'pose_update': {
        const sample = msg as SampleMessage;
        this.sampleCount++;
        // Push sample to 3D avatar visualizer jitter buffer
        this.visualizer.handleSample(sample);

        // Update live stats on device state
        const dev = this.roleToDevice.get(sample.role);
        if (dev) {
          dev.last_seen_ms = Date.now();
          dev.loss_pct = sample.loss_pct;
        }
        break;
      }

      case 'session_started':
        this.activeSession = msg.session;
        this.updateSessionUI();
        break;

      case 'session_ended':
        this.activeSession = null;
        this.updateSessionUI();
        break;
    }
  }

  private renderCards() {
    const container = document.getElementById('requiredRolesContainer')!;
    container.innerHTML = '';

    let onlineRequiredCount = 0;

    for (const role of this.requiredRoles) {
      const dev = this.roleToDevice.get(role);
      const isOnline = dev && dev.online;
      if (isOnline) onlineRequiredCount++;

      const card = document.createElement('div');
      // If role is missing/offline, mark with RED class 'missing'
      card.className = `card-role ${isOnline ? 'online' : 'missing'}`;

      const displayName = role.replace(/_/g, ' ');
      const statusClass = isOnline ? 'status-online' : 'status-missing';
      const statusText = isOnline ? 'ONLINE' : 'MISSING / OFFLINE';

      const batt = isOnline && dev.battery_pct !== null ? `${dev.battery_pct}%` : '—';
      const loss = isOnline ? `${dev.loss_pct.toFixed(2)}%` : '—';
      const lastSeen = isOnline ? this.formatTimeAgo(dev.last_seen_ms) : 'Never';
      const mac = isOnline ? dev.device_id : 'Not connected';

      card.innerHTML = `
        <div class="card-top">
          <div class="role-title">
            <span>${displayName}</span>
            <span class="role-tag-badge">${role}</span>
          </div>
          <span class="status-indicator ${statusClass}">${statusText}</span>
        </div>
        <div class="card-metrics">
          <div class="metric-col">
            <span class="metric-lbl">Battery</span>
            <span class="metric-val" id="batt-${role}">${batt}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Loss</span>
            <span class="metric-val" id="loss-${role}" style="color: ${isOnline && dev.loss_pct > 1.0 ? 'var(--danger)' : 'inherit'}">${loss}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Last Seen</span>
            <span class="metric-val" id="seen-${role}">${lastSeen}</span>
          </div>
        </div>
        <div class="card-footer">
          <span><code>${mac}</code></span>
          ${
            isOnline
              ? `<div class="card-actions">
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${dev.device_id}', 'identify')">Blink</button>
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${dev.device_id}', 'reboot')">Reboot</button>
                </div>`
              : `<span style="color: var(--danger); font-size: 0.72rem; font-weight: 600;">Required for session</span>`
          }
        </div>
      `;

      container.appendChild(card);
    }

    // Update Summary Badge
    const summaryBadge = document.getElementById('roleSummary')!;
    summaryBadge.innerText = `${onlineRequiredCount} / ${this.requiredRoles.length} Online`;
    if (onlineRequiredCount === this.requiredRoles.length) {
      summaryBadge.style.color = 'var(--success)';
      summaryBadge.style.borderColor = 'var(--success)';
    } else {
      summaryBadge.style.color = 'var(--danger)';
      summaryBadge.style.borderColor = 'var(--danger)';
    }

    // Telemetry bar active trackers
    const activeEl = document.getElementById('valActiveTrackers')!;
    activeEl.innerText = `${this.roleToDevice.size}`;
  }

  private formatTimeAgo(timestampMs: number): string {
    const diffSec = Math.max(0, Math.floor((Date.now() - timestampMs) / 1000));
    if (diffSec < 2) return 'Just now';
    if (diffSec < 60) return `${diffSec}s ago`;
    return `${Math.floor(diffSec / 60)}m ago`;
  }

  public async sendCommand(deviceId: string, cmd: string) {
    try {
      const res = await fetch(`/v1/devices/${deviceId}/command`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({ type: cmd }),
      });
      if (!res.ok) {
        alert(`Failed to send command: ${res.statusText}`);
      }
    } catch (e: any) {
      alert(`Error sending command: ${e.message}`);
    }
  }

  public async startSession() {
    const input = document.getElementById('sessionNameInput') as HTMLInputElement;
    const name = input.value.trim() || 'Session';

    try {
      const res = await fetch('/v1/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(`Cannot start session: ${data.detail || 'Missing required roles'}`);
        return;
      }

      const session = await res.json();
      this.activeSession = session;
      this.updateSessionUI();
    } catch (e: any) {
      alert(`Network error: ${e.message}`);
    }
  }

  public async endSession() {
    if (!this.activeSession) return;
    try {
      const res = await fetch(`/v1/sessions/${this.activeSession.session_id}/end`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      });

      if (!res.ok) {
        alert('Failed to end session');
        return;
      }

      const data = await res.json();
      alert(`Session completed!\nTotal samples: ${data.total_samples}\nParquet dataset saved.`);
      this.activeSession = null;
      this.updateSessionUI();
    } catch (e: any) {
      alert(`Error ending session: ${e.message}`);
    }
  }

  private updateSessionUI() {
    const statusLabel = document.getElementById('sessionStatus')!;
    const btnStart = document.getElementById('btnStartSession') as HTMLButtonElement;
    const btnEnd = document.getElementById('btnEndSession') as HTMLButtonElement;
    const input = document.getElementById('sessionNameInput') as HTMLInputElement;

    if (this.activeSession) {
      statusLabel.innerHTML = `<span style="color: var(--success); font-weight: 700;">● RECORDING</span>: ${this.activeSession.name}`;
      btnStart.style.display = 'none';
      input.style.display = 'none';
      btnEnd.style.display = 'inline-block';
    } else {
      statusLabel.innerText = 'No Active Session';
      btnStart.style.display = 'inline-block';
      input.style.display = 'inline-block';
      btnEnd.style.display = 'none';
    }
  }

  private startPeriodicUpdates() {
    setInterval(() => {
      // Calculate stream rate (Hz)
      const now = Date.now();
      const elapsedSec = (now - this.lastRateCheck) / 1000.0;
      if (elapsedSec >= 1.0) {
        this.streamRateHz = Math.round(this.sampleCount / elapsedSec);
        this.sampleCount = 0;
        this.lastRateCheck = now;
        document.getElementById('valRate')!.innerText = `${this.streamRateHz} Hz`;
      }

      // Update avg loss
      let totalLoss = 0;
      let count = 0;
      this.roleToDevice.forEach((d) => {
        totalLoss += d.loss_pct;
        count++;
      });
      const avgLoss = count > 0 ? (totalLoss / count).toFixed(2) + '%' : '0.00%';
      document.getElementById('valAvgLoss')!.innerText = avgLoss;

      // Update timestamps on cards
      this.requiredRoles.forEach((role) => {
        const dev = this.roleToDevice.get(role);
        const seenEl = document.getElementById(`seen-${role}`);
        if (seenEl && dev && dev.online) {
          seenEl.innerText = this.formatTimeAgo(dev.last_seen_ms);
        }
      });
    }, 1000);
  }
}

// Attach globally for inline event handlers
(window as any).dashboardApp = new DashboardApp();
