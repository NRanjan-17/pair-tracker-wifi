import sqlite3
import time
from typing import Any, Dict, List, Optional
from server.config import SQLITE_DB_PATH

class Database:
    def __init__(self, db_path=SQLITE_DB_PATH):
        self.db_path = db_path
        self._init_db()

    def _get_connection(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def _init_db(self):
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            CREATE TABLE IF NOT EXISTS devices (
                device_id TEXT PRIMARY KEY,
                role TEXT NOT NULL,
                token TEXT NOT NULL,
                notes TEXT DEFAULT '',
                created_at INTEGER NOT NULL,
                last_seen INTEGER DEFAULT 0
            )
            """)

            cursor.execute("""
            CREATE TABLE IF NOT EXISTS sessions (
                session_id TEXT PRIMARY KEY,
                recording_id TEXT NOT NULL,
                name TEXT NOT NULL,
                description TEXT DEFAULT '',
                status TEXT NOT NULL,
                started_at INTEGER NOT NULL,
                ended_at INTEGER,
                total_samples INTEGER DEFAULT 0,
                parquet_path TEXT DEFAULT ''
            )
            """)
            conn.commit()

    # Device Operations
    def register_device(self, device_id: str, role: str, token: str, notes: str = "") -> Dict[str, Any]:
        now = int(time.time() * 1000)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO devices (device_id, role, token, notes, created_at, last_seen)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(device_id) DO UPDATE SET
                role = excluded.role,
                token = excluded.token,
                notes = excluded.notes
            """, (device_id, role, token, notes, now, now))
            conn.commit()
        return self.get_device(device_id)

    def get_device(self, device_id: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM devices WHERE device_id = ?", (device_id,))
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def get_all_devices(self) -> List[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM devices ORDER BY role ASC")
            return [dict(row) for row in cursor.fetchall()]

    def update_last_seen(self, device_id: str, timestamp_ms: Optional[int] = None):
        if timestamp_ms is None:
            timestamp_ms = int(time.time() * 1000)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("UPDATE devices SET last_seen = ? WHERE device_id = ?", (timestamp_ms, device_id))
            conn.commit()

    # Session Operations
    def create_session(
        self, session_id: str, recording_id: str, name: str, description: str, parquet_path: str
    ) -> Dict[str, Any]:
        now = int(time.time() * 1000)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO sessions (session_id, recording_id, name, description, status, started_at, parquet_path)
            VALUES (?, ?, ?, ?, 'active', ?, ?)
            """, (session_id, recording_id, name, description, now, parquet_path))
            conn.commit()
        return self.get_session(session_id)

    def end_session(self, session_id: str, total_samples: int) -> Optional[Dict[str, Any]]:
        now = int(time.time() * 1000)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            UPDATE sessions
            SET status = 'completed', ended_at = ?, total_samples = ?
            WHERE session_id = ?
            """, (now, total_samples, session_id))
            conn.commit()
        return self.get_session(session_id)

    def get_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM sessions WHERE session_id = ?", (session_id,))
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def get_active_session(self) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM sessions WHERE status = 'active' ORDER BY started_at DESC LIMIT 1")
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def get_all_sessions(self) -> List[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM sessions ORDER BY started_at DESC")
            return [dict(row) for row in cursor.fetchall()]

db = Database()
