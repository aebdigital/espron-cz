"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  speed?: number; // 0.1 to 0.5 recommended
  className?: string;
}

/**
 * Standard parallax for elements within the document flow.
 * Uses viewport offset to determine movement.
 */
export default function Parallax({
  children,
  speed = 0.2, // Movement as percentage of scroll
  className = "",
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[200%] -top-[50%]"
      >
        {children}
      </motion.div>
    </div>
  );
}
