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
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-[#013DA6]/10 text-[#013DA6]">
            <h4 className="font-display text-xl mb-3">Transparency.</h4>
            <p className="text-sm font-light leading-relaxed mb-6 opacity-60">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={accept}
                className="flex-1 py-3 rounded-full bg-[#013DA6] text-white text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 py-3 rounded-full border border-[#013DA6]/10 text-[10px] font-bold uppercase tracking-widest hover:bg-[#013DA6]/5 transition-all"
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
