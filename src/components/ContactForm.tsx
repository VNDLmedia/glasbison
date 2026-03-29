"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

type Step = 1 | 2 | 3;

export function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    interest: "",
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep((s) => (s + 1) as Step);
  const prevStep = () => setStep((s) => (s - 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const options = [
    "Producer Management",
    "Songwriter Representation",
    "Placements / A&R",
    "Brand Partnerships",
    "General Inquiry",
  ];

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <div className="w-16 h-16 bg-[#013DA6] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-[#013DA6]/20">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-4xl md:text-5xl sans font-bold text-[#013DA6] mb-6 leading-none">Success.</h3>
        <p className="text-[#013DA6]/50 text-xl font-light max-w-sm mb-12">
          Your message has been sent. We will review it and get back to you shortly.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ interest: "", name: "", email: "", message: "" }); }}
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#013DA6]/30 hover:text-[#013DA6] transition-colors"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div>
                <p className="label !text-[#013DA6]/30 mb-4">Step 01 — Interest</p>
                <h3 className="text-4xl md:text-6xl sans font-bold text-[#013DA6] mb-12 tracking-tight leading-none">I am interested in...</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { setFormData({ ...formData, interest: opt }); nextStep(); }}
                      className={`group py-5 px-8 rounded-full border text-left transition-all font-sans ${
                        formData.interest === opt 
                          ? "bg-[#013DA6] border-[#013DA6] text-white shadow-xl shadow-[#013DA6]/20" 
                          : "bg-white border-[#013DA6]/10 text-[#013DA6] hover:border-[#013DA6] hover:bg-[#013DA6]/[0.02]"
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-widest">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div>
                <div className="flex justify-between items-end mb-4">
                  <p className="label !text-[#013DA6]/30">Step 02 — Personal</p>
                  <button onClick={prevStep} className="text-[10px] font-bold text-[#013DA6]/40 hover:text-[#013DA6] transition-colors uppercase tracking-widest">Back</button>
                </div>
                <h3 className="text-4xl md:text-6xl sans font-bold text-[#013DA6] mb-12 tracking-tight leading-none">My name is...</h3>
                <div className="space-y-12">
                  <div className="relative">
                    <input
                      required
                      autoFocus
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#013DA6]/10 focus:border-[#013DA6] transition-all py-6 text-2xl md:text-4xl text-[#013DA6] outline-none placeholder:text-[#013DA6]/5 font-sans font-light"
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#013DA6]/10 focus:border-[#013DA6] transition-all py-6 text-2xl md:text-4xl text-[#013DA6] outline-none placeholder:text-[#013DA6]/5 font-sans font-light"
                    />
                  </div>
                </div>
                <div className="mt-20">
                  <button 
                    type="button" 
                    disabled={!formData.name || !formData.email}
                    onClick={nextStep} 
                    className="w-full md:w-auto px-12 py-6 rounded-full bg-[#013DA6] text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:scale-105 active:scale-95 transition-all disabled:opacity-20 disabled:scale-100 shadow-2xl shadow-[#013DA6]/30 flex items-center justify-center gap-4"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div>
                <div className="flex justify-between items-end mb-4">
                  <p className="label !text-[#013DA6]/30">Step 03 — Message</p>
                  <button onClick={prevStep} className="text-[10px] font-black text-[#013DA6]/40 hover:text-[#013DA6] transition-colors uppercase tracking-widest">Back</button>
                </div>
                <h3 className="text-4xl md:text-6xl sans font-bold text-[#013DA6] mb-12 tracking-tight leading-none">How can we help?</h3>
                <div className="relative">
                  <textarea
                    required
                    autoFocus
                    rows={1}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                    className="w-full bg-transparent border-b-2 border-[#013DA6]/10 focus:border-[#013DA6] transition-all py-6 text-xl md:text-3xl text-[#013DA6] outline-none placeholder:text-[#013DA6]/5 resize-none font-sans font-light overflow-hidden min-h-[80px]"
                  />
                </div>
                <div className="mt-20">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-12 py-6 rounded-full bg-[#013DA6] text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#013DA6]/40 flex items-center justify-center gap-4"
                  >
                    Send Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
