import asyncio
import time
from typing import Any, Dict, List, Optional, Set
from fastapi import WebSocket
from server.config import SESSIONS_DIR
from server.db import db
from server.parquet_writer import SessionParquetWriter
from server.protocol import DataFrame, TrackerSample, compute_sequence_gap
from server.roles import roles_registry

class TrackerConnection:
    def __init__(self, device_id: str, role: str, token: str, ws: WebSocket):
        self.device_id = device_id
        self.role = role
        self.role_id = roles_registry.get_role_id(role) or 0
        self.token = token
        self.ws = ws

        self.last_seq: Optional[int] = None
        self.total_samples = 0
        self.dropped_samples = 0
        self.battery_pct: Optional[int] = None
        self.battery_mv: Optional[int] = None
        self.rssi: Optional[int] = None
        self.uptime_s: Optional[int] = None
        self.firmware_version: str = "unknown"
        self.last_seen_ms: int = int(time.time() * 1000)
        self.clock_offset_ms: int = 0
        self.clock_rtt_ms: int = 0

    @property
    def loss_pct(self) -> float:
        total = self.total_samples + self.dropped_samples
        if total == 0:
            return 0.0
        return round((self.dropped_samples / total) * 100.0, 3)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "device_id": self.device_id,
            "role": self.role,
            "role_id": self.role_id,
            "online": True,
            "firmware_version": self.firmware_version,
            "battery_pct": self.battery_pct,
            "battery_mv": self.battery_mv,
            "rssi": self.rssi,
            "uptime_s": self.uptime_s,
            "total_samples": self.total_samples,
            "dropped_samples": self.dropped_samples,
            "loss_pct": self.loss_pct,
            "last_seen_ms": self.last_seen_ms,
            "clock_offset_ms": self.clock_offset_ms,
            "clock_rtt_ms": self.clock_rtt_ms,
        }


class TrackerManager:
    def __init__(self):
        # device_id -> TrackerConnection
        self.active_connections: Dict[str, TrackerConnection] = {}
        # role -> device_id (for fast 1 device per role check)
        self.role_to_device: Dict[str, str] = {}
        # Dashboard WebSocket viewers
        self.dashboard_viewers: Set[WebSocket] = set()

        # Active Session
        self.active_session_id: Optional[str] = None
        self.active_recording_id: Optional[str] = None
        self.active_session_name: Optional[str] = None
        self.parquet_writer: Optional[SessionParquetWriter] = None
        self.session_started_ms: Optional[int] = None

    async def connect_tracker(self, device_id: str, role: str, token: str, ws: WebSocket) -> TrackerConnection:
        # If another device is already streaming with this role, disconnect previous or reject
        if role in self.role_to_device and self.role_to_device[role] != device_id:
            old_dev_id = self.role_to_device[role]
            if old_dev_id in self.active_connections:
                # Close older connection
                try:
                    await self.active_connections[old_dev_id].ws.close(code=1000, reason="Replaced by new device for role")
                except Exception:
                    pass
                del self.active_connections[old_dev_id]

        conn = TrackerConnection(device_id=device_id, role=role, token=token, ws=ws)
        self.active_connections[device_id] = conn
        self.role_to_device[role] = device_id
        db.update_last_seen(device_id)

        # Notify dashboard
        await self.broadcast_dashboard({"type": "device_connected", "device": conn.to_dict()})
        return conn

    async def disconnect_tracker(self, device_id: str):
        if device_id in self.active_connections:
            conn = self.active_connections.pop(device_id)
            if conn.role in self.role_to_device and self.role_to_device[conn.role] == device_id:
                del self.role_to_device[conn.role]
            await self.broadcast_dashboard({"type": "device_disconnected", "device_id": device_id, "role": conn.role})

    def get_online_roles(self) -> Set[str]:
        return set(self.role_to_device.keys())

    def get_device_summary(self) -> List[Dict[str, Any]]:
        # Merges registered devices from DB with live connection states
        all_registered = db.get_all_devices()
        result = []
        registered_ids = set()

        for reg in all_registered:
            dev_id = reg["device_id"]
            registered_ids.add(dev_id)
            if dev_id in self.active_connections:
                result.append(self.active_connections[dev_id].to_dict())
            else:
                role_name = reg["role"]
                result.append({
                    "device_id": dev_id,
                    "role": role_name,
                    "role_id": roles_registry.get_role_id(role_name) or 0,
                    "online": False,
                    "firmware_version": "unknown",
                    "battery_pct": None,
                    "battery_mv": None,
                    "rssi": None,
                    "uptime_s": None,
                    "total_samples": 0,
                    "dropped_samples": 0,
                    "loss_pct": 0.0,
                    "last_seen_ms": reg["last_seen"],
                    "clock_offset_ms": 0,
                    "clock_rtt_ms": 0,
                })

        # Add any active devices that might not be registered yet
        for dev_id, conn in self.active_connections.items():
            if dev_id not in registered_ids:
                result.append(conn.to_dict())

        return result

    # Ingest Processing
    async def process_binary_frame(self, device_id: str, frame: DataFrame):
        conn = self.active_connections.get(device_id)
        if not conn:
            return

        now_ms = int(time.time() * 1000)
        conn.last_seen_ms = now_ms

        for sample in frame.samples:
            if not frame.is_backfill:
                dropped, in_order = compute_sequence_gap(sample.seq, conn.last_seq)
                if in_order:
                    conn.total_samples += 1
                    conn.dropped_samples += dropped
                    conn.last_seq = sample.seq
            else:
                # Backfill samples are counted towards total samples without falsely triggering live packet drops
                conn.total_samples += 1

            if self.parquet_writer and self.active_recording_id:
                self.parquet_writer.write_sample(
                    recording_id=self.active_recording_id,
                    time_ms=sample.t_ms,
                    role=conn.role,
                    seq=sample.seq,
                    server_rx_ms=now_ms,
                    quat_w=sample.quat_w,
                    quat_x=sample.quat_x,
                    quat_y=sample.quat_y,
                    quat_z=sample.quat_z,
                    accel_x=sample.accel_x,
                    accel_y=sample.accel_y,
                    accel_z=sample.accel_z,
                    gyro_x=sample.gyro_x,
                    gyro_y=sample.gyro_y,
                    gyro_z=sample.gyro_z,
                    mag_x=sample.mag_x,
                    mag_y=sample.mag_y,
                    mag_z=sample.mag_z,
                )

        # Broadcast live sample to dashboard viewers (fan-out)
        if self.dashboard_viewers and frame.samples:
            latest = frame.samples[-1]
            await self.broadcast_dashboard({
                "type": "pose_update",
                "device_id": device_id,
                "role": conn.role,
                "seq": latest.seq,
                "t_ms": latest.t_ms,
                "quat": [latest.quat_w, latest.quat_x, latest.quat_y, latest.quat_z],
                "loss_pct": conn.loss_pct,
            })

    async def update_telemetry(self, device_id: str, data: Dict[str, Any]):
        conn = self.active_connections.get(device_id)
        if not conn:
            return

        conn.last_seen_ms = int(time.time() * 1000)
        if "battery_pct" in data:
            conn.battery_pct = data["battery_pct"]
        if "battery_mv" in data:
            conn.battery_mv = data["battery_mv"]
        if "rssi" in data:
            conn.rssi = data["rssi"]
        if "uptime_s" in data:
            conn.uptime_s = data["uptime_s"]

        await self.broadcast_dashboard({"type": "telemetry", "device": conn.to_dict()})

    # Dashboard Management
    def add_dashboard_viewer(self, ws: WebSocket):
        self.dashboard_viewers.add(ws)

    def remove_dashboard_viewer(self, ws: WebSocket):
        self.dashboard_viewers.discard(ws)

    async def broadcast_dashboard(self, message: Dict[str, Any]):
        if not self.dashboard_viewers:
            return
        dead = []
        for ws in list(self.dashboard_viewers):
            try:
                await ws.send_json(message)
            except Exception:
                dead.append(ws)
        for ws in dead:
            self.dashboard_viewers.discard(ws)

    # Session Management
    async def start_session(self, session_id: str, recording_id: str, name: str, description: str) -> Dict[str, Any]:
        if self.active_session_id:
            raise ValueError("A session is already active")

        # Validate required roles
        online_roles = self.get_online_roles()
        missing = [r for r in roles_registry.required_roles if r not in online_roles]
        if missing:
            raise ValueError(f"Missing required roles: {', '.join(missing)}")

        parquet_path = SESSIONS_DIR / f"{session_id}.parquet"
        self.parquet_writer = SessionParquetWriter(parquet_path)
        self.active_session_id = session_id
        self.active_recording_id = recording_id
        self.active_session_name = name
        self.session_started_ms = int(time.time() * 1000)

        # Record in DB
        db.create_session(
            session_id=session_id,
            recording_id=recording_id,
            name=name,
            description=description,
            parquet_path=str(parquet_path),
        )

        # Broadcast 'start' command to all connected devices
        start_cmd = {
            "type": "start",
            "session_id": session_id,
            "recording_id": recording_id,
        }
        for conn in self.active_connections.values():
            try:
                await conn.ws.send_json(start_cmd)
            except Exception:
                pass

        session_info = {
            "session_id": session_id,
            "recording_id": recording_id,
            "name": name,
            "status": "active",
            "started_at": self.session_started_ms,
            "participating_devices": [
                {"device_id": c.device_id, "role": c.role} for c in self.active_connections.values()
            ],
        }

        await self.broadcast_dashboard({"type": "session_started", "session": session_info})
        return session_info

    async def end_session(self, session_id: Optional[str] = None) -> Dict[str, Any]:
        if not self.active_session_id:
            raise ValueError("No active session to end")

        if session_id and session_id != self.active_session_id:
            raise ValueError(f"Active session is {self.active_session_id}, not {session_id}")

        cur_id = self.active_session_id
        # Stop command to trackers
        stop_cmd = {"type": "stop"}
        for conn in self.active_connections.values():
            try:
                await conn.ws.send_json(stop_cmd)
            except Exception:
                pass

        total_samples = 0
        parquet_path = ""
        if self.parquet_writer:
            self.parquet_writer.close()
            total_samples = self.parquet_writer.total_samples_written
            parquet_path = str(self.parquet_writer.file_path)
            self.parquet_writer = None

        db.end_session(cur_id, total_samples)

        ended_info = {
            "session_id": cur_id,
            "status": "completed",
            "ended_at": int(time.time() * 1000),
            "total_samples": total_samples,
            "parquet_path": parquet_path,
        }

        self.active_session_id = None
        self.active_recording_id = None
        self.active_session_name = None
        self.session_started_ms = None

        await self.broadcast_dashboard({"type": "session_ended", "session": ended_info})
        return ended_info

    # Tracker Command Dispatch
    async def send_command_to_device(self, device_id: str, command: Dict[str, Any]) -> bool:
        conn = self.active_connections.get(device_id)
        if not conn:
            return False
        try:
            await conn.ws.send_json(command)
            return True
        except Exception:
            return False

tracker_manager = TrackerManager()
