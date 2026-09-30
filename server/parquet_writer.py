from pathlib import Path
from typing import Dict, List, Optional
import pyarrow as pa
import pyarrow.parquet as pq

# Define Arrow Schema
ARROW_SCHEMA = pa.schema([
    ("recording_id", pa.string()),
    ("time_ms", pa.int64()),
    ("role", pa.string()),
    ("seq", pa.uint32()),
    ("server_rx_ms", pa.int64()),
    ("quat_w", pa.float32()),
    ("quat_x", pa.float32()),
    ("quat_y", pa.float32()),
    ("quat_z", pa.float32()),
    ("accel_x", pa.float32()),
    ("accel_y", pa.float32()),
    ("accel_z", pa.float32()),
    ("gyro_x", pa.float32()),
    ("gyro_y", pa.float32()),
    ("gyro_z", pa.float32()),
    ("mag_x", pa.float32()),
    ("mag_y", pa.float32()),
    ("mag_z", pa.float32()),
])

class SessionParquetWriter:
    def __init__(self, file_path: Path, batch_size: int = 500):
        self.file_path = Path(file_path)
        self.file_path.parent.mkdir(parents=True, exist_ok=True)
        self.batch_size = batch_size
        self.total_samples_written = 0
        self._writer: Optional[pq.ParquetWriter] = None
        self._buffer: Dict[str, List] = {col: [] for col in ARROW_SCHEMA.names}

    def _ensure_writer(self):
        if self._writer is None:
            self._writer = pq.ParquetWriter(
                str(self.file_path),
                ARROW_SCHEMA,
                compression="snappy",
            )

    def write_sample(
        self,
        recording_id: str,
        time_ms: int,
        role: str,
        seq: int,
        server_rx_ms: int,
        quat_w: float,
        quat_x: float,
        quat_y: float,
        quat_z: float,
        accel_x: Optional[float] = None,
        accel_y: Optional[float] = None,
        accel_z: Optional[float] = None,
        gyro_x: Optional[float] = None,
        gyro_y: Optional[float] = None,
        gyro_z: Optional[float] = None,
        mag_x: Optional[float] = None,
        mag_y: Optional[float] = None,
        mag_z: Optional[float] = None,
    ):
        self._buffer["recording_id"].append(recording_id)
        self._buffer["time_ms"].append(time_ms)
        self._buffer["role"].append(role)
        self._buffer["seq"].append(seq)
        self._buffer["server_rx_ms"].append(server_rx_ms)
        self._buffer["quat_w"].append(quat_w)
        self._buffer["quat_x"].append(quat_x)
        self._buffer["quat_y"].append(quat_y)
        self._buffer["quat_z"].append(quat_z)
        self._buffer["accel_x"].append(accel_x)
        self._buffer["accel_y"].append(accel_y)
        self._buffer["accel_z"].append(accel_z)
        self._buffer["gyro_x"].append(gyro_x)
        self._buffer["gyro_y"].append(gyro_y)
        self._buffer["gyro_z"].append(gyro_z)
        self._buffer["mag_x"].append(mag_x)
        self._buffer["mag_y"].append(mag_y)
        self._buffer["mag_z"].append(mag_z)

        if len(self._buffer["recording_id"]) >= self.batch_size:
            self.flush()

    def flush(self):
        if not self._buffer["recording_id"]:
            return

        self._ensure_writer()
        table = pa.Table.from_pydict(self._buffer, schema=ARROW_SCHEMA)
        self._writer.write_table(table)
        count = len(self._buffer["recording_id"])
        self.total_samples_written += count

        # Reset buffer
        for col in self._buffer:
            self._buffer[col].clear()

    def close(self):
        self.flush()
        if self._writer is not None:
            self._writer.close()
            self._writer = None
