import { type CSSProperties } from 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export type Flex = {
  $display?: 'flex' | 'inline-flex';
  $direction?: CSSProperties['flexDirection'];
  $alignItems?: CSSProperties['alignItems'];
  $justifyContent?: CSSProperties['justifyContent'];
  $gap?: CSSProperties['gap'];
  $flexWrap?: CSSProperties['flexWrap'];
};
