import Avatar from '@/components/common/Avatar';
import HeroCanvasLoader from '@/components/three/HeroCanvasLoader';

const PROFILE_AVATAR = '/assets/avatar.gif';

export default function Hero() {
  return (
    <div className="relative hidden w-full flex-col items-center md:flex">
      {/* Background Section: Correct Colors from Figma */}
      <div className="relative flex h-72 w-screen flex-col items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50 px-4 pb-px">
        <HeroCanvasLoader />
        {/* Gradient Overlay — sits above the canvas so the slabs dissolve into the page. */}
        <div className="absolute inset-x-0 top-1/2 -bottom-px bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Avatar Container */}
      <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <div className="flex size-32 items-center justify-center rounded-full shadow-xl">
          <Avatar className="h-full w-full rounded-full" size={128} src={PROFILE_AVATAR} priority />
        </div>
      </div>
    </div>
  );
}
