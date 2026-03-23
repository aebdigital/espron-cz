"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  speed?: number; // 0.1 means 10% movement
}

export default function HeroParallax({
  children,
  speed = 0.2,
}: Props) {
  const { scrollY } = useScroll();
  
  // A speed of 0.2 means for every 1000px scrolled, move the image 200px
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y }} 
        className="relative w-full h-full scale-110"
      >
        {children}
      </motion.div>
    </div>
  );
}
