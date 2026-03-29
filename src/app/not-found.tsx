"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BisonLogo } from "@/components/BisonLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Background Bison */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
          <BisonLogo size={800} variant="white" />
        </div>

        <div className="relative z-10 text-center">
          <p className="label mb-8">Error 404</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-10 tracking-tight italic">
            Lost in<br />the Sound.
          </h1>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-md mx-auto mb-16 leading-relaxed">
            The page you are looking for has been moved, removed, or never existed in our catalog.
          </p>
          <Link 
            href="/" 
            className="btn btn-white !px-12 !py-6"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
