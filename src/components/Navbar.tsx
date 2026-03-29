"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../lib/constants";
import { BisonLogo, BisonWordmark } from "./BisonLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 will-change-transform ${
          isScrolled ? "mt-4 px-4" : "mt-0 px-6 py-6"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 w-full ${
            isScrolled
              ? "max-w-fit rounded-full px-6 py-3 bg-[#013DA6] shadow-[0_20px_50px_rgba(1,61,166,0.5)] border border-white/10"
              : "max-w-7xl px-0 py-0 bg-transparent border-transparent"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <div className="relative">
              <div className={`transition-all duration-500 ${isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-50 w-0"}`}>
                <BisonLogo size={32} variant="white" />
              </div>
              <div className={`transition-all duration-500 ${!isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 w-0 pointer-events-none"}`}>
                <BisonWordmark height={24} variant="white" />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 ml-8 mr-12 relative z-10">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 group ${
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-[1px]">
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-white/70 hover:text-white transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-[1px] bg-current transition-transform duration-300 origin-right ${isMobileMenuOpen ? "-rotate-45" : ""}`} />
              <span className={`w-full h-[1px] bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[1px] bg-current transition-transform duration-300 origin-right ${isMobileMenuOpen ? "rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#013DA6] flex flex-col justify-center items-center transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xl tracking-[0.2em] uppercase font-bold text-white transition-all duration-500 ${pathname === item.href ? 'opacity-100' : 'opacity-40'}`}
              style={{
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? (pathname === item.href ? 1 : 0.4) : 0,
                transitionDelay: `${i * 100}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-white mt-12 !px-12 !py-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
