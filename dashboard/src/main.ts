import './style.css';
import { ThreeVisualizer } from './three_view';
import { DeviceState, FirmwareManifest, InitMessage, OTAJob, SampleMessage, SessionInfo } from './types';
import { PlaybackController, SessionDataResponse } from './playback';
import { TrackerFlasher } from './flasher';

// Admin token for session controls
const ADMIN_TOKEN = 'pair_admin_secret';

class DashboardApp {
  private visualizer!: ThreeVisualizer;
  private playback!: PlaybackController;
  private flasher: TrackerFlasher | null = null;
  private ws: WebSocket | null = null;
  private requiredRoles: string[] = [];
  private devices: Map<string, DeviceState> = new Map(); // device_id -> DeviceState
  private roleToDevice: Map<string, DeviceState> = new Map(); // role -> DeviceState
  private activeSession: SessionInfo | null = null;
  private activeRoleFilter: 'all' | 'arms' | 'legs' | 'online' = 'all';

  public static readonly ALL_BODY_ROLES: string[] = [
    'chest',
    'left_shoulder',
    'left_upper_arm',
    'left_forearm',
    'left_hand',
    'right_shoulder',
    'right_upper_arm',
    'right_forearm',
    'right_hand',
    'left_thigh',
    'left_shin',
    'left_foot',
    'right_thigh',
    'right_shin',
    'right_foot',
  ];

  public static readonly UPPER_BODY_ROLES: string[] = [
    'chest',
    'left_shoulder',
    'left_upper_arm',
    'left_forearm',
    'left_hand',
    'right_shoulder',
    'right_upper_arm',
    'right_forearm',
    'right_hand',
  ];

  public static readonly LOWER_BODY_ROLES: string[] = [
    'left_thigh',
    'left_shin',
    'left_foot',
    'right_thigh',
    'right_shin',
    'right_foot',
  ];

  // OTA firmware management
  public latestFirmware: FirmwareManifest | null = null;
  public latestFirmwareByHw: Record<string, FirmwareManifest | null> = {};
  private otaJobs: Map<string, OTAJob> = new Map();
  private deviceToOtaJob: Map<string, OTAJob> = new Map();
  private isUpdatingAll = false;

  // Recording timer
  private recordingTimerInterval: any = null;
  private recordingStartMs: number = 0;

  // Telemetry metrics
  private sampleCount = 0;
  private lastRateCheck = Date.now();
  private streamRateHz = 0;

  // Sessions cache
  private sessionsList: any[] = [];
  private exportSessionId: string | null = null;

  // Paired devices cache
  private pairedDevicesList: any[] = [];

  // Live Logging & Console
  private logEntries: Array<{ time: string; badge: string; category: string; message: string }> = [];
  private activeLogFilter: string = 'all';
  private autoScroll: boolean = true;
  private logPaused: boolean = false;
  private lastStreamLogTime: number = 0;

  constructor() {
    this.initVisualizer();
    this.initPlayback();
    this.initDOM();
    this.connectWebSocket();
    this.startPeriodicUpdates();
    this.fetchSessions();
    this.fetchLatestFirmware();
    this.fetchPairedDevices();
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
    const btnCalib = document.getElementById('btnCalibratePose') as HTMLButtonElement;
    const btnReZero = document.getElementById('btnReZero') as HTMLButtonElement;

    // Recording action listeners
    btnStart.addEventListener('click', () => this.startSession());
    btnEnd.addEventListener('click', () => this.endSession());

    if (btnCalib) {
      btnCalib.addEventListener('click', () => this.calibratePose());
    }
    if (btnReZero) {
      btnReZero.addEventListener('click', () => this.reZeroYaw());
    }

    // Tab buttons
    const tabTrackers = document.getElementById('tabTrackers') as HTMLButtonElement;
    const tabSessions = document.getElementById('tabSessions') as HTMLButtonElement;
    const tabFlash = document.getElementById('tabFlash') as HTMLButtonElement;
    const tabLogs = document.getElementById('tabLogs') as HTMLButtonElement;
    const viewTrackers = document.getElementById('viewTrackers') as HTMLElement;
    const viewSessions = document.getElementById('viewSessions') as HTMLElement;
    const viewFlash = document.getElementById('viewFlash') as HTMLElement;
    const viewLogs = document.getElementById('viewLogs') as HTMLElement;

    const switchTab = (activeTab: HTMLElement, activeView: HTMLElement) => {
      [tabTrackers, tabSessions, tabFlash, tabLogs].forEach((t) => t?.classList.remove('active'));
      [viewTrackers, viewSessions, viewFlash, viewLogs].forEach((v) => { if (v) v.style.display = 'none'; });
      activeTab.classList.add('active');
      activeView.style.display = 'flex';
    };

    tabTrackers?.addEventListener('click', () => switchTab(tabTrackers, viewTrackers));
    tabSessions?.addEventListener('click', () => { switchTab(tabSessions, viewSessions); this.fetchSessions(); });
    tabFlash?.addEventListener('click', () => switchTab(tabFlash, viewFlash));
    tabLogs?.addEventListener('click', () => switchTab(tabLogs, viewLogs));

    this.initLoggingUI();
    this.initFlashUI();

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

    // Export Modal listeners
    const btnCloseExport = document.getElementById('btnCloseExportModal');
    const btnCancelExport = document.getElementById('btnCancelExport');
    const btnConfirmExport = document.getElementById('btnConfirmExportDownload');
    if (btnCloseExport) btnCloseExport.addEventListener('click', () => this.closeExportModal());
    if (btnCancelExport) btnCancelExport.addEventListener('click', () => this.closeExportModal());
    if (btnConfirmExport) btnConfirmExport.addEventListener('click', () => this.triggerExportDownload());

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

    const btnUpdateAll = document.getElementById('btnUpdateAll');
    if (btnUpdateAll) {
      btnUpdateAll.addEventListener('click', () => this.updateAllDevices());
    }

    // Studio camera angle presets
    const camButtons = document.querySelectorAll('.btn-cam');
    camButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const cam = (target.dataset.cam || 'persp') as 'persp' | 'front' | 'side' | 'top';
        this.visualizer.setCameraView(cam);
        camButtons.forEach((b) => b.classList.remove('active'));
        target.classList.add('active');
      });
    });

    const btnResetCam = document.getElementById('btnResetCamera');
    if (btnResetCam) {
      btnResetCam.addEventListener('click', () => {
        this.visualizer.resetCamera();
        camButtons.forEach((b) => b.classList.remove('active'));
        const perspBtn = document.querySelector('.btn-cam[data-cam="persp"]');
        if (perspBtn) perspBtn.classList.add('active');
      });
    }

    // Role category filter buttons (All / Arms / Legs / Online)
    const roleFilterButtons = document.querySelectorAll('.btn-role-filter');
    roleFilterButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const filter = (target.dataset.roleFilter || 'all') as 'all' | 'arms' | 'legs' | 'online';
        this.activeRoleFilter = filter;
        roleFilterButtons.forEach((b) => b.classList.remove('active'));
        target.classList.add('active');
        this.renderCards();
      });
    });

    // Paired Devices modal listeners
    const btnManageDevices = document.getElementById('btnManageDevices');
    const btnClosePaired = document.getElementById('btnClosePairedDevicesModal');
    const btnClosePairedFooter = document.getElementById('btnClosePairedDevicesModalFooter');
    const btnRefreshPaired = document.getElementById('btnRefreshPairedDevices');
    const btnCleanOffline = document.getElementById('btnCleanOfflineDevices');

    if (btnManageDevices) {
      btnManageDevices.addEventListener('click', () => this.openPairedDevicesModal());
    }
    if (btnClosePaired) {
      btnClosePaired.addEventListener('click', () => this.closePairedDevicesModal());
    }
    if (btnClosePairedFooter) {
      btnClosePairedFooter.addEventListener('click', () => this.closePairedDevicesModal());
    }
    if (btnRefreshPaired) {
      btnRefreshPaired.addEventListener('click', () => this.fetchPairedDevices());
    }
    if (btnCleanOffline) {
      btnCleanOffline.addEventListener('click', () => this.cleanupOfflineDevices());
    }
  }

  public calibratePose() {
    this.visualizer.calibratePose();
    const badge = document.getElementById('calibBadge');
    if (badge) {
      badge.className = 'badge-calib badge-calib-done';
      badge.innerText = 'Calibrated';
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
      this.addLog('sys', `Connected to Pair server via WebSocket (${wsUrl})`, 'WS');
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
      this.addLog('warn', 'WebSocket disconnected from server. Reconnecting in 2s...', 'DISCONNECT');
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

        if (init.latest_firmware) {
          this.latestFirmware = init.latest_firmware;
        }
        if (init.latest_firmware_by_hw) {
          this.latestFirmwareByHw = init.latest_firmware_by_hw;
        }
        this.updateLatestFwBadge();

        if (init.ota_jobs) {
          for (const job of init.ota_jobs) {
            this.otaJobs.set(job.job_id, job);
            this.deviceToOtaJob.set(job.device_id, job);
          }
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
        this.updatePairedDevicesBadge();
        this.fetchPairedDevices();
        this.addLog('sys', `Server init: ${init.devices?.length || 0} registered devices, ${init.required_roles?.length || 0} required roles`, 'INIT');
        break;
      }

      case 'ota_job_update': {
        const job = msg.job as OTAJob;
        this.otaJobs.set(job.job_id, job);
        this.deviceToOtaJob.set(job.device_id, job);
        this.renderCards();
        this.addLog('role', `OTA Job ${job.job_id} on ${job.device_id}: ${job.status.toUpperCase()} (${job.progress_pct}%)`, 'OTA');
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
        this.updatePairedDevicesBadge();
        if (this.isPairedDevicesModalOpen()) {
          this.fetchPairedDevices();
        }
        break;
      }

      case 'device_connected': {
        const dev = msg.device;
        if (dev) {
          const hw = (dev.hw || 'esp12e').toUpperCase();
          this.addLog('announce', `Tracker connected: ${dev.device_id} (${hw}) role='${dev.role}' heap=${dev.free_heap || 0}B`, 'CONNECT');
        }
        this.updatePairedDevicesBadge();
        if (this.isPairedDevicesModalOpen()) {
          this.fetchPairedDevices();
        }
        break;
      }

      case 'device_disconnected': {
        this.addLog('warn', `Tracker disconnected: ${msg.device_id} role='${msg.role}'`, 'DISCONNECT');
        this.updatePairedDevicesBadge();
        if (this.isPairedDevicesModalOpen()) {
          this.fetchPairedDevices();
        }
        break;
      }

      case 'device_deleted': {
        const devId = msg.device_id;
        this.devices.delete(devId);
        this.roleToDevice.forEach((dev, role) => {
          if (dev.device_id === devId) {
            this.roleToDevice.delete(role);
          }
        });
        this.pairedDevicesList = this.pairedDevicesList.filter((d) => d.device_id !== devId);
        this.renderCards();
        this.renderPairedDevicesList();
        this.updatePairedDevicesBadge();
        this.addLog('warn', `Tracker un-paired & removed: ${devId}`, 'UNPAIR');
        break;
      }

      case 'devices_cleaned': {
        this.fetchPairedDevices();
        this.addLog('warn', `Cleaned up ${msg.deleted_count} stale/offline devices from registry`, 'CLEANUP');
        break;
      }

      case 'log': {
        this.addLog(msg.category || 'sys', msg.message, msg.level?.toUpperCase() || 'INFO');
        break;
      }

      case 'sample':
      case 'pose_update': {
        const sample = msg as SampleMessage;
        this.sampleCount++;
        // Push sample to 3D avatar visualizer jitter buffer
        this.visualizer.handleSample(sample);

        // Update live stats on device state
        const dev = this.devices.get(sample.device_id) || this.roleToDevice.get(sample.role);
        if (dev) {
          dev.last_seen_ms = Date.now();
          dev.loss_pct = sample.loss_pct;
        }
        this.updateRecordingLossBanner();

        // Throttled logging for live stream (~4 Hz to keep console performant)
        const now = Date.now();
        if (now - this.lastStreamLogTime > 250) {
          this.lastStreamLogTime = now;
          const q = sample.quat;
          const qStr = q ? `q=[${q.map((v: number) => v.toFixed(3)).join(', ')}]` : '';
          const isFlat = q && Math.abs(q[0] - 1.0) < 0.005 && Math.abs(q[1]) < 0.005 && Math.abs(q[2]) < 0.005 && Math.abs(q[3]) < 0.005;
          const hw = (dev?.hw || 'esp12e').toUpperCase();
          const note = isFlat ? ' [⚠️ No IMU / Flat Quat]' : '';
          this.addLog('stream', `${sample.device_id} (${hw}) role:${sample.role} seq:${sample.seq} ${qStr} loss:${sample.loss_pct.toFixed(2)}%${note}`, 'STREAM');
        }
        break;
      }

      case 'session_started':
        this.activeSession = msg.session;
        this.updateSessionUI();
        this.fetchSessions();
        this.addLog('sys', `Recording session started: ${msg.session.name} (${msg.session.session_id})`, 'SESSION');
        break;

      case 'session_ended':
        this.activeSession = null;
        this.updateSessionUI();
        this.fetchSessions();
        this.addLog('sys', `Recording session ended. Parquet saved.`, 'SESSION');
        break;
    }
  }

  private renderCards() {
    const container = document.getElementById('requiredRolesContainer')!;
    container.innerHTML = '';

    let onlineRequiredCount = 0;
    for (const role of this.requiredRoles) {
      const dev = this.roleToDevice.get(role);
      if (dev && dev.online) onlineRequiredCount++;
    }

    let rolesToDisplay: string[] = [];
    if (this.activeRoleFilter === 'arms') {
      rolesToDisplay = [...DashboardApp.UPPER_BODY_ROLES];
    } else if (this.activeRoleFilter === 'legs') {
      rolesToDisplay = [...DashboardApp.LOWER_BODY_ROLES];
    } else {
      // 'all' or 'online'
      rolesToDisplay = [...DashboardApp.ALL_BODY_ROLES];
      for (const r of this.roleToDevice.keys()) {
        if (r && r !== 'unassigned' && !rolesToDisplay.includes(r)) {
          rolesToDisplay.push(r);
        }
      }
    }

    if (this.activeRoleFilter === 'online') {
      rolesToDisplay = rolesToDisplay.filter((role) => {
        const d = this.roleToDevice.get(role);
        return d && d.online;
      });
    }

    if (rolesToDisplay.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.style.gridColumn = '1 / -1';
      emptyDiv.style.padding = '36px 16px';
      emptyDiv.style.textAlign = 'center';
      emptyDiv.style.color = 'var(--text-tertiary)';
      emptyDiv.style.fontSize = '0.85rem';
      emptyDiv.innerText = this.activeRoleFilter === 'online'
        ? 'No trackers are currently online.'
        : 'No roles found for current filter.';
      container.appendChild(emptyDiv);
    }

    for (const role of rolesToDisplay) {
      const dev = this.roleToDevice.get(role);
      const isOnline = dev && dev.online;
      const isCore = this.requiredRoles.includes(role);

      const card = document.createElement('div');
      // If role is missing/offline, mark with class 'missing'
      card.className = `card-role ${isOnline ? 'online' : 'missing'}`;

      const displayName = role.replace(/_/g, ' ');
      const statusClass = isOnline ? 'status-online' : 'status-missing';

      const batt = isOnline && dev && dev.battery_pct !== null ? `${dev.battery_pct}%` : '—';
      const loss = isOnline && dev ? `${dev.loss_pct.toFixed(2)}%` : '—';
      const lastSeen = isOnline && dev ? this.formatTimeAgo(dev.last_seen_ms) : 'Never';
      const mac = isOnline && dev ? dev.device_id : 'Not connected';

      const rawFwVer = dev && dev.firmware_version ? dev.firmware_version : null;
      const devHw = dev?.hw || 'esp12e';
      const hwManifest = this.latestFirmwareByHw ? this.latestFirmwareByHw[devHw] : null;
      const targetLatestVer = hwManifest?.version || this.latestFirmware?.version || '1.0.2';
      const fwDisplay = rawFwVer ? (isOnline ? `v${rawFwVer}` : `v${rawFwVer} (offline)`) : '—';
      const isOutdated = isOnline && rawFwVer !== null && rawFwVer !== 'unknown' && rawFwVer !== targetLatestVer;
      const isProtoOutdated = dev && dev.protocol_outdated;
      const job = dev ? this.deviceToOtaJob.get(dev.device_id) : null;
      const hasActiveOta = job && ['queued', 'downloading', 'verifying', 'rebooting'].includes(job.status);
      const isBatteryLow = isOnline && dev && dev.battery_pct !== null && dev.battery_pct < 30;

      const heap = isOnline && dev && dev.free_heap ? `${Math.round(dev.free_heap / 1024)} KB` : '—';
      const hwName = isOnline && dev?.hw ? dev.hw.toUpperCase() : '';
      const hwBadgeHtml = isOnline && hwName
        ? `<span class="role-tag-badge hw-badge" style="background: rgba(56, 189, 248, 0.12); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.25);">${hwName}</span>`
        : '';

      const roleCategoryBadge = isCore
        ? `<span class="role-tag-badge" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25);">CORE</span>`
        : `<span class="role-tag-badge" style="background: rgba(168, 85, 247, 0.12); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.25);">UPPER BODY</span>`;

      const statusText = isOnline ? 'ONLINE' : 'STANDBY';

      card.innerHTML = `
        <div class="card-top">
          <div class="role-title">
            <span>${displayName}</span>
            ${roleCategoryBadge}
            ${hwBadgeHtml}
          </div>
          <span class="status-indicator ${statusClass}">${statusText}</span>
        </div>
        <div class="card-metrics">
          <div class="metric-col">
            <span class="metric-lbl">Battery</span>
            <span class="metric-val" id="batt-${role}">${batt}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Heap</span>
            <span class="metric-val" id="heap-${role}">${heap}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Loss</span>
            <span class="metric-val" id="loss-${role}" style="color: ${isOnline && dev && dev.loss_pct > 1.0 ? 'var(--danger)' : 'inherit'}">${loss}</span>
          </div>
          <div class="metric-col">
            <span class="metric-lbl">Last Seen</span>
            <span class="metric-val" id="seen-${role}">${lastSeen}</span>
          </div>
        </div>
        <div class="firmware-meta-row">
          <span>FW: <strong>${fwDisplay}</strong></span>
          <div class="fw-val-group">
            ${isOutdated ? `<span class="badge-update-avail" title="Update available to v${targetLatestVer}">v${targetLatestVer} avail</span>` : (isOnline && rawFwVer && rawFwVer !== 'unknown' ? `<span class="badge-up-to-date">Up to date</span>` : '')}
            ${isProtoOutdated ? `<span class="badge-proto-outdated" title="Protocol older than required">Proto v${dev?.protocol_version || 1} outdated</span>` : ''}
          </div>
        </div>
        ${
          job
            ? `<div class="ota-job-panel ota-status-${job.status}">
                <div class="ota-status-header">
                  <span>OTA: ${job.status.toUpperCase()} ${job.status === 'downloading' ? `(${job.progress_pct}%)` : ''}</span>
                  ${job.error_message ? `<span class="ota-error-text" title="${job.error_message}">${job.error_message}</span>` : ''}
                </div>
                ${job.status === 'downloading' ? `<div class="ota-progress-bar"><div class="ota-progress-fill" style="width: ${job.progress_pct}%"></div></div>` : ''}
              </div>`
            : ''
        }
        <div class="card-footer">
          <span><code>${mac}</code></span>
          ${
            isOnline && dev
              ? `<div class="card-actions">
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${dev.device_id}', 'identify')">Identify</button>
                  <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${dev.device_id}', 'reboot')">Reboot</button>
                  ${
                    hasActiveOta
                      ? `<button class="btn btn-secondary btn-sm" disabled>Updating...</button>`
                      : isBatteryLow
                        ? `<button class="btn btn-sm btn-ota-usb" title="Battery < 30% (${dev.battery_pct}%). Click to update with USB power override." onclick="window.dashboardApp.triggerOTA('${dev.device_id}', 'latest', true)">⚡ Update (USB)</button>`
                        : `<button class="btn ${isOutdated ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.dashboardApp.triggerOTA('${dev.device_id}')">Update</button>`
                  }
                </div>`
              : `<span style="color: var(--text-tertiary); font-size: 0.7rem; font-weight: 500;">${isCore ? 'Required for recording' : 'Upper body / Arm role'}</span>`
          }
        </div>
      `;

      container.appendChild(card);
    }

    // Render Discovered & Unassigned Trackers
    const extraSection = document.getElementById('extraDevicesSection');
    const extraContainer = document.getElementById('extraDevicesContainer');
    const unassignedBadge = document.getElementById('unassignedCountBadge');

    if (extraContainer) {
      extraContainer.innerHTML = '';
      const unassignedDevices = Array.from(this.devices.values()).filter(
        (d) => d.online && (!d.role || d.role === 'unassigned')
      );

      if (unassignedBadge) {
        unassignedBadge.innerText = `${unassignedDevices.length}`;
      }

      if (unassignedDevices.length > 0 && extraSection) {
        extraSection.style.display = 'block';

        for (const dev of unassignedDevices) {
          const card = document.createElement('div');
          card.className = 'card-role unassigned online';

          const hwName = (dev.hw || 'esp12e').toUpperCase();
          const batt = dev.battery_pct !== null ? `${dev.battery_pct}%` : '—';
          const loss = `${dev.loss_pct.toFixed(2)}%`;
          const lastSeen = this.formatTimeAgo(dev.last_seen_ms);
          const heap = dev.free_heap ? `${Math.round(dev.free_heap / 1024)} KB` : '—';
          const rawFwVer = dev.firmware_version || null;
          const fwDisplay = rawFwVer ? `v${rawFwVer}` : '—';
          const devHw = dev.hw || 'esp12e';
          const hwManifest = this.latestFirmwareByHw ? this.latestFirmwareByHw[devHw] : null;
          const targetLatestVer = hwManifest?.version || this.latestFirmware?.version || '1.0.2';
          const isOutdated = rawFwVer !== null && rawFwVer !== 'unknown' && rawFwVer !== targetLatestVer;
          const job = this.deviceToOtaJob.get(dev.device_id);
          const hasActiveOta = job && ['queued', 'downloading', 'verifying', 'rebooting'].includes(job.status);
          const isBatteryLow = dev.battery_pct !== null && dev.battery_pct < 30;

          card.innerHTML = `
            <div class="card-top">
              <div class="role-title">
                <span>Unassigned Tracker</span>
                <span class="role-tag-badge" style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);">UNASSIGNED</span>
                <span class="role-tag-badge hw-badge" style="background: rgba(56, 189, 248, 0.12); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.25);">${hwName}</span>
              </div>
              <span class="status-indicator status-online">ONLINE</span>
            </div>

            <div class="imu-notice-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span><strong>Streaming Fallback Identity Quat [1, 0, 0, 0]:</strong> No BNO085 IMU detected on I2C bus (SDA=D2/GPIO4, SCL=D1/GPIO5). Connect IMU sensor to stream live motion.</span>
            </div>

            <div class="card-metrics">
              <div class="metric-col">
                <span class="metric-lbl">Battery</span>
                <span class="metric-val">${batt}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Heap</span>
                <span class="metric-val">${heap}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Loss</span>
                <span class="metric-val">${loss}</span>
              </div>
              <div class="metric-col">
                <span class="metric-lbl">Last Seen</span>
                <span class="metric-val">${lastSeen}</span>
              </div>
            </div>

            <div class="firmware-meta-row" style="margin-top: 6px;">
              <span>FW: <strong>${fwDisplay}</strong></span>
              <div class="fw-val-group">
                ${isOutdated ? `<span class="badge-update-avail" title="Update available to v${targetLatestVer}">v${targetLatestVer} avail</span>` : (rawFwVer && rawFwVer !== 'unknown' ? `<span class="badge-up-to-date">Up to date</span>` : '')}
              </div>
            </div>

            ${
              job
                ? `<div class="ota-job-panel ota-status-${job.status}" style="margin-top: 8px;">
                    <div class="ota-status-header">
                      <span>OTA: ${job.status.toUpperCase()} ${job.status === 'downloading' ? `(${job.progress_pct}%)` : ''}</span>
                      ${job.error_message ? `<span class="ota-error-text" title="${job.error_message}">${job.error_message}</span>` : ''}
                    </div>
                    ${job.status === 'downloading' ? `<div class="ota-progress-bar"><div class="ota-progress-fill" style="width: ${job.progress_pct}%"></div></div>` : ''}
                  </div>`
                : ''
            }

            <div class="role-assign-row">
              <label for="assignRoleSelect-${dev.device_id}">Assign Body Role:</label>
              <select id="assignRoleSelect-${dev.device_id}" class="form-select">
                <option value="">-- Choose Role --</option>
                ${DashboardApp.ALL_BODY_ROLES.map((r) => `<option value="${r}">${r.replace(/_/g, ' ').toUpperCase()}${this.requiredRoles.includes(r) ? ' (CORE REQUIRED)' : ''}</option>`).join('')}
              </select>
              <button class="btn btn-primary btn-sm" onclick="window.dashboardApp.assignRole('${dev.device_id}')">Assign</button>
            </div>

            <div class="card-footer" style="margin-top: 8px;">
              <span><code>${dev.device_id}</code></span>
              <div class="card-actions">
                <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${dev.device_id}', 'identify')">Identify</button>
                <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.sendCommand('${dev.device_id}', 'reboot')">Reboot</button>
                ${
                  hasActiveOta
                    ? `<button class="btn btn-secondary btn-sm" disabled>Updating...</button>`
                    : isBatteryLow
                      ? `<button class="btn btn-sm btn-ota-usb" title="Battery < 30% (${dev.battery_pct}%). Click to update with USB power override." onclick="window.dashboardApp.triggerOTA('${dev.device_id}', 'latest', true)">⚡ Update (USB)</button>`
                      : `<button class="btn ${isOutdated ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.dashboardApp.triggerOTA('${dev.device_id}')">Update</button>`
                }
              </div>
            </div>
          `;

          extraContainer.appendChild(card);
        }
      } else if (extraSection) {
        extraSection.style.display = 'none';
      }
    }

    // Update Summary Badge
    const summaryBadge = document.getElementById('roleSummary')!;
    if (summaryBadge) {
      summaryBadge.innerText = `${onlineRequiredCount} / ${this.requiredRoles.length} Core Online`;
      if (onlineRequiredCount === this.requiredRoles.length) {
        summaryBadge.style.color = 'var(--success)';
        summaryBadge.style.borderColor = 'var(--success)';
      } else {
        summaryBadge.style.color = 'var(--danger)';
        summaryBadge.style.borderColor = 'var(--danger)';
      }
    }

    // Telemetry bar active trackers (count all online devices)
    const activeEl = document.getElementById('valActiveTrackers');
    if (activeEl && !this.visualizer.isPlaybackMode) {
      const activeCount = Array.from(this.devices.values()).filter((d) => d.online).length;
      activeEl.innerText = `${activeCount}`;
    }
  }

  public async assignRole(deviceId: string) {
    const sel = document.getElementById(`assignRoleSelect-${deviceId}`) as HTMLSelectElement;
    if (!sel) return;
    const role = sel.value;
    if (!role) {
      alert('Please select a body role from the dropdown.');
      return;
    }

    try {
      const res = await fetch(`/v1/devices/${deviceId}/role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({ role }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }));
        alert(`Failed to assign role: ${err.detail}`);
        return;
      }

      this.addLog('role', `Device ${deviceId} assigned role '${role}'`, 'ROLE');
      const dev = this.devices.get(deviceId);
      if (dev) {
        if (dev.role && this.roleToDevice.get(dev.role)?.device_id === deviceId) {
          this.roleToDevice.delete(dev.role);
        }
        dev.role = role;
        if (dev.online) {
          this.roleToDevice.set(role, dev);
        }
      }
      this.renderCards();
    } catch (err: any) {
      alert(`Error assigning role: ${err.message}`);
    }
  }

  public addLog(category: string, message: string, badgeText: string = 'INFO') {
    if (this.logPaused) return;

    const now = new Date();
    const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;
    const entry = { time: timeStr, badge: badgeText, category, message };
    this.logEntries.push(entry);
    if (this.logEntries.length > 800) {
      this.logEntries.shift();
    }

    const countBadge = document.getElementById('logEventCountBadge');
    if (countBadge) countBadge.innerText = `${this.logEntries.length} events`;
    const quickBadge = document.getElementById('quickLogCount');
    if (quickBadge) quickBadge.innerText = `${this.logEntries.length}`;

    const consoleEl = document.getElementById('telemetryConsoleLog');
    if (consoleEl && (this.activeLogFilter === 'all' || this.activeLogFilter === category)) {
      this.appendLogLine(consoleEl, entry);
      if (this.autoScroll) {
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }
    }

    const drawerEl = document.getElementById('drawerConsoleLog');
    if (drawerEl) {
      this.appendLogLine(drawerEl, entry);
      if (this.autoScroll) {
        drawerEl.scrollTop = drawerEl.scrollHeight;
      }
    }
  }

  private appendLogLine(targetEl: HTMLElement, entry: { time: string; badge: string; category: string; message: string }) {
    const line = document.createElement('div');
    line.className = 'log-line';
    const badgeClass = `log-badge log-badge-${entry.category}`;
    line.innerHTML = `
      <span class="log-time">${entry.time}</span>
      <span class="${badgeClass}">${entry.badge}</span>
      <span class="log-msg">${this.escapeHtml(entry.message)}</span>
    `;
    targetEl.appendChild(line);
    while (targetEl.children.length > 500) {
      targetEl.removeChild(targetEl.firstChild!);
    }
  }

  private reRenderConsoleLogs() {
    const consoleEl = document.getElementById('telemetryConsoleLog');
    if (!consoleEl) return;
    consoleEl.innerHTML = '';
    const filtered = this.activeLogFilter === 'all'
      ? this.logEntries
      : this.logEntries.filter((e) => e.category === this.activeLogFilter);
    filtered.forEach((e) => this.appendLogLine(consoleEl, e));
    if (this.autoScroll) {
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }
  }

  private initLoggingUI() {
    const filterBtns = document.querySelectorAll('.btn-filter');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        const target = e.currentTarget as HTMLButtonElement;
        target.classList.add('active');
        this.activeLogFilter = target.dataset.filter || 'all';
        this.reRenderConsoleLogs();
      });
    });

    const chkAutoScroll = document.getElementById('chkAutoScroll') as HTMLInputElement;
    if (chkAutoScroll) {
      chkAutoScroll.addEventListener('change', () => {
        this.autoScroll = chkAutoScroll.checked;
      });
    }

    const btnPause = document.getElementById('btnPauseLog');
    if (btnPause) {
      btnPause.addEventListener('click', () => {
        this.logPaused = !this.logPaused;
        btnPause.innerText = this.logPaused ? '▶ Resume' : '⏸ Pause';
      });
    }

    const btnClearLogs = document.getElementById('btnClearTelemetryLog');
    if (btnClearLogs) {
      btnClearLogs.addEventListener('click', () => {
        this.logEntries = [];
        const consoleEl = document.getElementById('telemetryConsoleLog');
        if (consoleEl) consoleEl.innerHTML = '';
        const drawerEl = document.getElementById('drawerConsoleLog');
        if (drawerEl) drawerEl.innerHTML = '';
        const countBadge = document.getElementById('logEventCountBadge');
        if (countBadge) countBadge.innerText = '0 events';
        const quickBadge = document.getElementById('quickLogCount');
        if (quickBadge) quickBadge.innerText = '0';
      });
    }

    const btnCopyLogs = document.getElementById('btnCopyTelemetryLog');
    if (btnCopyLogs) {
      btnCopyLogs.addEventListener('click', () => {
        const text = this.logEntries.map((e) => `[${e.time}] [${e.badge}] ${e.message}`).join('\n');
        navigator.clipboard.writeText(text).then(() => {
          alert('Telemetry logs copied to clipboard!');
        });
      });
    }

    // Bottom drawer toggle
    const btnToggleDrawer = document.getElementById('btnToggleLogDrawer');
    const bottomDrawer = document.getElementById('bottomLogDrawer');
    const btnCloseDrawer = document.getElementById('btnCloseLogDrawer');
    const btnDrawerClear = document.getElementById('btnDrawerClear');

    if (btnToggleDrawer && bottomDrawer) {
      btnToggleDrawer.addEventListener('click', () => {
        const isHidden = bottomDrawer.style.display === 'none' || !bottomDrawer.style.display;
        bottomDrawer.style.display = isHidden ? 'flex' : 'none';
      });
    }
    if (btnCloseDrawer && bottomDrawer) {
      btnCloseDrawer.addEventListener('click', () => {
        bottomDrawer.style.display = 'none';
      });
    }
    if (btnDrawerClear) {
      btnDrawerClear.addEventListener('click', () => {
        const drawerEl = document.getElementById('drawerConsoleLog');
        if (drawerEl) drawerEl.innerHTML = '';
      });
    }
  }

  private escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  public async fetchLatestFirmware() {
    try {
      const res = await fetch('/v1/firmware/latest');
      if (res.ok) {
        this.latestFirmware = await res.json();
        this.updateLatestFwBadge();
        this.renderCards();
      }
    } catch (e) {
      console.warn('Failed to fetch latest firmware manifest', e);
    }
  }

  private updateLatestFwBadge() {
    const badge = document.getElementById('latestFwBadge');
    if (badge && this.latestFirmware) {
      badge.innerText = `Latest: v${this.latestFirmware.version}`;
    }
  }

  public async triggerOTA(deviceId: string, version: string = 'latest', force: boolean = false): Promise<boolean> {
    try {
      const queryParams = new URLSearchParams({ version });
      if (force) {
        queryParams.set('force', 'true');
      }
      const res = await fetch(`/v1/devices/${deviceId}/ota?${queryParams.toString()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({ version, force }),
      });
      if (res.status === 409) {
        const err = await res.json().catch(() => ({}));
        const detail = err.detail || 'Device busy, offline, or battery < 30%';
        if (!force && detail.toLowerCase().includes('battery')) {
          const proceed = confirm(`OTA Blocked: ${detail}\n\nDevice appears to be running on USB power without battery (or battery < 30%).\n\nDo you want to override and flash over USB power anyway?`);
          if (proceed) {
            return this.triggerOTA(deviceId, version, true);
          }
        } else {
          alert(`OTA Rejected: ${detail}`);
        }
        return false;
      }
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }));
        alert(`OTA Failed: ${err.detail}`);
        return false;
      }
      const data = await res.json();
      if (data.job) {
        this.otaJobs.set(data.job.job_id, data.job);
        this.deviceToOtaJob.set(deviceId, data.job);
        this.renderCards();
      }
      return true;
    } catch (e: any) {
      alert(`Error initiating OTA: ${e.message}`);
      return false;
    }
  }

  public async updateAllDevices() {
    if (this.isUpdatingAll) return;
    const btn = document.getElementById('btnUpdateAll') as HTMLButtonElement;

    // Gather candidate devices: online devices
    const onlineDevices: DeviceState[] = [];
    for (const d of this.devices.values()) {
      if (d.online) {
        onlineDevices.push(d);
      }
    }

    if (onlineDevices.length === 0) {
      alert('No online devices available to update.');
      return;
    }

    const outdated = onlineDevices.filter((d) => {
      const hwManifest = (this.latestFirmwareByHw && d.hw) ? this.latestFirmwareByHw[d.hw] : null;
      const targetVer = hwManifest?.version || this.latestFirmware?.version || '1.0.2';
      return d.firmware_version !== targetVer;
    });
    const targets = outdated.length > 0 ? outdated : onlineDevices;

    const lowBattCount = targets.filter((d) => d.battery_pct !== null && d.battery_pct < 30).length;
    let forceOverride = false;
    if (lowBattCount > 0) {
      forceOverride = confirm(`${lowBattCount} of ${targets.length} device(s) have < 30% battery or are on USB power without battery.\n\nProceed with USB Power Override enabled for all updates?`);
      if (!forceOverride) return;
    } else {
      if (!confirm(`Update ${targets.length} device(s) one at a time to latest firmware?`)) {
        return;
      }
    }

    this.isUpdatingAll = true;
    if (btn) btn.disabled = true;

    try {
      for (let i = 0; i < targets.length; i++) {
        const dev = targets[i];
        if (btn) btn.innerText = `Updating ${i + 1}/${targets.length} (${dev.role || dev.device_id})...`;

        const started = await this.triggerOTA(dev.device_id, 'latest', forceOverride);
        if (!started) {
          console.warn(`Could not start OTA on device ${dev.device_id}, moving to next.`);
          continue;
        }

        // Wait until this device finishes OTA (success or failed) or timeout (60s)
        await new Promise<void>((resolve) => {
          const timeout = setTimeout(() => resolve(), 60000);
          const checkInterval = setInterval(() => {
            const job = this.deviceToOtaJob.get(dev.device_id);
            if (job && (job.status === 'success' || job.status === 'failed')) {
              clearInterval(checkInterval);
              clearTimeout(timeout);
              resolve();
            }
          }, 500);
        });
      }
    } finally {
      this.isUpdatingAll = false;
      if (btn) {
        btn.disabled = false;
        btn.innerText = '⚡ Update Outdated';
      }
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
      } else if (cmd === 'reboot') {
        this.addLog('sys', `Reboot signal dispatched to tracker ${deviceId}. Clean reset in progress (reconnecting in ~3s).`, 'REBOOT');
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

    // Get current pose calibration offsets (if calibrated)
    const calibOffsets = this.visualizer.getCalibrationOffsets();
    const payload: any = { name };
    if (calibOffsets) {
      payload.calibration_offsets = calibOffsets;
    }

    try {
      const res = await fetch('/v1/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify(payload),
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

  public openPairedDevicesModal() {
    const modal = document.getElementById('pairedDevicesModal');
    if (modal) modal.style.display = 'flex';
    this.fetchPairedDevices();
  }

  public closePairedDevicesModal() {
    const modal = document.getElementById('pairedDevicesModal');
    if (modal) modal.style.display = 'none';
  }

  public isPairedDevicesModalOpen(): boolean {
    const modal = document.getElementById('pairedDevicesModal');
    return modal ? modal.style.display === 'flex' : false;
  }

  public async fetchPairedDevices() {
    try {
      const res = await fetch('/v1/devices/paired', {
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        this.pairedDevicesList = data.devices || [];
      } else {
        const fallbackRes = await fetch('/v1/devices');
        if (fallbackRes.ok) {
          this.pairedDevicesList = await fallbackRes.json();
        }
      }
      this.updatePairedDevicesBadge();
      this.renderPairedDevicesList();
    } catch (err) {
      console.warn('Failed to fetch paired devices:', err);
    }
  }

  public updatePairedDevicesBadge() {
    const badge = document.getElementById('pairedDevicesCount');
    if (badge) {
      const count = this.pairedDevicesList.length || this.devices.size;
      badge.innerText = `${count}`;
    }
  }

  private renderPairedDevicesList() {
    const tbody = document.getElementById('pairedDevicesTableBody');
    const summaryText = document.getElementById('pairedSummaryText');
    if (!tbody) return;

    const total = this.pairedDevicesList.length;
    const onlineCount = this.pairedDevicesList.filter((d) => d.online).length;
    const offlineCount = total - onlineCount;

    if (summaryText) {
      summaryText.innerText = `${total} registered tracker${total === 1 ? '' : 's'} (${onlineCount} online, ${offlineCount} offline)`;
    }

    if (total === 0) {
      tbody.innerHTML = `
        <tr class="paired-empty-row">
          <td colspan="7">No registered trackers in database. Connect or flash a device to begin.</td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = '';
    for (const dev of this.pairedDevicesList) {
      const tr = document.createElement('tr');
      const isOnline = Boolean(dev.online);
      const hwUpper = (dev.hw || 'esp12e').toUpperCase();
      const chipClass = (dev.hw === 'esp12e' || dev.hw === 'esp8266') ? 'chip-badge-esp12e' : 'chip-badge-esp32c6';
      const lastSeen = dev.last_seen_ms
        ? this.formatTimeAgo(dev.last_seen_ms)
        : (dev.last_seen ? this.formatTimeAgo(dev.last_seen) : 'Never');
      const fwStr = dev.firmware_version && dev.firmware_version !== 'unknown'
        ? `v${this.escapeHtml(dev.firmware_version)}`
        : '—';
      const roleStr = dev.role ? dev.role.replace(/_/g, ' ') : 'unassigned';

      tr.innerHTML = `
        <td><strong style="font-family: ui-monospace, monospace; font-size: 0.8rem; color: var(--accent);">${this.escapeHtml(dev.device_id)}</strong></td>
        <td><span class="badge badge-secondary" style="font-size: 0.7rem; font-weight: 500;">${this.escapeHtml(roleStr)}</span></td>
        <td><span class="${chipClass}">${this.escapeHtml(hwUpper)}</span></td>
        <td><span class="badge ${isOnline ? 'badge-connected' : 'badge-disconnected'}">${isOnline ? 'Online' : 'Offline'}</span></td>
        <td style="color: var(--text-tertiary); font-size: 0.72rem;">${this.escapeHtml(lastSeen)}</td>
        <td style="color: var(--text-secondary); font-size: 0.72rem;">${fwStr}</td>
        <td style="text-align: right;">
          <button class="btn-icon-danger" title="Unpair and delete tracker ${this.escapeHtml(dev.device_id)}" onclick="window.dashboardApp.unpairDevice('${this.escapeHtml(dev.device_id)}')">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            Unpair
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  }

  public async unpairDevice(deviceId: string) {
    if (!confirm(`Are you sure you want to unpair and remove tracker ${deviceId}?\nThis will disconnect it and remove its token and role registration.`)) {
      return;
    }

    try {
      const res = await fetch(`/v1/devices/${encodeURIComponent(deviceId)}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(`Failed to unpair device: ${data.detail || res.statusText}`);
        return;
      }

      this.addLog('warn', `Successfully unpaired device ${deviceId}`, 'UNPAIR');
      await this.fetchPairedDevices();
    } catch (err: any) {
      alert(`Error unpairing device: ${err.message}`);
    }
  }

  public async cleanupOfflineDevices() {
    const offlineCount = this.pairedDevicesList.filter((d) => !d.online).length;
    if (offlineCount === 0) {
      alert('All registered trackers are currently online. No offline trackers to clean up.');
      return;
    }

    if (!confirm(`Remove ${offlineCount} offline/stale tracker(s) from the registry database?\nOnline trackers will not be affected.`)) {
      return;
    }

    try {
      const res = await fetch('/v1/devices/cleanup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({ mode: 'offline' }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(`Failed to clean up devices: ${data.detail || res.statusText}`);
        return;
      }

      const data = await res.json();
      this.addLog('warn', `Cleaned up ${data.deleted_count} offline tracker(s)`, 'CLEANUP');
      await this.fetchPairedDevices();
    } catch (err: any) {
      alert(`Error cleaning up devices: ${err.message}`);
    }
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
          <button class="btn btn-secondary btn-sm" onclick="window.dashboardApp.openExportModal('${sess.session_id}')">
            ⤓ Export
          </button>
        </div>
      `;

      container.appendChild(card);
    }
  }

  public openExportModal(sessionId: string) {
    this.exportSessionId = sessionId;
    const sess = this.sessionsList.find((s) => s.session_id === sessionId);
    const modal = document.getElementById('exportMocapModal');
    if (!modal) return;

    const nameEl = document.getElementById('exportModalSessionName');
    const idEl = document.getElementById('exportModalSessionId');
    const calibStatusEl = document.getElementById('exportCalibStatus');
    const uncalibWarn = document.getElementById('exportUncalibWarning');

    if (nameEl) nameEl.innerText = sess ? sess.name : 'Session';
    if (idEl) idEl.innerText = sessionId;

    // Check if session has calibration offsets
    const hasCalib = Boolean(
      sess &&
      sess.metadata &&
      sess.metadata.calibration_offsets &&
      Object.keys(sess.metadata.calibration_offsets).length > 0
    );

    if (calibStatusEl) {
      if (hasCalib) {
        calibStatusEl.innerHTML = `<span class="badge-calib badge-calib-done">✓ Pose Calibrated</span> <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.4rem;">Offsets stored at recording start</span>`;
        if (uncalibWarn) uncalibWarn.style.display = 'none';
      } else {
        calibStatusEl.innerHTML = `<span class="badge-calib badge-calib-pending">⚠️ No Calibration</span> <span style="font-size: 0.75rem; color: #f87171; margin-left: 0.4rem;">Recorded without N-pose calibration</span>`;
        if (uncalibWarn) uncalibWarn.style.display = 'block';
      }
    }

    modal.style.display = 'flex';
  }

  public closeExportModal() {
    const modal = document.getElementById('exportMocapModal');
    if (modal) modal.style.display = 'none';
    this.exportSessionId = null;
  }

  public triggerExportDownload() {
    if (!this.exportSessionId) return;

    const formatEl = document.querySelector('input[name="exportFormat"]:checked') as HTMLInputElement;
    const format = formatEl ? formatEl.value : 'bvh';

    const rateInput = document.getElementById('exportRateInput') as HTMLInputElement;
    const rate = rateInput ? parseFloat(rateInput.value) || 30 : 30;

    const exportUrl = `/v1/sessions/${this.exportSessionId}/export?format=${format}&rate=${rate}&allow_uncalibrated=true`;

    const a = document.createElement('a');
    a.href = exportUrl;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    this.closeExportModal();
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
    if (headerSub) headerSub.innerText = 'Live Quaternion Forward Kinematics';

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

  private initFlashUI() {
    const roleSelect = document.getElementById('flashRoleSelect') as HTMLSelectElement;
    const hostInput = document.getElementById('flashServerHost') as HTMLInputElement;
    const portInput = document.getElementById('flashServerPort') as HTMLInputElement;
    const btnStartFlash = document.getElementById('btnStartFlash') as HTMLButtonElement;
    const btnClearLog = document.getElementById('btnClearFlashLog') as HTMLButtonElement;
    const btnGoAvatar = document.getElementById('btnViewOnlineAvatar') as HTMLButtonElement;

    // Default host & port
    if (hostInput && window.location.hostname && window.location.hostname !== 'localhost') {
      hostInput.value = window.location.hostname;
    }
    if (portInput && window.location.port) {
      portInput.value = window.location.port;
    }

    // Populate roles dropdown
    const ALL_ROLES = [
      'chest',
      'left_shoulder',
      'right_shoulder',
      'left_upper_arm',
      'right_upper_arm',
      'left_elbow',
      'right_elbow',
      'left_forearm',
      'right_forearm',
      'left_hand',
      'right_hand',
      'left_thigh',
      'right_thigh',
      'left_shin',
      'right_shin',
      'left_foot',
      'right_foot',
    ];

    if (roleSelect) {
      roleSelect.innerHTML = '';
      for (const r of ALL_ROLES) {
        const opt = document.createElement('option');
        opt.value = r;
        opt.text = `${r.replace(/_/g, ' ')} (${r})`;
        roleSelect.appendChild(opt);
      }
    }

    if (btnClearLog) {
      btnClearLog.addEventListener('click', () => {
        const consoleLog = document.getElementById('flashConsoleLog');
        if (consoleLog) consoleLog.textContent = '';
      });
    }

    if (btnGoAvatar) {
      btnGoAvatar.addEventListener('click', () => {
        const tabTrackers = document.getElementById('tabTrackers');
        if (tabTrackers) tabTrackers.click();
      });
    }

    const btnQuickProvision = document.getElementById('btnQuickProvision') as HTMLButtonElement;

    const setupFlasherInstance = (btn1: HTMLButtonElement, btn2: HTMLButtonElement | null) => {
      const consoleLog = document.getElementById('flashConsoleLog')!;
      const switchOnCard = document.getElementById('switchOnTrackerCard')!;
      const successCard = document.getElementById('flashSuccessCard')!;
      const progressFill = document.getElementById('flashProgressBarFill')!;
      const progressText = document.getElementById('flashProgressText')!;

      return new TrackerFlasher({
        onStepChange: (stepNum, stepName) => {
          for (let i = 1; i <= 6; i++) {
            const el = document.getElementById(`stepItem${i}`);
            if (el) {
              if (i < stepNum) el.className = 'step-row done';
              else if (i === stepNum) el.className = 'step-row active';
              else el.className = 'step-row pending';
            }
          }
          progressText.innerText = stepName;
          progressFill.style.width = `${Math.round(((stepNum - 1) / 6) * 100)}%`;
        },
        onProgress: (status, pct) => {
          progressText.innerText = status;
          progressFill.style.width = `${pct}%`;
        },
        onLog: (text) => {
          consoleLog.textContent += text;
          consoleLog.scrollTop = consoleLog.scrollHeight;
        },
        onSwitchOnPrompt: (mac) => {
          switchOnCard.style.display = 'flex';
          const switchText = switchOnCard.querySelector('p');
          if (switchText) {
            switchText.innerHTML = `Device <strong>${mac}</strong> configured! Ensure power is ON. Waiting for it to connect to WiFi and announce...`;
          }
        },
        onSuccess: (mac, provisionedRole) => {
          for (let i = 1; i <= 6; i++) {
            const el = document.getElementById(`stepItem${i}`);
            if (el) el.className = 'step-row done';
          }
          progressFill.style.width = '100%';
          progressText.innerText = 'Provisioning & Connection Complete!';
          switchOnCard.style.display = 'none';
          successCard.style.display = 'flex';
          const msgEl = document.getElementById('flashSuccessMessage');
          if (msgEl) {
            msgEl.innerHTML = `Device <strong>${mac}</strong> announced as <strong>${provisionedRole}</strong> and is online!`;
          }
          btn1.disabled = false;
          if (btn2) btn2.disabled = false;
        },
        onError: (err) => {
          btn1.disabled = false;
          if (btn2) btn2.disabled = false;
          progressText.innerText = `Error: ${err.message}`;
          alert(`Flashing / Provisioning Error: ${err.message}`);
        },
      });
    };

    const getFlashFormConfig = () => {
      const role = roleSelect ? roleSelect.value : 'chest';
      const ssidInput = document.getElementById('flashSsid') as HTMLInputElement;
      const passInput = document.getElementById('flashPassword') as HTMLInputElement;
      const tokenInput = document.getElementById('flashToken') as HTMLInputElement;

      const ssid = ssidInput ? ssidInput.value.trim() : '';
      const pass = passInput ? passInput.value : '';
      const host = hostInput ? hostInput.value.trim() || 'pair.local' : 'pair.local';
      const port = portInput ? parseInt(portInput.value || '8000', 10) : 8000;
      const token = tokenInput ? tokenInput.value.trim() : '';

      return { role, ssid, pass, host, port, token };
    };

    const resetStepperUI = (statusText: string) => {
      const statusSection = document.getElementById('flashStatusSection')!;
      const switchOnCard = document.getElementById('switchOnTrackerCard')!;
      const successCard = document.getElementById('flashSuccessCard')!;
      const progressFill = document.getElementById('flashProgressBarFill')!;
      const progressText = document.getElementById('flashProgressText')!;

      statusSection.style.display = 'flex';
      switchOnCard.style.display = 'none';
      successCard.style.display = 'none';
      progressFill.style.width = '0%';
      progressText.innerText = statusText;

      for (let i = 1; i <= 6; i++) {
        const el = document.getElementById(`stepItem${i}`);
        if (el) el.className = 'step-row pending';
      }
    };

    if (btnStartFlash) {
      btnStartFlash.addEventListener('click', async () => {
        const cfg = getFlashFormConfig();
        if (!cfg.ssid) {
          alert('Please enter your WiFi SSID.');
          return;
        }

        resetStepperUI('Connecting...');
        btnStartFlash.disabled = true;
        if (btnQuickProvision) btnQuickProvision.disabled = true;

        this.flasher = setupFlasherInstance(btnStartFlash, btnQuickProvision);

        try {
          await this.flasher.start({
            role: cfg.role,
            ssid: cfg.ssid,
            password: cfg.pass,
            serverHost: cfg.host,
            serverPort: cfg.port,
            token: cfg.token || undefined,
            adminToken: ADMIN_TOKEN,
          });
        } catch (err: any) {
          btnStartFlash.disabled = false;
          if (btnQuickProvision) btnQuickProvision.disabled = false;
        }
      });
    }

    if (btnQuickProvision) {
      btnQuickProvision.addEventListener('click', async () => {
        const cfg = getFlashFormConfig();
        if (!cfg.ssid) {
          alert('Please enter your WiFi SSID.');
          return;
        }

        resetStepperUI('Connecting for Quick Provisioning...');
        btnQuickProvision.disabled = true;
        if (btnStartFlash) btnStartFlash.disabled = true;

        this.flasher = setupFlasherInstance(btnQuickProvision, btnStartFlash);

        try {
          await this.flasher.quickProvision({
            role: cfg.role,
            ssid: cfg.ssid,
            password: cfg.pass,
            serverHost: cfg.host,
            serverPort: cfg.port,
            token: cfg.token || undefined,
            adminToken: ADMIN_TOKEN,
          });
        } catch (err: any) {
          btnQuickProvision.disabled = false;
          if (btnStartFlash) btnStartFlash.disabled = false;
        }
      });
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
      DashboardApp.ALL_BODY_ROLES.forEach((role) => {
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
