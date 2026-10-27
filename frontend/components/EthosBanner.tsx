"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EthosBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const flowerScale = useTransform(scrollYProgress, [0, 1], [0.94, 1.06]);
  const flowerY = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  const flowerOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.32, 0.18]);

  return (
    <section
      id="manifesto"
      ref={bannerRef}
      className="relative min-h-[48vh] md:min-h-[56vh] w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center py-14 md:py-20 px-6 md:px-12"
    >
      {/* UNCONTAINED FLOATING FLORAL ARTWORK WITH ORGANIC SCROLL RESPONSE */}
      <motion.div
        style={{ scale: flowerScale, y: flowerY, opacity: flowerOpacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/manifesto-flower.webp"
          alt="Botanical floral ethos"
          className="w-[95%] sm:w-[85%] md:w-[70%] max-w-5xl h-auto object-contain brightness-90 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black pointer-events-none" />
      </motion.div>

      {/* Centered Minimalist Manifesto Quote with Deep Blur Dissolution Entrance */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-2 sm:px-4">
        <motion.blockquote
          initial={{ opacity: 0, filter: "blur(14px)", scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] tracking-tight leading-snug sm:leading-[1.25] font-light text-white [text-shadow:_0_2px_16px_rgba(0,0,0,1),_0_4px_32px_rgba(0,0,0,1)] text-balance"
        >
          &ldquo;We believe flowers should not cross oceans in plastic crates. We cut
          only what has felt the same Hudson frost and Hudson fog as our own hands.&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
