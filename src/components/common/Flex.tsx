'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '@/libs/utils';
import { type Flex } from '@/styles/mixin';

type FlexProps = Flex & ComponentProps<'div'>;

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    { children, $display, $alignItems, $justifyContent, $gap, $direction, $flexWrap, ...restProps },
    ref,
  ) => {
    return (
      <div
        {...restProps}
        className={cn(restProps.className)}
        ref={ref}
        style={{
          display: $display ?? 'flex',
          justifyContent: $justifyContent ?? 'flex-start',
          flexDirection: $direction ?? 'row',
          alignItems: $alignItems ?? 'flex-start',
          gap: $gap ?? 0,
          flexWrap: $flexWrap,
        }}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
