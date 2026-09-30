#!/usr/bin/env python3
"""
Fake Tracker Simulator for Pair Tracker WiFi
Simulates N autonomous tracker nodes speaking the exact binary and JSON protocol.
Supports configurable packet loss, clock skew, and disconnect-reconnect ring buffer backfill.
"""

import argparse
import asyncio
from collections import deque
import hashlib
import json
import math
from pathlib import Path
import random
import sys
import time
from typing import Deque, List, Optional
import httpx
import websockets

# Ensure repo root is in python path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from server.protocol import (
    FLAG_BACKFILL,
    FLAG_RAW_PRESENT,
    TrackerSample,
    encode_frame,
)
from server.roles import roles_registry

class SimulatedTracker:
    def __init__(
        self,
        device_id: str,
        role: str,
        token: str,
        server_url: str,
        packet_loss_rate: float = 0.0,
        clock_skew_ms: int = 0,
        include_raw: bool = False,
        motion: str = "sinusoid",
        firmware_version: str = "1.0.0",
        protocol_version: int = 1,
        simulate_ota_corrupt_hash: bool = False,
        simulate_ota_download_fail: bool = False,
        simulate_ota_rollback: bool = False,
    ):
        self.device_id = device_id
        self.role = role
        self.role_id = roles_registry.get_role_id(role) or 1
        self.token = token
        self.server_url = server_url.rstrip("/")
        self.packet_loss_rate = packet_loss_rate
        self.clock_skew_ms = clock_skew_ms
        self.include_raw = include_raw
        self.motion = motion
        self.firmware_version = firmware_version
        self.protocol_version = protocol_version
        self.simulate_ota_corrupt_hash = simulate_ota_corrupt_hash
        self.simulate_ota_download_fail = simulate_ota_download_fail
        self.simulate_ota_rollback = simulate_ota_rollback
        self.ota_in_progress = False

        self.seq = 0
        self.running = False
        self.recording = False
        self.active_session_id: Optional[str] = None
        self.active_recording_id: Optional[str] = None

        # Clock sync
        self.local_start_time = time.time()
        self.server_time_offset_ms = clock_skew_ms

        # Ring buffer (~5 seconds at 48 Hz = 240 samples = 120 batches of 2)
        self.ring_buffer: Deque[bytes] = deque(maxlen=120)

        # Telemetry
        self.battery_pct = random.randint(85, 99)
        self.battery_mv = 3700 + int(self.battery_pct * 4.5)
        self.rssi = random.randint(-72, -50)
        self.simulated_dropped = 0

    def local_millis(self) -> int:
        return int((time.time() - self.local_start_time) * 1000)

    def current_synced_time_ms(self) -> int:
        return (self.local_millis() + int(self.server_time_offset_ms)) & 0xFFFFFFFF

    def stop(self):
        self.running = False

    async def announce(self) -> bool:
        announce_url = f"{self.server_url}/v1/devices/announce"
        payload = {
            "device_id": self.device_id,
            "role": self.role,
            "firmware_version": self.firmware_version,
            "protocol_version": self.protocol_version,
            "battery_pct": self.battery_pct,
            "battery_mv": self.battery_mv,
        }
        headers = {"Authorization": f"Bearer {self.token}"}
        try:
            async with httpx.AsyncClient() as client:
                res = await client.post(announce_url, json=payload, headers=headers, timeout=5.0)
                if res.status_code == 200:
                    data = res.json()
                    print(f"[{self.role}] Announce success: role={self.role} (ID={data.get('role_id')})")
                    return True
                else:
                    print(f"[{self.role}] Announce failed ({res.status_code}): {res.text}")
                    return False
        except Exception as e:
            print(f"[{self.role}] Announce exception: {e}")
            return False

    def generate_sample(self) -> TrackerSample:
        self.seq = (self.seq + 1) & 0xFFFF
        t_ms = self.current_synced_time_ms()
        t_sec = t_ms / 1000.0

        if self.motion == "sinusoid":
            if self.role in ["right_hand", "left_hand"]:
                # Sinusoidal hand wrist flexion/extension (+/- 40 deg at 0.75 Hz)
                freq = 0.75
                max_rad = math.radians(40.0)
                angle = max_rad * math.sin(2.0 * math.pi * freq * t_sec)
                half = angle / 2.0
                qw = math.cos(half)
                qx = math.sin(half)  # Pitch/flexion in BNO085 frame
                qy = 0.0
                qz = 0.0
                gx = max_rad * (2.0 * math.pi * freq) * math.cos(2.0 * math.pi * freq * t_sec)
                gy = 0.0
                gz = 0.0
            elif self.role == "chest":
                # Subtle upright torso breathing sway (+/- 2 deg at 0.25 Hz)
                freq = 0.25
                max_rad = math.radians(2.0)
                angle = max_rad * math.sin(2.0 * math.pi * freq * t_sec)
                half = angle / 2.0
                qw = math.cos(half)
                qx = math.sin(half)
                qy = 0.0
                qz = 0.0
                gx = 0.0
                gy = 0.0
                gz = 0.0
            elif "upper_arm" in self.role or "forearm" in self.role:
                # Arm sinusoidal swing (+/- 25 deg at 0.5 Hz)
                freq = 0.5
                max_rad = math.radians(25.0)
                angle = max_rad * math.sin(2.0 * math.pi * freq * t_sec)
                half = angle / 2.0
                qw = math.cos(half)
                qx = math.sin(half)
                qy = 0.0
                qz = 0.0
                gx = max_rad * (2.0 * math.pi * freq) * math.cos(2.0 * math.pi * freq * t_sec)
                gy = 0.0
                gz = 0.0
            else:
                # General smooth oscillation
                freq = 0.6
                max_rad = math.radians(30.0)
                angle = max_rad * math.sin(2.0 * math.pi * freq * t_sec)
                half = angle / 2.0
                qw = math.cos(half)
                qx = 0.0
                qy = math.sin(half)
                qz = 0.0
                gx = 0.0
                gy = max_rad * (2.0 * math.pi * freq) * math.cos(2.0 * math.pi * freq * t_sec)
                gz = 0.0
        elif self.motion == "spin":
            angle = t_sec * math.pi * 0.5
            qw = math.cos(angle / 2.0)
            qx = 0.0
            qy = math.sin(angle / 2.0)
            qz = 0.0
            gx = 0.0
            gy = 0.5
            gz = 0.0
        else: # static / identity
            qw = 1.0
            qx = 0.0
            qy = 0.0
            qz = 0.0
            gx = 0.0
            gy = 0.0
            gz = 0.0

        if self.include_raw:
            ax = 0.0
            ay = 9.81 + 0.1 * math.sin(t_sec)
            az = 0.05 * math.cos(t_sec)
            mx = 20.0
            my = -15.0
            mz = 45.0
            return TrackerSample(
                seq=self.seq,
                t_ms=t_ms,
                quat_w=qw,
                quat_x=qx,
                quat_y=qy,
                quat_z=qz,
                accel_x=ax,
                accel_y=ay,
                accel_z=az,
                gyro_x=gx,
                gyro_y=gy,
                gyro_z=gz,
                mag_x=mx,
                mag_y=my,
                mag_z=mz,
            )
        else:
            return TrackerSample(
                seq=self.seq,
                t_ms=t_ms,
                quat_w=qw,
                quat_x=qx,
                quat_y=qy,
                quat_z=qz,
            )

    async def run(self):
        self.running = True
        ws_url = self.server_url.replace("http://", "ws://").replace("https://", "wss://")
        stream_url = f"{ws_url}/v1/devices/{self.device_id}/stream?token={self.token}"

        while self.running:
            # Step 1: Announce
            announced = await self.announce()
            if not announced:
                await asyncio.sleep(2.0)
                continue

            # Step 2: Connect WebSocket Stream
            try:
                async with websockets.connect(stream_url) as ws:
                    print(f"[{self.role}] WebSocket connected to {stream_url}")

                    # Flush ring buffer (backfill) if any buffered frames exist
                    while self.ring_buffer:
                        buffered_frame = self.ring_buffer.popleft()
                        await ws.send(buffered_frame)
                        await asyncio.sleep(0.005)

                    # Send initial heartbeat immediately
                    initial_hb = {
                        "type": "heartbeat",
                        "battery_pct": self.battery_pct,
                        "battery_mv": self.battery_mv,
                        "rssi": self.rssi,
                        "uptime_s": int(time.time() - self.local_start_time),
                        "dropped_samples": self.simulated_dropped,
                    }
                    await ws.send(json.dumps(initial_hb))

                    sender_task = asyncio.create_task(self._stream_sender(ws))
                    heartbeat_task = asyncio.create_task(self._heartbeat_sender(ws))
                    receiver_task = asyncio.create_task(self._stream_receiver(ws))

                    done, pending = await asyncio.wait(
                        [sender_task, heartbeat_task, receiver_task],
                        return_when=asyncio.FIRST_COMPLETED,
                    )
                    for t in pending:
                        t.cancel()

            except Exception as e:
                print(f"[{self.role}] Connection error: {e}. Reconnecting in 2s...")
                await asyncio.sleep(2.0)

    async def _stream_sender(self, ws):
        # 48 Hz sampling, batch 2 samples per frame -> frame rate = 24 Hz (~41.67 ms interval)
        interval = 2.0 / 48.0
        while self.running:
            if self.ota_in_progress:
                await asyncio.sleep(0.1)
                continue

            start_loop = time.time()
            s1 = self.generate_sample()
            await asyncio.sleep(1.0 / 48.0)
            s2 = self.generate_sample()

            frame_bytes = encode_frame(
                role=self.role_id,
                samples=[s1, s2],
                is_backfill=False,
                include_raw=self.include_raw,
            )

            # Simulated packet loss
            if self.packet_loss_rate > 0 and random.random() < self.packet_loss_rate:
                self.simulated_dropped += 2
            else:
                try:
                    await ws.send(frame_bytes)
                except Exception:
                    # On disconnect, buffer to ring buffer with backfill flag
                    backfill_frame = encode_frame(
                        role=self.role_id,
                        samples=[s1, s2],
                        is_backfill=True,
                        include_raw=self.include_raw,
                    )
                    self.ring_buffer.append(backfill_frame)
                    raise

            elapsed = time.time() - start_loop
            sleep_time = max(0.0, interval - elapsed)
            await asyncio.sleep(sleep_time)

    async def _heartbeat_sender(self, ws):
        while self.running:
            await asyncio.sleep(5.0)
            hb = {
                "type": "heartbeat",
                "battery_pct": self.battery_pct,
                "battery_mv": self.battery_mv,
                "rssi": self.rssi,
                "uptime_s": int(time.time() - self.local_start_time),
                "dropped_samples": self.simulated_dropped,
            }
            try:
                await ws.send(json.dumps(hb))
            except Exception:
                break

    async def _handle_ota_command(self, ws, data: dict):
        if self.battery_pct < 30:
            print(f"[{self.role}] OTA failed: battery too low ({self.battery_pct}% < 30%)")
            await ws.send(json.dumps({
                "type": "ota_progress",
                "status": "failed",
                "error": f"Battery too low ({self.battery_pct}% < 30%)",
            }))
            return

        self.ota_in_progress = True

        await ws.send(json.dumps({
            "type": "ota_progress",
            "status": "downloading",
            "progress_pct": 0,
        }))
        await asyncio.sleep(0.05)

        if self.simulate_ota_download_fail:
            await ws.send(json.dumps({
                "type": "ota_progress",
                "status": "failed",
                "error": "Simulated download network error",
            }))
            self.ota_in_progress = False
            return

        url_path = data.get("url", "")
        if url_path.startswith("http://") or url_path.startswith("https://"):
            full_url = url_path
        else:
            full_url = f"{self.server_url}{url_path}"

        headers = {"Authorization": f"Bearer {self.token}"}
        hasher = hashlib.sha256()

        try:
            async with httpx.AsyncClient() as client:
                async with client.stream("GET", full_url, headers=headers, timeout=10.0) as resp:
                    if resp.status_code != 200:
                        await ws.send(json.dumps({
                            "type": "ota_progress",
                            "status": "failed",
                            "error": f"HTTP {resp.status_code} download error",
                        }))
                        self.ota_in_progress = False
                        return

                    total_len = int(resp.headers.get("content-length", data.get("size", 1000)))
                    downloaded = 0
                    last_pct = 0

                    async for chunk in resp.aiter_bytes():
                        hasher.update(chunk)
                        downloaded += len(chunk)
                        pct = int((downloaded * 100) / total_len) if total_len > 0 else 50
                        if pct >= last_pct + 25:
                            last_pct = pct
                            await ws.send(json.dumps({
                                "type": "ota_progress",
                                "status": "downloading",
                                "progress_pct": pct,
                            }))
                            await asyncio.sleep(0.02)
        except Exception as e:
            await ws.send(json.dumps({
                "type": "ota_progress",
                "status": "failed",
                "error": f"Download exception: {e}",
            }))
            self.ota_in_progress = False
            return

        # Verifying
        await ws.send(json.dumps({
            "type": "ota_progress",
            "status": "verifying",
            "progress_pct": 100,
        }))
        await asyncio.sleep(0.05)

        calculated_sha = hasher.hexdigest()
        expected_sha = data.get("sha256", "")

        if self.simulate_ota_corrupt_hash:
            calculated_sha = "0000000000000000000000000000000000000000000000000000000000000000"

        if expected_sha and calculated_sha.lower() != expected_sha.lower():
            print(f"[{self.role}] OTA SHA-256 mismatch! Got {calculated_sha}, expected {expected_sha}")
            await ws.send(json.dumps({
                "type": "ota_progress",
                "status": "failed",
                "error": "SHA-256 verification mismatch",
            }))
            self.ota_in_progress = False
            return

        # Rebooting
        await ws.send(json.dumps({
            "type": "ota_progress",
            "status": "rebooting",
            "progress_pct": 100,
        }))
        await asyncio.sleep(0.1)

        if not self.simulate_ota_rollback:
            self.firmware_version = data.get("version", self.firmware_version)
            print(f"[{self.role}] OTA update succeeded! Reboots with firmware {self.firmware_version}")
        else:
            print(f"[{self.role}] OTA rollback simulated: stays on {self.firmware_version}")

        self.ota_in_progress = False

    async def _stream_receiver(self, ws):
        while self.running:
            try:
                msg = await ws.recv()
                if isinstance(msg, str):
                    data = json.loads(msg)
                    msg_type = data.get("type")
                    if msg_type == "time_sync":
                        # Server sends t0 (server time)
                        t0 = data.get("t0", 0)
                        t1 = self.local_millis()
                        t2 = self.local_millis()
                        resp = {
                            "type": "time_sync_resp",
                            "t0": t0,
                            "t1": t1,
                            "t2": t2,
                        }
                        await ws.send(json.dumps(resp))
                    elif msg_type == "time_sync_ack":
                        self.server_time_offset_ms = data.get("offset_ms", self.server_time_offset_ms)
                    elif msg_type == "start":
                        self.recording = True
                        self.active_session_id = data.get("session_id")
                        self.active_recording_id = data.get("recording_id")
                        print(f"[{self.role}] >>> START RECORDING session={self.active_session_id}")
                    elif msg_type == "stop":
                        self.recording = False
                        print(f"[{self.role}] <<< STOP RECORDING")
                    elif msg_type == "identify":
                        dur = data.get("duration_ms", 3000)
                        print(f"[{self.role}] *** IDENTIFY: Blinking LED for {dur}ms ***")
                    elif msg_type == "calibrate":
                        print(f"[{self.role}] *** CALIBRATING IMU ***")
                    elif msg_type == "reboot":
                        print(f"[{self.role}] *** REBOOT COMMAND RECEIVED ***")
                    elif msg_type == "ota":
                        print(f"[{self.role}] *** OTA COMMAND RECEIVED: {data} ***")
                        await self._handle_ota_command(ws, data)
                        break
            except Exception:
                break

async def main():
    parser = argparse.ArgumentParser(description="Pair Fake Tracker Simulator")
    parser.add_argument("--server", default="http://localhost:8000", help="Server base URL")
    parser.add_argument(
        "--roles",
        default="required",
        help="Comma-separated role names, 'required' (default required roles), or 'all'",
    )
    parser.add_argument("--loss", type=float, default=0.0, help="Packet loss probability (0.0 to 1.0)")
    parser.add_argument("--skew", type=int, default=50, help="Clock skew in ms")
    parser.add_argument("--raw", action="store_true", help="Include 9-float raw IMU data in samples")
    parser.add_argument(
        "--motion",
        choices=["sinusoid", "spin", "static"],
        default="sinusoid",
        help="Motion profile (default: sinusoid for smooth biomechanical oscillation)",
    )
    parser.add_argument("--duration", type=int, default=0, help="Run duration in seconds (0 = infinite)")
    args = parser.parse_args()

    if args.roles == "required":
        target_roles = roles_registry.required_roles
    elif args.roles == "all":
        target_roles = [r for r in roles_registry.name_to_id.keys() if r != "unassigned"]
    else:
        target_roles = [r.strip() for r in args.roles.split(",") if r.strip()]

    print(f"Starting fake trackers for {len(target_roles)} roles: {target_roles} (motion={args.motion})")

    trackers = []
    for i, role in enumerate(target_roles):
        mac = f"AA:BB:CC:11:22:{i+1:02X}"
        token = f"fake_token_{role}"
        t = SimulatedTracker(
            device_id=mac,
            role=role,
            token=token,
            server_url=args.server,
            packet_loss_rate=args.loss,
            clock_skew_ms=args.skew,
            include_raw=args.raw,
            motion=args.motion,
        )
        trackers.append(t)

    tasks = [asyncio.create_task(t.run()) for t in trackers]

    if args.duration > 0:
        await asyncio.sleep(args.duration)
        for t in trackers:
            t.running = False
        for task in tasks:
            task.cancel()
    else:
        await asyncio.gather(*tasks)

if __name__ == "__main__":
    asyncio.run(main())
