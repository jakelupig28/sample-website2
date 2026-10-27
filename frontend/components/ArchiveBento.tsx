"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Building2, Calendar, Compass, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  colSpan: string;
  aspect: string;
  image: string;
  scope: string;
  materials: string;
  leadTime: string;
  curation: string;
  environments: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "bento-1",
    title: "Avant-Garde Bridal",
    subtitle: "Custom Architectural Florals for Radical Ceremonies",
    description:
      "Sculptural bouquets and monumental altar installations designed with living branches, bleeding hearts, and rare cascading orchids.",
    colSpan: "lg:col-span-7",
    aspect: "min-h-[360px] sm:min-h-[420px]",
    image: "/images/bento-bridal-dark.jpg",
    scope: "Site-specific altar architecture, suspended floral arches, bespoke bridal carry sculptures, and floral dinner scenography.",
    materials: "Sustainably foraged mountain branches, Phalaenopsis orchids, Anthuriums, and wild weeping moss.",
    leadTime: "6–12 Weeks prior to ceremony date",
    curation: "Every ceremony commission begins with an architectural site survey and bespoke floral maquette.",
    environments: "Brutalist chapels, private villas, modern art foundations, and remote dramatic landscapes.",
  },
  {
    id: "bento-2",
    title: "Weekly Studio Rotations",
    subtitle: "Living Architecture Subscriptions",
    description:
      "Curated weekly seasonal floral interventions for galleries, boutique hotels, architectural residences, and executive offices.",
    colSpan: "lg:col-span-5",
    aspect: "min-h-[360px] sm:min-h-[420px]",
    image: "/images/bento-rotations-dark.jpg",
    scope: "Rotating weekly or bi-weekly fresh living botanical sculptures paired with handcrafted ceramic and basalt vessels.",
    materials: "Seasonal micro-batch botanicals, architectural boughs, and studio ceramic artifacts rotated weekly.",
    leadTime: "Subscriptions initiated within 5 business days",
    curation: "White-glove dawn installation by our floral architectural team with discreet maintenance throughout the week.",
    environments: "Contemporary galleries, boutique design hotels, Michelin-starred spaces, and private residences.",
  },
  {
    id: "bento-3",
    title: "Preserved & Dried Sculptures",
    subtitle: "Perpetual Archival Flora",
    description:
      "Specimens naturally desaturated and air-cured in dark vaults. Enduring botanical art that lasts years without water.",
    colSpan: "lg:col-span-4",
    aspect: "min-h-[340px]",
    image: "/images/bento-preserved-dried-dark.jpg",
    scope: "Permanent, zero-maintenance archival sculptures engineered for permanent architectural display without water or sunlight requirements.",
    materials: "Desaturated lunaria honesty pods, wild teasel thistle, smoked lotus pods, and raw chiseled basalt plinths.",
    leadTime: "Ships in 3–5 business days or 3 weeks for bespoke scale",
    curation: "Botanicals are harvested at seasonal maturity and preserved using ancestral dehydration in darkness.",
    environments: "Corporate headquarters, dimly lit residential libraries, wine cellars, and luxury yachts.",
  },
  {
    id: "bento-4",
    title: "Spatial & Lobby Installations",
    subtitle: "Suspended & Monolithic Flora",
    description:
      "Monumental suspended clouds of dried bracken, twisted wisteria vines, and cantilevered blooms for public atriums.",
    colSpan: "lg:col-span-4",
    aspect: "min-h-[340px]",
    image: "/images/bento-spatial-installations-dark.jpg",
    scope: "Large-scale suspended botanical clouds, towering foyer plinths, and permanent ceiling installations.",
    materials: "Tensile aircraft steel cabling, preserved wisteria armatures, dried bracken fern, and architectural blooms.",
    leadTime: "4–8 Weeks including structural engineering and rigging approval",
    curation: "Collaborative process with building architects, interior designers, and institutional curators.",
    environments: "Corporate lobbies, luxury flagships, museum atriums, and multi-story residential towers.",
  },
  {
    id: "bento-5",
    title: "Ikebana Masterclasses",
    subtitle: "Contemplative Studio Immersion",
    description:
      "Private intensive masterclasses exploring the philosophical foundations of Sogetsu Ikebana, kenzan balance, and negative space.",
    colSpan: "lg:col-span-4",
    aspect: "min-h-[340px]",
    image: "/images/bento-masterclass-dark.jpg",
    scope: "Single-day or multi-day intensive studio workshops limited to 6 participants per session.",
    materials: "Heavy brass kenzan frog, Japanese carbon-steel pruning shears, raw stoneware vessel, and rare seasonal stems.",
    leadTime: "Classes held bi-monthly; advance studio registration required",
    curation: "Guided by certified Sogetsu Masters with hands-on philosophical critique and botanical taxonomy.",
    environments: "Aether Botanica Private Studio, Kyoto sister pavilion, or on-site corporate retreat suites.",
  },
];

export default function ArchiveBento() {
  const [selectedBento, setSelectedBento] = useState<BentoItem | null>(null);
  const { setIsCommissionOpen } = useCart();

  // Escape key listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedBento(null);
      }
    };

    if (selectedBento) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBento]);

  return (
    <section id="archive" className="bg-black text-white py-12 md:py-16 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header with Smooth In-View Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-bold text-white">
              Archive &amp; <span className="font-serif italic font-normal text-white/70">Practices.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            From temporary runway florals to permanent museum lobby monoliths, each
            discipline is executed with uncompromising architectural standards.
          </p>
        </motion.div>

        {/* 12-Column Responsive Bento Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)", y: 45 }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedBento(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10 hover:border-white/30 bg-zinc-950 ${item.colSpan} ${item.aspect} flex flex-col justify-between p-5 sm:p-7 md:p-8 transition-all duration-500`}
            >
              {/* Background Photographic Image with Subtle Zoom on Hover */}
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center brightness-[0.70] contrast-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>

              {/* Shifting Dark Gradient Overlay for Maximum Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Top Row: Rotating ArrowUpRight */}
              <div className="relative z-10 flex items-center justify-end">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45" />
                </div>
              </div>

              {/* Bottom Content: Title & Secondary Description */}
              <div className="relative z-10 space-y-1.5 sm:space-y-2">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[2rem] text-white font-normal tracking-tight">
                  {item.title}
                </h3>

                {/* Secondary Description */}
                <div className="grid grid-rows-[1fr] sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="overflow-hidden">
                    <p className="pt-1.5 sm:pt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BIG INFORMATIONAL CONTAINER / ARCHIVE PRACTICE MODAL */}
      <AnimatePresence>
        {selectedBento && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedBento(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Big Modal Container (Increased Height, Strictly No Scroll on Desktop, Touch-Adaptive on Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden my-auto z-10 max-h-[92vh] md:h-[570px] flex flex-col md:flex-row no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBento(null)}
                aria-label="Close details"
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-white hover:text-black text-white/90 border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Adaptive Image Display for Mobile, Tablet, and Desktop */}
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full relative bg-black overflow-hidden flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                {/* Upper Left Corner: Practice Subtitle */}
                <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20 pointer-events-none">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/90 font-medium bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                    {selectedBento.subtitle}
                  </span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedBento.image}
                  alt={selectedBento.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Right Column: In-Depth Practice Information (Comfortable Breathing Room, Generous Bottom Margin) */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-9 pb-8 sm:pb-9 md:pb-10 flex flex-col justify-between overflow-hidden no-scrollbar">
                <div className="space-y-4 sm:space-y-5">
                  <div className="pr-12 sm:pr-14">
                    <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-tight">
                      {selectedBento.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {selectedBento.description}
                  </p>

                  {/* Clean Specifications Rows - Pure Whitespace, No Lines */}
                  <div className="pt-2 space-y-3 text-xs sm:text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-zinc-500 font-light">Scope</span>
                      <span className="text-zinc-200 text-right font-light">{selectedBento.scope}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-zinc-500 font-light">Materials</span>
                      <span className="text-zinc-200 text-right font-light">{selectedBento.materials}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-zinc-500 font-light">Lead Time</span>
                      <span className="text-zinc-200 text-right font-light">{selectedBento.leadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Actions Bar (Generous Breathing Room from Bottom Edge) */}
                <div className="pt-6 mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedBento(null);
                      setIsCommissionOpen(true);
                    }}
                    className="flex-1 py-3.5 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-xl text-center"
                  >
                    Commission Installation
                  </button>
                  <button
                    onClick={() => setSelectedBento(null)}
                    className="py-3.5 px-5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
