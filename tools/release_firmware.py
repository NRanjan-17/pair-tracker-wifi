#!/usr/bin/env python3
import hashlib
import json
import os
from pathlib import Path
import re
import sys

REPO_ROOT = Path(__file__).resolve().parent.parent
VERSION_H = REPO_ROOT / "firmware" / "src" / "Version.h"
PIO_BIN = REPO_ROOT / "firmware" / ".pio" / "build" / "seeed_xiao_esp32c6" / "firmware.bin"
FIRMWARE_BIN_ROOT = REPO_ROOT / "server" / "firmware_bin"

def get_default_version() -> str:
    if VERSION_H.exists():
        content = VERSION_H.read_text(encoding="utf-8")
        match = re.search(r'#define\s+FIRMWARE_VERSION\s+"([^"]+)"', content)
        if match:
            return match.group(1)
    return "1.0.0"

def get_protocol_version() -> int:
    # Read from Protocol.h or default to 1
    protocol_h = REPO_ROOT / "firmware" / "src" / "Protocol.h"
    if protocol_h.exists():
        content = protocol_h.read_text(encoding="utf-8")
        match = re.search(r'#define\s+PROTOCOL_VERSION\s+(\d+)', content)
        if match:
            return int(match.group(1))
    return 1

def release(version: str = None):
    if not version:
        version = get_default_version()

    if not PIO_BIN.exists():
        print(f"Error: Compiled firmware not found at {PIO_BIN}")
        print("Please build firmware first (e.g. 'pio run' in firmware/)")
        sys.exit(1)

    dest_dir = FIRMWARE_BIN_ROOT / version
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest_bin = dest_dir / "firmware.bin"

    bin_data = PIO_BIN.read_bytes()
    dest_bin.write_bytes(bin_data)

    sha256 = hashlib.sha256(bin_data).hexdigest()
    size = len(bin_data)
    min_protocol = get_protocol_version()

    manifest = {
        "version": version,
        "sha256": sha256,
        "size": size,
        "min_protocol": min_protocol,
    }

    manifest_file = dest_dir / "manifest.json"
    manifest_file.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    print(f"Firmware release {version} prepared successfully:")
    print(f"  Binary: {dest_bin} ({size} bytes)")
    print(f"  SHA-256: {sha256}")
    print(f"  Manifest: {manifest_file}")

if __name__ == "__main__":
    ver = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1] else None
    release(ver)
