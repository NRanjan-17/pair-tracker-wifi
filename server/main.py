import asyncio
from contextlib import asynccontextmanager
import json
from pathlib import Path
import time
from typing import Any, Dict, Optional
import uuid

from fastapi import Depends, FastAPI, Header, HTTPException, Query, WebSocket, WebSocketDisconnect, status
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, Response
from pydantic import BaseModel, Field

from server.config import ADMIN_TOKEN, SERVER_HOST, SERVER_PORT, SESSIONS_DIR
from server.db import db
from server.mdns import mdns_service
from server.mocap_exporter import (
    MocapSessionProcessor,
    build_metadata_json,
    generate_bvh,
    generate_csv,
    generate_parquet,
)
from server.parquet_writer import SessionParquetWriter
from server.protocol import DataFrame, decode_frame
from server.roles import roles_registry
from server.templates import DASHBOARD_HTML
from server.tracker_manager import tracker_manager

SERVER_START_TIME = time.time()

# Background Clock Sync Task
async def periodic_clock_sync():
    while True:
        try:
            await asyncio.sleep(15)
            now_ms = int(time.time() * 1000)
            sync_msg = {"type": "time_sync", "t0": now_ms}
            for conn in list(tracker_manager.active_connections.values()):
                try:
                    await conn.ws.send_json(sync_msg)
                except Exception:
                    pass
        except asyncio.CancelledError:
            break
        except Exception:
            pass

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: start mDNS and background tasks
    mdns_service.start()
    sync_task = asyncio.create_task(periodic_clock_sync())
    yield
    # Shutdown
    sync_task.cancel()
    if tracker_manager.active_session_id:
        try:
            await tracker_manager.end_session()
        except Exception:
            pass
    mdns_service.stop()

app = FastAPI(
    title="Eidon Tracker WiFi API",
    version="1.0.0",
    description="Local backend for WiFi-based IMU body trackers",
    lifespan=lifespan,
)

# Auth Helpers
def verify_admin_token(authorization: Optional[str] = Header(None)) -> bool:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid Bearer token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = authorization[7:].strip()
    if token != ADMIN_TOKEN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Invalid admin credentials",
        )
    return True

def verify_device_auth(device_id: str, token: str) -> bool:
    dev = db.get_device(device_id)
    if not dev:
        # Auto-accept if device not pre-registered, or verify token
        return True
    return dev.get("token") == token

# Request / Response Schemas
class DeviceRegisterRequest(BaseModel):
    device_id: str = Field(..., description="Device MAC address or unique ID")
    role: str = Field(..., description="Body role identifier")
    token: Optional[str] = Field(None, description="Per-device authentication token (generated if omitted)")
    notes: Optional[str] = Field("", description="Optional notes or placement details")

class DeviceAnnounceRequest(BaseModel):
    device_id: str
    role: str
    firmware_version: Optional[str] = "1.0.0"
    battery_pct: Optional[int] = None
    battery_mv: Optional[int] = None

class SessionCreateRequest(BaseModel):
    name: Optional[str] = "Tracking Session"
    description: Optional[str] = ""
    calibration_offsets: Optional[Dict[str, Any]] = None

class DeviceCommandRequest(BaseModel):
    type: str
    duration_ms: Optional[int] = 3000

DASHBOARD_DIST_DIR = Path(__file__).resolve().parent.parent / "dashboard" / "dist"
DASHBOARD_ASSETS_DIR = DASHBOARD_DIST_DIR / "assets"
FIRMWARE_BIN_DIR = Path(__file__).resolve().parent / "firmware_bin"

# REST Endpoints
@app.get("/")
async def get_dashboard():
    index_path = DASHBOARD_DIST_DIR / "index.html"
    if index_path.exists():
        return FileResponse(index_path)
    return HTMLResponse(content=DASHBOARD_HTML)

@app.get("/assets/{asset_path:path}")
async def get_dashboard_asset(asset_path: str):
    asset_file = DASHBOARD_ASSETS_DIR / asset_path
    if asset_file.exists() and asset_file.is_file():
        return FileResponse(asset_file)
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Asset not found")

# Firmware & Web Serial Flashing Endpoints
# TODO: OTA (Over-The-Air) firmware update is out of scope for current milestone.
# Future milestone will implement POST /v1/firmware/ota to trigger self-update over WiFi.

@app.get("/v1/firmware/manifest")
async def get_firmware_manifest():
    """
    Returns ESP32-C6 flash partition offsets and paths for Web Serial esptool-js flashing.
    """
    manifest_parts = [
        {"name": "bootloader.bin", "offset": 0, "path": "/v1/firmware/bootloader.bin"},
        {"name": "partitions.bin", "offset": 32768, "path": "/v1/firmware/partitions.bin"}, # 0x8000
        {"name": "boot_app0.bin", "offset": 57344, "path": "/v1/firmware/boot_app0.bin"},   # 0xe000
        {"name": "firmware.bin", "offset": 65536, "path": "/v1/firmware/firmware.bin"},     # 0x10000
    ]
    available = []
    for part in manifest_parts:
        file_path = FIRMWARE_BIN_DIR / part["name"]
        if file_path.exists():
            part["size"] = file_path.stat().st_size
            available.append(part)

    return {
        "chip": "esp32c6",
        "board": "seeed_xiao_esp32c6",
        "version": "1.0.0",
        "parts": available,
    }

@app.get("/v1/firmware/{filename}")
async def get_firmware_binary(filename: str):
    safe_name = Path(filename).name
    file_path = FIRMWARE_BIN_DIR / safe_name
    if not file_path.exists() or not file_path.is_file():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Firmware binary not found")
    return FileResponse(file_path, media_type="application/octet-stream", filename=safe_name)

@app.get("/healthz")
async def healthz():
    return {
        "status": "healthy",
        "uptime_s": int(time.time() - SERVER_START_TIME),
        "connected_devices": len(tracker_manager.active_connections),
        "active_session": tracker_manager.active_session_id,
    }

@app.post("/v1/devices/register", status_code=status.HTTP_201_CREATED)
async def register_device(
    payload: DeviceRegisterRequest,
    _admin: bool = Depends(verify_admin_token),
):
    if not roles_registry.is_valid_role(payload.role):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid role '{payload.role}'. Must be one of valid roles.",
        )

    # Use supplied token or auto-generate secure token
    token = payload.token or f"tok_{uuid.uuid4().hex[:16]}"
    dev = db.register_device(
        device_id=payload.device_id,
        role=payload.role,
        token=token,
        notes=payload.notes or "",
    )
    return {
        "status": "registered",
        "device_id": dev["device_id"],
        "role": dev["role"],
        "role_id": roles_registry.get_role_id(dev["role"]),
        "token": dev["token"],
    }

@app.post("/v1/devices/announce")
async def announce_device(
    payload: DeviceAnnounceRequest,
    authorization: Optional[str] = Header(None),
):
    # Check if device is registered in DB
    existing = db.get_device(payload.device_id)
    if existing:
        # Validate role rule: reject or alert when device announces role different from registered one
        if existing["role"] != payload.role:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Role mismatch: announced '{payload.role}' but registered as '{existing['role']}'",
            )
        # Check token if header provided
        if authorization and authorization.startswith("Bearer "):
            token = authorization[7:].strip()
            if existing["token"] and token != existing["token"]:
                raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid device token")
    else:
        # If not registered, auto-register with default or provided role
        token = authorization[7:].strip() if (authorization and authorization.startswith("Bearer ")) else "default_token"
        db.register_device(payload.device_id, payload.role, token)

    now_ms = int(time.time() * 1000)
    db.update_last_seen(payload.device_id, now_ms)
    tracker_manager.cache_announced_telemetry(payload.device_id, payload.battery_pct, payload.battery_mv)

    return {
        "status": "ok",
        "role": payload.role,
        "role_id": roles_registry.get_role_id(payload.role) or 0,
        "session_active": tracker_manager.active_session_id is not None,
        "recording_id": tracker_manager.active_recording_id,
        "server_time_ms": now_ms,
    }

@app.get("/v1/devices")
async def list_devices():
    return tracker_manager.get_device_summary()

@app.post("/v1/devices/{device_id}/command")
async def send_device_command(
    device_id: str,
    payload: DeviceCommandRequest,
    _admin: bool = Depends(verify_admin_token),
):
    cmd = {"type": payload.type}
    if payload.duration_ms:
        cmd["duration_ms"] = payload.duration_ms
    ok = await tracker_manager.send_command_to_device(device_id, cmd)
    if not ok:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Device not connected")
    return {"status": "command_sent", "command": cmd}

# Sessions Endpoints
@app.post("/v1/sessions", status_code=status.HTTP_201_CREATED)
async def start_session(
    payload: SessionCreateRequest,
    _admin: bool = Depends(verify_admin_token),
):
    session_id = f"sess_{uuid.uuid4()}"
    recording_id = f"rec_{int(time.time())}"
    try:
        session_info = await tracker_manager.start_session(
            session_id=session_id,
            recording_id=recording_id,
            name=payload.name or "Session",
            description=payload.description or "",
            calibration_offsets=payload.calibration_offsets,
        )
        return session_info
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=str(e))

@app.post("/v1/sessions/{session_id}/end")
async def end_session(
    session_id: str,
    _admin: bool = Depends(verify_admin_token),
):
    try:
        ended_info = await tracker_manager.end_session(session_id=session_id)
        return ended_info
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))

@app.get("/v1/sessions")
async def list_sessions():
    return db.get_all_sessions()

@app.get("/v1/sessions/{session_id}")
async def get_session(session_id: str):
    sess = db.get_session(session_id)
    if not sess:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")
    return sess

@app.get("/v1/sessions/{session_id}/data")
async def get_session_data(session_id: str):
    sess = db.get_session(session_id)
    if not sess:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")
    parquet_path = Path(sess["parquet_path"])
    if not parquet_path.exists():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Parquet file not found")

    import pyarrow.parquet as pq
    table = pq.read_table(str(parquet_path))
    pydict = table.to_pydict()

    count = len(pydict["time_ms"])
    if count == 0:
        return {
            "session_id": session_id,
            "recording_id": sess["recording_id"],
            "name": sess["name"],
            "status": sess["status"],
            "started_at": sess["started_at"],
            "ended_at": sess["ended_at"],
            "total_samples": 0,
            "duration_ms": 0,
            "roles": [],
            "samples": [],
        }

    times = pydict["time_ms"]
    min_time = min(times)
    max_time = max(times)
    duration_ms = max(0, max_time - min_time)
    roles = sorted(list(set(pydict["role"])))

    samples = []
    for i in range(count):
        t_rel = times[i] - min_time
        samples.append({
            "t_ms": t_rel,
            "role": pydict["role"][i],
            "seq": int(pydict["seq"][i]),
            "quat": [
                float(pydict["quat_w"][i]),
                float(pydict["quat_x"][i]),
                float(pydict["quat_y"][i]),
                float(pydict["quat_z"][i]),
            ],
            "accel": [
                float(pydict["accel_x"][i]) if pydict["accel_x"][i] is not None else 0.0,
                float(pydict["accel_y"][i]) if pydict["accel_y"][i] is not None else 0.0,
                float(pydict["accel_z"][i]) if pydict["accel_z"][i] is not None else 0.0,
            ] if pydict["accel_x"][i] is not None else None,
        })

    samples.sort(key=lambda s: s["t_ms"])

    return {
        "session_id": session_id,
        "recording_id": sess["recording_id"],
        "name": sess["name"],
        "status": sess["status"],
        "started_at": sess["started_at"],
        "ended_at": sess["ended_at"],
        "total_samples": count,
        "duration_ms": duration_ms,
        "roles": roles,
        "samples": samples,
    }

@app.get("/v1/sessions/{session_id}/export")
async def export_session(
    session_id: str,
    format: Optional[str] = Query(None, pattern="^(bvh|csv|parquet|json)$"),
    rate: float = Query(30.0, ge=1.0, le=120.0),
    allow_uncalibrated: bool = Query(True),
    layout: str = Query("tall", pattern="^(tall|wide)$"),
):
    sess = db.get_session(session_id)
    if not sess:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")
    parquet_path = Path(sess["parquet_path"])
    if not parquet_path.exists():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Parquet file not found")

    # If format is not specified, maintain backwards-compatible download of raw session recording dataset
    if format is None:
        return FileResponse(
            path=parquet_path,
            media_type="application/vnd.apache.parquet",
            filename=f"{session_id}.parquet",
        )

    session_meta = sess.get("metadata", {})
    calib_offsets = session_meta.get("calibration_offsets")

    if not calib_offsets and not allow_uncalibrated:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Session has no pose calibration. Provide allow_uncalibrated=true to export anyway.",
        )

    # Process samples: calibrate, resample at specified rate, detect gaps
    processor = MocapSessionProcessor(
        parquet_path=parquet_path,
        calibration_offsets=calib_offsets,
        rate=rate,
    )
    processor.process()

    # Build and write metadata.json
    metadata = build_metadata_json(
        processor=processor,
        session=sess,
        per_device_loss_pct=session_meta.get("per_device_loss_pct"),
        firmware_versions=session_meta.get("firmware_versions"),
    )
    # Save metadata.json in sessions dir
    metadata_file = SESSIONS_DIR / f"{session_id}_metadata.json"
    try:
        with open(metadata_file, "w", encoding="utf-8") as f:
            json.dump(metadata, f, indent=2)
    except Exception:
        pass
    db.update_session_metadata(session_id, metadata)

    if format == "json":
        return JSONResponse(content=metadata)

    if format == "bvh":
        bvh_str = generate_bvh(processor, session_id=session_id)
        return Response(
            content=bvh_str,
            media_type="text/plain",
            headers={"Content-Disposition": f'attachment; filename="{session_id}.bvh"'},
        )

    if format == "csv":
        csv_str = generate_csv(processor, layout=layout)
        return Response(
            content=csv_str,
            media_type="text/csv",
            headers={"Content-Disposition": f'attachment; filename="{session_id}.csv"'},
        )

    if format == "parquet":
        out_parquet_path = SESSIONS_DIR / f"{session_id}_mocap_{int(rate)}hz_{layout}.parquet"
        generate_parquet(processor, out_parquet_path, layout=layout)
        return FileResponse(
            path=out_parquet_path,
            media_type="application/vnd.apache.parquet",
            filename=f"{session_id}_mocap.parquet",
        )

    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Unsupported format")

@app.get("/v1/sessions/{session_id}/metadata")
async def get_session_metadata(session_id: str):
    sess = db.get_session(session_id)
    if not sess:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")
    metadata_file = SESSIONS_DIR / f"{session_id}_metadata.json"
    if metadata_file.exists():
        try:
            with open(metadata_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return sess.get("metadata", {})

# WebSocket Endpoints
@app.websocket("/v1/devices/{device_id}/stream")
async def device_stream_endpoint(
    websocket: WebSocket,
    device_id: str,
    token: Optional[str] = Query(None),
):
    await websocket.accept()

    # Determine auth token
    auth_header = websocket.headers.get("Authorization")
    bearer_token = token
    if auth_header and auth_header.startswith("Bearer "):
        bearer_token = auth_header[7:].strip()

    # Verify device
    dev = db.get_device(device_id)
    role = dev["role"] if dev else "unassigned"
    if dev and dev.get("token") and bearer_token:
        if dev["token"] != bearer_token:
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION, reason="Invalid token")
            return

    conn = await tracker_manager.connect_tracker(
        device_id=device_id,
        role=role,
        token=bearer_token or "",
        ws=websocket,
    )

    try:
        while True:
            message = await websocket.receive()
            if message.get("type") == "websocket.disconnect":
                break
            if "bytes" in message and message["bytes"]:
                data = message["bytes"]
                try:
                    frame = decode_frame(data)
                    await tracker_manager.process_binary_frame(device_id, frame)
                except Exception as err:
                    # Invalid frame format
                    pass
            elif "text" in message and message["text"]:
                try:
                    text_data = json.loads(message["text"])
                    msg_type = text_data.get("type")
                    if msg_type == "heartbeat":
                        await tracker_manager.update_telemetry(device_id, text_data)
                    elif msg_type == "time_sync_resp":
                        # Clock sync response: t0 (server tx), t1 (client rx), t2 (client tx)
                        t0 = text_data.get("t0", 0)
                        t1 = text_data.get("t1", 0)
                        t2 = text_data.get("t2", 0)
                        t3 = int(time.time() * 1000)

                        rtt = max(0, (t3 - t0) - (t2 - t1))
                        # Offset to map device local time to server time:
                        offset = int(((t0 - t1) + (t3 - t2)) / 2)
                        conn.clock_offset_ms = offset
                        conn.clock_rtt_ms = rtt

                        ack = {
                            "type": "time_sync_ack",
                            "offset_ms": offset,
                            "rtt_ms": rtt,
                        }
                        await websocket.send_json(ack)
                except Exception:
                    pass
    except WebSocketDisconnect:
        pass
    finally:
        await tracker_manager.disconnect_tracker(device_id)

@app.websocket("/v1/dashboard")
async def dashboard_stream_endpoint(websocket: WebSocket):
    await websocket.accept()
    tracker_manager.add_dashboard_viewer(websocket)

    # Send initial state handshake
    try:
        active_sess = db.get_session(tracker_manager.active_session_id) if tracker_manager.active_session_id else None
        await websocket.send_json({
            "type": "init",
            "required_roles": roles_registry.required_roles,
            "devices": tracker_manager.get_device_summary(),
            "active_session": active_sess,
            "server_time_ms": int(time.time() * 1000),
        })
    except Exception:
        pass

    try:
        while True:
            # Keep-alive receive
            msg = await websocket.receive()
            if msg.get("type") == "websocket.disconnect":
                break
    except WebSocketDisconnect:
        pass
    finally:
        tracker_manager.remove_dashboard_viewer(websocket)
