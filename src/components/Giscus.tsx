"use client";

import { useEffect, useRef } from "react";

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";
    scriptElem.setAttribute("data-repo", "leye195/blog-v2");
    scriptElem.setAttribute("data-repo-id", "R_kgDOKm5bOA");
    scriptElem.setAttribute("data-category", "General");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOKm5bOM4CbzzQ");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "top");
    scriptElem.setAttribute("data-theme", "light");
    scriptElem.setAttribute("data-lang", "ko");
    scriptElem.setAttribute("data-loading", "lazy");
    ref.current.appendChild(scriptElem);
  }, []);

  return <section className="w-full" ref={ref} />;
};

export default Giscus;
