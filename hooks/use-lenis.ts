"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Faster scroll response
      lerp: 0.1,    // More direct feedback
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5 // Better responsiveness on mobile
    });

    let raf = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

