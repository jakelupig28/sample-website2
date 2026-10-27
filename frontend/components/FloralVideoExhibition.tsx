"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface FloralVideo {
  id: string;
  angle: string;
  flowerName: string;
  classification: string;
  description: string;
  src: string;
  duration: string;
  shutter: string;
}

const floralAngles: FloralVideo[] = [
  {
    id: "angle-1",
    angle: "Angle 01 // Frontal Macro",
    flowerName: "Deep Carmine Rose",
    classification: "Botanical Bud Awakening",
    description:
      "Captured in pitch-black studio vaults. High-contrast time-lapse showcasing the architectural tension of velvety petals releasing and breathing.",
    src: "/videos/flower-rose-opening.webm",
    duration: "14s Time-Lapse",
    shutter: "f/2.8 · 100mm Macro",
  },
  {
    id: "angle-2",
    angle: "Angle 02 // Radial Canopy",
    flowerName: "Céleste Peony Monolith",
    classification: "Multi-Tier Petal Expansion",
    description:
      "Overhead geometric study of layered coral petals unfolding against pure black void. Illustrates the natural golden ratio spiral of living flora.",
    src: "/videos/flower-peony-blooming.webm",
    duration: "18s Time-Lapse",
    shutter: "f/4.0 · 85mm Prime",
  },
  {
    id: "angle-3",
    angle: "Angle 03 // Oblique Micro-Study",
    flowerName: "Aura Golden Blossom",
    classification: "Radial Stamen Architecture",
    description:
      "Extreme close-up perspective capturing delicate golden stamens and petal contours under directional architectural rim lighting.",
    src: "/videos/flower-blooming-macro.webm",
    duration: "15s Time-Lapse",
    shutter: "f/2.0 · 50mm Lens",
  },
];

export default function FloralVideoExhibition() {
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = floralAngles[activeAngleIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [activeAngleIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="kinetics" className="bg-black text-white py-12 md:py-16 px-5 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Title and Description with Smooth In-View Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 sm:pb-8 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-bold text-white">
              Flora in <span className="font-serif italic font-normal text-white/70">Motion.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            High-definition time-lapse studies capturing botanical specimens awakening in dark studio stillness from varying architectural angles.
          </p>
        </motion.div>

        {/* Angle Selector Tabs with Smooth In-View Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-6"
        >
          {floralAngles.map((item, idx) => {
            const isActive = idx === activeAngleIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveAngleIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border flex flex-col justify-center ${
                  isActive
                    ? "bg-zinc-900/90 border-white/40 shadow-xl"
                    : "bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/40"
                }`}
              >
                <div className="text-xs sm:text-sm font-medium text-white font-serif">{item.flowerName}</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5 sm:mt-1">{item.classification}</div>
              </button>
            );
          })}
        </motion.div>

        {/* Video Canvas Container with Cinematic Aperture Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, filter: "brightness(0.6) blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.35/1] max-h-[620px] shadow-2xl flex items-center justify-center isolate group"
        >
          
          <video
            ref={videoRef}
            src={activeVideo.src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center bg-black transition-opacity duration-500"
          />

          {/* Vignette Gradients for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none z-10" />

          {/* Description Overlay Bottom Left */}
          <div className="absolute bottom-3.5 sm:bottom-6 left-3.5 sm:left-6 z-20 max-w-sm sm:max-w-lg pointer-events-none pr-28 sm:pr-0">
            <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-normal mb-0.5 sm:mb-1">
              {activeVideo.flowerName}
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-zinc-300/90 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
              {activeVideo.description}
            </p>
          </div>

          {/* Controls Bottom Right */}
          <div className="absolute bottom-3.5 sm:bottom-6 right-3.5 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
              title={isPlaying ? "Pause video" : "Play video"}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
              title={isMuted ? "Unmute" : "Mute"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleFullscreen}
              className="p-3 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
              title="Fullscreen"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
