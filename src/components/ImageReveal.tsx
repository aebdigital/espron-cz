"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  grayscale?: boolean;
}

/**
 * Premium image reveal component.
 * Crops/masks images and uncurtains them with grayscale-to-color transition.
 */
export default function ImageReveal({
  children,
  delay = 0,
  className = "",
  grayscale = true,
}: Props) {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-[inherit] ${className}`}>
      {/* Shutter Reveal Effect */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-100%" }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          delay: delay / 1000, 
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="absolute inset-0 z-10 rounded-[inherit] bg-primary"
      />
      
      {/* Image Content */}
      <motion.div
        initial={{ scale: 1.2, filter: grayscale ? "grayscale(100%)" : "grayscale(0%)" }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
        viewport={{ once: true }}
        transition={{
          scale: { duration: 1.8, delay: delay / 1000, ease: [0.76, 0, 0.24, 1] },
          filter: { duration: 0.25, ease: "easeOut" },
        }}
        className="h-full w-full origin-center rounded-[inherit] transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}
