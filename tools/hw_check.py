#!/usr/bin/env python3
"""
Pair Tracker WiFi - Real Hardware Health Check
Validates announced trackers against required roles, measuring sample rates,
packet loss, battery levels, and clock synchronization.
"""

import argparse
import asyncio
import sys
import time
from pathlib import Path
from typing import Any, Dict, List

import httpx
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
ROLES_FILE = REPO_ROOT / "roles.yaml"

GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
BOLD = "\033[1m"
RESET = "\033[0m"


def load_required_roles() -> List[str]:
    if ROLES_FILE.exists():
        with open(ROLES_FILE, "r", encoding="utf-8") as f:
            data = yaml.safe_load(f)
            return data.get("required_roles", [])
    return ["chest", "left_thigh", "right_thigh", "left_shin", "right_shin", "left_foot", "right_foot"]


async def fetch_devices(client: httpx.AsyncClient, server_url: str) -> List[Dict[str, Any]]:
    resp = await client.get(f"{server_url}/v1/devices", timeout=5.0)
    resp.raise_for_status()
    return resp.json()


async def run_hw_check(server_url: str, sample_duration_s: float = 2.5):
    print(f"\n{BOLD}======================================================================{RESET}")
    print(f"{BOLD}           Pair Tracker WiFi - Real Hardware Health Check             {RESET}")
    print(f"{BOLD}======================================================================{RESET}")
    print(f"Target Server: {CYAN}{server_url}{RESET}")

    required_roles = load_required_roles()
    print(f"Required Roles ({len(required_roles)}): {', '.join(required_roles)}\n")

    async with httpx.AsyncClient() as client:
        # Check server health first
        try:
            health_resp = await client.get(f"{server_url}/healthz", timeout=3.0)
            if health_resp.status_code != 200:
                print(f"{RED}Server responded with status {health_resp.status_code}{RESET}")
                sys.exit(1)
        except Exception as e:
            print(f"{RED}Failed to connect to Pair server at {server_url}: {e}{RESET}")
            print(f"{YELLOW}Hint: Start the server first via 'make run-server' or check port 8000.{RESET}\n")
            sys.exit(1)

        print("Sampling device telemetry over a short window to measure live sample rate...")
        try:
            devs_start = await fetch_devices(client, server_url)
        except Exception as e:
            print(f"{RED}Error fetching initial device state: {e}{RESET}")
            sys.exit(1)

        t0 = time.time()
        await asyncio.sleep(sample_duration_s)
        t1 = time.time()

        try:
            devs_end = await fetch_devices(client, server_url)
        except Exception as e:
            print(f"{RED}Error fetching final device state: {e}{RESET}")
            sys.exit(1)

    dt = max(0.1, t1 - t0)
    start_counts = {d["device_id"]: d.get("total_samples", 0) for d in devs_start}

    # Header
    print(f"\n{BOLD}{'Role':<15} {'Device MAC':<20} {'Status':<10} {'Rate (Hz)':<11} {'Loss %':<9} {'Clock Offset':<14} {'Battery':<10}{RESET}")
    print("-" * 92)

    role_to_dev: Dict[str, Dict[str, Any]] = {}
    online_count = 0
    failures = []

    for d in devs_end:
        role = d.get("role", "unassigned")
        role_to_dev[role] = d

    all_roles_to_display = sorted(list(set(required_roles + list(role_to_dev.keys()))))

    for role in all_roles_to_display:
        d = role_to_dev.get(role)
        is_required = role in required_roles
        req_suffix = " *" if is_required else ""
        role_display = f"{role}{req_suffix}"

        if not d or not d.get("online"):
            status_str = f"{RED}OFFLINE{RESET}"
            print(f"{role_display:<15} {'—':<20} {status_str:<19} {'—':<11} {'—':<9} {'—':<14} {'—':<10}")
            if is_required:
                failures.append(f"Required role '{role}' is offline or missing.")
            continue

        online_count += 1
        dev_id = d.get("device_id", "unknown")
        status_str = f"{GREEN}ONLINE{RESET}"

        count_start = start_counts.get(dev_id, 0)
        count_end = d.get("total_samples", 0)
        measured_hz = (count_end - count_start) / dt

        loss_pct = d.get("loss_pct", 0.0)
        clock_offset = d.get("clock_offset_ms")
        offset_str = f"{clock_offset:+d} ms" if clock_offset is not None else "n/a"

        batt = d.get("battery_pct")
        batt_str = f"{batt}%" if batt is not None else "n/a"

        # Quality assertions
        if is_required:
            if measured_hz < 20.0:
                failures.append(f"Role '{role}' sample rate is too low ({measured_hz:.1f} Hz < 20 Hz threshold).")
            if loss_pct > 10.0:
                failures.append(f"Role '{role}' packet loss is excessive ({loss_pct:.1f}% > 10%).")

        print(f"{role_display:<15} {dev_id:<20} {status_str:<19} {measured_hz:>8.1f} Hz  {loss_pct:>6.2f}%   {offset_str:>11}   {batt_str:>7}")

    print("-" * 92)
    print("(* indicates required role for recording sessions)\n")

    if not failures:
        print(f"{GREEN}{BOLD}✓ HARDWARE CHECK PASSED:{RESET} All required roles are streaming nominally.")
        print(f"Total online devices: {online_count} / {len(required_roles)} required roles active.\n")
        sys.exit(0)
    else:
        print(f"{RED}{BOLD}✗ HARDWARE CHECK FAILED:{RESET}")
        for err in failures:
            print(f"  - {err}")
        print(f"\n{YELLOW}Remediation Steps:{RESET}")
        print("  1. Switch ON all missing trackers and ensure battery is charged (> 30%).")
        print("  2. Check WiFi network (trackers require 2.4 GHz 802.11 b/g/n, WPA2/WPA3-Personal).")
        print("  3. Verify roles match roles.yaml via the Flash & Provision dashboard or serial CLI ('show').\n")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description="Pair Tracker WiFi Hardware Health Check")
    parser.add_argument("--server", default="http://localhost:8000", help="Pair server base URL (default: http://localhost:8000)")
    parser.add_argument("--duration", type=float, default=2.5, help="Sampling window in seconds (default: 2.5)")
    args = parser.parse_args()

    asyncio.run(run_hw_check(server_url=args.server, sample_duration_s=args.duration))


if __name__ == "__main__":
    main()
