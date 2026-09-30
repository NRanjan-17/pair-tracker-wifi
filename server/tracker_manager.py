import asyncio
import time
from typing import Any, Dict, List, Optional, Set
import uuid
from fastapi import WebSocket
from server.config import SESSIONS_DIR
from server.db import db
from server.parquet_writer import SessionParquetWriter
from server.protocol import (
    DataFrame,
    REQUIRED_PROTOCOL_VERSION,
    TrackerSample,
    compute_sequence_gap,
)
from server.roles import roles_registry

class OTAJob:
    def __init__(self, job_id: str, device_id: str, version: str):
        self.job_id = job_id
        self.device_id = device_id
        self.version = version
        self.status = "queued"  # queued, downloading, verifying, rebooting, success, failed
        self.progress_pct: int = 0
        self.error_message: Optional[str] = None
        self.created_at_ms: int = int(time.time() * 1000)
        self.updated_at_ms: int = int(time.time() * 1000)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "job_id": self.job_id,
            "device_id": self.device_id,
            "version": self.version,
            "status": self.status,
            "progress_pct": self.progress_pct,
            "error_message": self.error_message,
            "created_at_ms": self.created_at_ms,
            "updated_at_ms": self.updated_at_ms,
        }

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
        self.hw: str = "esp32c6"
        self.flash_size: Optional[int] = None
        self.free_heap: Optional[int] = None
        self.firmware_version: str = "unknown"
        self.protocol_version: int = 1
        self.protocol_outdated: bool = False
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
            "hw": self.hw,
            "flash_size": self.flash_size,
            "free_heap": self.free_heap,
            "firmware_version": self.firmware_version,
            "protocol_version": self.protocol_version,
            "protocol_outdated": self.protocol_outdated,
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
        self.last_broadcast_sample_time: Dict[str, float] = {}
        self.cached_announced_telemetry: Dict[str, Dict[str, Any]] = {}

        # Active Session
        self.active_session_id: Optional[str] = None
        self.active_recording_id: Optional[str] = None
        self.active_session_name: Optional[str] = None
        self.active_session_calibration_offsets: Optional[Dict[str, List[float]]] = None
        self.parquet_writer: Optional[SessionParquetWriter] = None
        self.session_started_ms: Optional[int] = None

        # OTA Jobs
        self.ota_jobs: Dict[str, OTAJob] = {}
        self.device_to_ota_job: Dict[str, str] = {}  # device_id -> active job_id

    def cache_announced_telemetry(
        self,
        device_id: str,
        battery_pct: Optional[int],
        battery_mv: Optional[int],
        firmware_version: Optional[str] = None,
        protocol_version: Optional[int] = None,
        hw: Optional[str] = None,
        flash_size: Optional[int] = None,
        free_heap: Optional[int] = None,
    ):
        cached = self.cached_announced_telemetry.get(device_id, {})
        if battery_pct is not None:
            cached["battery_pct"] = battery_pct
        if battery_mv is not None:
            cached["battery_mv"] = battery_mv
        if firmware_version is not None:
            cached["firmware_version"] = firmware_version
        if protocol_version is not None:
            cached["protocol_version"] = protocol_version
        if hw is not None:
            cached["hw"] = hw
        if flash_size is not None:
            cached["flash_size"] = flash_size
        if free_heap is not None:
            cached["free_heap"] = free_heap

        self.cached_announced_telemetry[device_id] = cached

        if device_id in self.active_connections:
            conn = self.active_connections[device_id]
            if battery_pct is not None:
                conn.battery_pct = battery_pct
            if battery_mv is not None:
                conn.battery_mv = battery_mv
            if firmware_version is not None:
                conn.firmware_version = firmware_version
            if protocol_version is not None:
                conn.protocol_version = protocol_version
                conn.protocol_outdated = (protocol_version < REQUIRED_PROTOCOL_VERSION)
            if hw is not None:
                conn.hw = hw
            if flash_size is not None:
                conn.flash_size = flash_size
            if free_heap is not None:
                conn.free_heap = free_heap

    def create_ota_job(self, device_id: str, version: str) -> OTAJob:
        job_id = f"job_ota_{uuid.uuid4().hex[:12]}"
        job = OTAJob(job_id=job_id, device_id=device_id, version=version)
        self.ota_jobs[job_id] = job
        self.device_to_ota_job[device_id] = job_id
        return job

    def get_ota_job_for_device(self, device_id: str) -> Optional[OTAJob]:
        job_id = self.device_to_ota_job.get(device_id)
        if job_id:
            return self.ota_jobs.get(job_id)
        return None

    def get_all_ota_jobs(self) -> List[Dict[str, Any]]:
        return [job.to_dict() for job in self.ota_jobs.values()]

    async def update_ota_job_progress(
        self,
        device_id: str,
        status: str,
        progress_pct: Optional[int] = None,
        error: Optional[str] = None,
    ):
        job = self.get_ota_job_for_device(device_id)
        if not job:
            return
        job.status = status
        if progress_pct is not None:
            job.progress_pct = max(0, min(100, int(progress_pct)))
        if error is not None:
            job.error_message = str(error)
        job.updated_at_ms = int(time.time() * 1000)
        await self.broadcast_dashboard({"type": "ota_job_update", "job": job.to_dict()})

    async def handle_device_announce_ota(self, device_id: str, announced_version: str):
        job = self.get_ota_job_for_device(device_id)
        if not job:
            return
        if job.status in ("queued", "downloading", "verifying", "rebooting"):
            if announced_version == job.version:
                job.status = "success"
                job.progress_pct = 100
                job.error_message = None
                job.updated_at_ms = int(time.time() * 1000)
            else:
                job.status = "failed"
                job.error_message = f"Firmware rollback or mismatch: announced {announced_version}, expected {job.version}"
                job.updated_at_ms = int(time.time() * 1000)
            await self.broadcast_dashboard({"type": "ota_job_update", "job": job.to_dict()})

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
        dev_row = db.get_device(device_id)
        if dev_row:
            if dev_row.get("hw"):
                conn.hw = dev_row["hw"]
            if dev_row.get("flash_size"):
                conn.flash_size = dev_row["flash_size"]
            if dev_row.get("free_heap"):
                conn.free_heap = dev_row["free_heap"]

        if device_id in self.cached_announced_telemetry:
            cached = self.cached_announced_telemetry[device_id]
            if cached.get("hw"):
                conn.hw = cached["hw"]
            if cached.get("flash_size") is not None:
                conn.flash_size = cached["flash_size"]
            if cached.get("free_heap") is not None:
                conn.free_heap = cached["free_heap"]
            conn.battery_pct = cached.get("battery_pct")
            conn.battery_mv = cached.get("battery_mv")
            if cached.get("firmware_version"):
                conn.firmware_version = cached["firmware_version"]
            if cached.get("protocol_version") is not None:
                conn.protocol_version = cached["protocol_version"]
                conn.protocol_outdated = (conn.protocol_version < REQUIRED_PROTOCOL_VERSION)

        self.active_connections[device_id] = conn
        self.role_to_device[role] = device_id
        db.update_last_seen(device_id)

        # Notify dashboard
        device_dict = conn.to_dict()
        await self.broadcast_dashboard({"type": "device_connected", "device": device_dict})
        await self.broadcast_dashboard({"type": "device_state", **device_dict})
        return conn

    async def disconnect_tracker(self, device_id: str):
        if device_id in self.active_connections:
            conn = self.active_connections.pop(device_id)
            if conn.role in self.role_to_device and self.role_to_device[conn.role] == device_id:
                del self.role_to_device[conn.role]
            await self.broadcast_dashboard({"type": "device_disconnected", "device_id": device_id, "role": conn.role})
            await self.broadcast_dashboard({
                "type": "device_state",
                "device_id": device_id,
                "role": conn.role,
                "role_id": conn.role_id,
                "online": False,
                "hw": conn.hw,
                "flash_size": conn.flash_size,
                "free_heap": conn.free_heap,
                "firmware_version": conn.firmware_version,
                "protocol_version": conn.protocol_version,
                "protocol_outdated": conn.protocol_outdated,
                "battery_pct": None,
                "battery_mv": None,
                "rssi": None,
                "loss_pct": conn.loss_pct,
                "last_seen_ms": conn.last_seen_ms,
                "uptime_s": None,
            })

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
                cached = self.cached_announced_telemetry.get(dev_id, {})
                cached_fw = cached.get("firmware_version", "unknown")
                cached_proto = cached.get("protocol_version", 1)
                result.append({
                    "device_id": dev_id,
                    "role": role_name,
                    "role_id": roles_registry.get_role_id(role_name) or 0,
                    "online": False,
                    "hw": reg.get("hw") or cached.get("hw") or "esp32c6",
                    "flash_size": reg.get("flash_size") or cached.get("flash_size") or 0,
                    "free_heap": reg.get("free_heap") or cached.get("free_heap") or 0,
                    "firmware_version": cached_fw,
                    "protocol_version": cached_proto,
                    "protocol_outdated": (cached_proto < REQUIRED_PROTOCOL_VERSION),
                    "battery_pct": cached.get("battery_pct"),
                    "battery_mv": cached.get("battery_mv"),
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

        # Attach active OTA job info if present
        for dev in result:
            job = self.get_ota_job_for_device(dev["device_id"])
            dev["ota_job"] = job.to_dict() if job else None

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

        # Broadcast live sample to dashboard viewers (throttled to 60 Hz per device)
        if self.dashboard_viewers and frame.samples:
            now_mono = time.monotonic()
            last_broadcast = self.last_broadcast_sample_time.get(device_id, 0.0)
            if (now_mono - last_broadcast) >= (1.0 / 60.0):
                self.last_broadcast_sample_time[device_id] = now_mono
                latest = frame.samples[-1]
                server_now_ms = int(time.time() * 1000)
                sample_msg = {
                    "type": "sample",
                    "device_id": device_id,
                    "role": conn.role,
                    "seq": latest.seq,
                    "t_ms": latest.t_ms,
                    "server_time_ms": server_now_ms,
                    "quat": [latest.quat_w, latest.quat_x, latest.quat_y, latest.quat_z],
                    "accel": [latest.accel_x, latest.accel_y, latest.accel_z] if latest.accel_x is not None else None,
                    "gyro": [latest.gyro_x, latest.gyro_y, latest.gyro_z] if latest.gyro_x is not None else None,
                    "mag": [latest.mag_x, latest.mag_y, latest.mag_z] if latest.mag_x is not None else None,
                    "loss_pct": conn.loss_pct,
                }
                await self.broadcast_dashboard(sample_msg)
                await self.broadcast_dashboard({
                    "type": "pose_update",
                    "device_id": device_id,
                    "role": conn.role,
                    "seq": latest.seq,
                    "t_ms": latest.t_ms,
                    "server_time_ms": server_now_ms,
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
        if "hw" in data:
            conn.hw = data["hw"]
        if "flash_size" in data:
            conn.flash_size = data["flash_size"]
        if "free_heap" in data:
            conn.free_heap = data["free_heap"]

        db.update_device_metrics(
            device_id=device_id,
            hw=conn.hw,
            flash_size=conn.flash_size,
            free_heap=conn.free_heap,
        )

        device_dict = conn.to_dict()
        await self.broadcast_dashboard({"type": "telemetry", "device": device_dict})
        await self.broadcast_dashboard({"type": "device_state", **device_dict})

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
    async def start_session(
        self,
        session_id: str,
        recording_id: str,
        name: str,
        description: str,
        calibration_offsets: Optional[Dict[str, List[float]]] = None,
    ) -> Dict[str, Any]:
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
        self.active_session_calibration_offsets = calibration_offsets
        self.session_started_ms = int(time.time() * 1000)

        # Initial metadata
        initial_metadata = {
            "session_id": session_id,
            "recording_id": recording_id,
            "name": name,
            "calibration_offsets": calibration_offsets or {},
            "roles": list(online_roles),
        }

        # Record in DB
        db.create_session(
            session_id=session_id,
            recording_id=recording_id,
            name=name,
            description=description,
            parquet_path=str(parquet_path),
            metadata=initial_metadata,
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
            "calibration_offsets": calibration_offsets or {},
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

        # Build session metadata
        per_device_loss = {conn.role: conn.loss_pct for conn in self.active_connections.values()}
        firmware_vers = {conn.role: conn.firmware_version for conn in self.active_connections.values()}
        active_roles = list(self.get_online_roles())
        metadata = {
            "session_id": cur_id,
            "recording_id": self.active_recording_id or "",
            "name": self.active_session_name or "",
            "calibration_offsets": self.active_session_calibration_offsets or {},
            "per_device_loss_pct": per_device_loss,
            "firmware_versions": firmware_vers,
            "roles": active_roles,
        }

        db.end_session(cur_id, total_samples, metadata=metadata)

        # Write initial metadata.json to sessions dir
        metadata_file = SESSIONS_DIR / f"{cur_id}_metadata.json"
        try:
            with open(metadata_file, "w", encoding="utf-8") as f:
                json.dump(metadata, f, indent=2)
        except Exception:
            pass

        ended_info = {
            "session_id": cur_id,
            "status": "completed",
            "ended_at": int(time.time() * 1000),
            "total_samples": total_samples,
            "parquet_path": parquet_path,
            "metadata": metadata,
        }

        self.active_session_id = None
        self.active_recording_id = None
        self.active_session_name = None
        self.active_session_calibration_offsets = None
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
