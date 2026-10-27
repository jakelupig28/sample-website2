"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CommissionModal() {
  const { isCommissionOpen, setIsCommissionOpen } = useCart();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Spatial & Lobby Installation",
    timeline: "Within 3 Months",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsCommissionOpen(false);
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isCommissionOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCommissionOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-zinc-950 text-white border border-white/15 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCommissionOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-3xl font-light text-white">
                    Commission Request Received
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Our lead floral architect will review your spatial specifications
                    and respond within 48 studio hours with preliminary botanical ideas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-white/70" /> Private Patronage
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white">
                      Commission a Spatial Piece<span className="text-white/70">.</span>
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      Custom living or preserved architectural flora for private estates,
                      galleries, and radical ceremonies.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block">
                        Patron Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/30"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="e.g. marcus@atelier.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block">
                        Intervention Scope
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) =>
                          setFormState({ ...formState, projectType: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white"
                      >
                        <option>Spatial &amp; Lobby Installation</option>
                        <option>Avant-Garde Bridal Ceremony</option>
                        <option>Weekly Studio Rotation Subscription</option>
                        <option>Permanent Preserved Sculpture</option>
                        <option>Private Ikebana Masterclass</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block">
                        Estimated Timeline
                      </label>
                      <select
                        value={formState.timeline}
                        onChange={(e) =>
                          setFormState({ ...formState, timeline: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white"
                      >
                        <option>Immediate (Within 30 Days)</option>
                        <option>Within 3 Months</option>
                        <option>Autumn/Winter 2026</option>
                        <option>Spring 2027</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block">
                      Spatial Context &amp; Architectural Details
                    </label>
                    <textarea
                      rows={3}
                      value={formState.notes}
                      onChange={(e) =>
                        setFormState({ ...formState, notes: e.target.value })
                      }
                      placeholder="Describe the environment, ceiling heights, materials (concrete, basalt, glass), and atmospheric mood..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
                  >
                    Submit Spatial Commission Brief
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
