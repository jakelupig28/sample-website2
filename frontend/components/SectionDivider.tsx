"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none select-none py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent origin-center"
      />
    </div>
  );
}
