"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const tapestryY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section ref={sectionRef} className="bg-black text-white pt-8 pb-6 md:pt-12 md:pb-8 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Monolithic Pedestal Rise Card with Greenhouse Zoom Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 75, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden isolate shadow-2xl border border-white/10"
        >
          {/* Authentic Lush Botanical Floral Tapestry Background with Counter-Zoom */}
          <motion.div
            style={{ y: tapestryY }}
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -inset-8 z-0 pointer-events-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/newsletter-botanical-tapestry.jpg"
              alt="Lush dark botanical flora tapestry"
              className="w-full h-full object-cover brightness-90 contrast-105"
            />
          </motion.div>

          {/* Deep Dark Vignette Overlay for Crisp Typography Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-0 pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center w-full">
            {/* Eyebrow */}
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-medium mb-2.5 sm:mb-3">
              Editorial Correspondence
            </span>

            {/* Title in Pure White */}
            <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4 text-balance">
              Join the Studio Dispatch.
            </h2>

            {/* Subcopy */}
            <p className="text-xs sm:text-base md:text-lg text-white/80 font-light max-w-[44ch] mb-6 sm:mb-10 leading-relaxed text-balance">
              Bi-monthly notes on seasonal Hudson foraging, Ikebana exhibitions,
              limited stoneware vessel releases, and private commission windows.
            </p>

            {/* Interactive Pill Form: Stacks cleanly on Mobile, Inset on Tablet/Desktop */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-black/60 backdrop-blur-md border border-white/40 text-white"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-medium">
                  You are inscribed into the Studio Dispatch. Welcome.
                </span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 sm:gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your patron email address..."
                  className="flex-1 bg-black/50 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 rounded-full px-5 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all h-12 sm:h-14 text-xs sm:text-sm font-light w-full"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to archive"
                  className="h-12 sm:h-14 px-7 sm:px-8 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm tracking-tight flex items-center justify-center gap-2 transition-all duration-300 shadow-xl group flex-shrink-0 w-full sm:w-auto"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}

            {/* Footnote */}
            <p className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-[0.2em] mt-5 sm:mt-6">
              Privately managed archive. Never shared, zero commercial spam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
