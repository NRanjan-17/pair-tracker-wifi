import * as THREE from 'three';

export interface BufferedSample {
  seq: number;
  t_ms: number;
  server_time_ms: number;
  rx_time_ms: number;
  quat: THREE.Quaternion;
}

export class JitterBuffer {
  // Configurable delay in milliseconds (50 - 100 ms)
  public bufferDelayMs = 75;
  private buffers: Map<string, BufferedSample[]> = new Map();
  private maxHistorySamples = 120;
  private lastSampleRxTimes: Map<string, number> = new Map();
  private serverTimeOffsetMs = 0; // estimate of (server_time - client_time)

  public setBufferDelay(ms: number) {
    this.bufferDelayMs = Math.max(30, Math.min(250, ms));
  }

  public setServerTimeSync(serverTimeMs: number) {
    this.serverTimeOffsetMs = serverTimeMs - Date.now();
  }

  public pushSample(
    role: string,
    seq: number,
    t_ms: number,
    serverTimeMs: number,
    quat: THREE.Quaternion
  ) {
    const rx_time_ms = performance.now();
    this.lastSampleRxTimes.set(role, rx_time_ms);

    let queue = this.buffers.get(role);
    if (!queue) {
      queue = [];
      this.buffers.set(role, queue);
    }

    queue.push({
      seq,
      t_ms,
      server_time_ms: serverTimeMs || Date.now() + this.serverTimeOffsetMs,
      rx_time_ms,
      quat: quat.clone(),
    });

    // Keep queue sorted by rx_time_ms and prune old samples
    if (queue.length > this.maxHistorySamples) {
      queue.splice(0, queue.length - this.maxHistorySamples);
    }
  }

  public isRoleOnline(role: string): boolean {
    const lastRx = this.lastSampleRxTimes.get(role);
    if (!lastRx) return false;
    return performance.now() - lastRx < 1200; // offline if no sample for > 1.2s
  }

  /**
   * Sample with spherical linear interpolation (slerp) at (now - bufferDelayMs)
   */
  public getInterpolatedQuaternion(
    role: string,
    nowPerfMs: number = performance.now()
  ): { quat: THREE.Quaternion; latencyMs: number; isOnline: boolean } | null {
    const isOnline = this.isRoleOnline(role);
    const queue = this.buffers.get(role);
    if (!queue || queue.length === 0) {
      return null;
    }

    const targetTime = nowPerfMs - this.bufferDelayMs;

    // Prune very old samples (older than targetTime - 600ms)
    while (queue.length > 2 && queue[0].rx_time_ms < targetTime - 600) {
      queue.shift();
    }

    // 1. If target time is after all buffered samples, use latest
    const latest = queue[queue.length - 1];
    if (targetTime >= latest.rx_time_ms) {
      const latency = Math.max(10, Math.round(nowPerfMs - latest.rx_time_ms + this.bufferDelayMs));
      return { quat: latest.quat.clone(), latencyMs: latency, isOnline };
    }

    // 2. If target time is before oldest buffered sample, use oldest
    const oldest = queue[0];
    if (targetTime <= oldest.rx_time_ms) {
      const latency = Math.max(10, Math.round(nowPerfMs - oldest.rx_time_ms + this.bufferDelayMs));
      return { quat: oldest.quat.clone(), latencyMs: latency, isOnline };
    }

    // 3. Find surrounding samples [s0, s1] and slerp
    for (let i = 0; i < queue.length - 1; i++) {
      const s0 = queue[i];
      const s1 = queue[i + 1];

      if (s0.rx_time_ms <= targetTime && targetTime <= s1.rx_time_ms) {
        const span = s1.rx_time_ms - s0.rx_time_ms;
        const alpha = span > 0.001 ? (targetTime - s0.rx_time_ms) / span : 0.0;
        const clampedAlpha = Math.max(0, Math.min(1, alpha));

        const interpolated = s0.quat.clone().slerp(s1.quat, clampedAlpha);
        const estimatedTransit = Math.max(5, (nowPerfMs - s0.rx_time_ms));
        const latency = Math.round(estimatedTransit + this.bufferDelayMs);

        return {
          quat: interpolated,
          latencyMs: latency,
          isOnline,
        };
      }
    }

    return {
      quat: latest.quat.clone(),
      latencyMs: Math.round(nowPerfMs - latest.rx_time_ms + this.bufferDelayMs),
      isOnline,
    };
  }

  public clear() {
    this.buffers.clear();
    this.lastSampleRxTimes.clear();
  }
}
