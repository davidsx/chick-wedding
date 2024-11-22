"use client";

import { useLayoutEffect, useState } from "react";

export default function useWindowSize(): { [T: string]: number } {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const getSize = (): { width: number; height: number } => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const onResize = () => setWindowSize(getSize);
    window.addEventListener("resize", onResize);
    return (): void => window.removeEventListener("resize", onResize);
  }, []);
  return windowSize;
}
