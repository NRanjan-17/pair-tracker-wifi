import * as THREE from 'three';
import skeletonConfig from './skeleton.json';

export interface BoneConfig {
  name: string;
  parent: string | null;
  length: number;
  position: [number, number, number];
  direction: [number, number, number];
  radius: number;
  color: string;
}

export interface SkeletonData {
  root: string;
  height: number;
  bones: BoneConfig[];
}

/**
 * Coordinate frames conversion:
 * BNO085 is right-handed Z-up: X=right, Y=forward, Z=up.
 * Three.js is right-handed Y-up: X=right, Y=up, Z=-forward.
 * Converts [qw, qx, qy, qz] to new THREE.Quaternion(x, y, z, w).
 */
export function bnoToThreeQuat(qw: number, qx: number, qy: number, qz: number): THREE.Quaternion {
  return new THREE.Quaternion(qx, qz, -qy, qw).normalize();
}

export class AvatarRig {
  public scene: THREE.Scene;
  public rootGroup: THREE.Group;
  public skeleton: SkeletonData;

  public boneGroups: Map<string, THREE.Group> = new Map();
  public boneMeshes: Map<string, THREE.Mesh[]> = new Map();
  public trackerLedMeshes: Map<string, THREE.Mesh> = new Map();

  // High-End PBR Studio Materials
  public onlineChassisMaterial: THREE.MeshStandardMaterial;
  public jointPivotMaterial: THREE.MeshStandardMaterial;
  public trackerPuckMaterial: THREE.MeshStandardMaterial;
  public activeSensorLedMaterial: THREE.MeshStandardMaterial;
  public inactiveSensorLedMaterial: THREE.MeshStandardMaterial;
  public offlineChassisMaterial: THREE.MeshStandardMaterial;
  public visorMaterial: THREE.MeshStandardMaterial;
  public accentLineMaterial: THREE.MeshBasicMaterial;

  // Calibration state
  public isCalibrated: boolean = false;
  private calibOffsets: Map<string, THREE.Quaternion> = new Map();
  private reZeroYawOffset: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.skeleton = skeletonConfig as SkeletonData;
    this.rootGroup = new THREE.Group();
    this.rootGroup.name = 'avatar_root';
    this.scene.add(this.rootGroup);

    // 1. Vibrant Studio Titanium Chassis for Live Streaming / Online Limbs
    this.onlineChassisMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.35,
      roughness: 0.25,
      emissive: 0x0284c7,
      emissiveIntensity: 0.15,
    });

    // 2. Machined Anodized Joint Gimbal Collars
    this.jointPivotMaterial = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.12,
    });

    // 3. Pair IMU Tracker Puck Enclosure (Dark matte composite)
    this.trackerPuckMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.55,
      roughness: 0.35,
    });

    // 4. Active Sensor LED Glow Ring (Electric Cyan Neon)
    this.activeSensorLedMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 1.5,
      metalness: 0.1,
      roughness: 0.1,
    });

    // 5. Inactive / Standby Sensor LED Ring (Clean Amber/Slate Standby Indicator)
    this.inactiveSensorLedMaterial = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      emissive: 0x334155,
      emissiveIntensity: 0.25,
      roughness: 0.5,
    });

    // 6. High-Contrast Studio Titanium Chassis for Standby / Default / Offline Limbs
    // (Crisp, fully opaque, beautifully illuminated silver-slate mannequin!)
    this.offlineChassisMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.45,
      roughness: 0.35,
      transparent: false,
    });

    // 7. Glowing Studio Visor Band (Vibrant cyan so head facing is clear)
    this.visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.95,
      metalness: 0.2,
      roughness: 0.1,
    });

    // 8. Minimalist Accent Line
    this.accentLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
    });

    this.buildSkeleton();
  }

  private buildSkeleton() {
    // 1. Create transform groups for all bones
    for (const bone of this.skeleton.bones) {
      const group = new THREE.Group();
      group.name = `bone_${bone.name}`;
      group.position.set(bone.position[0], bone.position[1], bone.position[2]);
      this.boneGroups.set(bone.name, group);
      this.boneMeshes.set(bone.name, []);
    }

    // 2. Build scene graph hierarchy according to parent links
    for (const bone of this.skeleton.bones) {
      const group = this.boneGroups.get(bone.name)!;
      if (bone.parent === null) {
        this.rootGroup.add(group);
      } else {
        const parentGroup = this.boneGroups.get(bone.parent);
        if (parentGroup) {
          parentGroup.add(group);
        } else {
          this.rootGroup.add(group);
        }
      }

      // 3. Create high-fidelity biomechanical meshes
      this.createBoneMesh(bone, group);
    }
  }

  private createBoneMesh(bone: BoneConfig, group: THREE.Group) {
    const meshes: THREE.Mesh[] = [];

    // A. Precision Joint Pivot (Spherical Gimbal + Outer Bearing Collar)
    if (bone.name !== 'chest') {
      const jointRadius = bone.radius * 1.1;
      const jointGeo = new THREE.SphereGeometry(jointRadius, 18, 18);
      const jointMesh = new THREE.Mesh(jointGeo, this.jointPivotMaterial);
      jointMesh.castShadow = true;
      group.add(jointMesh);
      meshes.push(jointMesh);

      // Subtle aluminum bearing ring around the joint pivot
      const collarGeo = new THREE.CylinderGeometry(jointRadius * 1.08, jointRadius * 1.08, jointRadius * 0.35, 16);
      const collarMesh = new THREE.Mesh(collarGeo, this.jointPivotMaterial);
      group.add(collarMesh);
      meshes.push(collarMesh);
    }

    // B. Anatomical & High-Precision Limb Geometry
    if (bone.name === 'chest') {
      // 1. Upper Torso / Pectoral Armor (Spans from Y = -0.14 up to shoulders at Y = +0.10)
      const upperTorsoGeo = new THREE.CylinderGeometry(0.15, 0.12, 0.24, 8);
      const upperTorso = new THREE.Mesh(upperTorsoGeo, this.offlineChassisMaterial);
      upperTorso.position.set(0, -0.02, 0);
      upperTorso.scale.set(1.15, 1, 0.72);
      upperTorso.castShadow = true;
      group.add(upperTorso);
      meshes.push(upperTorso);

      // 2. Segmented Lower Spine & Waist
      const spineGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.10, 8);
      const spineMesh = new THREE.Mesh(spineGeo, this.jointPivotMaterial);
      spineMesh.position.set(0, -0.17, 0);
      spineMesh.scale.set(1.05, 1, 0.7);
      spineMesh.castShadow = true;
      group.add(spineMesh);
      meshes.push(spineMesh);

      // 3. Pelvis Base (Sits right above hips)
      const pelvisGeo = new THREE.CylinderGeometry(0.12, 0.09, 0.08, 8);
      const pelvisMesh = new THREE.Mesh(pelvisGeo, this.offlineChassisMaterial);
      pelvisMesh.position.set(0, -0.24, 0);
      pelvisMesh.scale.set(1.15, 1, 0.75);
      group.add(pelvisMesh);
      meshes.push(pelvisMesh);

      // 4. Sleek Neck Pillar
      const neckGeo = new THREE.CylinderGeometry(0.038, 0.045, 0.09, 16);
      const neckMesh = new THREE.Mesh(neckGeo, this.jointPivotMaterial);
      neckMesh.position.set(0, 0.13, 0);
      group.add(neckMesh);
      meshes.push(neckMesh);

      // 5. Aerodynamic Studio Mocap Helmet
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.22, 0);

      // Helmet shell
      const helmetGeo = new THREE.CylinderGeometry(0.075, 0.062, 0.15, 10);
      const helmetMesh = new THREE.Mesh(helmetGeo, this.offlineChassisMaterial);
      helmetMesh.scale.set(0.9, 1, 1.15);
      helmetMesh.castShadow = true;
      headGroup.add(helmetMesh);
      meshes.push(helmetMesh);

      // Glowing recessed visor band
      const visorGeo = new THREE.CylinderGeometry(0.076, 0.064, 0.05, 10, 1, false, 0, Math.PI);
      const visorMesh = new THREE.Mesh(visorGeo, this.visorMaterial);
      visorMesh.position.set(0, 0.015, 0.005);
      visorMesh.rotation.y = Math.PI / 2;
      visorMesh.scale.set(0.92, 1, 1.18);
      headGroup.add(visorMesh);

      // Fine visor cyan edge accent
      const visorLineGeo = new THREE.BoxGeometry(0.12, 0.006, 0.02);
      const visorLine = new THREE.Mesh(visorLineGeo, this.accentLineMaterial);
      visorLine.position.set(0, 0.04, 0.08);
      headGroup.add(visorLine);

      group.add(headGroup);

    } else if (bone.name.includes('hand')) {
      // Sleek Geometric Palm with minimalist finger profile
      const palmGeo = new THREE.BoxGeometry(0.055, bone.length * 0.7, 0.026);
      const palmMesh = new THREE.Mesh(palmGeo, this.offlineChassisMaterial);
      palmMesh.position.set(0, -bone.length * 0.45, 0);
      palmMesh.castShadow = true;
      group.add(palmMesh);
      meshes.push(palmMesh);

      // Articulated hand knuckle tip
      const tipGeo = new THREE.BoxGeometry(0.046, bone.length * 0.35, 0.02);
      const tipMesh = new THREE.Mesh(tipGeo, this.jointPivotMaterial);
      tipMesh.position.set(0, -bone.length * 0.88, 0);
      group.add(tipMesh);
      meshes.push(tipMesh);

    } else if (bone.name.includes('foot')) {
      // Sleek athletic mocap sole
      const footGeo = new THREE.BoxGeometry(0.065, 0.042, bone.length);
      const footMesh = new THREE.Mesh(footGeo, this.offlineChassisMaterial);
      footMesh.position.set(0, -0.02, bone.length * 0.42);
      footMesh.castShadow = true;
      group.add(footMesh);
      meshes.push(footMesh);

      // Heel reinforcement
      const heelGeo = new THREE.BoxGeometry(0.062, 0.05, 0.06);
      const heelMesh = new THREE.Mesh(heelGeo, this.jointPivotMaterial);
      heelMesh.position.set(0, -0.01, 0.02);
      group.add(heelMesh);
      meshes.push(heelMesh);

    } else {
      // Tapered Carbon-Fiber Cylindrical Limb Segment
      const cylGeo = new THREE.CylinderGeometry(bone.radius * 0.82, bone.radius * 1.05, bone.length, 16);
      const cylMesh = new THREE.Mesh(cylGeo, this.offlineChassisMaterial);
      cylMesh.castShadow = true;

      const dir = bone.direction;
      if (dir[1] === -1) {
        cylMesh.position.set(0, -bone.length * 0.5, 0);
      } else if (dir[0] === 1) {
        cylMesh.rotation.z = -Math.PI / 2;
        cylMesh.position.set(bone.length * 0.5, 0, 0);
      } else if (dir[0] === -1) {
        cylMesh.rotation.z = Math.PI / 2;
        cylMesh.position.set(-bone.length * 0.5, 0, 0);
      } else {
        cylMesh.position.set(0, -bone.length * 0.5, 0);
      }

      group.add(cylMesh);
      meshes.push(cylMesh);
    }

    // C. Physical Pair IMU Tracker Puck Module Mounted to Limb
    // Represents the actual physical hardware module and displays a glowing status ring!
    // Mount tracker pucks only to actual mocap tracker roles, aligned perfectly on front centerline
    const TRACKED_ROLES = [
      'chest',
      'left_upper_arm',
      'right_upper_arm',
      'left_forearm',
      'right_forearm',
      'left_hand',
      'right_hand',
      'left_thigh',
      'right_thigh',
      'left_shin',
      'right_shin',
      'left_foot',
      'right_foot',
    ];

    if (TRACKED_ROLES.includes(bone.name)) {
      const trackerGroup = new THREE.Group();
      const puckRadius = 0.024;
      const puckHeight = 0.012;

      const puckGeo = new THREE.CylinderGeometry(puckRadius, puckRadius * 1.05, puckHeight, 16);
      const puckMesh = new THREE.Mesh(puckGeo, this.trackerPuckMaterial);
      puckMesh.rotation.x = Math.PI / 2;
      trackerGroup.add(puckMesh);

      // Glowing LED status ring on top of the tracker module
      const ledRingGeo = new THREE.TorusGeometry(puckRadius * 0.65, 0.0035, 8, 20);
      const ledRingMesh = new THREE.Mesh(ledRingGeo, this.inactiveSensorLedMaterial);
      ledRingMesh.position.set(0, 0, puckHeight * 0.55);
      trackerGroup.add(ledRingMesh);
      this.trackerLedMeshes.set(bone.name, ledRingMesh);

      // Position puck on the front visible surface, perfectly centered (X = 0)
      if (bone.name === 'chest') {
        trackerGroup.position.set(0, 0.0, 0.10);
      } else if (bone.name.includes('thigh')) {
        trackerGroup.position.set(0, -bone.length * 0.45, 0.052);
      } else if (bone.name.includes('shin')) {
        trackerGroup.position.set(0, -bone.length * 0.45, 0.046);
      } else if (bone.name.includes('upper_arm')) {
        trackerGroup.position.set(0, -bone.length * 0.45, 0.044);
      } else if (bone.name.includes('forearm')) {
        trackerGroup.position.set(0, -bone.length * 0.45, 0.040);
      } else if (bone.name.includes('hand')) {
        trackerGroup.position.set(0, -bone.length * 0.42, 0.024);
      } else if (bone.name.includes('foot')) {
        trackerGroup.position.set(0, 0.024, bone.length * 0.45);
        trackerGroup.rotation.x = -Math.PI / 2;
      }

      group.add(trackerGroup);
    }

    this.boneMeshes.set(bone.name, meshes);
  }

  public calibratePose(currentSensorQuats: Map<string, THREE.Quaternion>) {
    this.calibOffsets.clear();
    this.reZeroYawOffset.set(0, 0, 0, 1);

    currentSensorQuats.forEach((sensorQuat, role) => {
      const offset = sensorQuat.clone().invert().normalize();
      this.calibOffsets.set(role, offset);
    });

    this.isCalibrated = true;
  }

  public reZeroYaw() {
    let currentChestWorld = this.boneGroups.get('chest')?.quaternion.clone();
    if (!currentChestWorld) {
      currentChestWorld = new THREE.Quaternion(0, 0, 0, 1);
    }

    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(currentChestWorld);
    const yaw = Math.atan2(forward.x, forward.z);

    const halfYaw = -yaw * 0.5;
    this.reZeroYawOffset.set(0, Math.sin(halfYaw), 0, Math.cos(halfYaw)).normalize();
  }

  public getCalibrationOffsets(): Record<string, [number, number, number, number]> | null {
    if (!this.isCalibrated || this.calibOffsets.size === 0) {
      return null;
    }
    const result: Record<string, [number, number, number, number]> = {};
    this.calibOffsets.forEach((offset, role) => {
      const eff = this.reZeroYawOffset.clone().multiply(offset).normalize();
      result[role] = [eff.x, eff.y, eff.z, eff.w];
    });
    return result;
  }

  public getCalibratedWorldQuat(role: string, sensorQuat: THREE.Quaternion): THREE.Quaternion {
    const offset = this.calibOffsets.get(role);
    let worldQuat: THREE.Quaternion;

    if (offset) {
      worldQuat = offset.clone().multiply(sensorQuat).normalize();
    } else {
      worldQuat = sensorQuat.clone();
    }

    return this.reZeroYawOffset.clone().multiply(worldQuat).normalize();
  }

  public updatePoses(
    boneSensors: Map<string, { quat: THREE.Quaternion; isOnline: boolean }>
  ) {
    const calibratedWorldQuats = new Map<string, THREE.Quaternion>();

    for (const [role, data] of boneSensors) {
      if (data.isOnline && data.quat) {
        const worldQ = this.getCalibratedWorldQuat(role, data.quat);
        calibratedWorldQuats.set(role, worldQ);
      }
    }

    const identityQuat = new THREE.Quaternion(0, 0, 0, 1);
    this.traverseAndUpdateBones(this.skeleton.root, identityQuat, calibratedWorldQuats, boneSensors);
  }

  private traverseAndUpdateBones(
    boneName: string,
    parentWorldQuat: THREE.Quaternion,
    calibratedWorldQuats: Map<string, THREE.Quaternion>,
    boneSensors: Map<string, { quat: THREE.Quaternion; isOnline: boolean }>
  ) {
    const group = this.boneGroups.get(boneName);
    if (!group) return;

    const sensorData = boneSensors.get(boneName);
    const isOnline = sensorData ? sensorData.isOnline : false;

    let childWorldQuat: THREE.Quaternion;
    if (calibratedWorldQuats.has(boneName)) {
      childWorldQuat = calibratedWorldQuats.get(boneName)!;
    } else {
      childWorldQuat = parentWorldQuat.clone();
    }

    const invParent = parentWorldQuat.clone().invert();
    const localBoneQuat = invParent.multiply(childWorldQuat).normalize();

    group.quaternion.copy(localBoneQuat);

    // Update chassis and tracker module status
    this.updateBoneMaterial(boneName, isOnline);

    const children = this.skeleton.bones.filter((b) => b.parent === boneName);
    for (const child of children) {
      this.traverseAndUpdateBones(child.name, childWorldQuat, calibratedWorldQuats, boneSensors);
    }
  }

  private updateBoneMaterial(boneName: string, isOnline: boolean) {
    // 1. Update chassis meshes
    const meshes = this.boneMeshes.get(boneName);
    if (meshes) {
      const targetChassisMat = isOnline ? this.onlineChassisMaterial : this.offlineChassisMaterial;
      for (const mesh of meshes) {
        // Leave joint collars and visor with their distinct materials
        if (mesh.material === this.onlineChassisMaterial || mesh.material === this.offlineChassisMaterial) {
          if (mesh.material !== targetChassisMat) {
            mesh.material = targetChassisMat;
          }
        }
      }
    }

    // 2. Update tracker module LED status ring (Cyan pulse when streaming, dark when offline)
    const ledMesh = this.trackerLedMeshes.get(boneName);
    if (ledMesh) {
      const targetLedMat = isOnline ? this.activeSensorLedMaterial : this.inactiveSensorLedMaterial;
      if (ledMesh.material !== targetLedMat) {
        ledMesh.material = targetLedMat;
      }
    }
  }

  public resetToNPose() {
    this.isCalibrated = false;
    this.calibOffsets.clear();
    this.reZeroYawOffset.set(0, 0, 0, 1);

    for (const group of this.boneGroups.values()) {
      group.quaternion.set(0, 0, 0, 1);
    }
  }
}
