"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ToastNotification() {
  const { toastMessage, clearToast, setIsBagOpen } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-4 bg-black/95 backdrop-blur-xl border border-white/20 text-white px-5 py-4 rounded-xl shadow-2xl max-w-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white leading-snug">
                {toastMessage}
              </p>
              <button
                onClick={() => {
                  clearToast();
                  setIsBagOpen(true);
                }}
                className="text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white transition-colors mt-1 inline-flex items-center gap-1 font-semibold"
              >
                <span>View Bag</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
