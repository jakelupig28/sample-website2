"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, X, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Assemblages", href: "#assemblages" },
  { name: "Kinetics", href: "#kinetics" },
  { name: "Philosophy", href: "#process" },
  { name: "Archive", href: "#archive" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, items, isBagOpen, setIsBagOpen, setIsCommissionOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-black/90 py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Clean Brand Logo with White Outline Flower Icon */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white focus:outline-none"
          >
            {/* Four-Leaf Flower Icon in White Mid-Thick Outline */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white flex-shrink-0 transition-transform duration-500 group-hover:rotate-45"
            >
              <circle cx="12" cy="12" r="2" />
              {/* Four symmetrical petals: Top, Right, Bottom, Left */}
              <path d="M12 10 C 9.5 5, 9.5 2.5, 12 2.5 C 14.5 2.5, 14.5 5, 12 10 Z" />
              <path d="M14 12 C 19 9.5, 21.5 9.5, 21.5 12 C 21.5 14.5, 19 14.5, 14 12 Z" />
              <path d="M12 14 C 14.5 19, 14.5 21.5, 12 21.5 C 9.5 21.5, 9.5 19, 12 14 Z" />
              <path d="M10 12 C 5 14.5, 2.5 14.5, 2.5 12 C 2.5 9.5, 5 9.5, 10 12 Z" />
            </svg>

            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-xl md:text-2xl font-light tracking-tight group-hover:text-white/80 transition-colors duration-300">
                Aether<span className="text-white/70">.</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.25em] text-zinc-400">
                Botanica
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav Links with Reduced Text Size */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-300 group font-normal"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Pill CTA and Interactive Bag Badge */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              onClick={() => setIsCommissionOpen(true)}
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-sm"
            >
              Commission Piece
            </button>

            {/* Bag Button */}
            <button
              onClick={() => setIsBagOpen(!isBagOpen)}
              className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-white flex items-center justify-center group"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-white group-hover:text-white/80 transition-colors" />
              <motion.span
                key={cartCount}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white text-black text-[9px] font-bold flex items-center justify-center shadow-md"
              >
                {cartCount}
              </motion.span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] sm:top-[70px] z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 sm:px-8 py-6 sm:py-8 md:hidden flex flex-col space-y-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wide text-white hover:text-white/70 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCommissionOpen(true);
              }}
              className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] text-center"
            >
              Commission Piece
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart / Bag Drawer Modal */}
      <AnimatePresence>
        {isBagOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBagOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-black text-white border-l border-white/10 p-5 sm:p-8 z-50 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-baseline space-x-3">
                    <h3 className="font-serif text-2xl tracking-tight text-white">Your Bag</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      ({items.length} {items.length === 1 ? "Piece" : "Pieces"})
                    </span>
                  </div>
                  <button
                    onClick={() => setIsBagOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="mt-6 space-y-5 max-h-[58vh] overflow-y-auto pr-2">
                  {items.map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="flex gap-4 p-3 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all"
                    >
                      {item.image && (
                        <div className="w-16 h-20 rounded-lg bg-zinc-900 overflow-hidden flex-shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                            Botanical Assemblage
                          </p>
                          <h4 className="font-serif text-lg tracking-tight leading-snug text-white">
                            {item.name}
                          </h4>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-medium text-white">{item.price}</span>
                          <span className="text-[11px] text-zinc-400 uppercase tracking-wider">
                            Curated &amp; Packed
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Checkout area */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-sm text-zinc-400">
                  <span>Shipping &amp; White-Glove Courier</span>
                  <span className="text-white">Calculated next</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-xl text-white">Subtotal</span>
                  <span className="font-serif text-2xl text-white font-medium">
                    $
                    {items.reduce((acc, item) => {
                      const num = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
                      return acc + num;
                    }, 0)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    alert("White-glove checkout initialized for your curated botanical order.");
                    setIsBagOpen(false);
                  }}
                  className="w-full py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
                >
                  <span>Proceed to White-Glove Order</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[10px] text-center text-zinc-500 uppercase tracking-widest">
                  Fragile botanical transport guaranteed in climate-controlled vessels.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
