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
  private spherical = { radius: 3.2, theta: 0.45, phi: Math.PI / 2.3 };
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
    this.scene.background = new THREE.Color(0x090d16);
    this.scene.fog = new THREE.FogExp2(0x090d16, 0.042);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
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
    // 1. Soft balanced ambient fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(ambientLight);

    // 2. High-precision studio Key Light (Crisp white with soft shadow drop)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.45);
    keyLight.position.set(4, 9, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.camera.left = -2.5;
    keyLight.shadow.camera.right = 2.5;
    keyLight.shadow.camera.top = 2.5;
    keyLight.shadow.camera.bottom = -2.5;
    keyLight.shadow.bias = -0.0001;
    this.scene.add(keyLight);

    // 3. Cool Studio Fill Light (from left to reveal chassis depth)
    const fillLight = new THREE.DirectionalLight(0xcfd8dc, 0.65);
    fillLight.position.set(-5, 4, 3);
    this.scene.add(fillLight);

    // 4. Subtle Studio Rim / Contour Backlight (Highlights metallic bevels)
    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 0.85);
    rimLight.position.set(0, 5, -6);
    this.scene.add(rimLight);
  }

  private setupEnvironment() {
    // 1. Precision Mocap Studio Grid Floor
    const grid = new THREE.GridHelper(12, 24, 0x334155, 0x182030);
    grid.position.y = 0;
    this.scene.add(grid);

    // 2. Shadow Receiver Studio Floor (Blends seamlessly into background fog)
    const floorGeo = new THREE.PlaneGeometry(32, 32);
    const floorMat = new THREE.ShadowMaterial({
      opacity: 0.4,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.005;
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

      this.spherical.theta -= dx * 0.006;
      this.spherical.phi = Math.max(0.08, Math.min(Math.PI / 2.05, this.spherical.phi - dy * 0.006));
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

  public setCameraView(preset: 'persp' | 'front' | 'side' | 'top') {
    switch (preset) {
      case 'front':
        this.spherical.theta = 0;
        this.spherical.phi = Math.PI / 2.0;
        this.spherical.radius = 3.0;
        break;
      case 'side':
        this.spherical.theta = Math.PI / 2.0;
        this.spherical.phi = Math.PI / 2.0;
        this.spherical.radius = 3.0;
        break;
      case 'top':
        this.spherical.theta = 0;
        this.spherical.phi = 0.08;
        this.spherical.radius = 3.6;
        break;
      case 'persp':
      default:
        this.spherical.theta = 0.45;
        this.spherical.phi = Math.PI / 2.3;
        this.spherical.radius = 3.2;
        break;
    }
    this.updateCameraPosition();
  }

  private updateCameraPosition() {
    const sinPhi = Math.sin(this.spherical.phi);
    this.camera.position.x = this.cameraTarget.x + this.spherical.radius * sinPhi * Math.sin(this.spherical.theta);
    this.camera.position.y = this.cameraTarget.y + this.spherical.radius * Math.cos(this.spherical.phi);
    this.camera.position.z = this.cameraTarget.z + this.spherical.radius * sinPhi * Math.cos(this.spherical.theta);
    this.camera.lookAt(this.cameraTarget);
  }

  public resetCamera() {
    this.setCameraView('persp');
  }

  public handleSample(sample: SampleMessage) {
    const [qw, qx, qy, qz] = sample.quat;
    const threeQuat = bnoToThreeQuat(qw, qx, qy, qz);

    this.jitterBuffer.pushSample(
      sample.role,
      sample.seq,
      sample.t_ms,
      sample.server_time_ms || Date.now(),
      threeQuat
    );
  }

  public calibratePose() {
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
    this.avatar.reZeroYaw();
  }

  public getCalibrationOffsets(): Record<string, [number, number, number, number]> | null {
    return this.avatar.getCalibrationOffsets();
  }

  private onResize() {
    if (!this.container) return;
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    const nowPerf = performance.now();

    // 1. Live Streaming Mode vs Recorded Playback Mode
    if (this.isPlaybackMode) {
      this.avatar.updatePoses(this.playbackPoses);
    } else {
      const livePoses = new Map<string, { quat: THREE.Quaternion; isOnline: boolean }>();
      for (const bone of this.avatar.skeleton.bones) {
        const data = this.jitterBuffer.getInterpolatedQuaternion(bone.name, nowPerf);
        if (data) {
          livePoses.set(bone.name, data);
        } else {
          livePoses.set(bone.name, { quat: new THREE.Quaternion(0, 0, 0, 1), isOnline: false });
        }
      }
      this.avatar.updatePoses(livePoses);
    }

    // 2. Measure renderer FPS & latency
    this.frameCount++;
    if (nowPerf - this.lastFpsCheck >= 1000) {
      const fps = Math.round((this.frameCount * 1000) / (nowPerf - this.lastFpsCheck));
      this.frameCount = 0;
      this.lastFpsCheck = nowPerf;
      if (this.onFpsUpdate) this.onFpsUpdate(fps);
    }

    // 3. Render Three.js Scene
    this.renderer.render(this.scene, this.camera);
  }
}
