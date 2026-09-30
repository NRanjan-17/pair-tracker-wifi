import json
import math
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple
import pyarrow as pa
import pyarrow.parquet as pq

# Path to skeleton config
SKELETON_CONFIG_PATH = Path(__file__).resolve().parent.parent / "dashboard" / "src" / "skeleton.json"

def load_skeleton() -> Dict[str, Any]:
    if SKELETON_CONFIG_PATH.exists():
        with open(SKELETON_CONFIG_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    # Default fallback skeleton if file is not found
    return {
        "root": "chest",
        "height": 1.75,
        "bones": [
            {"name": "chest", "parent": None, "length": 0.36, "position": [0, 1.25, 0], "direction": [0, 1, 0]},
            {"name": "left_shoulder", "parent": "chest", "length": 0.16, "position": [0.18, 0.14, 0], "direction": [1, 0, 0]},
            {"name": "left_upper_arm", "parent": "left_shoulder", "length": 0.28, "position": [0.16, 0, 0], "direction": [0, -1, 0]},
            {"name": "left_forearm", "parent": "left_upper_arm", "length": 0.25, "position": [0, -0.28, 0], "direction": [0, -1, 0]},
            {"name": "left_hand", "parent": "left_forearm", "length": 0.14, "position": [0, -0.25, 0], "direction": [0, -1, 0]},
            {"name": "right_shoulder", "parent": "chest", "length": 0.16, "position": [-0.18, 0.14, 0], "direction": [-1, 0, 0]},
            {"name": "right_upper_arm", "parent": "right_shoulder", "length": 0.28, "position": [-0.16, 0, 0], "direction": [0, -1, 0]},
            {"name": "right_forearm", "parent": "right_upper_arm", "length": 0.25, "position": [0, -0.28, 0], "direction": [0, -1, 0]},
            {"name": "right_hand", "parent": "right_forearm", "length": 0.14, "position": [0, -0.25, 0], "direction": [0, -1, 0]},
            {"name": "left_thigh", "parent": "chest", "length": 0.42, "position": [0.10, -0.28, 0], "direction": [0, -1, 0]},
            {"name": "left_shin", "parent": "left_thigh", "length": 0.40, "position": [0, -0.42, 0], "direction": [0, -1, 0]},
            {"name": "left_foot", "parent": "left_shin", "length": 0.18, "position": [0, -0.40, 0], "direction": [0, 0, 1]},
            {"name": "right_thigh", "parent": "chest", "length": 0.42, "position": [-0.10, -0.28, 0], "direction": [0, -1, 0]},
            {"name": "right_shin", "parent": "right_thigh", "length": 0.40, "position": [0, -0.42, 0], "direction": [0, -1, 0]},
            {"name": "right_foot", "parent": "right_shin", "length": 0.18, "position": [0, -0.40, 0], "direction": [0, 0, 1]},
        ],
    }


# Quaternion & Euler Math
def bno_to_three_quat(qw: float, qx: float, qy: float, qz: float) -> Tuple[float, float, float, float]:
    """
    Coordinate frame conversion:
    BNO085 right-handed Z-up: X=right, Y=forward, Z=up.
    Three.js right-handed Y-up: X=right, Y=up, Z=-forward.
    Mapping: x_three = qx, y_three = qz, z_three = -qy, w_three = qw.
    Returns unit quaternion (x, y, z, w).
    """
    norm = math.sqrt(qx * qx + qz * qz + qy * qy + qw * qw)
    if norm < 1e-9:
        return (0.0, 0.0, 0.0, 1.0)
    return (qx / norm, qz / norm, -qy / norm, qw / norm)


def quat_mult(q1: Tuple[float, float, float, float], q2: Tuple[float, float, float, float]) -> Tuple[float, float, float, float]:
    """
    Quaternion multiplication q1 * q2 for quaternions (x, y, z, w).
    """
    x1, y1, z1, w1 = q1
    x2, y2, z2, w2 = q2
    x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2
    y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2
    z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2
    w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2
    norm = math.sqrt(x * x + y * y + z * z + w * w)
    if norm < 1e-9:
        return (0.0, 0.0, 0.0, 1.0)
    return (x / norm, y / norm, z / norm, w / norm)


def quat_inv(q: Tuple[float, float, float, float]) -> Tuple[float, float, float, float]:
    """
    Inverse of unit quaternion (x, y, z, w).
    """
    x, y, z, w = q
    norm_sq = x * x + y * y + z * z + w * w
    if norm_sq < 1e-9:
        return (0.0, 0.0, 0.0, 1.0)
    return (-x / norm_sq, -y / norm_sq, -z / norm_sq, w / norm_sq)


def quat_slerp(
    q1: Tuple[float, float, float, float],
    q2: Tuple[float, float, float, float],
    alpha: float,
) -> Tuple[float, float, float, float]:
    """
    Spherical linear interpolation between two unit quaternions (x, y, z, w).
    """
    if alpha <= 0.0:
        return q1
    if alpha >= 1.0:
        return q2

    dot = sum(a * b for a, b in zip(q1, q2))
    if dot < 0.0:
        q2 = tuple(-x for x in q2)  # type: ignore
        dot = -dot

    if dot > 0.9995:
        # Linear interpolation and normalize
        res = tuple((1.0 - alpha) * a + alpha * b for a, b in zip(q1, q2))
        norm = math.sqrt(sum(x * x for x in res))
        return tuple(x / norm for x in res)  # type: ignore

    theta = math.acos(max(-1.0, min(1.0, dot)))
    sin_theta = math.sin(theta)
    if abs(sin_theta) < 1e-9:
        return q1

    w1 = math.sin((1.0 - alpha) * theta) / sin_theta
    w2 = math.sin(alpha * theta) / sin_theta
    res = tuple(w1 * a + w2 * b for a, b in zip(q1, q2))
    norm = math.sqrt(sum(x * x for x in res))
    return tuple(x / norm for x in res)  # type: ignore


def quat_to_matrix_3x3(qx: float, qy: float, qz: float, qw: float) -> Tuple[Tuple[float, float, float], ...]:
    """
    Constructs a 3x3 rotation matrix from quaternion (qx, qy, qz, qw).
    Elements are row-major: M[row][col].
    """
    x2, y2, z2 = qx + qx, qy + qy, qz + qz
    xx, yy, zz = qx * x2, qy * y2, qz * z2
    xy, xz, yz = qx * y2, qx * z2, qy * z2
    wx, wy, wz = qw * x2, qw * y2, qw * z2

    m00 = 1.0 - (yy + zz)
    m01 = xy - wz
    m02 = xz + wy

    m10 = xy + wz
    m11 = 1.0 - (xx + zz)
    m12 = yz - wx

    m20 = xz - wy
    m21 = yz + wx
    m22 = 1.0 - (xx + yy)

    return (
        (m00, m01, m02),
        (m10, m11, m12),
        (m20, m21, m22),
    )


def quat_to_euler_zxy(qx: float, qy: float, qz: float, qw: float) -> Tuple[float, float, float]:
    """
    Converts unit quaternion (qx, qy, qz, qw) to Euler angles (rot_z, rot_x, rot_y) in radians.
    Matches Three.js Euler order 'ZXY' (intrinsic Z, then X, then Y).
    """
    norm = math.sqrt(qx * qx + qy * qy + qz * qz + qw * qw)
    if norm < 1e-9:
        return 0.0, 0.0, 0.0
    qx, qy, qz, qw = qx / norm, qy / norm, qz / norm, qw / norm

    R = quat_to_matrix_3x3(qx, qy, qz, qw)
    m32 = R[2][1]
    m31 = R[2][0]
    m33 = R[2][2]
    m12 = R[0][1]
    m22 = R[1][1]
    m21 = R[1][0]
    m11 = R[0][0]

    clamped_m32 = max(-1.0, min(1.0, m32))
    rot_x = math.asin(clamped_m32)

    if abs(clamped_m32) < 0.9999999:
        rot_y = math.atan2(-m31, m33)
        rot_z = math.atan2(-m12, m22)
    else:
        rot_y = 0.0
        rot_z = math.atan2(m21, m11)

    return rot_z, rot_x, rot_y


def euler_zxy_to_quat(rot_z: float, rot_x: float, rot_y: float) -> Tuple[float, float, float, float]:
    """
    Converts Euler angles (rot_z, rot_x, rot_y) in radians (ZXY order) back to unit quaternion (qx, qy, qz, qw).
    Matches Three.js Quaternion.setFromEuler with order 'ZXY'.
    """
    c1 = math.cos(rot_x * 0.5)
    c2 = math.cos(rot_y * 0.5)
    c3 = math.cos(rot_z * 0.5)

    s1 = math.sin(rot_x * 0.5)
    s2 = math.sin(rot_y * 0.5)
    s3 = math.sin(rot_z * 0.5)

    qx = s1 * c2 * c3 - c1 * s2 * s3
    qy = c1 * s2 * c3 + s1 * c2 * s3
    qz = c1 * c2 * s3 + s1 * s2 * c3
    qw = c1 * c2 * c3 - s1 * s2 * s3

    norm = math.sqrt(qx * qx + qy * qy + qz * qz + qw * qw)
    if norm < 1e-9:
        return (0.0, 0.0, 0.0, 1.0)
    return (qx / norm, qy / norm, qz / norm, qw / norm)


class MocapSessionProcessor:
    def __init__(
        self,
        parquet_path: Path,
        skeleton: Optional[Dict[str, Any]] = None,
        calibration_offsets: Optional[Dict[str, List[float]]] = None,
        rate: float = 30.0,
        gap_threshold_ms: float = 200.0,
    ):
        self.parquet_path = Path(parquet_path)
        self.skeleton = skeleton or load_skeleton()
        self.rate = float(rate)
        self.gap_threshold_ms = float(gap_threshold_ms)

        # Clean / normalize calibration offsets
        self.calibration_offsets: Dict[str, Tuple[float, float, float, float]] = {}
        if calibration_offsets:
            for role, q in calibration_offsets.items():
                if len(q) == 4:
                    norm = math.sqrt(sum(x * x for x in q))
                    if norm > 1e-6:
                        self.calibration_offsets[role] = (q[0] / norm, q[1] / norm, q[2] / norm, q[3] / norm)
        self.is_calibrated = len(self.calibration_offsets) > 0

        # Output data structures
        self.gap_list: List[Dict[str, Any]] = []
        self.resampled_frames: List[Dict[str, Any]] = []
        self.duration_s: float = 0.0
        self.frame_count: int = 0
        self.roles_present: List[str] = []

    def process(self):
        if not self.parquet_path.exists():
            raise FileNotFoundError(f"Parquet file not found: {self.parquet_path}")

        table = pq.read_table(str(self.parquet_path))
        pydict = table.to_pydict()

        n_samples = len(pydict["time_ms"])
        if n_samples == 0:
            self.duration_s = 0.0
            self.frame_count = 0
            self.resampled_frames = []
            return

        roles = pydict["role"]
        self.roles_present = sorted(list(set(roles)))

        # Group samples per role and compute server-synced timestamps
        samples_by_role: Dict[str, List[Dict[str, Any]]] = {r: [] for r in self.roles_present}
        for i in range(n_samples):
            r = roles[i]
            t_ms = pydict["time_ms"][i]
            rx_ms = pydict["server_rx_ms"][i]
            qw = float(pydict["quat_w"][i])
            qx = float(pydict["quat_x"][i])
            qy = float(pydict["quat_y"][i])
            qz = float(pydict["quat_z"][i])

            # Convert BNO085 orientation to Three.js world frame
            q_three = bno_to_three_quat(qw, qx, qy, qz)

            # Apply calibration offset if available: Q_calib = Q_offset * Q_three
            if r in self.calibration_offsets:
                q_calib = quat_mult(self.calibration_offsets[r], q_three)
            else:
                q_calib = q_three

            samples_by_role[r].append({
                "time_ms": t_ms,
                "server_rx_ms": rx_ms,
                "quat": q_calib,
            })

        # Calculate time sync mapping per role
        # Offset to map device local time to server time domain
        synced_samples_by_role: Dict[str, List[Tuple[float, Tuple[float, float, float, float]]]] = {}
        all_times: List[float] = []

        for r, s_list in samples_by_role.items():
            if not s_list:
                continue
            # Sort by sample timestamp
            s_list.sort(key=lambda s: s["time_ms"])

            # Compute median clock difference between server_rx_ms and time_ms
            diffs = [s["server_rx_ms"] - s["time_ms"] for s in s_list]
            diffs.sort()
            median_offset = diffs[len(diffs) // 2]

            synced_list: List[Tuple[float, Tuple[float, float, float, float]]] = []
            for s in s_list:
                t_synced = float(s["time_ms"] + median_offset)
                synced_list.append((t_synced, s["quat"]))
                all_times.append(t_synced)

            synced_samples_by_role[r] = synced_list

        if not all_times:
            return

        t_min = min(all_times)
        t_max = max(all_times)
        self.duration_s = max(0.0, (t_max - t_min) / 1000.0)
        self.frame_count = max(1, int(round(self.duration_s * self.rate)))
        frame_interval_ms = 1000.0 / self.rate

        # Detect gaps > 200 ms in each role's stream
        for r, s_list in synced_samples_by_role.items():
            for i in range(len(s_list) - 1):
                t1, _ = s_list[i]
                t2, _ = s_list[i + 1]
                gap_ms = t2 - t1
                if gap_ms > self.gap_threshold_ms:
                    self.gap_list.append({
                        "role": r,
                        "start_ms": round(t1 - t_min, 2),
                        "end_ms": round(t2 - t_min, 2),
                        "duration_ms": round(gap_ms, 2),
                    })

        # Hierarchy bone ordering from skeleton
        bones_config = self.skeleton.get("bones", [])
        bone_names = [b["name"] for b in bones_config]

        # Resample every bone at the fixed rate
        self.resampled_frames = []
        for k in range(self.frame_count):
            t_frame_rel_ms = k * frame_interval_ms
            t_frame_abs_ms = t_min + t_frame_rel_ms

            frame_world_quats: Dict[str, Tuple[float, float, float, float]] = {}

            for bone_name in bone_names:
                s_list = synced_samples_by_role.get(bone_name)
                if not s_list:
                    # Untracked bone: identity rotation
                    frame_world_quats[bone_name] = (0.0, 0.0, 0.0, 1.0)
                    continue

                # Interpolate quaternion at t_frame_abs_ms
                q_interp = self._sample_quat_at_time(s_list, t_frame_abs_ms)
                frame_world_quats[bone_name] = q_interp

            # Hierarchically compute local rotations:
            # local_rot = inverse(parent_world_rot) * child_world_rot
            frame_local_quats: Dict[str, Tuple[float, float, float, float]] = {}
            for bone in bones_config:
                b_name = bone["name"]
                p_name = bone.get("parent")
                child_w = frame_world_quats[b_name]

                if p_name is None:
                    # Root bone local rotation is world rotation
                    frame_local_quats[b_name] = child_w
                else:
                    if b_name not in synced_samples_by_role:
                        # Untracked child follows parent rest orientation (identity local)
                        frame_local_quats[b_name] = (0.0, 0.0, 0.0, 1.0)
                        frame_world_quats[b_name] = frame_world_quats[p_name]
                    else:
                        parent_w = frame_world_quats[p_name]
                        inv_parent = quat_inv(parent_w)
                        local_q = quat_mult(inv_parent, child_w)
                        frame_local_quats[b_name] = local_q

            # Compute Euler angles (ZXY order, in degrees) for each bone
            frame_eulers_deg: Dict[str, Tuple[float, float, float]] = {}
            for b_name, lq in frame_local_quats.items():
                rz, rx, ry = quat_to_euler_zxy(*lq)
                frame_eulers_deg[b_name] = (
                    math.degrees(rz),
                    math.degrees(rx),
                    math.degrees(ry),
                )

            self.resampled_frames.append({
                "frame": k,
                "time_s": round(k / self.rate, 6),
                "time_ms": round(t_frame_rel_ms, 2),
                "world_quats": frame_world_quats,
                "local_quats": frame_local_quats,
                "eulers_deg": frame_eulers_deg,
            })

    def _sample_quat_at_time(
        self,
        s_list: List[Tuple[float, Tuple[float, float, float, float]]],
        t: float,
    ) -> Tuple[float, float, float, float]:
        if t <= s_list[0][0]:
            return s_list[0][1]
        if t >= s_list[-1][0]:
            return s_list[-1][1]

        # Binary search
        low = 0
        high = len(s_list) - 1
        while low <= high:
            mid = (low + high) // 2
            if s_list[mid][0] <= t:
                low = mid + 1
            else:
                high = mid - 1

        idx0 = max(0, high)
        idx1 = min(len(s_list) - 1, idx0 + 1)

        t0, q0 = s_list[idx0]
        t1, q1 = s_list[idx1]

        dt = t1 - t0
        # If gap > threshold, hold last value without inventing motion
        if dt > self.gap_threshold_ms:
            return q0

        if dt <= 1e-6:
            return q0

        alpha = (t - t0) / dt
        return quat_slerp(q0, q1, alpha)


def generate_bvh(
    processor: MocapSessionProcessor,
    session_id: str,
) -> str:
    """
    Generates Biovision Hierarchy (.bvh) mocap string:
    - Root: chest (fixed position at origin, rotation-only channels)
    - Bone lengths as OFFSETs
    - Euler order: ZXY in degrees (Zrotation Xrotation Yrotation)
    - Frame time: 1 / rate
    """
    skeleton = processor.skeleton
    bones = skeleton.get("bones", [])
    bones_by_name = {b["name"]: b for b in bones}
    children_by_name: Dict[str, List[Dict[str, Any]]] = {}
    for b in bones:
        p = b.get("parent")
        if p not in children_by_name:
            children_by_name[p] = []
        children_by_name[p].append(b)

    lines: List[str] = []
    # Header comment documenting axis convention, Euler order, and units
    lines.append("# Eidon Mocap BVH Export")
    lines.append(f"# Session ID: {session_id}")
    lines.append("# Coordinate Frame: Right-handed Y-up (Three.js world: +X right, +Y up, +Z forward)")
    lines.append("# Rotation Channels: Zrotation Xrotation Yrotation (Euler order: ZXY)")
    lines.append("# Units: meters for bone offsets, degrees for rotation channels")
    lines.append(f"# Sample Rate: {processor.rate} Hz, Frame Time: {1.0 / processor.rate:.6f} s")
    lines.append("# Root Joint: chest (position fixed at origin)")
    lines.append("HIERARCHY")

    ordered_joint_names: List[str] = []

    def write_joint(joint: Dict[str, Any], indent_level: int, is_root: bool = False):
        indent = "\t" * indent_level
        name = joint["name"]
        ordered_joint_names.append(name)

        if is_root:
            lines.append(f"{indent}ROOT {name}")
        else:
            lines.append(f"{indent}JOINT {name}")
        lines.append(f"{indent}{{")

        # Offset
        if is_root:
            lines.append(f"{indent}\tOFFSET 0.000000 0.000000 0.000000")
        else:
            pos = joint.get("position", [0.0, 0.0, 0.0])
            lines.append(f"{indent}\tOFFSET {pos[0]:.6f} {pos[1]:.6f} {pos[2]:.6f}")

        # Channels: rotation only
        lines.append(f"{indent}\tCHANNELS 3 Zrotation Xrotation Yrotation")

        # Child joints or End Site
        children = children_by_name.get(name, [])
        if children:
            for child in children:
                write_joint(child, indent_level + 1, is_root=False)
        else:
            # Leaf bone: write End Site
            length = joint.get("length", 0.1)
            direction = joint.get("direction", [0.0, -1.0, 0.0])
            end_offset = [direction[0] * length, direction[1] * length, direction[2] * length]
            lines.append(f"{indent}\tEnd Site")
            lines.append(f"{indent}\t{{")
            lines.append(f"{indent}\t\tOFFSET {end_offset[0]:.6f} {end_offset[1]:.6f} {end_offset[2]:.6f}")
            lines.append(f"{indent}\t}}")

        lines.append(f"{indent}}}")

    root_bone = bones_by_name.get(skeleton.get("root", "chest"), bones[0])
    write_joint(root_bone, 0, is_root=True)

    # MOTION Section
    frame_time = 1.0 / processor.rate
    lines.append("MOTION")
    lines.append(f"Frames: {len(processor.resampled_frames)}")
    lines.append(f"Frame Time: {frame_time:.6f}")

    for frame in processor.resampled_frames:
        eulers = frame["eulers_deg"]
        row_vals: List[str] = []
        for j_name in ordered_joint_names:
            rz, rx, ry = eulers.get(j_name, (0.0, 0.0, 0.0))
            row_vals.append(f"{rz:.6f}")
            row_vals.append(f"{rx:.6f}")
            row_vals.append(f"{ry:.6f}")
        lines.append(" ".join(row_vals))

    return "\n".join(lines) + "\n"


def generate_csv(
    processor: MocapSessionProcessor,
    layout: str = "tall",
) -> str:
    """
    Generates CSV containing raw calibrated quaternions per bone per timestamp (x, y, z, w).
    Supports layout="tall" (standard) or layout="wide".
    """
    bones = processor.skeleton.get("bones", [])
    bone_names = [b["name"] for b in bones]

    lines: List[str] = []
    if layout == "wide":
        headers = ["frame", "time_s", "time_ms"]
        for b in bone_names:
            headers.extend([f"{b}_x", f"{b}_y", f"{b}_z", f"{b}_w"])
        lines.append(",".join(headers))

        for f in processor.resampled_frames:
            row = [str(f["frame"]), f"{f['time_s']:.6f}", f"{f['time_ms']:.2f}"]
            for b in bone_names:
                qx, qy, qz, qw = f["world_quats"].get(b, (0.0, 0.0, 0.0, 1.0))
                row.extend([f"{qx:.6f}", f"{qy:.6f}", f"{qz:.6f}", f"{qw:.6f}"])
            lines.append(",".join(row))
    else:
        # Standard tall format
        headers = ["frame", "time_s", "time_ms", "bone", "x", "y", "z", "w", "local_x", "local_y", "local_z", "local_w"]
        lines.append(",".join(headers))

        for f in processor.resampled_frames:
            frame_idx = f["frame"]
            ts = f"{f['time_s']:.6f}"
            tms = f"{f['time_ms']:.2f}"
            for b in bone_names:
                wx, wy, wz, ww = f["world_quats"].get(b, (0.0, 0.0, 0.0, 1.0))
                lx, ly, lz, lw = f["local_quats"].get(b, (0.0, 0.0, 0.0, 1.0))
                row = [
                    str(frame_idx),
                    ts,
                    tms,
                    b,
                    f"{wx:.6f}",
                    f"{wy:.6f}",
                    f"{wz:.6f}",
                    f"{ww:.6f}",
                    f"{lx:.6f}",
                    f"{ly:.6f}",
                    f"{lz:.6f}",
                    f"{lw:.6f}",
                ]
                lines.append(",".join(row))

    return "\n".join(lines) + "\n"


def generate_parquet(
    processor: MocapSessionProcessor,
    output_path: Path,
    layout: str = "tall",
) -> Path:
    """
    Writes resampled, calibrated mocap dataset to Parquet.
    """
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    bones = processor.skeleton.get("bones", [])
    bone_names = [b["name"] for b in bones]

    if layout == "wide":
        schema_fields = [
            ("frame", pa.int64()),
            ("time_s", pa.float64()),
            ("time_ms", pa.float64()),
        ]
        for b in bone_names:
            schema_fields.extend([
                (f"{b}_x", pa.float32()),
                (f"{b}_y", pa.float32()),
                (f"{b}_z", pa.float32()),
                (f"{b}_w", pa.float32()),
            ])
        schema = pa.schema(schema_fields)
        col_data: Dict[str, List] = {field[0]: [] for field in schema_fields}

        for f in processor.resampled_frames:
            col_data["frame"].append(f["frame"])
            col_data["time_s"].append(f["time_s"])
            col_data["time_ms"].append(f["time_ms"])
            for b in bone_names:
                qx, qy, qz, qw = f["world_quats"].get(b, (0.0, 0.0, 0.0, 1.0))
                col_data[f"{b}_x"].append(qx)
                col_data[f"{b}_y"].append(qy)
                col_data[f"{b}_z"].append(qz)
                col_data[f"{b}_w"].append(qw)

        table = pa.Table.from_pydict(col_data, schema=schema)
        pq.write_table(table, str(output_path), compression="snappy")
    else:
        schema = pa.schema([
            ("frame", pa.int64()),
            ("time_s", pa.float64()),
            ("time_ms", pa.float64()),
            ("bone", pa.string()),
            ("x", pa.float32()),
            ("y", pa.float32()),
            ("z", pa.float32()),
            ("w", pa.float32()),
            ("local_x", pa.float32()),
            ("local_y", pa.float32()),
            ("local_z", pa.float32()),
            ("local_w", pa.float32()),
        ])
        col_data = {field.name: [] for field in schema}

        for f in processor.resampled_frames:
            frame_idx = f["frame"]
            ts = f["time_s"]
            tms = f["time_ms"]
            for b in bone_names:
                wx, wy, wz, ww = f["world_quats"].get(b, (0.0, 0.0, 0.0, 1.0))
                lx, ly, lz, lw = f["local_quats"].get(b, (0.0, 0.0, 0.0, 1.0))
                col_data["frame"].append(frame_idx)
                col_data["time_s"].append(ts)
                col_data["time_ms"].append(tms)
                col_data["bone"].append(b)
                col_data["x"].append(wx)
                col_data["y"].append(wy)
                col_data["z"].append(wz)
                col_data["w"].append(ww)
                col_data["local_x"].append(lx)
                col_data["local_y"].append(ly)
                col_data["local_z"].append(lz)
                col_data["local_w"].append(lw)

        table = pa.Table.from_pydict(col_data, schema=schema)
        pq.write_table(table, str(output_path), compression="snappy")

    return output_path


def build_metadata_json(
    processor: MocapSessionProcessor,
    session: Dict[str, Any],
    per_device_loss_pct: Optional[Dict[str, float]] = None,
    firmware_versions: Optional[Dict[str, str]] = None,
) -> Dict[str, Any]:
    """
    Builds the metadata dictionary as specified in Requirement 5:
    session id, start time, rate, roles, bone lengths, calibration offsets,
    gap list, per-device loss %, firmware versions.
    """
    bones = processor.skeleton.get("bones", [])
    bone_lengths = {b["name"]: b.get("length", 0.0) for b in bones}

    calib_offsets_out = {
        role: [round(x, 6) for x in q]
        for role, q in processor.calibration_offsets.items()
    }

    metadata = {
        "session_id": session.get("session_id", ""),
        "recording_id": session.get("recording_id", ""),
        "name": session.get("name", ""),
        "start_time": session.get("started_at", 0),
        "end_time": session.get("ended_at", 0),
        "duration_s": round(processor.duration_s, 3),
        "rate": processor.rate,
        "frame_count": len(processor.resampled_frames),
        "roles": processor.roles_present,
        "bone_lengths": bone_lengths,
        "is_calibrated": processor.is_calibrated,
        "calibration_offsets": calib_offsets_out,
        "gap_list": processor.gap_list,
        "per_device_loss_pct": per_device_loss_pct or {},
        "firmware_versions": firmware_versions or {},
    }
    return metadata
