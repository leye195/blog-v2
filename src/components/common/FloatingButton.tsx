import { type CSSProperties } from "react";
import styled from "styled-components";
import Button, { type ButtonProps } from "@/components/common/Button";

type Props = {
  bottom: CSSProperties["bottom"];
  right: CSSProperties["right"];
} & ButtonProps;

const Container = styled.div<Pick<Props, "bottom" | "right">>`
  position: fixed;
  bottom: ${({ bottom }) =>
    typeof bottom === "number" ? `${bottom}px` : bottom};
  right: ${({ right }) => (typeof right === "number" ? `${right}px` : right)};
  transition: opacity 0.25s;
  opacity: 0;

  &.show {
    opacity: 1;
  }
`;

const FloatingButton = ({
  className,
  right,
  bottom,
  children,
  ...restProps
}: Props) => {
  return (
    <Container className={className} right={right} bottom={bottom}>
      <Button {...restProps}>{children}</Button>
    </Container>
  );
};

export default FloatingButton;
