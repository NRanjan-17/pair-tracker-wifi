import * as THREE from 'three';
import { bnoToThreeQuat } from './avatar';
import { ThreeVisualizer } from './three_view';

export interface RecordedSample {
  t_ms: number;
  role: string;
  seq: number;
  quat: [number, number, number, number]; // [w, x, y, z]
  accel?: [number, number, number] | null;
}

export interface SessionDataResponse {
  session_id: string;
  recording_id: string;
  name: string;
  status: string;
  started_at: number;
  ended_at?: number;
  total_samples: number;
  duration_ms: number;
  roles: string[];
  samples: RecordedSample[];
}

export class PlaybackController {
  private visualizer: ThreeVisualizer;
  public sessionData: SessionDataResponse | null = null;
  public samplesByRole: Map<string, Array<{ t_ms: number; quat: THREE.Quaternion }>> = new Map();

  public isPlaying: boolean = false;
  public currentTimeMs: number = 0;
  public durationMs: number = 0;
  public speed: number = 1.0;
  public loop: boolean = true;

  private lastFrameTime: number = 0;
  private animFrameId: number | null = null;

  // Callbacks for UI updates
  public onTimeUpdate?: (currentMs: number, durationMs: number) => void;
  public onPlayStateChange?: (isPlaying: boolean) => void;

  constructor(visualizer: ThreeVisualizer) {
    this.visualizer = visualizer;
  }

  public loadSession(data: SessionDataResponse) {
    this.sessionData = data;
    this.durationMs = data.duration_ms || 1000;
    this.currentTimeMs = 0;
    this.isPlaying = false;

    // Index samples by role, converted to Three.js quaternions
    this.samplesByRole.clear();
    for (const s of data.samples) {
      if (!this.samplesByRole.has(s.role)) {
        this.samplesByRole.set(s.role, []);
      }
      const threeQuat = bnoToThreeQuat(s.quat[0], s.quat[1], s.quat[2], s.quat[3]);
      this.samplesByRole.get(s.role)!.push({
        t_ms: s.t_ms,
        quat: threeQuat,
      });
    }

    // Sort each role's samples by t_ms
    for (const list of this.samplesByRole.values()) {
      list.sort((a, b) => a.t_ms - b.t_ms);
    }

    this.visualizer.isPlaybackMode = true;
    this.seek(0);
    this.onPlayStateChange?.(false);
  }

  public exitPlayback() {
    this.pause();
    this.visualizer.isPlaybackMode = false;
    this.visualizer.playbackPoses.clear();
    this.sessionData = null;
    this.samplesByRole.clear();
  }

  public play() {
    if (this.isPlaying) return;
    if (this.currentTimeMs >= this.durationMs) {
      this.currentTimeMs = 0;
    }
    this.isPlaying = true;
    this.lastFrameTime = performance.now();
    this.onPlayStateChange?.(true);
    this.tick();
  }

  public pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.onPlayStateChange?.(false);
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public setSpeed(speed: number) {
    this.speed = speed;
  }

  public seek(timeMs: number) {
    this.currentTimeMs = Math.max(0, Math.min(this.durationMs, timeMs));
    this.updateAvatarPoseAtTime(this.currentTimeMs);
    this.onTimeUpdate?.(this.currentTimeMs, this.durationMs);
  }

  private tick = () => {
    if (!this.isPlaying) return;

    const now = performance.now();
    const dt = (now - this.lastFrameTime) * this.speed;
    this.lastFrameTime = now;

    this.currentTimeMs += dt;

    if (this.currentTimeMs >= this.durationMs) {
      if (this.loop && this.durationMs > 0) {
        this.currentTimeMs = 0;
      } else {
        this.currentTimeMs = this.durationMs;
        this.pause();
        this.updateAvatarPoseAtTime(this.currentTimeMs);
        this.onTimeUpdate?.(this.currentTimeMs, this.durationMs);
        return;
      }
    }

    this.updateAvatarPoseAtTime(this.currentTimeMs);
    this.onTimeUpdate?.(this.currentTimeMs, this.durationMs);

    this.animFrameId = requestAnimationFrame(this.tick);
  };

  public updateAvatarPoseAtTime(t: number) {
    const poses = new Map<string, { quat: THREE.Quaternion; isOnline: boolean }>();

    for (const bone of this.visualizer.avatar.skeleton.bones) {
      const list = this.samplesByRole.get(bone.name);
      if (!list || list.length === 0) {
        // Untracked bone in this session: grayed out
        poses.set(bone.name, {
          quat: new THREE.Quaternion(0, 0, 0, 1),
          isOnline: false,
        });
        continue;
      }

      // Slerp interpolation between samples
      const interpQuat = this.sampleQuatAtTime(list, t);
      poses.set(bone.name, {
        quat: interpQuat,
        isOnline: true,
      });
    }

    this.visualizer.playbackPoses = poses;
    // Drive the avatar forward kinematics
    this.visualizer.avatar.updatePoses(poses);
  }

  private sampleQuatAtTime(list: Array<{ t_ms: number; quat: THREE.Quaternion }>, t: number): THREE.Quaternion {
    if (t <= list[0].t_ms) return list[0].quat.clone();
    if (t >= list[list.length - 1].t_ms) return list[list.length - 1].quat.clone();

    // Binary search for index where list[low].t_ms <= t < list[high].t_ms
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
      const mid = (low + high) >> 1;
      if (list[mid].t_ms <= t) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    const idx0 = Math.max(0, high);
    const idx1 = Math.min(list.length - 1, idx0 + 1);

    const s0 = list[idx0];
    const s1 = list[idx1];

    if (idx0 === idx1 || s1.t_ms === s0.t_ms) {
      return s0.quat.clone();
    }

    const alpha = (t - s0.t_ms) / (s1.t_ms - s0.t_ms);
    return s0.quat.clone().slerp(s1.quat, alpha);
  }
}
