'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { SLAB_COLOR } from './lighting';

/**
 * A rounded rectangle extruded into a slab, bevelled on both faces so the rim
 * light has an edge to catch. Extrusion runs along +Z, so the geometry is laid
 * flat afterwards and its thickness becomes height.
 */
const createSlabGeometry = (width: number, depth: number, thickness: number, radius: number) => {
  const shape = new THREE.Shape();
  const w = width / 2;
  const d = depth / 2;
  const r = Math.min(radius, w, d);

  shape.moveTo(-w + r, -d);
  shape.lineTo(w - r, -d);
  shape.quadraticCurveTo(w, -d, w, -d + r);
  shape.lineTo(w, d - r);
  shape.quadraticCurveTo(w, d, w - r, d);
  shape.lineTo(-w + r, d);
  shape.quadraticCurveTo(-w, d, -w, d - r);
  shape.lineTo(-w, -d + r);
  shape.quadraticCurveTo(-w, -d, -w + r, -d);

  const bevel = Math.min(0.028, thickness / 3);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: thickness - bevel * 2,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 14,
  });

  geometry.rotateX(-Math.PI / 2);
  geometry.center();
  geometry.computeVertexNormals();

  return geometry;
};

type SlabSpec = {
  id: string;
  /** Horizontal placement as a fraction of the half-viewport, floored so the
   *  slabs never crowd the avatar that sits centred at the band's lower edge. */
  xFraction: number;
  y: number;
  z: number;
  width: number;
  depth: number;
  thickness: number;
  radius: number;
  tilt: [number, number, number];
  phase: number;
};

const SLABS: SlabSpec[] = [
  {
    id: 'left-near',
    xFraction: -0.32,
    y: -0.12,
    z: 0.7,
    width: 5.2,
    depth: 2.4,
    thickness: 0.3,
    radius: 0.2,
    tilt: [0.34, -0.3, 0.05],
    phase: 0,
  },
  {
    id: 'left-far',
    xFraction: -0.66,
    y: 0.46,
    z: -1.7,
    width: 3.6,
    depth: 1.7,
    thickness: 0.24,
    radius: 0.16,
    tilt: [0.16, 0.34, -0.08],
    phase: 1.9,
  },
  {
    id: 'right-near',
    xFraction: 0.32,
    y: 0.42,
    z: 0.1,
    width: 4.2,
    depth: 1.9,
    thickness: 0.27,
    radius: 0.18,
    tilt: [0.26, 0.2, 0.1],
    phase: 3.4,
  },
  {
    id: 'right-far',
    xFraction: 0.62,
    y: 1.05,
    z: -2.0,
    width: 3.0,
    depth: 1.4,
    thickness: 0.2,
    radius: 0.14,
    tilt: [0.12, -0.4, -0.04],
    phase: 5.1,
  },
];

/** World width of the band at a 1600px viewport, where the slabs render at 1:1. */
const REFERENCE_WIDTH = 26;

/** Half the avatar's world width plus breathing room. */
const AVATAR_CLEARANCE = 1.7;

type SlabsProps = {
  reduceMotion: boolean;
};

const Slabs = ({ reduceMotion }: SlabsProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const slabRefs = useRef<(THREE.Mesh | null)[]>([]);
  const viewportWidth = useThree((state) => state.viewport.width);

  const geometries = useMemo(
    () =>
      SLABS.map((slab) => createSlabGeometry(slab.width, slab.depth, slab.thickness, slab.radius)),
    [],
  );

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(SLAB_COLOR),
        roughness: 0.86,
        metalness: 0,
      }),
    [],
  );

  useEffect(() => {
    return () => {
      geometries.forEach((geometry) => geometry.dispose());
      material.dispose();
    };
  }, [geometries, material]);

  /**
   * The band keeps a fixed pixel height, so a narrower viewport means fewer
   * world units across — slabs at a fixed size would swell to fill it. Scaling
   * with the width keeps the composition proportional instead.
   */
  const scale = useMemo(
    () => THREE.MathUtils.clamp(viewportWidth / REFERENCE_WIDTH, 0.6, 1),
    [viewportWidth],
  );

  const positions = useMemo(() => {
    const halfWidth = viewportWidth / 2;

    return SLABS.map((slab) => {
      const sign = Math.sign(slab.xFraction);
      // Clearance for the avatar, measured against this slab's rendered width.
      const minGap = AVATAR_CLEARANCE + (slab.width * scale) / 2;
      const x = sign * Math.max(minGap, Math.abs(slab.xFraction) * halfWidth);

      return [x, slab.y, slab.z] as [number, number, number];
    });
  }, [scale, viewportWidth]);

  useFrame((state) => {
    if (reduceMotion) return;

    const t = state.clock.elapsedTime;

    SLABS.forEach((slab, index) => {
      const mesh = slabRefs.current[index];
      if (!mesh) return;

      mesh.position.y = positions[index][1] + Math.sin(t * 0.42 + slab.phase) * 0.11;
      mesh.rotation.y = slab.tilt[1] + Math.sin(t * 0.31 + slab.phase) * 0.14;
      mesh.rotation.z = slab.tilt[2] + Math.cos(t * 0.22 + slab.phase) * 0.06;
    });

    const group = groupRef.current;
    if (!group) return;

    // Parallax: a nudge, not a camera ride.
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, state.pointer.x * 0.06, 0.04);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -state.pointer.y * 0.03, 0.04);
    group.position.x = THREE.MathUtils.lerp(group.position.x, state.pointer.x * 0.3, 0.04);
  });

  return (
    <group ref={groupRef}>
      {SLABS.map((slab, index) => (
        <mesh
          key={slab.id}
          ref={(mesh) => {
            slabRefs.current[index] = mesh;
          }}
          castShadow
          receiveShadow
          geometry={geometries[index]}
          material={material}
          position={positions[index]}
          rotation={slab.tilt}
          scale={scale}
        />
      ))}
    </group>
  );
};

export default Slabs;
