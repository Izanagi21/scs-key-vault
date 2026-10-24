"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// A single, restrained hero entrance. Content remains visible without JavaScript.
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false}
    animate={reduced ? { y: 0 } : { y: [8, 0] }}
    transition={{ duration: 0.65, ease: "easeOut" }}>{children}</motion.div>;
}
