import json
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
                parquet_path TEXT DEFAULT '',
                metadata_json TEXT DEFAULT '{}'
            )
            """)
            # Ensure metadata_json exists on pre-existing tables
            try:
                cursor.execute("ALTER TABLE sessions ADD COLUMN metadata_json TEXT DEFAULT '{}'")
            except sqlite3.OperationalError:
                pass

            # Ensure hw, flash_size, free_heap exist on devices table
            for col, col_def in [
                ("hw", "TEXT DEFAULT 'esp32c6'"),
                ("flash_size", "INTEGER DEFAULT 0"),
                ("free_heap", "INTEGER DEFAULT 0"),
            ]:
                try:
                    cursor.execute(f"ALTER TABLE devices ADD COLUMN {col} {col_def}")
                except sqlite3.OperationalError:
                    pass

            conn.commit()

    # Device Operations
    def register_device(
        self,
        device_id: str,
        role: str,
        token: str,
        notes: str = "",
        hw: str = "esp32c6",
        flash_size: int = 0,
        free_heap: int = 0,
    ) -> Dict[str, Any]:
        now = int(time.time() * 1000)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO devices (device_id, role, token, notes, created_at, last_seen, hw, flash_size, free_heap)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(device_id) DO UPDATE SET
                role = excluded.role,
                token = excluded.token,
                notes = excluded.notes,
                hw = excluded.hw,
                flash_size = excluded.flash_size,
                free_heap = excluded.free_heap
            """, (device_id, role, token, notes, now, now, hw, flash_size, free_heap))
            conn.commit()
        return self.get_device(device_id)

    def update_device_role(self, device_id: str, role: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("UPDATE devices SET role = ? WHERE device_id = ?", (role, device_id))
            conn.commit()
        return self.get_device(device_id)

    def update_device_metrics(
        self,
        device_id: str,
        hw: Optional[str] = None,
        flash_size: Optional[int] = None,
        free_heap: Optional[int] = None,
    ):
        with self._get_connection() as conn:
            cursor = conn.cursor()
            updates = []
            params = []
            if hw is not None:
                updates.append("hw = ?")
                params.append(hw)
            if flash_size is not None:
                updates.append("flash_size = ?")
                params.append(flash_size)
            if free_heap is not None:
                updates.append("free_heap = ?")
                params.append(free_heap)
            if updates:
                params.append(device_id)
                cursor.execute(f"UPDATE devices SET {', '.join(updates)} WHERE device_id = ?", params)
                conn.commit()

    def get_device(self, device_id: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM devices WHERE device_id = ?", (device_id,))
            row = cursor.fetchone()
            if row:
                return dict(row)
            return None

    def get_device_by_token(self, token: str) -> Optional[Dict[str, Any]]:
        if not token:
            return None
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM devices WHERE token = ?", (token,))
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
        self,
        session_id: str,
        recording_id: str,
        name: str,
        description: str,
        parquet_path: str,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        now = int(time.time() * 1000)
        meta_str = json.dumps(metadata or {})
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO sessions (session_id, recording_id, name, description, status, started_at, parquet_path, metadata_json)
            VALUES (?, ?, ?, ?, 'active', ?, ?, ?)
            """, (session_id, recording_id, name, description, now, parquet_path, meta_str))
            conn.commit()
        return self.get_session(session_id)

    def end_session(
        self,
        session_id: str,
        total_samples: int,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> Optional[Dict[str, Any]]:
        now = int(time.time() * 1000)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            if metadata is not None:
                meta_str = json.dumps(metadata)
                cursor.execute("""
                UPDATE sessions
                SET status = 'completed', ended_at = ?, total_samples = ?, metadata_json = ?
                WHERE session_id = ?
                """, (now, total_samples, meta_str, session_id))
            else:
                cursor.execute("""
                UPDATE sessions
                SET status = 'completed', ended_at = ?, total_samples = ?
                WHERE session_id = ?
                """, (now, total_samples, session_id))
            conn.commit()
        return self.get_session(session_id)

    def update_session_metadata(self, session_id: str, metadata: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        meta_str = json.dumps(metadata)
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("UPDATE sessions SET metadata_json = ? WHERE session_id = ?", (meta_str, session_id))
            conn.commit()
        return self.get_session(session_id)

    def _format_session_row(self, row: sqlite3.Row) -> Dict[str, Any]:
        d = dict(row)
        if "metadata_json" in d and d["metadata_json"]:
            try:
                d["metadata"] = json.loads(d["metadata_json"])
            except Exception:
                d["metadata"] = {}
        else:
            d["metadata"] = {}
        return d

    def get_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM sessions WHERE session_id = ?", (session_id,))
            row = cursor.fetchone()
            if row:
                return self._format_session_row(row)
            return None

    def get_active_session(self) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM sessions WHERE status = 'active' ORDER BY started_at DESC LIMIT 1")
            row = cursor.fetchone()
            if row:
                return self._format_session_row(row)
            return None

    def get_all_sessions(self) -> List[Dict[str, Any]]:
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM sessions ORDER BY started_at DESC")
            return [self._format_session_row(row) for row in cursor.fetchall()]

db = Database()
