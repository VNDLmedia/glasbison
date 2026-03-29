"use client";

import React from "react";
import Image from "next/image";
import { Play, Pause, Music } from "lucide-react";
import { useMedia } from "@/context/MediaContext";

export function MediaNavbar() {
  const { isPlaying, setIsPlaying, currentRecord } = useMedia();

  return (
    <div className="fixed top-6 right-6 z-[60] hidden md:flex items-center">
      <div className="liquid-glass !rounded-full px-4 py-2 flex items-center gap-4 bg-white/5 border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:bg-white/10">
        
        {/* Album Art (Small) */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
          <Image
            src={currentRecord.coverUrl}
            alt={currentRecord.title}
            fill
            className={`object-cover transition-transform duration-700 ${isPlaying ? "animate-spin-slow" : ""}`}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying ? <Pause className="w-3 h-3 text-white fill-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col min-w-[120px]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              {isPlaying && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>}
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">Now Playing</span>
          </div>
          <div className="text-[11px] font-medium text-white truncate max-w-[180px]">
            {currentRecord.title} <span className="text-white/40 mx-1">·</span> {currentRecord.artist}
          </div>
        </div>

        {/* Play/Pause Button */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#013DA6] transition-transform active:scale-90 hover:scale-105"
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
