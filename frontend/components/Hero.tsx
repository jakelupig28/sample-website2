"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth, organic floating parallax for the uncontained flora
  const flowerY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const flowerRotate = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] min-h-[620px] w-full bg-black overflow-visible flex items-center pt-20 pb-6 md:pt-24 md:pb-8 z-10"
    >
      {/* Totally Solid Black Background with Clean Vignette */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
      </div>

      {/* UNCONTAINED FLOATING BOTANICAL FLORAL ARRANGEMENT (RESTORED BIG SIZE, MOVED DOWN, NEVER CUT) */}
      <div className="absolute top-[54%] sm:top-[56%] md:top-[58%] -translate-y-1/2 -right-4 sm:right-2 md:right-6 lg:right-10 xl:right-14 h-[96vh] sm:h-[105vh] md:h-[118vh] lg:h-[128vh] w-[90vw] sm:w-[82vw] md:w-[68vw] lg:w-[64vw] max-w-[1100px] flex items-center justify-center pointer-events-none z-10">
        <motion.div
          style={{ y: flowerY, rotate: flowerRotate }}
          initial={{ opacity: 0, scale: 1.1, rotate: -4 }}
          animate={{ opacity: 1, scale: 1.25, rotate: 0 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="relative h-full aspect-square origin-center pointer-events-auto cursor-pointer"
        >
          {/* Fully transparent alpha image that merges seamlessly into pure black without any cut at the bottom gap */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-flower-sculpture.webp"
            alt="Aether Botanica sculptural Ikebana floral arrangement"
            className="w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] brightness-100 transition-all duration-700 hover:brightness-110 hover:scale-[1.03]"
          />
        </motion.div>
      </div>

      {/* Main Grid Content: Text on Left with Smooth Blur-Glide Entrance */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -25, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.0, ease: luxuryEase }}
          style={{ y: textY, opacity: opacityFade }}
          className="md:col-span-8 lg:col-span-7 flex flex-col items-start pointer-events-auto space-y-4 sm:space-y-5 md:space-y-6"
        >
          {/* Headline: Sculptural Flora / Botanica for / Modern Spaces (only Modern Spaces is serif) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] font-bold tracking-tighter leading-[0.98] sm:leading-[0.95] text-white">
            <span className="block font-sans">Sculptural Flora</span>
            <span className="block font-sans">Botanica for</span>
            <span className="block font-serif italic font-normal text-white/70">
              Modern Spaces.
            </span>
          </h1>

          {/* Subcopy in soft silver / muted white */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 font-light max-w-lg leading-relaxed text-balance">
            Aether Botanica merges ancestral Ikebana discipline with contemporary
            brutalist forms. We forge living floral architecture using rare,
            sustainably foraged branches and seasonal botanical specimens.
          </p>

          {/* Dual CTAs: Responsive Stack on Mobile, Horizontal Row on Tablet/Desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3 w-full sm:w-auto">
            <a
              href="#assemblages"
              className="inline-flex items-center justify-center h-12 md:h-14 px-7 md:px-8 rounded-full bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 shadow-xl group text-center"
            >
              <span>Explore Assemblages</span>
              <ArrowDownRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </a>

            <a
              href="#manifesto"
              className="inline-flex items-center justify-center h-12 md:h-14 px-7 md:px-8 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-xs sm:text-sm font-medium tracking-tight transition-all duration-300 text-center"
            >
              <span>Our Manifesto</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
