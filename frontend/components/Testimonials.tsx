"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  initials: string;
  role: string;
  organization: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Aether Botanica treats flora not as decoration, but as tension and spatial cadence. The suspended pine installation in our atrium fundamentally shifted how visitors navigate the gallery.",
    name: "Elena Rostova",
    initials: "ER",
    role: "Chief Curator",
    organization: "The Hudson Modern Art Institute",
    project: "Cantilevered Pine Installation",
  },
  {
    quote:
      "In twenty years designing residential architecture, I have never seen botanical specimens so attuned to brutalist poured concrete. Their weekly rotation arrives like living sculpture.",
    name: "Marcus Vance",
    initials: "MV",
    role: "Principal Architect",
    organization: "Vance + Atelier Architects",
    project: "Weekly Studio Rotations",
  },
  {
    quote:
      "Our wedding florals did not resemble traditional bouquets; they felt like dark, ethereal botanical poetry. Our guests are still speaking of the wild quince altar sculpture.",
    name: "Sora & Julian Chen",
    initials: "SC",
    role: "Private Clients",
    organization: "Rhinebeck Estate Ceremony",
    project: "Avant-Garde Bridal Commission",
  },
  {
    quote:
      "The precision of their Ikebana discipline brings an unprecedented stillness to our hotel lobby. It is the single most photographed architectural moment in our space.",
    name: "Kaelen Thorne",
    initials: "KT",
    role: "Creative Director",
    organization: "The Mercer Pavilion Hotel",
    project: "Lobby Monolith Assemblage",
  },
  {
    quote:
      "Their commitment to hyper-local wild foraging within 50 miles is genuine. Each arrangement tells an honest, uncompromising story of the seasonal Hudson Valley woods.",
    name: "Dr. Arthur Pendelton",
    initials: "AP",
    role: "Director of Conservation",
    organization: "Catskill Forest Botanical Trust",
    project: "Ethical Foraging Study",
  },
  {
    quote:
      "Attending the Ikebana Masterclass shifted my entire creative practice. The meditation on negative space ('Ma') and branch restraint is nothing short of transcendent.",
    name: "Camille Dupont",
    initials: "CD",
    role: "Industrial Ceramicist",
    organization: "Dupont Stoneware Studio",
    project: "Ikebana Masterclass Intensive",
  },
];

export default function Testimonials() {
  const cardRotations = [-3.5, 2.5, -2, 3, -2.5, 2];

  return (
    <section className="bg-black text-white py-12 md:py-16 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header with Smooth In-View Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-18"
        >
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-bold text-white">
            Notes from the <span className="font-serif italic font-normal text-white/70">Archive.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light px-4">
            Reflections from directors, architects, and private patrons living with
            Aether Botanica spatial assemblages.
          </p>
        </motion.div>

        {/* 3-Column Staggered Grid on Dark Surface with Floating Parchment Wave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 65,
                rotate: cardRotations[idx % cardRotations.length],
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                delay: (idx % 3) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl p-5 sm:p-7 md:p-8 bg-zinc-950 border border-white/10 shadow-2xl flex flex-col justify-between transition-all duration-500 hover:border-white/25 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            >
              <div>
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 mb-3.5 sm:mb-5" />
                <p className="font-serif text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-3.5 sm:gap-4">
                {/* Circular Monogram Initial */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 text-white font-serif font-medium text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  {t.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-xs sm:text-sm text-white truncate">
                    {t.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider truncate">
                    {t.role} · {t.organization}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-zinc-500 font-mono mt-0.5 truncate">
                    ↳ {t.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
