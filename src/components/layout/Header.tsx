"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import KBarToggleButton from "@/components/kbar/KBarToggleButton";
import useEventListener from "@/hooks/useEventListener";
import useScrollUp from "@/hooks/useScrollUp";
import { cn } from "@/libs/utils";
import breakpoints from "@/styles/breakpoints";
import { flex } from "@/styles/mixin";
import { paletteColor } from "@/styles/variable";
import { ArrowUp } from "../icon";

const Container = styled.header`
  ${flex({ $alignItems: "center" })};
  width: inherit;
  height: 4rem;
  padding: 0 1rem;
  position: fixed;
`;

const Nav = styled.nav`
  ${flex({ $alignItems: "center", $justifyContent: "space-between" })};
  max-width: 1600px;
  width: inherit;
  margin: 0 auto;

  a {
    font-size: 18px;
  }

  .right-side {
    ${flex({ $alignItems: "center" })}
    gap: 10px;

    ${breakpoints.down("md")} {
      b {
        font-size: 16px;
      }
    }
  }
`;

const Header = () => {
  const { y, handleToTop, FloatingButton } = useScrollUp();
  const [isScrolling, setIsScrolling] = useState(false);

  useEventListener("scroll", () => {
    setIsScrolling(window.scrollY !== 0);
  });

  return (
    <Container
      className={cn(
        "border-b border-black-50 bg-white z-[1]",
        isScrolling && "shadow-sm"
      )}
    >
      <Nav>
        <div className="left-side">
          <Link href="/">
            <b>DAN.DEV.LOG</b>
          </Link>
        </div>
        <div className="right-side">
          <Link href="/posts">
            <b>Posts</b>
          </Link>
          <Link href="/resume">
            <b>Resume</b>
          </Link>
          <KBarToggleButton />
        </div>
      </Nav>
      <FloatingButton
        className={cn(...[y > 30 ? "show" : ""])}
        bottom={40}
        right={40}
        padding="12px"
        borderRadius="50px"
        bgColor={paletteColor.blue200}
        hoverBgColor={paletteColor.blue200}
        onClick={handleToTop}
      >
        <ArrowUp className="!w-5 !h-5 max-md:!w-4 max-md:!h-4" />
      </FloatingButton>
    </Container>
  );
};

export default Header;
