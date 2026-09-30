export interface OTAJob {
  job_id: string;
  device_id: string;
  version: string;
  status: 'queued' | 'downloading' | 'verifying' | 'rebooting' | 'success' | 'failed';
  progress_pct: number;
  error_message?: string | null;
  created_at_ms: number;
  updated_at_ms: number;
}

export interface FirmwareManifest {
  version: string;
  sha256: string;
  size: number;
  min_protocol: number;
}

export interface DeviceState {
  device_id: string;
  role: string;
  role_id: number;
  online: boolean;
  hw?: string;
  flash_size?: number;
  free_heap?: number;
  firmware_version?: string;
  protocol_version?: number;
  protocol_outdated?: boolean;
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
  ota_job?: OTAJob | null;
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
  latest_firmware?: FirmwareManifest | null;
  ota_jobs?: OTAJob[];
  active_session: SessionInfo | null;
  server_time_ms?: number;
}

export interface OTAJobUpdateMessage {
  type: 'ota_job_update';
  job: OTAJob;
}
