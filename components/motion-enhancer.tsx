"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * Lightweight GSAP layer for premium feel without heavy scroll cost.
 */
export function MotionEnhancer() {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>("[data-float]");
    targets.forEach((node, index) => {
      gsap.to(node, {
        y: index % 2 === 0 ? 10 : -10,
        duration: 3 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return null;
}

