import struct
from dataclasses import dataclass
from typing import List, Optional, Tuple

PROTOCOL_VERSION = 1
FLAG_RAW_PRESENT = 0x01
FLAG_BACKFILL = 0x02

HEADER_FORMAT = "<BBBB"  # version, role, flags, count (4 bytes)
HEADER_SIZE = struct.calcsize(HEADER_FORMAT)

QUAT_SAMPLE_FORMAT = "<H I f f f f"  # seq (u16), t_ms (u32), quat_w, quat_x, quat_y, quat_z
QUAT_SAMPLE_SIZE = struct.calcsize(QUAT_SAMPLE_FORMAT)  # 22 bytes

# 9 floats: accel_x, accel_y, accel_z, gyro_x, gyro_y, gyro_z, mag_x, mag_y, mag_z
RAW_SAMPLE_FORMAT = "<9f"
RAW_SAMPLE_SIZE = struct.calcsize(RAW_SAMPLE_FORMAT)  # 36 bytes

FULL_SAMPLE_SIZE = QUAT_SAMPLE_SIZE + RAW_SAMPLE_SIZE  # 58 bytes


@dataclass
class TrackerSample:
    seq: int
    t_ms: int
    quat_w: float
    quat_x: float
    quat_y: float
    quat_z: float
    accel_x: Optional[float] = None
    accel_y: Optional[float] = None
    accel_z: Optional[float] = None
    gyro_x: Optional[float] = None
    gyro_y: Optional[float] = None
    gyro_z: Optional[float] = None
    mag_x: Optional[float] = None
    mag_y: Optional[float] = None
    mag_z: Optional[float] = None


@dataclass
class DataFrame:
    version: int
    role: int
    flags: int
    count: int
    samples: List[TrackerSample]

    @property
    def raw_present(self) -> bool:
        return bool(self.flags & FLAG_RAW_PRESENT)

    @property
    def is_backfill(self) -> bool:
        return bool(self.flags & FLAG_BACKFILL)


def decode_frame(data: bytes) -> DataFrame:
    """
    Decodes a binary frame received from a tracker node.
    Raises ValueError if frame format or length is invalid.
    """
    if len(data) < HEADER_SIZE:
        raise ValueError(f"Data too short for header: {len(data)} < {HEADER_SIZE}")

    version, role, flags, count = struct.unpack_from(HEADER_FORMAT, data, 0)
    if version != PROTOCOL_VERSION:
        raise ValueError(f"Unsupported protocol version {version}, expected {PROTOCOL_VERSION}")

    raw_present = bool(flags & FLAG_RAW_PRESENT)
    sample_size = FULL_SAMPLE_SIZE if raw_present else QUAT_SAMPLE_SIZE
    expected_len = HEADER_SIZE + count * sample_size

    if len(data) < expected_len:
        raise ValueError(
            f"Frame payload too short: expected {expected_len} bytes for {count} samples, got {len(data)}"
        )

    offset = HEADER_SIZE
    samples: List[TrackerSample] = []

    for _ in range(count):
        seq, t_ms, qw, qx, qy, qz = struct.unpack_from(QUAT_SAMPLE_FORMAT, data, offset)
        offset += QUAT_SAMPLE_SIZE

        if raw_present:
            ax, ay, az, gx, gy, gz, mx, my, mz = struct.unpack_from(RAW_SAMPLE_FORMAT, data, offset)
            offset += RAW_SAMPLE_SIZE
            samples.append(
                TrackerSample(
                    seq=seq,
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
            )
        else:
            samples.append(
                TrackerSample(
                    seq=seq,
                    t_ms=t_ms,
                    quat_w=qw,
                    quat_x=qx,
                    quat_y=qy,
                    quat_z=qz,
                )
            )

    return DataFrame(version=version, role=role, flags=flags, count=count, samples=samples)


def encode_frame(
    role: int,
    samples: List[TrackerSample],
    is_backfill: bool = False,
    include_raw: Optional[bool] = None,
    version: int = PROTOCOL_VERSION,
) -> bytes:
    """
    Encodes samples into a binary frame (used by fake tracker and testing).
    """
    if not samples:
        raise ValueError("Cannot encode frame with 0 samples")

    count = len(samples)
    if include_raw is None:
        include_raw = samples[0].accel_x is not None

    flags = 0
    if include_raw:
        flags |= FLAG_RAW_PRESENT
    if is_backfill:
        flags |= FLAG_BACKFILL

    buf = bytearray(struct.pack(HEADER_FORMAT, version, role, flags, count))

    for s in samples:
        buf.extend(struct.pack(QUAT_SAMPLE_FORMAT, s.seq, s.t_ms, s.quat_w, s.quat_x, s.quat_y, s.quat_z))
        if include_raw:
            buf.extend(
                struct.pack(
                    RAW_SAMPLE_FORMAT,
                    s.accel_x or 0.0,
                    s.accel_y or 0.0,
                    s.accel_z or 0.0,
                    s.gyro_x or 0.0,
                    s.gyro_y or 0.0,
                    s.gyro_z or 0.0,
                    s.mag_x or 0.0,
                    s.mag_y or 0.0,
                    s.mag_z or 0.0,
                )
            )

    return bytes(buf)


def compute_sequence_gap(seq: int, last_seq: Optional[int]) -> Tuple[int, bool]:
    """
    Computes sequence delta with 16-bit wrap handling:
    delta = (seq - last_seq) & 0xFFFF

    Returns:
        (dropped_count, is_valid_or_in_order)
        - If last_seq is None: (0, True) (first sample)
        - If delta == 1: (0, True) (normal in-order sample)
        - If 1 < delta < 32768: (delta - 1, True) (detected packet drop)
        - If delta == 0: (0, False) (duplicate sample)
        - If delta >= 32768: (0, False) (stale/out-of-order)
    """
    if last_seq is None:
        return 0, True

    delta = (seq - last_seq) & 0xFFFF
    if delta == 1:
        return 0, True
    elif 1 < delta < 32768:
        return delta - 1, True
    elif delta == 0:
        return 0, False
    else:
        # delta >= 32768 (out-of-order or duplicate from earlier)
        return 0, False
