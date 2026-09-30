import os
from pathlib import Path

# Base Paths
BASE_DIR = Path(__file__).resolve().parent.parent
ROLES_FILE = Path(os.getenv("ROLES_FILE", BASE_DIR / "roles.yaml"))
DATA_DIR = Path(os.getenv("DATA_DIR", BASE_DIR / "data"))
SESSIONS_DIR = Path(os.getenv("SESSIONS_DIR", BASE_DIR / "sessions_data"))

DATA_DIR.mkdir(parents=True, exist_ok=True)
SESSIONS_DIR.mkdir(parents=True, exist_ok=True)

DEFAULT_DB = DATA_DIR / "pair.db" if not (DATA_DIR / "eidon.db").exists() else (DATA_DIR / "eidon.db")
SQLITE_DB_PATH = Path(os.getenv("SQLITE_DB_PATH", DEFAULT_DB))

# Server Network Settings
SERVER_HOST = os.getenv("SERVER_HOST", "0.0.0.0")
SERVER_PORT = int(os.getenv("SERVER_PORT", "8000"))
MDNS_NAME = os.getenv("MDNS_NAME", "pair")

# Auth Settings
ADMIN_TOKEN = os.getenv("PAIR_ADMIN_TOKEN", os.getenv("EIDON_ADMIN_TOKEN", "pair_admin_secret"))

