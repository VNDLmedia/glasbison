"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-sm"
        >
          <div className="bg-[#011d5a] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 text-white">
            <p className="text-sm font-light leading-relaxed mb-5 text-white/50">
              We use cookies to enhance your experience. By continuing you agree to our use of cookies.
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 py-2.5 rounded-full bg-[#e11d48] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#be123c] active:scale-95 transition-all"
              >
                Accept
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 py-2.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
