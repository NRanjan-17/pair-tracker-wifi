import * as THREE from 'three';

export class ThreeVisualizer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private trackerNodes: Map<string, THREE.Group> = new Map();
  private isMouseDown = false;
  private mousePrev = { x: 0, y: 0 };
  private spherical = { radius: 4.5, theta: Math.PI / 4, phi: Math.PI / 3 };

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060913);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    this.setupLighting();
    this.setupEnvironment();
    this.setupControls();

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  private setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, -5, -5);
    this.scene.add(fillLight);
  }

  private setupEnvironment() {
    // Floor grid
    const grid = new THREE.GridHelper(10, 20, 0x0284c7, 0x1e293b);
    grid.position.y = -1.2;
    this.scene.add(grid);

    // Subtle coordinate indicator at origin
    const axes = new THREE.AxesHelper(0.3);
    axes.position.y = -1.19;
    this.scene.add(axes);
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

      this.spherical.theta -= dx * 0.008;
      this.spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.spherical.phi - dy * 0.008));
      this.updateCameraPosition();
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.spherical.radius = Math.max(1.5, Math.min(15.0, this.spherical.radius + e.deltaY * 0.005));
      this.updateCameraPosition();
    });
  }

  private updateCameraPosition() {
    const sinPhi = Math.sin(this.spherical.phi);
    this.camera.position.x = this.spherical.radius * sinPhi * Math.sin(this.spherical.theta);
    this.camera.position.y = this.spherical.radius * Math.cos(this.spherical.phi);
    this.camera.position.z = this.spherical.radius * sinPhi * Math.cos(this.spherical.theta);
    this.camera.lookAt(0, 0.2, 0);
  }

  public resetCamera() {
    this.spherical = { radius: 4.5, theta: Math.PI / 4, phi: Math.PI / 3 };
    this.updateCameraPosition();
  }

  // Get or create a 3D visualization node for a body role
  public getOrCreateTrackerNode(role: string): THREE.Group {
    if (this.trackerNodes.has(role)) {
      return this.trackerNodes.get(role)!;
    }

    const group = new THREE.Group();
    const pos = this.getDefaultRolePosition(role);
    group.position.set(pos.x, pos.y, pos.z);

    // Create stylish sensor box
    const boxGeo = new THREE.BoxGeometry(0.28, 0.16, 0.42);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.6,
      roughness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.2,
    });
    const box = new THREE.Mesh(boxGeo, boxMat);
    box.castShadow = true;
    group.add(box);

    // Add Axes Helper to show orientation
    const axes = new THREE.AxesHelper(0.35);
    group.add(axes);

    this.scene.add(group);
    this.trackerNodes.set(role, group);
    return group;
  }

  // Update orientation for a role
  public updateOrientation(role: string, quat: [number, number, number, number]) {
    const node = this.getOrCreateTrackerNode(role);
    // Three.js Quaternion is (x, y, z, w)
    const [qw, qx, qy, qz] = quat;
    node.quaternion.set(qx, qy, qz, qw);
  }

  private getDefaultRolePosition(role: string): { x: number; y: number; z: number } {
    switch (role) {
      case 'chest':
        return { x: 0, y: 0.9, z: 0 };
      case 'left_shoulder':
        return { x: -0.4, y: 1.1, z: 0 };
      case 'right_shoulder':
        return { x: 0.4, y: 1.1, z: 0 };
      case 'left_upper_arm':
        return { x: -0.55, y: 0.8, z: 0 };
      case 'right_upper_arm':
        return { x: 0.55, y: 0.8, z: 0 };
      case 'left_forearm':
        return { x: -0.65, y: 0.45, z: 0 };
      case 'right_forearm':
        return { x: 0.65, y: 0.45, z: 0 };
      case 'left_thigh':
        return { x: -0.25, y: 0.3, z: 0 };
      case 'right_thigh':
        return { x: 0.25, y: 0.3, z: 0 };
      case 'left_shin':
        return { x: -0.25, y: -0.35, z: 0 };
      case 'right_shin':
        return { x: 0.25, y: -0.35, z: 0 };
      case 'left_foot':
        return { x: -0.28, y: -0.9, z: 0.1 };
      case 'right_foot':
        return { x: 0.28, y: -0.9, z: 0.1 };
      default:
        return { x: 0, y: 0, z: 0 };
    }
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
    this.renderer.render(this.scene, this.camera);
  }
}
