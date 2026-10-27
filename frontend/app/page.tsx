"use client";

import React from "react";
import { CartProvider } from "../context/CartContext";
import SmoothScroll from "../components/SmoothScroll";
import ScrollProgressBar from "../components/ScrollProgressBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CuratedShop from "../components/CuratedShop";
import ProcessSection from "../components/ProcessSection";
import ArchiveBento from "../components/ArchiveBento";
import FloralVideoExhibition from "../components/FloralVideoExhibition";
import Testimonials from "../components/Testimonials";
import EthosBanner from "../components/EthosBanner";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import CommissionModal from "../components/CommissionModal";
import ToastNotification from "../components/ToastNotification";

export default function Home() {
  return (
    <CartProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
          {/* Top Reading Progress Indicator */}
          <ScrollProgressBar />

          {/* Floating Glassmorphic Top Navigation */}
          <Navbar />

          {/* Main Content Sections with Distinct Appearing Transitions */}
          <main>
            {/* 1. Dark Botanical Hero with Parallax */}
            <Hero />

            {/* 2. Curated Assemblages Product Showcase (3D Tilt & Lift Transition) */}
            <CuratedShop />

            {/* 3. The Architecture of Nature (Split Blueprint Convergence Transition) */}
            <ProcessSection />

            {/* 4. Asymmetrical Category Bento Grid (Mosaic Zoom & Blur Focus Transition) */}
            <ArchiveBento />

            {/* 5. 4K Botanical Kinetics Video Exhibition (Cinematic Aperture Transition) */}
            <FloralVideoExhibition />

            {/* 6. Editorial Client Notes (Floating Parchment Wave Transition) */}
            <Testimonials />

            {/* 7. Parallax Ethos Manifesto Banner (Deep Void Blur Dissolution Transition) */}
            <EthosBanner />
          </main>

          {/* Very Bottom Part: Footer Region (Studio Archive Dispatch Card + 4-Column Directory) */}
          <div id="footer" className="relative z-20">
            {/* 8. Studio Archive Newsletter Card (Monolithic Card Rise Transition) */}
            <NewsletterSection />

            {/* 9. 4-Column Directory, Hours, Coordinates & Massive AETHER Watermark */}
            <Footer />
          </div>

          {/* Modals & Interactive Overlays */}
          <CommissionModal />
          <ToastNotification />
        </div>
      </SmoothScroll>
    </CartProvider>
  );
}
