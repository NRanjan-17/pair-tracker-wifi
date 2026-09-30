import './style.css';
import { ThreeVisualizer } from './three_view';
import { DeviceState, InitMessage, SampleMessage, SessionInfo } from './types';
import { PlaybackController, SessionDataResponse } from './playback';

// Admin token for session controls
const ADMIN_TOKEN = 'eidon_admin_secret';

class DashboardApp {
  private visualizer!: ThreeVisualizer;
  private playback!: PlaybackController;
  private ws: WebSocket | null = null;
  private requiredRoles: string[] = [];
  private devices: Map<string, DeviceState> = new Map(); // device_id -> DeviceState
  private roleToDevice: Map<string, DeviceState> = new Map(); // role -> DeviceState
  private activeSession: SessionInfo | null = null;

  // Recording timer
  private recordingTimerInterval: any = null;
  private recordingStartMs: number = 0;

  // Telemetry metrics
  private sampleCount = 0;
  private lastRateCheck = Date.now();
  private streamRateHz = 0;

  // Sessions cache
  private sessionsList: any[] = [];

  constructor() {
    this.initVisualizer();
    this.initPlayback();
    this.initDOM();
    this.connectWebSocket();
    this.startPeriodicUpdates();
    this.fetchSessions();
  }

  private initVisualizer() {
    const container = document.getElementById('threeContainer')!;
    this.visualizer = new ThreeVisualizer(container);

    const valLatency = document.getElementById('valLatency');
    this.visualizer.onLatencyUpdate = (latencyMs: number) => {
      if (this.visualizer.isPlaybackMode) {
        if (valLatency) {
          valLatency.innerText = 'Playback Mode';
          valLatency.className = 'val';
        }
        return;
      }
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

  private initPlayback() {
    this.playback = new PlaybackController(this.visualizer);

    const btnPlayPause = document.getElementById('btnPlayPause') as HTMLButtonElement;
    const scrubber = document.getElementById('playbackScrubber') as HTMLInputElement;
    const timeDisplay = document.getElementById('playbackTimeDisplay') as HTMLElement;

    this.playback.onPlayStateChange = (isPlaying: boolean) => {
      if (btnPlayPause) {
        btnPlayPause.innerText = isPlaying ? '⏸ Pause' : '▶ Play';
        btnPlayPause.className = isPlaying
          ? 'btn btn-sm btn-secondary btn-play'
          : 'btn btn-sm btn-primary btn-play';
      }
    };

    this.playback.onTimeUpdate = (currentMs: number, durationMs: number) => {
      if (scrubber) {
        scrubber.max = `${durationMs}`;
        scrubber.value = `${currentMs}`;
      }
      if (timeDisplay) {
        timeDisplay.innerText = `${this.formatPlaybackTime(currentMs)} / ${this.formatPlaybackTime(durationMs)}`;
      }
    };
  }

  private initDOM() {
    const btnStart = document.getElementById('btnStartSession') as HTMLButtonElement;
    const btnEnd = document.getElementById('btnEndSession') as HTMLButtonElement;
    const btnResetCam = document.getElementById('btnResetCamera') as HTMLButtonElement;
    const btnCalib = document.getElementById('btnCalibratePose') as HTMLButtonElement;
    const btnReZero = document.getElementById('btnReZero') as HTMLButtonElement;

    // Recording action listeners
    btnStart.addEventListener('click', () => this.startSession());
    btnEnd.addEventListener('click', () => this.endSession());
    btnResetCam.addEventListener('click', () => this.visualizer.resetCamera());

    if (btnCalib) {
      btnCalib.addEventListener('click', () => this.calibratePose());
    }
    if (btnReZero) {
      btnReZero.addEventListener('click', () => this.reZeroYaw());
    }

    // Tab buttons
    const tabTrackers = document.getElementById('tabTrackers') as HTMLButtonElement;
    const tabSessions = document.getElementById('tabSessions') as HTMLButtonElement;
    const viewTrackers = document.getElementById('viewTrackers') as HTMLElement;
    const viewSessions = document.getElementById('viewSessions') as HTMLElement;

    tabTrackers.addEventListener('click', () => {
      tabTrackers.classList.add('active');
      tabSessions.classList.remove('active');
      viewTrackers.style.display = 'flex';
      viewSessions.style.display = 'none';
    });

    tabSessions.addEventListener('click', () => {
      tabSessions.classList.add('active');
      tabTrackers.classList.remove('active');
      viewSessions.style.display = 'flex';
      viewTrackers.style.display = 'none';
      this.fetchSessions();
    });

    // Refresh sessions list
    const btnRefresh = document.getElementById('btnRefreshSessions');
    if (btnRefresh) {
      btnRefresh.addEventListener('click', () => this.fetchSessions());
    }

    // Modal close listeners
    const modal = document.getElementById('missingRolesModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnAckModal = document.getElementById('btnAcknowledgeModal');
    const closeModal = () => {
      if (modal) modal.style.display = 'none';
    };
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnAckModal) btnAckModal.addEventListener('click', closeModal);

    // Playback bar controls
    const btnPlayPause = document.getElementById('btnPlayPause');
    if (btnPlayPause) {
      btnPlayPause.addEventListener('click', () => this.playback.togglePlay());
    }

    const scrubber = document.getElementById('playbackScrubber') as HTMLInputElement;
    if (scrubber) {
      scrubber.addEventListener('input', () => {
        const val = parseFloat(scrubber.value);
        this.playback.seek(val);
      });
    }

    const speedButtons = document.querySelectorAll('.btn-speed');
    speedButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const speed = parseFloat(target.dataset.speed || '1.0');
        this.playback.setSpeed(speed);
        speedButtons.forEach((b) => b.classList.remove('active'));
        target.classList.add('active');
      });
    });

    const btnExit = document.getElementById('btnExitPlayback');
    if (btnExit) {
      btnExit.addEventListener('click', () => this.exitPlayback());
    }
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
        this.updateRecordingLossBanner();
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
        this.updateRecordingLossBanner();
        break;
      }

      case 'session_started':
        this.activeSession = msg.session;
        this.updateSessionUI();
        this.fetchSessions();
        break;

      case 'session_ended':
        this.activeSession = null;
        this.updateSessionUI();
        this.fetchSessions();
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
    const activeEl = document.getElementById('valActiveTrackers');
    if (activeEl && !this.visualizer.isPlaybackMode) {
      activeEl.innerText = `${this.roleToDevice.size}`;
    }
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

  public showMissingRolesModal(missingRoles: string[]) {
    const modal = document.getElementById('missingRolesModal');
    const list = document.getElementById('missingRolesList');
    if (!modal || !list) return;

    list.innerHTML = '';
    for (const r of missingRoles) {
      const li = document.createElement('li');
      li.innerText = `${r.replace(/_/g, ' ')} (${r})`;
      list.appendChild(li);
    }
    modal.style.display = 'flex';
  }

  public async startSession() {
    // Check missing required roles client-side first
    const missing = this.requiredRoles.filter((r) => !this.roleToDevice.get(r)?.online);
    if (missing.length > 0) {
      this.showMissingRolesModal(missing);
      return;
    }

    const input = document.getElementById('sessionNameInput') as HTMLInputElement;
    const name = input.value.trim() || `Session ${new Date().toLocaleTimeString()}`;

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
        const data = await res.json().catch(() => ({}));
        const missingFromResponse = (data.detail && typeof data.detail === 'string' && data.detail.includes('Missing required roles'))
          ? data.detail.replace('Missing required roles:', '').split(',').map((s: string) => s.trim())
          : missing;
        this.showMissingRolesModal(missingFromResponse.length > 0 ? missingFromResponse : ['required roles offline']);
        return;
      }

      const session = await res.json();
      this.activeSession = session;
      this.updateSessionUI();
      this.fetchSessions();
    } catch (e: any) {
      alert(`Network error starting session: ${e.message}`);
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
      this.activeSession = null;
      this.updateSessionUI();
      this.fetchSessions();
      alert(`Session completed!\nTotal samples: ${data.total_samples}\nParquet dataset saved.`);
    } catch (e: any) {
      alert(`Error ending session: ${e.message}`);
    }
  }

  private updateSessionUI() {
    const statusLabel = document.getElementById('sessionStatus')!;
    const btnStart = document.getElementById('btnStartSession') as HTMLButtonElement;
    const btnEnd = document.getElementById('btnEndSession') as HTMLButtonElement;
    const input = document.getElementById('sessionNameInput') as HTMLInputElement;
    const recTimer = document.getElementById('recTimer')!;
    const recBanner = document.getElementById('recordingBanner')!;
    const recBannerName = document.getElementById('recBannerName')!;

    if (this.activeSession) {
      // Active Recording State
      statusLabel.innerHTML = `<span style="color: var(--danger); font-weight: 800;">● RECORDING</span>: ${this.activeSession.name}`;
      btnStart.style.display = 'none';
      input.style.display = 'none';
      btnEnd.style.display = 'inline-flex';
      recTimer.style.display = 'inline-block';

      // Show recording loss banner
      recBanner.style.display = 'flex';
      recBannerName.innerText = this.activeSession.name;

      if (!this.recordingTimerInterval) {
        this.recordingStartMs = Date.now();
        this.recordingTimerInterval = setInterval(() => {
          const elapsedSec = Math.floor((Date.now() - this.recordingStartMs) / 1000);
          const hh = String(Math.floor(elapsedSec / 3600)).padStart(2, '0');
          const mm = String(Math.floor((elapsedSec % 3600) / 60)).padStart(2, '0');
          const ss = String(elapsedSec % 60).padStart(2, '0');
          const timeStr = `${hh}:${mm}:${ss}`;
          recTimer.innerText = timeStr;
          const bannerTimer = document.getElementById('recBannerTimer');
          if (bannerTimer) bannerTimer.innerText = timeStr;
        }, 1000);
      }
    } else {
      // Idle / No Active Session
      statusLabel.innerText = 'No Active Session';
      btnStart.style.display = 'inline-flex';
      input.style.display = 'inline-block';
      btnEnd.style.display = 'none';
      recTimer.style.display = 'none';
      recBanner.style.display = 'none';

      if (this.recordingTimerInterval) {
        clearInterval(this.recordingTimerInterval);
        this.recordingTimerInterval = null;
      }
    }
  }

  private updateRecordingLossBanner() {
    if (!this.activeSession) return;
    const lossEl = document.getElementById('recBannerLoss');
    if (!lossEl) return;

    const parts: string[] = [];
    this.roleToDevice.forEach((dev, role) => {
      if (dev.online) {
        parts.push(`${role}: ${dev.loss_pct.toFixed(2)}%`);
      }
    });

    lossEl.innerText = parts.length > 0 ? `Per-device loss: ${parts.join(' | ')}` : 'Per-device loss: waiting for stream...';
  }

  public async fetchSessions() {
    try {
      const res = await fetch('/v1/sessions');
      if (!res.ok) return;
      this.sessionsList = await res.json();
      this.renderSessionsList();
    } catch (err) {
      console.warn('Failed to fetch sessions:', err);
    }
  }

  private renderSessionsList() {
    const countBadge = document.getElementById('sessionCountBadge');
    if (countBadge) {
      countBadge.innerText = `${this.sessionsList.length}`;
    }

    const container = document.getElementById('sessionsListContainer');
    if (!container) return;

    if (this.sessionsList.length === 0) {
      container.innerHTML = `<div class="empty-sessions">No recorded sessions found. Press <strong>REC</strong> to capture your first session.</div>`;
      return;
    }

    container.innerHTML = '';
    for (const sess of this.sessionsList) {
      const card = document.createElement('div');
      card.className = 'card-session';

      const isCompleted = sess.status === 'completed';
      const statusClass = isCompleted ? 'session-status-completed' : 'session-status-active';
      const dateStr = sess.started_at ? new Date(sess.started_at).toLocaleString() : '—';
      const durationStr = sess.ended_at && sess.started_at
        ? `${((sess.ended_at - sess.started_at) / 1000).toFixed(1)}s`
        : 'Active';
      const samplesCount = sess.total_samples || 0;

      card.innerHTML = `
        <div class="card-session-top">
          <span class="session-name-title">${sess.name}</span>
          <span class="session-status-badge ${statusClass}">${sess.status}</span>
        </div>
        <div class="card-session-meta">
          <div class="meta-item"><span>Recorded:</span> <strong>${dateStr}</strong></div>
          <div class="meta-item"><span>Duration:</span> <strong>${durationStr}</strong></div>
          <div class="meta-item"><span>Samples:</span> <strong>${samplesCount}</strong></div>
        </div>
        <div class="card-session-actions">
          <button class="btn btn-primary btn-sm" onclick="window.dashboardApp.loadSessionPlayback('${sess.session_id}')">
            ▶ Play in 3D
          </button>
          <a class="btn btn-secondary btn-sm" href="/v1/sessions/${sess.session_id}/export" target="_blank" download>
            ⬇ Parquet
          </a>
        </div>
      `;

      container.appendChild(card);
    }
  }

  public async loadSessionPlayback(sessionId: string) {
    try {
      const res = await fetch(`/v1/sessions/${sessionId}/data`);
      if (!res.ok) {
        alert('Failed to load session playback data');
        return;
      }
      const data: SessionDataResponse = await res.json();
      if (!data.samples || data.samples.length === 0) {
        alert('This session contains no recorded motion samples.');
        return;
      }

      // Load session into PlaybackController
      this.playback.loadSession(data);

      // Show playback overlay
      const overlay = document.getElementById('playbackOverlay');
      const nameEl = document.getElementById('playbackSessionName');
      const headerTitle = document.getElementById('viewportHeaderTitle');
      const headerSub = document.getElementById('viewportHeaderSub');

      if (overlay) overlay.style.display = 'flex';
      if (nameEl) nameEl.innerText = `${data.name} (${data.samples.length} samples)`;
      if (headerTitle) headerTitle.innerText = `3D Playback: ${data.name}`;
      if (headerSub) headerSub.innerText = `Parquet Scrubbing (${data.roles.join(', ')})`;

      // Telemetry update
      const valActive = document.getElementById('valActiveTrackers');
      if (valActive) valActive.innerText = `${data.roles.length} (Recorded)`;
      const valLatency = document.getElementById('valLatency');
      if (valLatency) {
        valLatency.innerText = 'Playback Mode';
        valLatency.className = 'val';
      }

      // Start playing automatically
      this.playback.play();
    } catch (e: any) {
      alert(`Error loading session playback: ${e.message}`);
    }
  }

  public exitPlayback() {
    this.playback.exitPlayback();

    const overlay = document.getElementById('playbackOverlay');
    const headerTitle = document.getElementById('viewportHeaderTitle');
    const headerSub = document.getElementById('viewportHeaderSub');

    if (overlay) overlay.style.display = 'none';
    if (headerTitle) headerTitle.innerText = '3D Biomechanical Avatar';
    if (headerSub) headerSub.innerText = 'Live Quaternion Forward Kinematics (Three.js)';

    const valActive = document.getElementById('valActiveTrackers');
    if (valActive) valActive.innerText = `${this.roleToDevice.size}`;
  }

  private formatPlaybackTime(ms: number): string {
    const totalSec = ms / 1000;
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    const minStr = String(min).padStart(2, '0');
    const secStr = sec.toFixed(1).padStart(4, '0');
    return `${minStr}:${secStr}`;
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
