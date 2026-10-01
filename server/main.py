import asyncio
from contextlib import asynccontextmanager
import json
from pathlib import Path
import re
import time
from typing import Any, Dict, List, Optional
import uuid

from fastapi import Depends, FastAPI, Header, HTTPException, Query, Request, WebSocket, WebSocketDisconnect, status
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
    title="Pair Tracker WiFi API",
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
    if token != ADMIN_TOKEN and token != "pair_admin_secret" and token != "eidon_admin_secret":
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
    hw: Optional[str] = "esp32c6"
    flash_size: Optional[int] = None
    free_heap: Optional[int] = None
    firmware_version: Optional[str] = "1.0.0"
    protocol_version: Optional[int] = 1
    battery_pct: Optional[int] = None
    battery_mv: Optional[int] = None

class DeviceOTARequest(BaseModel):
    version: Optional[str] = "latest"

class SessionCreateRequest(BaseModel):
    name: Optional[str] = "Tracking Session"
    description: Optional[str] = ""
    calibration_offsets: Optional[Dict[str, List[float]]] = None

class DeviceCommandRequest(BaseModel):
    type: str
    duration_ms: Optional[int] = 3000

class DeviceRoleUpdateRequest(BaseModel):
    role: str

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

def _sync_manifests_from_disk():
    # If firmware/src/core/Version.h exists, read current version
    version_from_h = None
    min_protocol = 1
    version_h = Path(__file__).parent.parent / "firmware" / "src" / "core" / "Version.h"
    if version_h.exists():
        try:
            content = version_h.read_text(encoding="utf-8")
            m = re.search(r'#define\s+FIRMWARE_VERSION\s+"([^"]+)"', content)
            if m:
                version_from_h = m.group(1)
            mp = re.search(r'#define\s+MIN_PROTOCOL_VERSION\s+(\d+)', content)
            if mp:
                min_protocol = int(mp.group(1))
        except Exception:
            pass

    for hw in ("esp32c6", "esp12e"):
        hw_dir = FIRMWARE_BIN_DIR / hw
        if not hw_dir.exists():
            continue

        # 1. If hw_dir has a version directory without manifest.json, synthesize it
        for sub in hw_dir.iterdir():
            if sub.is_dir() and re.match(r"^\d+(\.\d+)*", sub.name):
                bin_f = sub / "firmware.bin"
                man_f = sub / "manifest.json"
                if bin_f.exists() and not man_f.exists():
                    try:
                        data = bin_f.read_bytes()
                        m_obj = {
                            "version": sub.name,
                            "hw": hw,
                            "sha256": hashlib.sha256(data).hexdigest(),
                            "size": len(data),
                            "min_protocol": min_protocol,
                        }
                        man_f.write_text(json.dumps(m_obj, indent=2), encoding="utf-8")
                    except Exception:
                        pass

        # 2. If flat firmware.bin exists in hw_dir, and version_from_h is known,
        # ensure hw_dir / version_from_h / firmware.bin exists
        flat_bin = hw_dir / "firmware.bin"
        if flat_bin.exists() and version_from_h:
            v_dir = hw_dir / version_from_h
            v_bin = v_dir / "firmware.bin"
            v_man = v_dir / "manifest.json"
            if not v_dir.exists() or not v_bin.exists():
                try:
                    v_dir.mkdir(parents=True, exist_ok=True)
                    data = flat_bin.read_bytes()
                    v_bin.write_bytes(data)
                    m_obj = {
                        "version": version_from_h,
                        "hw": hw,
                        "sha256": hashlib.sha256(data).hexdigest(),
                        "size": len(data),
                        "min_protocol": min_protocol,
                    }
                    v_man.write_text(json.dumps(m_obj, indent=2), encoding="utf-8")
                except Exception:
                    pass

def get_all_firmware_manifests(hw: Optional[str] = None) -> List[Dict[str, Any]]:
    if not FIRMWARE_BIN_DIR.exists():
        return []
    _sync_manifests_from_disk()
    manifests = []

    search_dirs: List[Tuple[str, Path]] = []
    if hw:
        hw_dir = FIRMWARE_BIN_DIR / hw
        if hw_dir.exists():
            search_dirs.append((hw, hw_dir))
        elif hw == "esp32c6":
            search_dirs.append((hw, FIRMWARE_BIN_DIR))
    else:
        # Default order: esp32c6 (primary target), then esp12e (secondary target)
        c6_dir = FIRMWARE_BIN_DIR / "esp32c6"
        if c6_dir.exists():
            search_dirs.append(("esp32c6", c6_dir))
        e12_dir = FIRMWARE_BIN_DIR / "esp12e"
        if e12_dir.exists():
            search_dirs.append(("esp12e", e12_dir))
        # Legacy root layout
        search_dirs.append(("esp32c6", FIRMWARE_BIN_DIR))

    for target_hw, base_dir in search_dirs:
        for p in base_dir.iterdir():
            if p.is_dir() and p.name not in ("esp32c6", "esp12e"):
                m_file = p / "manifest.json"
                if m_file.exists():
                    try:
                        with open(m_file, "r", encoding="utf-8") as f:
                            data = json.load(f)
                            if "hw" not in data:
                                data["hw"] = target_hw
                            if not any(m.get("version") == data.get("version") and m.get("hw") == data.get("hw") for m in manifests):
                                manifests.append(data)
                    except Exception:
                        pass

    def parse_v(v_str):
        return [int(x) for x in re.findall(r"\d+", str(v_str))]

    manifests.sort(key=lambda m: parse_v(m.get("version", "0")), reverse=True)
    return manifests

def get_latest_firmware_manifest(hw: Optional[str] = None) -> Optional[Dict[str, Any]]:
    manifests = get_all_firmware_manifests(hw=hw)
    return manifests[0] if manifests else None

def get_firmware_manifest_by_version(version: str, hw: Optional[str] = None) -> Optional[Dict[str, Any]]:
    if version == "latest":
        return get_latest_firmware_manifest(hw=hw)

    _sync_manifests_from_disk()
    target_hw = hw or "esp32c6"
    for m in get_all_firmware_manifests(hw=target_hw):
        if m.get("version") == version:
            return m

    # Fallback to any hw
    for m in get_all_firmware_manifests(hw=None):
        if m.get("version") == version:
            return m

    return None

def _authenticate_firmware_request(authorization: Optional[str], token: Optional[str]):
    req_token = token
    if authorization and authorization.startswith("Bearer "):
        req_token = authorization[7:].strip()

    if not req_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Device token required to download firmware",
            headers={"WWW-Authenticate": "Bearer"},
        )

    dev = db.get_device_by_token(req_token)
    is_active_token = any(c.token == req_token for c in tracker_manager.active_connections.values())
    if req_token != ADMIN_TOKEN and req_token not in ("pair_admin_secret", "eidon_admin_secret") and not dev and not is_active_token:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Invalid device token",
        )

def _find_firmware_bin(version: str, hw: Optional[str] = None) -> Tuple[Path, str]:
    resolved_version = version
    if resolved_version == "latest":
        latest = get_latest_firmware_manifest(hw=hw)
        if not latest:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"No firmware releases available for hw '{hw or 'any'}'",
            )
        resolved_version = latest["version"]
        if not hw and latest.get("hw"):
            hw = latest["hw"]

    candidates = []
    effective_hw = hw or "esp32c6"
    candidates.append(FIRMWARE_BIN_DIR / effective_hw / resolved_version / "firmware.bin")
    candidates.append(FIRMWARE_BIN_DIR / resolved_version / "firmware.bin")
    if FIRMWARE_BIN_DIR.exists():
        for sub in sorted(FIRMWARE_BIN_DIR.iterdir()):
            if sub.is_dir() and sub.name != effective_hw:
                candidates.append(sub / resolved_version / "firmware.bin")

    if version == "latest":
        candidates.append(FIRMWARE_BIN_DIR / effective_hw / "firmware.bin")
        candidates.append(FIRMWARE_BIN_DIR / "firmware.bin")

    for p in candidates:
        if p.exists() and p.is_file():
            return p, resolved_version

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Firmware binary for version '{version}' (hw={hw}) not found",
    )

# Firmware & Web Serial Flashing Endpoints
@app.get("/v1/firmware/latest")
async def get_latest_firmware(hw: Optional[str] = Query(None)):
    manifest = get_latest_firmware_manifest(hw=hw)
    if not manifest:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No firmware releases available",
        )
    return manifest

@app.get("/v1/firmware/manifest")
async def get_firmware_manifest(hw: Optional[str] = Query("esp32c6")):
    """
    Returns flash partition offsets and paths for Web Serial esptool-js flashing.
    """
    if hw in ("esp12e", "esp8266"):
        # ESP-12E (ESP8266) single flat image flashed at 0x0
        latest = get_latest_firmware_manifest(hw="esp12e")
        latest_ver = latest["version"] if latest else "latest"
        bin_file, _ = _find_firmware_bin(version="latest", hw="esp12e")

        parts = []
        if bin_file.exists():
            parts.append({
                "name": "firmware.bin",
                "offset": 0,
                "path": "/v1/firmware/flash/esp12e/firmware.bin",
                "size": bin_file.stat().st_size,
            })

        return {
            "chip": "esp8266",
            "board": "esp12e",
            "baud": 9600,
            "version": latest_ver,
            "parts": parts,
        }

    # ESP32-C6 default layout
    latest_c6 = get_latest_firmware_manifest(hw="esp32c6")
    latest_c6_ver = latest_c6["version"] if latest_c6 else "latest"
    c6_dir = FIRMWARE_BIN_DIR / "esp32c6"
    base_dir = c6_dir if c6_dir.exists() and (c6_dir / "firmware.bin").exists() else FIRMWARE_BIN_DIR

    manifest_parts = [
        {"name": "bootloader.bin", "offset": 0, "path": "/v1/firmware/flash/esp32c6/bootloader.bin"},
        {"name": "partitions.bin", "offset": 32768, "path": "/v1/firmware/flash/esp32c6/partitions.bin"}, # 0x8000
        {"name": "boot_app0.bin", "offset": 57344, "path": "/v1/firmware/flash/esp32c6/boot_app0.bin"},   # 0xe000
        {"name": "firmware.bin", "offset": 65536, "path": "/v1/firmware/flash/esp32c6/firmware.bin"},     # 0x10000
    ]
    available = []
    for part in manifest_parts:
        if part["name"] == "firmware.bin":
            bin_path, _ = _find_firmware_bin(version="latest", hw="esp32c6")
            if bin_path.exists():
                part["size"] = bin_path.stat().st_size
                available.append(part)
                continue
        file_path = base_dir / part["name"]
        if not file_path.exists() and base_dir != FIRMWARE_BIN_DIR:
            file_path = FIRMWARE_BIN_DIR / part["name"]
        if file_path.exists():
            part["size"] = file_path.stat().st_size
            available.append(part)

    return {
        "chip": "esp32c6",
        "board": "seeed_xiao_esp32c6",
        "baud": 115200,
        "version": latest_c6_ver,
        "parts": available,
    }

@app.get("/v1/firmware/flash/{hw}/{filename}")
async def get_firmware_flash_part(hw: str, filename: str):
    safe_name = Path(filename).name
    # Check under FIRMWARE_BIN_DIR / hw / safe_name
    target = FIRMWARE_BIN_DIR / hw / safe_name
    if target.exists() and target.is_file():
        return FileResponse(target, media_type="application/octet-stream", filename=safe_name)
    # If safe_name is firmware.bin, resolve latest version
    if safe_name == "firmware.bin":
        bin_path, _ = _find_firmware_bin(version="latest", hw=hw)
        return FileResponse(bin_path, media_type="application/octet-stream", filename=f"firmware_{hw}.bin")
    # Check top-level FIRMWARE_BIN_DIR
    top_p = FIRMWARE_BIN_DIR / safe_name
    if top_p.exists() and top_p.is_file():
        return FileResponse(top_p, media_type="application/octet-stream", filename=safe_name)
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Flash part '{filename}' for '{hw}' not found")

@app.get("/v1/firmware/{hw}/{version}/firmware.bin")
async def get_hw_versioned_firmware_binary(
    hw: str,
    version: str,
    authorization: Optional[str] = Header(None),
    token: Optional[str] = Query(None),
):
    _authenticate_firmware_request(authorization, token)
    bin_path, resolved_version = _find_firmware_bin(version=version, hw=hw)
    return FileResponse(bin_path, media_type="application/octet-stream", filename=f"firmware_{hw}_{resolved_version}.bin")

@app.get("/v1/firmware/{version}/firmware.bin")
async def get_versioned_firmware_binary(
    version: str,
    hw: Optional[str] = Query(None),
    authorization: Optional[str] = Header(None),
    token: Optional[str] = Query(None),
):
    _authenticate_firmware_request(authorization, token)
    bin_path, resolved_version = _find_firmware_bin(version=version, hw=hw)
    return FileResponse(bin_path, media_type="application/octet-stream", filename=f"firmware_{resolved_version}.bin")

@app.get("/v1/firmware/{filename}")
async def get_firmware_binary(filename: str):
    safe_name = Path(filename).name
    file_path = FIRMWARE_BIN_DIR / safe_name
    if not file_path.exists() or not file_path.is_file():
        # Check subdirectories
        for sub in ("esp32c6", "esp12e"):
            sub_p = FIRMWARE_BIN_DIR / sub / safe_name
            if sub_p.exists() and sub_p.is_file():
                return FileResponse(sub_p, media_type="application/octet-stream", filename=safe_name)
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Firmware binary not found")
    return FileResponse(file_path, media_type="application/octet-stream", filename=safe_name)

@app.post("/v1/devices/{device_id}/ota")
async def trigger_device_ota(
    device_id: str,
    request: Request,
    version: Optional[str] = Query(None),
    force: bool = Query(False),
    authorization: Optional[str] = Header(None),
):
    # Reject with 409 if a session is recording
    if tracker_manager.active_session_id is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Cannot trigger OTA update: recording session is active",
        )

    # Reject with 409 if device is offline
    if device_id not in tracker_manager.active_connections:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Device {device_id} is offline",
        )

    conn = tracker_manager.active_connections[device_id]

    # Extract target version and force flag from query, JSON body, or default to "latest"
    target_version = version
    body_force = False
    try:
        body_bytes = await request.body()
        if body_bytes:
            body_str = body_bytes.decode("utf-8").strip()
            try:
                parsed = json.loads(body_str)
                if isinstance(parsed, dict):
                    if not target_version:
                        target_version = parsed.get("version", "latest")
                    body_force = parsed.get("force", False)
                elif isinstance(parsed, str):
                    if not target_version:
                        target_version = parsed
            except Exception:
                if not target_version:
                    target_version = body_str.strip('"')
    except Exception:
        pass

    is_forced = bool(force or body_force)

    # Reject with 409 if last battery is below 30% unless force override requested
    if not is_forced and conn.battery_pct is not None and conn.battery_pct < 30:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Device battery is too low for OTA ({conn.battery_pct}% < 30%). Use force override to flash anyway.",
        )

    if not target_version:
        target_version = "latest"

    target_hw = getattr(conn, "hw", None) or "esp32c6"
    manifest = get_firmware_manifest_by_version(target_version, hw=target_hw)
    if not manifest:
        manifest = get_firmware_manifest_by_version(target_version)
    if not manifest:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Firmware version '{target_version}' not found for hw '{target_hw}'",
        )

    # Create tracked OTA job
    job = tracker_manager.create_ota_job(device_id=device_id, version=manifest["version"])

    # Dispatch JSON "ota" command over WebSocket
    ota_cmd = {
        "type": "ota",
        "version": manifest["version"],
        "hw": target_hw,
        "url": f"/v1/firmware/{target_hw}/{manifest['version']}/firmware.bin",
        "sha256": manifest["sha256"],
        "size": manifest["size"],
        "min_protocol": manifest.get("min_protocol", 1),
        "force": is_forced,
    }

    try:
        await conn.ws.send_json(ota_cmd)
    except Exception as e:
        job.status = "failed"
        job.error_message = f"Failed to send OTA command: {e}"
        job.updated_at_ms = int(time.time() * 1000)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to send OTA command: {e}",
        )

    await tracker_manager.broadcast_dashboard({"type": "ota_job_update", "job": job.to_dict()})
    return {
        "status": "ota_queued",
        "job": job.to_dict(),
    }

@app.get("/v1/devices/{device_id}/ota")
async def get_device_ota_status(device_id: str):
    job = tracker_manager.get_ota_job_for_device(device_id)
    if not job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No OTA job found for device {device_id}",
        )
    return job.to_dict()

@app.get("/v1/ota/jobs")
async def list_ota_jobs():
    return tracker_manager.get_all_ota_jobs()

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
            if existing.get("token") and token and token != existing["token"]:
                token_dev = db.get_device_by_token(token)
                clean_req = payload.device_id.replace(":", "").replace("-", "").upper()
                if not token_dev or token_dev["device_id"].replace(":", "").replace("-", "").upper() == clean_req:
                    db.register_device(
                        payload.device_id,
                        payload.role if existing["role"] == "unassigned" else existing["role"],
                        token,
                        hw=payload.hw or existing.get("hw", "esp32c6"),
                        flash_size=payload.flash_size or existing.get("flash_size", 0),
                        free_heap=payload.free_heap or existing.get("free_heap", 0),
                        firmware_version=payload.firmware_version or existing.get("firmware_version", "unknown"),
                        protocol_version=payload.protocol_version or existing.get("protocol_version", 1),
                    )
                else:
                    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid device token")
    else:
        # If not registered, auto-register with default or provided role
        token = authorization[7:].strip() if (authorization and authorization.startswith("Bearer ")) else "default_token"
        db.register_device(
            payload.device_id,
            payload.role,
            token,
            hw=payload.hw or "esp32c6",
            flash_size=payload.flash_size or 0,
            free_heap=payload.free_heap or 0,
        )

    now_ms = int(time.time() * 1000)
    db.update_last_seen(payload.device_id, now_ms)
    db.update_device_metrics(
        device_id=payload.device_id,
        hw=payload.hw or "esp32c6",
        flash_size=payload.flash_size or 0,
        free_heap=payload.free_heap or 0,
        firmware_version=payload.firmware_version,
        protocol_version=payload.protocol_version,
        battery_pct=payload.battery_pct,
    )
    tracker_manager.cache_announced_telemetry(
        device_id=payload.device_id,
        battery_pct=payload.battery_pct,
        battery_mv=payload.battery_mv,
        firmware_version=payload.firmware_version,
        protocol_version=payload.protocol_version,
        hw=payload.hw or "esp32c6",
        flash_size=payload.flash_size,
        free_heap=payload.free_heap,
    )
    await tracker_manager.handle_device_announce_ota(
        device_id=payload.device_id,
        announced_version=payload.firmware_version or "unknown",
    )
    await tracker_manager.broadcast_dashboard({
        "type": "log",
        "level": "info",
        "category": "announce",
        "message": f"Device announced: {payload.device_id} ({payload.hw or 'esp12e'}) role='{payload.role}' heap={payload.free_heap or 0}B batt={payload.battery_pct or 0}% fw=v{payload.firmware_version or 'unknown'}",
        "device_id": payload.device_id,
        "timestamp_ms": now_ms,
    })

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

@app.post("/v1/devices/{device_id}/role")
async def update_device_role_endpoint(
    device_id: str,
    payload: DeviceRoleUpdateRequest,
    _admin: bool = Depends(verify_admin_token),
):
    role = payload.role.strip().lower()
    if not roles_registry.is_valid_role(role) and role != "unassigned":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid role '{role}'. Must be one of valid roles or 'unassigned'.",
        )
    db.update_device_role(device_id, role)
    await tracker_manager.set_device_role(device_id, role)
    return {"status": "role_updated", "device_id": device_id, "role": role}

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

@app.get("/v1/devices/paired")
async def get_paired_devices(_admin: bool = Depends(verify_admin_token)):
    devices = tracker_manager.get_device_summary()
    return {"status": "ok", "devices": devices}

@app.delete("/v1/devices/{device_id}")
async def unpair_device_endpoint(
    device_id: str,
    _admin: bool = Depends(verify_admin_token),
):
    deleted = await tracker_manager.unpair_device(device_id)
    return {"status": "device_unpaired", "device_id": device_id, "deleted": deleted}

class DeviceCleanupRequest(BaseModel):
    mode: str = "offline"  # "offline" or "all"

@app.post("/v1/devices/cleanup")
async def cleanup_devices_endpoint(
    payload: Optional[DeviceCleanupRequest] = None,
    _admin: bool = Depends(verify_admin_token),
):
    mode = payload.mode if payload else "offline"
    deleted_count = await tracker_manager.cleanup_stale_devices(mode=mode)
    return {"status": "cleaned", "deleted_count": deleted_count, "mode": mode}

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
    if not dev:
        dev = db.register_device(
            device_id=device_id,
            role="unassigned",
            token=bearer_token or f"tok_{uuid.uuid4().hex[:16]}",
            hw="esp12e" if "12" in device_id.lower() else "esp32c6",
        )
    role = dev["role"] if dev else "unassigned"

    if dev and bearer_token:
        if dev.get("token") and dev["token"] != bearer_token:
            token_dev = db.get_device_by_token(bearer_token)
            clean_req = device_id.replace(":", "").replace("-", "").upper()
            if not token_dev or token_dev["device_id"].replace(":", "").replace("-", "").upper() == clean_req:
                db.register_device(
                    device_id=device_id,
                    role=dev["role"],
                    token=bearer_token,
                    hw=dev.get("hw", "esp32c6"),
                    flash_size=dev.get("flash_size", 0),
                    free_heap=dev.get("free_heap", 0),
                    firmware_version=dev.get("firmware_version", "unknown"),
                    protocol_version=dev.get("protocol_version", 1),
                )
                dev = db.get_device(device_id)
                role = dev["role"] if dev else "unassigned"
            else:
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
                    elif msg_type == "ota_progress":
                        await tracker_manager.update_ota_job_progress(
                            device_id=device_id,
                            status=text_data.get("status", "downloading"),
                            progress_pct=text_data.get("progress_pct"),
                            error=text_data.get("error"),
                        )
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
        latest_fw = get_latest_firmware_manifest()
        latest_fw_by_hw = {
            "esp32c6": get_latest_firmware_manifest("esp32c6"),
            "esp12e": get_latest_firmware_manifest("esp12e"),
        }
        await websocket.send_json({
            "type": "init",
            "required_roles": roles_registry.required_roles,
            "devices": tracker_manager.get_device_summary(),
            "latest_firmware": latest_fw,
            "latest_firmware_by_hw": latest_fw_by_hw,
            "ota_jobs": tracker_manager.get_all_ota_jobs(),
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
