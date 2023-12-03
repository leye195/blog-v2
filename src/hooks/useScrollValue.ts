import { useState } from "react";
import useIsomorphicLayout from "@/hooks/useIsomorphicLayoutEffect";

type UseScrollValueOutput = {
  x: number;
  y: number;
};

const useScrollValue = (): UseScrollValueOutput => {
  const [scrollValue, setScrollValue] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    setScrollValue({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useIsomorphicLayout(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollValue;
};

export default useScrollValue;
