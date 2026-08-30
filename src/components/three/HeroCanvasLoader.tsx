'use client';

import { useMedia } from 'react-use';
import dynamic from 'next/dynamic';

// `ssr: false` is not allowed inside a Server Component, so the split lives here
// rather than in Hero. Gating on the media query also keeps the three.js chunk
// off the wire entirely below md, where the hero is display:none anyway.
const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const HeroCanvasLoader = () => {
  const isDesktop = useMedia('(min-width: 753px)', false);

  if (!isDesktop) return null;

  return <HeroCanvas />;
};

export default HeroCanvasLoader;
