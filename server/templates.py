DASHBOARD_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eidon Tracker WiFi Dashboard</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #38bdf8;
      --success: #22c55e;
      --warning: #eab308;
      --danger: #ef4444;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 24px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    h1 { margin: 0; font-size: 1.6rem; font-weight: 700; color: var(--accent); }
    .status-badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      background: #1e3a5f;
      color: var(--accent);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
    }
    .card-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.9rem;
    }
    th, td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--border);
    }
    th { color: var(--text-muted); font-weight: 600; }
    .badge {
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .badge-online { background: rgba(34, 197, 94, 0.2); color: var(--success); }
    .badge-offline { background: rgba(239, 68, 68, 0.2); color: var(--danger); }
    button {
      background: var(--accent);
      color: #0f172a;
      border: none;
      padding: 8px 14px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.85rem;
      transition: opacity 0.2s;
    }
    button:hover { opacity: 0.9; }
    .btn-danger { background: var(--danger); color: #fff; }
    .btn-secondary { background: #475569; color: #fff; }
    .btn-small { padding: 4px 8px; font-size: 0.75rem; margin-right: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>Eidon Tracker WiFi</h1>
      <small style="color: var(--text-muted);">Real-time IMU Body Tracking Hub &bull; mDNS: eidon.local</small>
    </div>
    <div id="connectionStatus" class="status-badge">Connecting WebSocket...</div>
  </div>

  <div class="grid">
    <div class="card">
      <div class="card-title">Session Control</div>
      <div id="sessionState" style="margin-bottom: 14px; color: var(--text-muted);">No active recording session.</div>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="sessionName" placeholder="Session Name (e.g. Run 1)" style="flex: 1; padding: 8px 12px; background: #0f172a; border: 1px solid var(--border); color: #fff; border-radius: 6px;">
        <button onclick="startSession()" id="btnStart">Start Session</button>
        <button onclick="endSession()" class="btn-danger" id="btnEnd" style="display: none;">End Session</button>
      </div>
      <div id="sessionError" style="color: var(--danger); font-size: 0.85rem; margin-top: 8px;"></div>
    </div>

    <div class="card">
      <div class="card-title">System Metrics</div>
      <div style="display: flex; justify-content: space-around; text-align: center;">
        <div>
          <div id="onlineCount" style="font-size: 1.8rem; font-weight: 700; color: var(--success);">0</div>
          <div style="color: var(--text-muted); font-size: 0.85rem;">Online Trackers</div>
        </div>
        <div>
          <div id="totalSamples" style="font-size: 1.8rem; font-weight: 700; color: var(--accent);">0</div>
          <div style="color: var(--text-muted); font-size: 0.85rem;">Session Samples</div>
        </div>
        <div>
          <div id="overallLoss" style="font-size: 1.8rem; font-weight: 700; color: var(--warning);">0.00%</div>
          <div style="color: var(--text-muted); font-size: 0.85rem;">Avg Packet Loss</div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-title" style="display: flex; justify-content: space-between; align-items: center;">
      <span>Connected Trackers & Roles</span>
      <button onclick="fetchDevices()" class="btn-secondary btn-small">Refresh</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Device ID</th>
          <th>Status</th>
          <th>Battery</th>
          <th>RSSI</th>
          <th>Samples</th>
          <th>Loss %</th>
          <th>Clock Offset</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="deviceTableBody">
        <tr><td colspan="9" style="text-align: center; color: var(--text-muted);">Loading devices...</td></tr>
      </tbody>
    </table>
  </div>

  <script>
    let activeSession = null;
    const adminToken = "eidon_admin_secret";

    async function fetchDevices() {
      try {
        const res = await fetch('/v1/devices');
        const devices = await res.json();
        renderDevices(devices);
      } catch (err) {
        console.error("Failed to fetch devices", err);
      }
    }

    function renderDevices(devices) {
      const tbody = document.getElementById('deviceTableBody');
      if (!devices || devices.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align: center; color: var(--text-muted);">No devices registered or online yet.</td></tr>';
        document.getElementById('onlineCount').innerText = '0';
        return;
      }

      let online = 0;
      let totalLoss = 0;
      let lossCount = 0;

      let html = '';
      devices.forEach(d => {
        if (d.online) {
          online++;
          totalLoss += d.loss_pct || 0;
          lossCount++;
        }
        const statusBadge = d.online 
          ? '<span class="badge badge-online">ONLINE</span>' 
          : '<span class="badge badge-offline">OFFLINE</span>';
        
        const batt = d.battery_pct !== null ? `${d.battery_pct}% (${d.battery_mv || '?'} mV)` : '—';
        const rssi = d.rssi !== null ? `${d.rssi} dBm` : '—';
        const offset = d.clock_offset_ms ? `${d.clock_offset_ms} ms` : '—';

        html += `<tr>
          <td><strong>${d.role}</strong></td>
          <td><code>${d.device_id}</code></td>
          <td>${statusBadge}</td>
          <td>${batt}</td>
          <td>${rssi}</td>
          <td>${d.total_samples.toLocaleString()}</td>
          <td style="color: ${d.loss_pct > 1.0 ? 'var(--danger)' : 'var(--text)'}">${d.loss_pct.toFixed(2)}%</td>
          <td>${offset}</td>
          <td>
            <button class="btn-secondary btn-small" onclick="sendCommand('${d.device_id}', 'identify')">Blink</button>
            <button class="btn-secondary btn-small" onclick="sendCommand('${d.device_id}', 'reboot')">Reboot</button>
          </td>
        </tr>`;
      });

      tbody.innerHTML = html;
      document.getElementById('onlineCount').innerText = online;
      document.getElementById('overallLoss').innerText = lossCount > 0 ? (totalLoss / lossCount).toFixed(2) + '%' : '0.00%';
    }

    async function sendCommand(deviceId, cmd) {
      try {
        await fetch(`/v1/devices/${deviceId}/command`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${adminToken}` },
          body: JSON.stringify({ type: cmd })
        });
      } catch (e) {
        alert("Command failed: " + e);
      }
    }

    async function startSession() {
      const name = document.getElementById('sessionName').value.trim() || 'Session';
      document.getElementById('sessionError').innerText = '';
      try {
        const res = await fetch('/v1/sessions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${adminToken}` },
          body: JSON.stringify({ name: name })
        });
        if (!res.ok) {
          const err = await res.json();
          document.getElementById('sessionError').innerText = err.detail || 'Failed to start session';
          return;
        }
        const data = await res.json();
        updateSessionUI(data);
      } catch (e) {
        document.getElementById('sessionError').innerText = e.message;
      }
    }

    async function endSession() {
      if (!activeSession) return;
      try {
        const res = await fetch(`/v1/sessions/${activeSession.session_id}/end`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        const data = await res.json();
        alert(`Session ended. Parquet saved: ${data.total_samples} samples.`);
        updateSessionUI(null);
      } catch (e) {
        alert("Failed to end session: " + e);
      }
    }

    function updateSessionUI(session) {
      activeSession = session;
      const stateEl = document.getElementById('sessionState');
      const btnStart = document.getElementById('btnStart');
      const btnEnd = document.getElementById('btnEnd');
      if (session) {
        stateEl.innerHTML = `<span style="color: var(--success); font-weight: 600;">ACTIVE:</span> ${session.name} (<code>${session.session_id}</code>)`;
        btnStart.style.display = 'none';
        btnEnd.style.display = 'inline-block';
      } else {
        stateEl.innerText = 'No active recording session.';
        btnStart.style.display = 'inline-block';
        btnEnd.style.display = 'none';
      }
    }

    // Live Dashboard WebSocket
    function connectWS() {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/v1/dashboard`;
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        document.getElementById('connectionStatus').innerText = 'Connected Live';
        document.getElementById('connectionStatus').style.background = '#064e3b';
        document.getElementById('connectionStatus').style.color = '#34d399';
        fetchDevices();
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.type === 'device_connected' || msg.type === 'device_disconnected' || msg.type === 'telemetry') {
          fetchDevices();
        } else if (msg.type === 'session_started') {
          updateSessionUI(msg.session);
        } else if (msg.type === 'session_ended') {
          updateSessionUI(null);
        }
      };

      ws.onclose = () => {
        document.getElementById('connectionStatus').innerText = 'Disconnected (Reconnecting...)';
        document.getElementById('connectionStatus').style.background = '#450a0a';
        document.getElementById('connectionStatus').style.color = '#f87171';
        setTimeout(connectWS, 2000);
      };
    }

    fetchDevices();
    connectWS();
  </script>
</body>
</html>
"""
