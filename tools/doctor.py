#!/usr/bin/env python3
"""
Pair Tracker WiFi - Environment Doctor
Validates system requirements, toolchain versions, dependencies, serial ports, and port availability.
"""

import os
import re
import shutil
import socket
import subprocess
import sys
from pathlib import Path

# ANSI colors
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
BLUE = "\033[94m"
BOLD = "\033[1m"
RESET = "\033[0m"

REPO_ROOT = Path(__file__).resolve().parent.parent

def print_result(status: str, title: str, details: str = "", fix: str = ""):
    badge = {
        "PASS": f"{GREEN}[PASS]{RESET}",
        "WARN": f"{YELLOW}[WARN]{RESET}",
        "FAIL": f"{RED}[FAIL]{RESET}",
        "INFO": f"{BLUE}[INFO]{RESET}",
    }.get(status, f"[{status}]")

    print(f" {badge} {BOLD}{title}{RESET}")
    if details:
        print(f"        {details}")
    if fix and status in ("WARN", "FAIL"):
        print(f"        {YELLOW}Fix:{RESET} {fix}")


def check_git() -> bool:
    git_path = shutil.which("git")
    if not git_path:
        print_result("FAIL", "Git CLI", "git command not found", "Install Git from https://git-scm.com/")
        return False
    try:
        out = subprocess.check_output([git_path, "--version"], text=True).strip()
        print_result("PASS", "Git CLI", out)
        return True
    except Exception as e:
        print_result("FAIL", "Git CLI", f"Error checking version: {e}", "Install Git from https://git-scm.com/")
        return False


def check_python() -> bool:
    ver = sys.version_info
    ver_str = f"{ver.major}.{ver.minor}.{ver.micro}"
    if ver >= (3, 11):
        print_result("PASS", f"Python Interpreter ({ver_str})", f"Location: {sys.executable}")
        return True
    else:
        print_result(
            "FAIL",
            f"Python Interpreter ({ver_str})",
            "Python 3.11+ is required for FastAPI & PyArrow typing",
            "Install Python 3.11 or newer from https://www.python.org/downloads/",
        )
        return False


def check_node_npm() -> bool:
    node_path = shutil.which("node")
    npm_path = shutil.which("npm")
    success = True

    if not node_path:
        print_result("FAIL", "Node.js", "node command not found", "Install Node.js (LTS v18+) from https://nodejs.org/")
        success = False
    else:
        try:
            node_out = subprocess.check_output([node_path, "--version"], text=True).strip()
            # Extract major version
            m = re.match(r"v?(\d+)\.", node_out)
            if m and int(m.group(1)) >= 18:
                print_result("PASS", "Node.js", f"{node_out} (Location: {node_path})")
            else:
                print_result("WARN", "Node.js", f"{node_out} is older than recommended v18+", "Update Node.js from https://nodejs.org/")
        except Exception as e:
            print_result("FAIL", "Node.js", f"Error executing node: {e}", "Reinstall Node.js from https://nodejs.org/")
            success = False

    if not npm_path:
        print_result("FAIL", "npm", "npm command not found", "Install Node.js (includes npm) from https://nodejs.org/")
        success = False
    else:
        try:
            npm_out = subprocess.check_output([npm_path, "--version"], text=True).strip()
            print_result("PASS", "npm", f"v{npm_out} (Location: {npm_path})")
        except Exception as e:
            print_result("FAIL", "npm", f"Error executing npm: {e}", "Reinstall Node.js")
            success = False

    return success


def check_platformio() -> bool:
    # Check if pio is in PATH or within current virtual environment
    pio_path = shutil.which("pio")
    if not pio_path:
        # Check inside virtualenv bin
        venv_pio = Path(sys.executable).parent / "pio"
        if venv_pio.exists():
            pio_path = str(venv_pio)

    if not pio_path:
        print_result(
            "FAIL",
            "PlatformIO Core CLI",
            "pio executable not found",
            "Run 'pip install platformio' or install VS Code PlatformIO extension.",
        )
        return False

    try:
        out = subprocess.check_output([pio_path, "--version"], text=True).strip()
        print_result("PASS", "PlatformIO Core CLI", f"{out} (Location: {pio_path})")
        return True
    except Exception as e:
        print_result("FAIL", "PlatformIO Core CLI", f"Error checking PlatformIO: {e}", "Run 'pip install --upgrade platformio'")
        return False


def check_python_dependencies() -> bool:
    required = [
        ("fastapi", "fastapi"),
        ("uvicorn", "uvicorn"),
        ("pyarrow", "pyarrow"),
        ("yaml", "PyYAML"),
        ("zeroconf", "zeroconf"),
        ("pytest", "pytest"),
        ("httpx", "httpx"),
        ("websockets", "websockets"),
        ("serial", "pyserial"),
    ]
    missing = []
    for mod_name, pkg_name in required:
        try:
            __import__(mod_name)
        except ImportError:
            missing.append(pkg_name)

    if not missing:
        print_result("PASS", "Python Dependencies", f"All {len(required)} core packages imported successfully")
        return True
    else:
        print_result(
            "FAIL",
            "Python Dependencies",
            f"Missing package(s): {', '.join(missing)}",
            "Run 'pip install -r requirements.txt'",
        )
        return False


def check_dashboard_dependencies() -> bool:
    node_modules = REPO_ROOT / "dashboard" / "node_modules"
    if not node_modules.exists():
        print_result(
            "FAIL",
            "Dashboard Dependencies",
            "dashboard/node_modules directory does not exist",
            "Run 'cd dashboard && npm install'",
        )
        return False

    core_packages = ["three", "esptool-js", "vite", "typescript"]
    missing = [pkg for pkg in core_packages if not (node_modules / pkg).exists()]

    if not missing:
        print_result("PASS", "Dashboard Dependencies", "Three.js, esptool-js, Vite, and TypeScript installed")
        return True
    else:
        print_result(
            "FAIL",
            "Dashboard Dependencies",
            f"Missing node modules: {', '.join(missing)}",
            "Run 'cd dashboard && npm install'",
        )
        return False


def check_serial_ports() -> bool:
    try:
        import serial.tools.list_ports
        ports = list(serial.tools.list_ports.comports())
        if ports:
            port_desc = ", ".join(f"{p.device} ({p.description})" for p in ports)
            print_result("PASS", "USB Serial Hardware", f"Found {len(ports)} port(s): {port_desc}")
            return True
        else:
            print_result(
                "WARN",
                "USB Serial Hardware",
                "No active COM or serial devices detected",
                "Connect Seeed Studio XIAO ESP32-C6 via USB-C data cable (ensure cable has data lines).",
            )
            return True
    except Exception as e:
        print_result("WARN", "USB Serial Hardware", f"Could not query serial ports: {e}", "Ensure pyserial is installed ('pip install pyserial')")
        return True


def check_server_port(port: int = 8000) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            s.bind(("127.0.0.1", port))
            print_result("PASS", f"Server Port ({port})", f"TCP port {port} is free and ready for binding")
            return True
        except OSError:
            print_result(
                "WARN",
                f"Server Port ({port})",
                f"Port {port} is currently occupied",
                f"If Pair server is already running, this is expected. Otherwise terminate the process on port {port} or set SERVER_PORT={port+1}.",
            )
            return True


def main():
    print(f"\n{BOLD}======================================================{RESET}")
    print(f"{BOLD}       Pair Tracker WiFi - Environment Doctor       {RESET}")
    print(f"{BOLD}======================================================{RESET}\n")

    results = [
        check_git(),
        check_python(),
        check_node_npm(),
        check_platformio(),
        check_python_dependencies(),
        check_dashboard_dependencies(),
        check_serial_ports(),
        check_server_port(int(os.getenv("SERVER_PORT", "8000"))),
    ]

    print(f"\n{BOLD}------------------------------------------------------{RESET}")
    if all(results):
        print(f"{GREEN}{BOLD} ✓ ALL CHECKS PASSED:{RESET} System is ready for development & tracking.\n")
        sys.exit(0)
    else:
        print(f"{RED}{BOLD} ✗ ATTENTION REQUIRED:{RESET} One or more prerequisites failed. Follow the fix instructions above.\n")
        sys.exit(1)


if __name__ == "__main__":
    main()
