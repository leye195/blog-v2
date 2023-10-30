"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({
  minimum: 0.2,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

const NProgressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // You can now use the current URL
    NProgress.start();
  }, [pathname]);

  useEffect(() => {
    NProgress.done();
    // You can now use the current URL
  }, [searchParams]);

  return null;
};

export default NProgressBar;
