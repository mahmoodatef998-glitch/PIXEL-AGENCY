"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const SmoothScrollProvider = dynamic(
  () => import("@/components/smooth-scroll-provider").then((mod) => ({ default: mod.SmoothScrollProvider })),
  { ssr: false }
);

const MotionEnhancer = dynamic(
  () => import("@/components/motion-enhancer").then((mod) => ({ default: mod.MotionEnhancer })),
  { ssr: false }
);

export function MotionShell() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <>
      <SmoothScrollProvider />
      <MotionEnhancer />
    </>
  );
}
