import * as THREE from 'three';
import { AvatarRig, bnoToThreeQuat } from './avatar';
import { JitterBuffer } from './jitter_buffer';
import { SampleMessage } from './types';

export class ThreeVisualizer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  public avatar: AvatarRig;
  public jitterBuffer: JitterBuffer;

  private isMouseDown = false;
  private mousePrev = { x: 0, y: 0 };
  private spherical = { radius: 3.2, theta: 0, phi: Math.PI / 2.2 };
  private cameraTarget = new THREE.Vector3(0, 1.05, 0);

  // Latency & performance tracking
  public currentLatencyMs: number = 0;
  public onLatencyUpdate?: (latencyMs: number) => void;
  public onFpsUpdate?: (fps: number) => void;

  // Playback mode state
  public isPlaybackMode: boolean = false;
  public playbackPoses: Map<string, { quat: THREE.Quaternion; isOnline: boolean }> = new Map();

  private frameCount = 0;
  private lastFpsCheck = performance.now();

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070b14);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.setupLighting();
    this.setupEnvironment();
    this.setupControls();

    // Initialize JitterBuffer and AvatarRig
    this.jitterBuffer = new JitterBuffer();
    this.avatar = new AvatarRig(this.scene);

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  private setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambientLight);

    // Key Light
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    keyLight.position.set(4, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    this.scene.add(keyLight);

    // Fill Light
    const fillLight = new THREE.DirectionalLight(0x818cf8, 0.7);
    fillLight.position.set(-5, 4, 3);
    this.scene.add(fillLight);

    // Rim Light (from behind for sleek silhouette)
    const rimLight = new THREE.DirectionalLight(0x0ea5e9, 0.9);
    rimLight.position.set(0, 5, -6);
    this.scene.add(rimLight);
  }

  private setupEnvironment() {
    // Cyberpunk grid floor
    const grid = new THREE.GridHelper(8, 24, 0x0284c7, 0x1e293b);
    grid.position.y = 0;
    this.scene.add(grid);

    // Floor shadow receiver disc
    const floorGeo = new THREE.CircleGeometry(4, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x090e1a,
      roughness: 0.9,
      metalness: 0.1,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  private setupControls() {
    const el = this.renderer.domElement;
    el.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.mousePrev = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isMouseDown) return;
      const dx = e.clientX - this.mousePrev.x;
      const dy = e.clientY - this.mousePrev.y;
      this.mousePrev = { x: e.clientX, y: e.clientY };

      this.spherical.theta -= dx * 0.007;
      this.spherical.phi = Math.max(0.1, Math.min(Math.PI / 2.05, this.spherical.phi - dy * 0.007));
      this.updateCameraPosition();
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.spherical.radius = Math.max(1.2, Math.min(8.0, this.spherical.radius + e.deltaY * 0.003));
      this.updateCameraPosition();
    });
  }

  private updateCameraPosition() {
    const sinPhi = Math.sin(this.spherical.phi);
    this.camera.position.x = this.cameraTarget.x + this.spherical.radius * sinPhi * Math.sin(this.spherical.theta);
    this.camera.position.y = this.cameraTarget.y + this.spherical.radius * Math.cos(this.spherical.phi);
    this.camera.position.z = this.cameraTarget.z + this.spherical.radius * sinPhi * Math.cos(this.spherical.theta);
    this.camera.lookAt(this.cameraTarget);
  }

  public resetCamera() {
    this.spherical = { radius: 3.2, theta: 0, phi: Math.PI / 2.2 };
    this.cameraTarget.set(0, 1.05, 0);
    this.updateCameraPosition();
  }

  public handleSample(sample: SampleMessage) {
    // Coordinate frame conversion once in one function
    const [qw, qx, qy, qz] = sample.quat;
    const threeQuat = bnoToThreeQuat(qw, qx, qy, qz);

    // Push into jitter buffer with server-synced time
    this.jitterBuffer.pushSample(
      sample.role,
      sample.seq,
      sample.t_ms,
      sample.server_time_ms || Date.now(),
      threeQuat
    );
  }

  public calibratePose() {
    // Capture current quaternions for all bones in the jitter buffer
    const currentQuats = new Map<string, THREE.Quaternion>();
    const nowPerf = performance.now();

    for (const bone of this.avatar.skeleton.bones) {
      const data = this.jitterBuffer.getInterpolatedQuaternion(bone.name, nowPerf);
      if (data && data.isOnline) {
        currentQuats.set(bone.name, data.quat);
      }
    }

    this.avatar.calibratePose(currentQuats);
  }

  public reZeroYaw() {
    // Capture current quaternions for yaw re-zero
    const currentQuats = new Map<string, THREE.Quaternion>();
    const nowPerf = performance.now();

    for (const bone of this.avatar.skeleton.bones) {
      const data = this.jitterBuffer.getInterpolatedQuaternion(bone.name, nowPerf);
      if (data && data.isOnline) {
        currentQuats.set(bone.name, data.quat);
      }
    }

    this.avatar.reZeroYaw(currentQuats);
  }

  public getCalibrationOffsets(): Record<string, [number, number, number, number]> | null {
    return this.avatar.getCalibrationOffsets();
  }

  private onResize() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    const nowPerf = performance.now();

    if (this.isPlaybackMode) {
      // In playback mode, poses are driven directly by PlaybackController
      this.avatar.updatePoses(this.playbackPoses);
    } else {
      // 1. Gather slerp-interpolated quaternions from jitter buffer for each bone
      const boneSensors = new Map<string, { quat: THREE.Quaternion; isOnline: boolean }>();
      let totalLatency = 0;
      let latencyCount = 0;

      for (const bone of this.avatar.skeleton.bones) {
        const interp = this.jitterBuffer.getInterpolatedQuaternion(bone.name, nowPerf);
        if (interp) {
          boneSensors.set(bone.name, {
            quat: interp.quat,
            isOnline: interp.isOnline,
          });

          if (interp.isOnline) {
            totalLatency += interp.latencyMs;
            latencyCount++;
          }
        } else {
          boneSensors.set(bone.name, {
            quat: new THREE.Quaternion(0, 0, 0, 1),
            isOnline: false,
          });
        }
      }

      // 2. Drive avatar with hierarchical forward kinematics:
      // Bone rotation = inverse(parent world rotation) * child world rotation, after offsets
      this.avatar.updatePoses(boneSensors);

      // 3. Update measured latency
      if (latencyCount > 0) {
        this.currentLatencyMs = Math.round(totalLatency / latencyCount);
        if (this.onLatencyUpdate) {
          this.onLatencyUpdate(this.currentLatencyMs);
        }
      }
    }

    // 4. Update FPS counter
    this.frameCount++;
    if (nowPerf - this.lastFpsCheck >= 1000) {
      const fps = Math.round((this.frameCount * 1000) / (nowPerf - this.lastFpsCheck));
      this.frameCount = 0;
      this.lastFpsCheck = nowPerf;
      if (this.onFpsUpdate) {
        this.onFpsUpdate(fps);
      }
    }

    // 5. Render Three.js scene
    this.renderer.render(this.scene, this.camera);
  }
}
