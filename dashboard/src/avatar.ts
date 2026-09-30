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
 * Three.js is right-handed Y-up: X=right, Y=up, Z=-forward (or backward).
 * Axis mapping: X_three = X_bno, Y_three = Z_bno, Z_three = -Y_bno.
 * Converts [qw, qx, qy, qz] to new THREE.Quaternion(x, y, z, w).
 */
export function bnoToThreeQuat(qw: number, qx: number, qy: number, qz: number): THREE.Quaternion {
  // THREE.Quaternion constructor takes (x, y, z, w)
  return new THREE.Quaternion(qx, qz, -qy, qw).normalize();
}

export class AvatarRig {
  public scene: THREE.Scene;
  public rootGroup: THREE.Group;
  public skeleton: SkeletonData;

  public boneGroups: Map<string, THREE.Group> = new Map();
  public boneMeshes: Map<string, THREE.Mesh[]> = new Map();
  public onlineMaterials: Map<string, THREE.Material> = new Map();
  public offlineMaterial: THREE.MeshStandardMaterial;

  // Calibration state
  public isCalibrated: boolean = false;
  private calibOffsets: Map<string, THREE.Quaternion> = new Map();
  private reZeroYawOffset: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.skeleton = skeletonConfig as SkeletonData;
    this.rootGroup = new THREE.Group();
    this.rootGroup.name = "avatar_root";
    this.scene.add(this.rootGroup);

    // Muted slate gray material for offline bones
    this.offlineMaterial = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.1,
      roughness: 0.8,
      transparent: true,
      opacity: 0.45,
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

      // Create materials for online state
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(bone.color),
        metalness: 0.7,
        roughness: 0.25,
        emissive: new THREE.Color(bone.color),
        emissiveIntensity: 0.18,
      });
      this.onlineMaterials.set(bone.name, mat);
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

      // 3. Create visual meshes (joint + limb segment)
      this.createBoneMesh(bone, group);
    }
  }

  private createBoneMesh(bone: BoneConfig, group: THREE.Group) {
    const mat = this.onlineMaterials.get(bone.name)!;
    const meshes: THREE.Mesh[] = [];

    // A. Joint pivot sphere
    const jointRadius = bone.radius * 1.35;
    const jointGeo = new THREE.SphereGeometry(jointRadius, 16, 16);
    const jointMesh = new THREE.Mesh(jointGeo, mat);
    jointMesh.castShadow = true;
    group.add(jointMesh);
    meshes.push(jointMesh);

    // B. Limb / Body Geometry
    if (bone.name === 'chest') {
      // Stylized Torso
      const torsoGeo = new THREE.BoxGeometry(0.30, bone.length, 0.18);
      const torsoMesh = new THREE.Mesh(torsoGeo, mat);
      torsoMesh.position.set(0, -bone.length * 0.35, 0);
      torsoMesh.castShadow = true;
      group.add(torsoMesh);
      meshes.push(torsoMesh);

      // Robotic Neck & Head Visor
      const neckGeo = new THREE.CylinderGeometry(0.04, 0.045, 0.08, 12);
      const neckMesh = new THREE.Mesh(neckGeo, mat);
      neckMesh.position.set(0, 0.10, 0);
      group.add(neckMesh);
      meshes.push(neckMesh);

      const headGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const headMesh = new THREE.Mesh(headGeo, mat);
      headMesh.position.set(0, 0.20, 0);
      group.add(headMesh);
      meshes.push(headMesh);

      // Cyber visor band
      const visorGeo = new THREE.BoxGeometry(0.12, 0.04, 0.08);
      const visorMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.8,
      });
      const visorMesh = new THREE.Mesh(visorGeo, visorMat);
      visorMesh.position.set(0, 0.20, 0.06);
      group.add(visorMesh);

      // Pelvis connector
      const pelvisGeo = new THREE.BoxGeometry(0.24, 0.10, 0.16);
      const pelvisMesh = new THREE.Mesh(pelvisGeo, mat);
      pelvisMesh.position.set(0, -bone.length * 0.72, 0);
      group.add(pelvisMesh);
      meshes.push(pelvisMesh);

    } else if (bone.name.includes('hand')) {
      // Hand paddle / palm
      const palmGeo = new THREE.BoxGeometry(0.065, bone.length, 0.035);
      const palmMesh = new THREE.Mesh(palmGeo, mat);
      palmMesh.position.set(0, -bone.length * 0.5, 0);
      palmMesh.castShadow = true;
      group.add(palmMesh);
      meshes.push(palmMesh);

      // Hand tip accent
      const tipGeo = new THREE.BoxGeometry(0.05, 0.04, 0.03);
      const tipMesh = new THREE.Mesh(tipGeo, mat);
      tipMesh.position.set(0, -bone.length * 0.95, 0);
      group.add(tipMesh);
      meshes.push(tipMesh);

    } else {
      // Cylindrical limb bone
      const cylGeo = new THREE.CylinderGeometry(bone.radius * 0.85, bone.radius * 1.05, bone.length, 14);
      const cylMesh = new THREE.Mesh(cylGeo, mat);
      cylMesh.castShadow = true;

      // Orient cylinder along direction vector
      const dir = bone.direction;
      if (dir[1] === -1) {
        // Downward (-Y)
        cylMesh.position.set(0, -bone.length * 0.5, 0);
      } else if (dir[0] === 1) {
        // Lateral Right (+X)
        cylMesh.rotation.z = -Math.PI / 2;
        cylMesh.position.set(bone.length * 0.5, 0, 0);
      } else if (dir[0] === -1) {
        // Lateral Left (-X)
        cylMesh.rotation.z = Math.PI / 2;
        cylMesh.position.set(-bone.length * 0.5, 0, 0);
      } else if (dir[2] === 1) {
        // Forward (+Z, feet)
        cylMesh.rotation.x = Math.PI / 2;
        cylMesh.position.set(0, 0, bone.length * 0.5);
      } else {
        cylMesh.position.set(0, -bone.length * 0.5, 0);
      }

      group.add(cylMesh);
      meshes.push(cylMesh);
    }

    this.boneMeshes.set(bone.name, meshes);
  }

  /**
   * Calibrate pose: user stands facing forward in N-pose (arms down).
   * Computes per-bone offset so the avatar matches the N-pose (Identity world rotation).
   */
  public calibratePose(currentSensorQuats: Map<string, THREE.Quaternion>) {
    this.calibOffsets.clear();
    this.reZeroYawOffset.set(0, 0, 0, 1);

    currentSensorQuats.forEach((sensorQuat, role) => {
      // In rest N-pose, each bone's world orientation is Identity (facing forward, arms down).
      // Sensor reading in Three.js frame is Q_sensor.
      // Offset Q_offset = inverse(Q_sensor) such that Q_offset * Q_sensor = Identity.
      const offset = sensorQuat.clone().invert().normalize();
      this.calibOffsets.set(role, offset);
    });

    this.isCalibrated = true;
  }

  /**
   * Re-zero: fixes yaw drift without resetting joint mount offsets.
   * Extracts chest (or primary active bone) yaw around the Y axis and sets a global yaw correction.
   */
  public reZeroYaw(currentSensorQuats: Map<string, THREE.Quaternion>) {
    // Determine reference bone (chest first, or any active limb)
    const refRole = currentSensorQuats.has('chest') ? 'chest' : currentSensorQuats.keys().next().value;
    if (!refRole) return;

    const rawQuat = currentSensorQuats.get(refRole)!;
    const offset = this.calibOffsets.get(refRole) || new THREE.Quaternion(0, 0, 0, 1);

    // Current calibrated rotation without yaw fix
    const curCalib = offset.clone().multiply(rawQuat).normalize();

    // Extract yaw angle (rotation around Three.js Y-up axis)
    // For quaternion (x, y, z, w): yaw = atan2(2(w*y + x*z), 1 - 2(y*y + z*z))
    const yaw = Math.atan2(
      2.0 * (curCalib.w * curCalib.y + curCalib.x * curCalib.z),
      1.0 - 2.0 * (curCalib.y * curCalib.y + curCalib.z * curCalib.z)
    );

    // Compute re-zero quaternion: -yaw rotation around Y
    const halfYaw = -yaw * 0.5;
    this.reZeroYawOffset.set(0, Math.sin(halfYaw), 0, Math.cos(halfYaw)).normalize();
  }

  /**
   * Returns current pose calibration offsets (including reZeroYaw) as serializable map:
   * role -> [x, y, z, w].
   */
  public getCalibrationOffsets(): Record<string, [number, number, number, number]> | null {
    if (!this.isCalibrated || this.calibOffsets.size === 0) {
      return null;
    }
    const result: Record<string, [number, number, number, number]> = {};
    this.calibOffsets.forEach((offset, role) => {
      // Effective offset = reZeroYawOffset * offset
      const eff = this.reZeroYawOffset.clone().multiply(offset).normalize();
      result[role] = [eff.x, eff.y, eff.z, eff.w];
    });
    return result;
  }

  /**
   * Get calibrated world rotation for a given role:
   * Q_world = Q_reZero * (Q_offset * Q_sensor)
   */
  public getCalibratedWorldQuat(role: string, sensorQuat: THREE.Quaternion): THREE.Quaternion {
    const offset = this.calibOffsets.get(role);
    let worldQuat: THREE.Quaternion;

    if (offset) {
      // Offset applied to sensor orientation
      worldQuat = offset.clone().multiply(sensorQuat).normalize();
    } else {
      worldQuat = sensorQuat.clone();
    }

    // Apply global yaw re-zero correction
    return this.reZeroYawOffset.clone().multiply(worldQuat).normalize();
  }

  /**
   * Update avatar skeleton hierarchy with live quaternions:
   * Rule: Bone rotation = inverse(parent world rotation) * child world rotation, after offsets.
   * Grays out bone meshes when device is offline.
   */
  public updatePoses(
    boneSensors: Map<string, { quat: THREE.Quaternion; isOnline: boolean }>
  ) {
    // 1. Calculate calibrated world rotations for each bone with an online sensor
    const calibratedWorldQuats = new Map<string, THREE.Quaternion>();

    for (const [role, data] of boneSensors) {
      if (data.isOnline && data.quat) {
        const worldQ = this.getCalibratedWorldQuat(role, data.quat);
        calibratedWorldQuats.set(role, worldQ);
      }
    }

    // 2. Hierarchically compute local rotations:
    // Local rotation = inverse(parent world rotation) * child world rotation
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

    // Child world rotation: use sensor if available and online, else follow parent
    let childWorldQuat: THREE.Quaternion;
    if (calibratedWorldQuats.has(boneName)) {
      childWorldQuat = calibratedWorldQuats.get(boneName)!;
    } else {
      // If untracked or offline, keep rest alignment relative to parent
      childWorldQuat = parentWorldQuat.clone();
    }

    // FORMULA: Bone rotation = inverse(parent world rotation) * child world rotation
    const invParent = parentWorldQuat.clone().invert();
    const localBoneQuat = invParent.multiply(childWorldQuat).normalize();

    group.quaternion.copy(localBoneQuat);

    // Update material (vibrant when online, grayed out when offline)
    this.updateBoneMaterial(boneName, isOnline);

    // Recurse for all children in the skeleton hierarchy
    const children = this.skeleton.bones.filter((b) => b.parent === boneName);
    for (const child of children) {
      this.traverseAndUpdateBones(child.name, childWorldQuat, calibratedWorldQuats, boneSensors);
    }
  }

  private updateBoneMaterial(boneName: string, isOnline: boolean) {
    const meshes = this.boneMeshes.get(boneName);
    if (!meshes) return;

    const targetMat = isOnline
      ? this.onlineMaterials.get(boneName) || this.offlineMaterial
      : this.offlineMaterial;

    for (const mesh of meshes) {
      if (mesh.material !== targetMat) {
        mesh.material = targetMat;
      }
    }
  }

  public resetToNPose() {
    this.isCalibrated = false;
    this.calibOffsets.clear();
    this.reZeroYawOffset.set(0, 0, 0, 1);

    // Reset all groups to identity local rotation
    for (const group of this.boneGroups.values()) {
      group.quaternion.set(0, 0, 0, 1);
    }
  }
}
