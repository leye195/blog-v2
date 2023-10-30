"use client";

import { CSSProperties, ComponentPropsWithRef } from "react";
import styled from "styled-components";

type Props = {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bgColor?: CSSProperties["backgroundColor"];
  hoverBgColor?: CSSProperties["backgroundColor"];
  disableBgColor?: CSSProperties["backgroundColor"];
  padding?: CSSProperties["padding"];
  borderRadius?: CSSProperties["borderRadius"];
} & ComponentPropsWithRef<"button">;

const Container = styled.button<{
  $padding: Props["padding"];
  $width: Props["width"];
  $height: Props["height"];
  $color?: Props["color"];
  $bgColor: Props["bgColor"];
  $hoverBgColor: Props["hoverBgColor"];
  $disableBgColor: Props["disableBgColor"];
  $borderRadius: Props["borderRadius"];
}>`
  padding: ${({ $padding }) => $padding};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  color: ${({ $color }) => $color};
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  cursor: pointer;

  &:hover {
    background: ${({ $hoverBgColor }) => $hoverBgColor};
  }

  &:disabled {
    background: ${({ $disableBgColor }) => $disableBgColor};
    cursor: not-allowed;
  }
`;

const Button = ({
  className,
  children,
  disabled,
  width = "auto",
  height = "auto",
  padding = "4px 8px",
  bgColor = "transparent",
  borderRadius = "0px",
  hoverBgColor = "transparent",
  disableBgColor = "transparent",
  color = "black",
  onClick,
}: Props) => {
  return (
    <Container
      className={className}
      disabled={disabled}
      onClick={onClick}
      $width={width}
      $height={height}
      $padding={padding}
      $color={color}
      $bgColor={bgColor}
      $borderRadius={borderRadius}
      $hoverBgColor={hoverBgColor}
      $disableBgColor={disableBgColor}
    >
      {children}
    </Container>
  );
};

export default Button;
