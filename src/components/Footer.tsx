"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT } from "../lib/constants";
import { BisonLogo, BisonSchriftzug } from "./BisonLogo";
import { SocialIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-[#013DA6] dot-grid pt-24 pb-8 z-10">
      {/* Schriftzug */}
      <div className="flex justify-center mb-20">
        <BisonSchriftzug height={28} className="opacity-15 md:hidden" />
        <BisonSchriftzug height={40} className="opacity-15 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 4/2/2/2/2 Grid auf md, gestackt auf mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Spalte 1: Info (col-span-4 auf md) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <BisonSchriftzug height={18} className="opacity-60" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Glass Bison is a Grammy-nominated music management company representing producers and songwriters with 70+ gold, platinum, and diamond certifications.
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label text-white/50 mb-2 font-bold">Navigate</span>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Social */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label text-white/50 mb-2 font-bold">Social</span>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all flex items-center gap-3 group">
                  <SocialIcon platform="instagram" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all flex items-center gap-3 group">
                  <SocialIcon platform="tiktok" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">TikTok</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-all flex items-center gap-3 group">
                  <SocialIcon platform="spotify" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">Spotify</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Legal */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label text-white/50 mb-2 font-bold">Legal</span>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/impressum" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 5: Contact */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label text-white/50 mb-2 font-bold">Contact</span>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm font-medium">{CONTACT.address.city}, DE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[10px] text-white/40 font-medium tracking-wide">
            © {new Date().getFullYear()} {CONTACT.company}. All rights reserved.
          </p>
          <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold">
            Music and Entertainment
          </p>
        </div>
      </div>
    </footer>
  );
}
