import { type CSSProperties } from 'react';
import { css } from 'styled-components';

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

/**
 * @description flex 스타일 적용을 위한 mixin 함수
 */
export const flex = ({
  $display = 'flex',
  $direction = 'row',
  $alignItems = 'flex-start',
  $justifyContent = 'flex-start',
  $gap = 0,
}: Flex) => css`
  display: ${$display};
  flex-direction: ${$direction};
  align-items: ${$alignItems};
  justify-content: ${$justifyContent};
  gap: ${$gap};
`;
