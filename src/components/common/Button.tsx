'use client';

import { ComponentPropsWithRef } from 'react';

import { cn } from '@/libs/utils';

const Button = ({ className, children, disabled, onClick }: ComponentPropsWithRef<'button'>) => {
  return (
    <button
      className={cn(
        'h-auto w-auto cursor-pointer bg-transparent px-[8px] py-[4px] text-black',
        'rounded-none hover:bg-transparent disabled:cursor-not-allowed disabled:bg-transparent',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
