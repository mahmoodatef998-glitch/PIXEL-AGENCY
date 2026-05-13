"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the cursor movement
  const springConfig = { damping: 28, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea')) {
        setIsHovering(true);
      }
    };
    
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Inner dot */}
        <motion.div
          className="relative flex items-center justify-center rounded-full bg-[#F2D9A6]"
          animate={{
            width: isHovering ? 80 : 10,
            height: isHovering ? 80 : 10,
            backgroundColor: isHovering ? "rgba(242, 217, 166, 0.15)" : "#F2D9A6",
          }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          {isHovering && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="size-2 rounded-full bg-[#F2D9A6]"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Trailing circle for extra smoothness */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 150 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 150 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-[#F2D9A6]/30"
          animate={{
            width: isHovering ? 100 : 36,
            height: isHovering ? 100 : 36,
          }}
          transition={{ type: "spring", damping: 35, stiffness: 200 }}
        />
      </motion.div>
    </>
  );
}
