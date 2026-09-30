import os
from pathlib import Path

# Base Paths
BASE_DIR = Path(__file__).resolve().parent.parent
ROLES_FILE = Path(os.getenv("ROLES_FILE", BASE_DIR / "roles.yaml"))
DATA_DIR = Path(os.getenv("DATA_DIR", BASE_DIR / "data"))
SESSIONS_DIR = Path(os.getenv("SESSIONS_DIR", BASE_DIR / "sessions_data"))

DATA_DIR.mkdir(parents=True, exist_ok=True)
SESSIONS_DIR.mkdir(parents=True, exist_ok=True)

SQLITE_DB_PATH = Path(os.getenv("SQLITE_DB_PATH", DATA_DIR / "eidon.db"))

# Server Network Settings
SERVER_HOST = os.getenv("SERVER_HOST", "0.0.0.0")
SERVER_PORT = int(os.getenv("SERVER_PORT", "8000"))
MDNS_NAME = os.getenv("MDNS_NAME", "eidon")

# Auth Settings
ADMIN_TOKEN = os.getenv("EIDON_ADMIN_TOKEN", "eidon_admin_secret")
