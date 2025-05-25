'use client';

import { useState } from 'react';
import Link from 'next/link';

import KBarToggleButton from '@/components/kbar/KBarToggleButton';
import useEventListener from '@/hooks/useEventListener';
import useScrollUp from '@/hooks/useScrollUp';
import { cn } from '@/libs/utils';

import { paletteColor } from '@/styles/variable';
import { ArrowUp } from '../icon';

const Header = () => {
  const { y, handleToTop, FloatingButton } = useScrollUp();
  const [isScrolling, setIsScrolling] = useState(false);

  useEventListener('scroll', () => {
    setIsScrolling(window.scrollY !== 0);
  });

  return (
    <>
      <header
        className={cn(
          'fixed flex h-16 w-[inherit] items-center px-4',
          'border-black-50 z-1 border-b bg-white',
          isScrolling && 'shadow-xs',
        )}
      >
        <nav className={cn('mx-auto flex w-[inherit] max-w-[1600px] items-center justify-between')}>
          <div className="left-side">
            <Link href="/" className="text-[18px]">
              <b>DAN.DEV.LOG</b>
            </Link>
          </div>
          <div className={cn('flex items-center gap-[10px] max-md:text-[16px]')}>
            <Link href="/posts">
              <b>Posts</b>
            </Link>
            <Link href="/resume">
              <b>Resume</b>
            </Link>
            <KBarToggleButton />
          </div>
        </nav>
        <FloatingButton
          className={cn(
            'right-[40px] bottom-[40px] rounded-[50px] p-[12px]',
            'bg-sky-100',
            y > 30 && 'opacity-100',
          )}
          onClick={handleToTop}
        >
          <ArrowUp className="h-5! w-5! max-md:h-4! max-md:w-4!" />
        </FloatingButton>
      </header>
    </>
  );
};

export default Header;
