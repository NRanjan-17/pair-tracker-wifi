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

    // 1. Titanium / Carbon chassis (Professional studio mocap aesthetic)
    this.onlineChassisMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e2838,
      metalness: 0.62,
      roughness: 0.32,
    });

    // 2. Machined Aluminum Joint Gimbals
    this.jointPivotMaterial = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.85,
      roughness: 0.18,
    });

    // 3. Eidon IMU Tracker Puck Enclosure (Dark matte composite)
    this.trackerPuckMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.45,
      roughness: 0.35,
    });

    // 4. Active Sensor LED Glow Ring (Electric Cyan)
    this.activeSensorLedMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.85,
      metalness: 0.2,
      roughness: 0.2,
    });

    // 5. Inactive / Standby Sensor LED Ring (Dark Slate)
    this.inactiveSensorLedMaterial = new THREE.MeshStandardMaterial({
      color: 0x263345,
      emissive: 0x000000,
      emissiveIntensity: 0,
      roughness: 0.8,
    });

    // 6. Phantom Translucent Chassis for Unbound / Offline Limbs
    this.offlineChassisMaterial = new THREE.MeshStandardMaterial({
      color: 0x151c28,
      metalness: 0.2,
      roughness: 0.85,
      transparent: true,
      opacity: 0.36,
    });

    // 7. Dark Mirror-Finish Helmet Visor
    this.visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x030712,
      metalness: 0.95,
      roughness: 0.05,
    });

    // 8. Minimalist Accent Line
    this.accentLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
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
    const jointRadius = bone.radius * 1.15;
    const jointGeo = new THREE.SphereGeometry(jointRadius, 20, 20);
    const jointMesh = new THREE.Mesh(jointGeo, this.jointPivotMaterial);
    jointMesh.castShadow = true;
    group.add(jointMesh);
    meshes.push(jointMesh);

    // Subtle aluminum bearing ring around the joint pivot
    const collarGeo = new THREE.CylinderGeometry(jointRadius * 1.12, jointRadius * 1.12, jointRadius * 0.45, 18);
    const collarMesh = new THREE.Mesh(collarGeo, this.jointPivotMaterial);
    group.add(collarMesh);
    meshes.push(collarMesh);

    // B. Anatomical & High-Precision Limb Geometry
    if (bone.name === 'chest') {
      // 1. Upper Torso / Pectoral Armor
      const upperTorsoGeo = new THREE.CylinderGeometry(0.14, 0.12, bone.length * 0.65, 8);
      const upperTorso = new THREE.Mesh(upperTorsoGeo, this.onlineChassisMaterial);
      upperTorso.position.set(0, -bone.length * 0.28, 0);
      upperTorso.rotation.y = Math.PI / 8;
      upperTorso.scale.set(1.15, 1, 0.72);
      upperTorso.castShadow = true;
      group.add(upperTorso);
      meshes.push(upperTorso);

      // 2. Segmented Lower Spine & Rib Cage
      const spineGeo = new THREE.CylinderGeometry(0.10, 0.09, bone.length * 0.35, 8);
      const spineMesh = new THREE.Mesh(spineGeo, this.jointPivotMaterial);
      spineMesh.position.set(0, -bone.length * 0.65, 0);
      spineMesh.scale.set(1.05, 1, 0.7);
      spineMesh.castShadow = true;
      group.add(spineMesh);
      meshes.push(spineMesh);

      // 3. Pelvis Saddle
      const pelvisGeo = new THREE.CylinderGeometry(0.12, 0.10, 0.12, 8);
      const pelvisMesh = new THREE.Mesh(pelvisGeo, this.onlineChassisMaterial);
      pelvisMesh.position.set(0, -bone.length * 0.85, 0);
      pelvisMesh.scale.set(1.1, 1, 0.75);
      group.add(pelvisMesh);
      meshes.push(pelvisMesh);

      // 4. Clavicle / Collarbone Bridge
      const collarBarGeo = new THREE.BoxGeometry(0.34, 0.035, 0.05);
      const collarBar = new THREE.Mesh(collarBarGeo, this.jointPivotMaterial);
      collarBar.position.set(0, 0.12, 0);
      group.add(collarBar);
      meshes.push(collarBar);

      // 5. Sleek Neck Pillar
      const neckGeo = new THREE.CylinderGeometry(0.038, 0.045, 0.09, 16);
      const neckMesh = new THREE.Mesh(neckGeo, this.jointPivotMaterial);
      neckMesh.position.set(0, 0.11, 0);
      group.add(neckMesh);
      meshes.push(neckMesh);

      // 6. Aerodynamic Studio Mocap Helmet (Replaces the toy sphere/box visor)
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.22, 0);

      // Helmet shell
      const helmetGeo = new THREE.CylinderGeometry(0.075, 0.062, 0.15, 10);
      const helmetMesh = new THREE.Mesh(helmetGeo, this.onlineChassisMaterial);
      helmetMesh.scale.set(0.9, 1, 1.15);
      helmetMesh.castShadow = true;
      headGroup.add(helmetMesh);
      meshes.push(helmetMesh);

      // Dark mirror-finish recessed visor band
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
      const palmMesh = new THREE.Mesh(palmGeo, this.onlineChassisMaterial);
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
      const footMesh = new THREE.Mesh(footGeo, this.onlineChassisMaterial);
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
      const cylMesh = new THREE.Mesh(cylGeo, this.onlineChassisMaterial);
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

    // C. Physical Eidon IMU Tracker Puck Module Mounted to Limb
    // Represents the actual physical hardware module and displays a glowing status ring!
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

    // Position puck on the outer visible surface of each bone
    if (bone.name === 'chest') {
      trackerGroup.position.set(0, -bone.length * 0.28, 0.10);
    } else if (bone.name.includes('thigh')) {
      trackerGroup.position.set(bone.direction[0] !== 0 ? 0 : 0.048, -bone.length * 0.45, 0.045);
    } else if (bone.name.includes('shin')) {
      trackerGroup.position.set(0, -bone.length * 0.45, 0.045);
    } else if (bone.name.includes('upper_arm')) {
      trackerGroup.position.set(bone.name.includes('left') ? 0.048 : -0.048, -bone.length * 0.45, 0.01);
    } else if (bone.name.includes('forearm')) {
      trackerGroup.position.set(0, -bone.length * 0.45, 0.04);
    } else if (bone.name.includes('hand')) {
      trackerGroup.position.set(0, -bone.length * 0.42, 0.022);
    } else if (bone.name.includes('foot')) {
      trackerGroup.position.set(0, 0.02, bone.length * 0.45);
      trackerGroup.rotation.x = -Math.PI / 2;
    } else {
      trackerGroup.position.set(0, 0, bone.radius * 1.1);
    }

    group.add(trackerGroup);

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
