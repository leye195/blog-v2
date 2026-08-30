import * as THREE from 'three';

import { paletteColor } from '@/styles/variable';

/**
 * Wash a brand hue toward white. A studio light tinted with the brand colour
 * lands on a white object as a soft cast; the raw palette value at full
 * saturation reads as paint on the edge instead of light across the face.
 */
const asLight = (hex: string, wash: number) =>
  `#${new THREE.Color(hex).lerp(new THREE.Color('#ffffff'), wash).getHexString()}`;

/**
 * Three-point rig for the hero slabs.
 *
 * The slabs themselves stay bone-white; the blog's blue/orange pair lives in the
 * lights instead, so the band picks up the brand without a second palette.
 */
export const SLAB_COLOR = '#e4ddd0';

export const AMBIENT = {
  color: '#e6edf7',
  intensity: 0.32,
} as const;

/**
 * Neutral key, nearly overhead. The only light that casts — kept high so the
 * shadow stays under each slab instead of sliding out beside it and reading
 * as a fifth object.
 */
export const KEY_LIGHT = {
  position: [-2.0, 11.5, 2.4],
  color: '#ffffff',
  intensity: 2.6,
  shadowMapSize: 2048,
  /** Tight ortho bounds keep the shadow map dense over the visible band. */
  shadowCamera: { left: -13, right: 13, top: 5, bottom: -5, near: 1, far: 24 },
  /** Blur width; needs shadows="percentage" on the Canvas to take effect. */
  shadowRadius: 12,
} as const;

/** Cool fill that colours the shadow side. */
export const FILL_LIGHT = {
  position: [-7, -2, 3],
  color: asLight(paletteColor.primary, 0.55),
  intensity: 1.5,
} as const;

/** Warm rim raking in from behind right, for the bevel highlight. */
export const RIM_LIGHT = {
  position: [8, 2.5, -4],
  color: asLight(paletteColor.pri100, 0.5),
  intensity: 2.4,
} as const;

export const GROUND = {
  y: -1.25,
  color: paletteColor.dgray900,
  opacity: 0.1,
} as const;
