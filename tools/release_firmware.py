#!/usr/bin/env python3
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import sys

REPO_ROOT = Path(__file__).resolve().parent.parent
VERSION_H = REPO_ROOT / "firmware" / "src" / "core" / "Version.h"
PROTOCOL_H = REPO_ROOT / "firmware" / "src" / "core" / "Protocol.h"
FIRMWARE_BIN_ROOT = REPO_ROOT / "server" / "firmware_bin"

HW_CONFIGS = {
    "esp32c6": {
        "build_env": "seeed_xiao_esp32c6",
        "bin_path": REPO_ROOT / "firmware" / ".pio" / "build" / "seeed_xiao_esp32c6" / "firmware.bin",
        "extra_files": ["bootloader.bin", "partitions.bin", "boot_app0.bin"],
    },
    "esp12e": {
        "build_env": "esp12e",
        "bin_path": REPO_ROOT / "firmware" / ".pio" / "build" / "esp12e" / "firmware.bin",
        "extra_files": [],
    },
}

def get_default_version() -> str:
    # Try core/Version.h then legacy Version.h
    for vh in (VERSION_H, REPO_ROOT / "firmware" / "src" / "Version.h"):
        if vh.exists():
            content = vh.read_text(encoding="utf-8")
            match = re.search(r'#define\s+FIRMWARE_VERSION\s+"([^"]+)"', content)
            if match:
                return match.group(1)
    return "1.0.0"

def get_protocol_version() -> int:
    for ph in (PROTOCOL_H, REPO_ROOT / "firmware" / "src" / "Protocol.h"):
        if ph.exists():
            content = ph.read_text(encoding="utf-8")
            match = re.search(r'#define\s+PROTOCOL_VERSION\s+(\d+)', content)
            if match:
                return int(match.group(1))
    return 1

def release_target(hw: str, version: str):
    cfg = HW_CONFIGS.get(hw)
    if not cfg:
        print(f"Unknown hardware target '{hw}'")
        return False

    bin_path = cfg["bin_path"]
    if not bin_path.exists():
        print(f"Warning: Compiled binary for {hw} not found at {bin_path}")
        print(f"  Run: pio run -d firmware -e {cfg['build_env']}")
        return False

    bin_data = bin_path.read_bytes()
    sha256 = hashlib.sha256(bin_data).hexdigest()
    size = len(bin_data)
    min_protocol = get_protocol_version()

    manifest = {
        "version": version,
        "hw": hw,
        "sha256": sha256,
        "size": size,
        "min_protocol": min_protocol,
    }

    # 1. Target hardware directory: server/firmware_bin/<hw>/<version>/
    dest_dir = FIRMWARE_BIN_ROOT / hw / version
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest_bin = dest_dir / "firmware.bin"
    dest_bin.write_bytes(bin_data)

    manifest_file = dest_dir / "manifest.json"
    manifest_file.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    # Latest flat binary in hw dir
    (FIRMWARE_BIN_ROOT / hw).mkdir(parents=True, exist_ok=True)
    shutil.copy2(dest_bin, FIRMWARE_BIN_ROOT / hw / "firmware.bin")

    # Copy extra files (bootloader, partitions, etc. for ESP32-C6)
    build_dir = bin_path.parent
    for extra in cfg["extra_files"]:
        src_extra = build_dir / extra
        if src_extra.exists():
            shutil.copy2(src_extra, FIRMWARE_BIN_ROOT / hw / extra)

    print(f"Firmware release {version} ({hw}) prepared:")
    print(f"  Binary: {dest_bin} ({size} bytes)")
    print(f"  SHA-256: {sha256}")
    print(f"  Manifest: {manifest_file}")
    return True

def release(version: str = None, target_hw: str = "all"):
    if not version:
        version = get_default_version()

    targets = list(HW_CONFIGS.keys()) if target_hw == "all" else [target_hw]
    success_count = 0
    for hw in targets:
        if release_target(hw, version):
            success_count += 1

    if success_count == 0:
        print("Error: No targets could be released.")
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Package and release firmware binaries.")
    parser.add_argument("version", nargs="?", default=None, help="Version string (e.g. 1.0.0)")
    parser.add_argument("--hw", choices=["esp32c6", "esp12e", "all"], default="all", help="Target hardware")
    args = parser.parse_args()

    release(version=args.version, target_hw=args.hw)
