"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Spatial & Atmospheric Study",
    description:
      "Before cutting a single stem, we analyze the spatial volume, ceiling heights, concrete textures, and daylight shifts of your environment. Every flora composition is calculated as a site-specific architectural intervention.",
  },
  {
    number: "02",
    title: "Hyper-Local Wild Sourcing",
    description:
      "We source strictly from non-commercial organic growers and private woodlands across the Hudson Valley. We intentionally select imperfect, gnarly woody boughs, wind-bent branches, and ephemeral wild blossoms.",
  },
  {
    number: "03",
    title: "Ikebana Structural Assembly",
    description:
      "Anchored with heavy metal kenzan inside custom raw ceramic or carved stone basins, each composition balances negative space (Ma) with explosive tension. Every line carries purpose, silence, and sculptural balance.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const flowerParallaxY = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const flowerParallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.97]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-14 md:py-20 bg-black text-white relative overflow-hidden"
    >
      {/* UNCONTAINED FLOATING STRUCTURAL FLORAL ARTWORK WITH ORGANIC SCROLL PARALLAX (DESKTOP) */}
      <motion.div
        style={{ y: flowerParallaxY, scale: flowerParallaxScale }}
        className="hidden lg:flex absolute left-[38%] sm:left-[40%] md:left-[42%] -translate-x-1/2 top-6 sm:top-12 md:top-20 w-[98vw] sm:w-[92vw] md:w-[86vw] lg:w-[82vw] max-w-[1450px] z-0 pointer-events-none justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/process-flower.webp"
          alt="Architectural Ikebana floral sculpture"
          className="w-full h-auto object-contain object-center opacity-90 drop-shadow-[0_30px_70px_rgba(0,0,0,0.98)]"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-36 self-start h-fit space-y-4 sm:space-y-6 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/55 lg:to-transparent p-0 lg:p-7 rounded-2xl sm:rounded-3xl"
          >
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.98] sm:leading-[0.95] text-white">
              The Architecture<br />
              <span className="font-serif italic font-normal text-white/80">
                of Nature.
              </span>
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-md">
              Our process is a deliberate rejection of mass-market floristry. Every
              commission is treated as a site-specific architectural installation.
            </p>
          </motion.div>

          {/* Mobile/Tablet Dedicated Botanical Feature Showcase (Bold, Dramatic, Large-Scale Presentation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full flex items-center justify-center my-2 sm:my-4 overflow-visible"
          >
            <div className="relative w-full max-w-[540px] h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-visible">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/process-flower.webp"
                alt="Architectural Ikebana floral sculpture"
                className="w-[125vw] sm:w-[110vw] max-w-[600px] h-auto object-contain scale-140 sm:scale-135 drop-shadow-[0_30px_70px_rgba(0,0,0,0.98)]"
              />
            </div>
          </motion.div>

          {/* Right Column: Vertically Stacked Steps (Slides in from Right with Blueprint Stagger) */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-10 md:gap-14 pt-2 lg:pt-0">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.85, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pl-6 sm:pl-10 md:pl-14 border-l border-white/20 ${
                  idx % 2 !== 0 ? "lg:ml-10" : ""
                }`}
              >
                {/* Step Number Circle Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.1, type: "spring", stiffness: 350, damping: 22 }}
                  className="absolute top-2 -left-[14px] sm:-left-[18px] md:-left-[22px]"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-black border border-white/40 flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-mono text-white shadow-2xl">
                    {step.number}
                  </div>
                </motion.div>

                {/* Step Text: Clean & Crisp Typography */}
                <div className="space-y-2 sm:space-y-3 pt-0.5 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/50 lg:to-transparent p-1 sm:p-3 lg:p-6 rounded-xl sm:rounded-2xl">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight text-white font-normal">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
