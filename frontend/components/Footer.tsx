"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-8 overflow-hidden relative">
      {/* Background Soft Floral Accent (Uncontained organic ambient bloom) */}
      <div className="absolute -bottom-1/4 -right-20 md:-right-48 w-[450px] md:w-[750px] h-[450px] md:h-[750px] pointer-events-none opacity-15 mix-blend-screen overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-accent.webp"
          alt="Ambient footer flower"
          className="w-full h-full object-contain blur-lg rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* 4-Column Architectural Directory Grid with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-7 sm:gap-10 md:gap-12 text-xs tracking-wider"
        >
          {/* Column 1: Atelier & Studio */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-white/90 font-semibold">
              Atelier &amp; Glasshouse
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-zinc-400 text-[11px] sm:text-xs">
              <li className="text-white font-medium">Hudson Valley Studio</li>
              <li>412 Old Forge Road</li>
              <li>Rhinebeck, NY 12572</li>
              <li className="pt-1.5 text-[9px] sm:text-[10px] font-mono text-zinc-400">
                41.9278° N, 73.9126° W
              </li>
            </ul>
          </div>

          {/* Column 2: Archives & Flora */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-white/90 font-semibold">
              Assemblages
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-zinc-400 text-[11px] sm:text-xs">
              <li>
                <a href="#assemblages" className="hover:text-white transition-colors">
                  Seasonal Living Archive
                </a>
              </li>
              <li>
                <a href="#assemblages" className="hover:text-white transition-colors">
                  Stoneware Ikebana
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Permanent Preserved Stems
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Bespoke Bridal Monoliths
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Inquiries & Commissions */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-white/90 font-semibold">
              Patron Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-zinc-400 text-[11px] sm:text-xs">
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Spatial Volumetric Study
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Institutional Rotations
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Private Ikebana Intensive
                </a>
              </li>
              <li className="truncate">
                <span className="text-white font-medium text-[10px] sm:text-xs">commissions@aetherbotanica.studio</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Heritage */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-white/90 font-semibold">
              Atelier Hours
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-zinc-400 text-[11px] sm:text-xs">
              <li>Thursday &mdash; Sunday: 10 &mdash; 18</li>
              <li>Monday &mdash; Wednesday: Foraging</li>
              <li className="pt-1.5 text-[9px] sm:text-[10px] text-zinc-400 uppercase font-semibold">
                Private viewing by appointment
              </li>
              <li className="text-[10px] text-zinc-500">
                &copy; {new Date().getFullYear()} Aether Botanica LLC.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Massive Edge-to-Edge Architectural Watermark with Tracking Expansion Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 40, letterSpacing: "0.12em" }}
        whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full overflow-hidden select-none pointer-events-none mt-10 sm:mt-14 pt-2 sm:pt-4"
      >
        <h2 className="text-[16vw] sm:text-[15.5vw] font-serif leading-none tracking-tighter text-center text-white/[0.04] whitespace-nowrap uppercase">
          AETHER
        </h2>
      </motion.div>

      {/* Developed by attribution */}
      <div className="relative z-10 w-full min-h-[64px] flex items-center justify-center text-center border-t border-white/10 mt-8 pt-6 pb-2 px-4">
        <p className="text-xs sm:text-sm tracking-widest text-zinc-400">
          Developed by: Jake Lupig
        </p>
      </div>
    </footer>
  );
}
