"use client";

import { forwardRef } from "react";
import styled from "styled-components";

import { type ComponentProps } from "react";
import { type Flex } from "@/styles/mixin";

type Props = Flex & ComponentProps<"div">;

const StyledDiv = styled.div<Flex>`
  display: ${({ $display }) => $display ?? "flex"};
  align-items: ${({ $alignItems }) => $alignItems ?? "flex-start"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "flex-start"};
  flex-direction: ${({ $direction }) => $direction ?? "row"};
  gap: ${({ $gap }) => $gap ?? "0"};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
`;

const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, ...restProps }, ref) => (
    <StyledDiv {...restProps} ref={ref}>
      {children}
    </StyledDiv>
  )
);

Flex.displayName = "Flex";

export default Flex;
