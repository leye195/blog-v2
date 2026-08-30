'use client';

import { useEffect, useRef, useState } from 'react';
import { useMedia } from 'react-use';
import { Canvas } from '@react-three/fiber';

import { AMBIENT, FILL_LIGHT, GROUND, KEY_LIGHT, RIM_LIGHT } from './lighting';
import Slabs from './Slabs';

const CAMERA = {
  fov: 28,
  position: [0, 2.2, 9.5] as const,
  near: 0.1,
  far: 40,
};

/**
 * react-use's `useIntersection` still types its ref as React 18's
 * `RefObject<HTMLElement>`, which React 19's `useRef` no longer satisfies.
 * Twelve lines here beat casting the ref.
 */
const useInView = (ref: React.RefObject<HTMLElement | null>) => {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
};

const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)', false);

  // 'demand' renders the opening frame and then stays still — which is exactly
  // what both a scrolled-past band and a reduced-motion visitor should get.
  const frameloop = reduceMotion || !inView ? 'demand' : 'always';

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0">
      <Canvas
        shadows="percentage"
        dpr={[1, 1.5]}
        frameloop={frameloop}
        camera={CAMERA}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.2, 0);
        }}
      >
        <ambientLight color={AMBIENT.color} intensity={AMBIENT.intensity} />

        <directionalLight
          castShadow
          color={KEY_LIGHT.color}
          intensity={KEY_LIGHT.intensity}
          position={KEY_LIGHT.position}
          shadow-mapSize-width={KEY_LIGHT.shadowMapSize}
          shadow-mapSize-height={KEY_LIGHT.shadowMapSize}
          shadow-camera-left={KEY_LIGHT.shadowCamera.left}
          shadow-camera-right={KEY_LIGHT.shadowCamera.right}
          shadow-camera-top={KEY_LIGHT.shadowCamera.top}
          shadow-camera-bottom={KEY_LIGHT.shadowCamera.bottom}
          shadow-camera-near={KEY_LIGHT.shadowCamera.near}
          shadow-camera-far={KEY_LIGHT.shadowCamera.far}
          shadow-radius={KEY_LIGHT.shadowRadius}
          shadow-bias={-0.0006}
          shadow-normalBias={0.02}
        />

        <directionalLight
          color={FILL_LIGHT.color}
          intensity={FILL_LIGHT.intensity}
          position={FILL_LIGHT.position}
        />

        <directionalLight
          color={RIM_LIGHT.color}
          intensity={RIM_LIGHT.intensity}
          position={RIM_LIGHT.position}
        />

        <Slabs reduceMotion={reduceMotion} />

        {/* Catches the contact shadow only; the slate band shows through elsewhere. */}
        <mesh receiveShadow position={[0, GROUND.y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[80, 30]} />
          <shadowMaterial transparent color={GROUND.color} opacity={GROUND.opacity} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
