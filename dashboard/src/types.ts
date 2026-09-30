export interface DeviceState {
  device_id: string;
  role: string;
  role_id: number;
  online: boolean;
  firmware_version?: string;
  battery_pct: number | null;
  battery_mv: number | null;
  rssi: number | null;
  uptime_s: number | null;
  total_samples: number;
  dropped_samples: number;
  loss_pct: number;
  last_seen_ms: number;
  clock_offset_ms?: number;
  clock_rtt_ms?: number;
}

export interface SampleMessage {
  type: 'sample' | 'pose_update';
  device_id: string;
  role: string;
  seq: number;
  t_ms: number;
  server_time_ms?: number;
  quat: [number, number, number, number]; // [w, x, y, z]
  accel?: [number, number, number] | null;
  gyro?: [number, number, number] | null;
  mag?: [number, number, number] | null;
  loss_pct: number;
}

export interface SessionInfo {
  session_id: string;
  recording_id: string;
  name: string;
  status: 'active' | 'completed' | 'aborted';
  started_at: number;
  ended_at?: number;
  total_samples?: number;
}

export interface InitMessage {
  type: 'init';
  required_roles: string[];
  devices: DeviceState[];
  active_session: SessionInfo | null;
  server_time_ms?: number;
}
