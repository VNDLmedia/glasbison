"use client";

import React, { useRef, useEffect } from 'react';
import { SkipBack, SkipForward, Play, Pause } from 'lucide-react';
import { useMedia, RECORDS } from '@/context/MediaContext';

export function VinylCarousel() {
  const { isPlaying, setIsPlaying, activeIndex, setActiveIndex, nextRecord, prevRecord } = useMedia();
  
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStartX = useRef<number | null>(null);
  const dragHasMoved = useRef(false);
  const lastOffsets = useRef<Record<number, number>>({});

  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    setIsPlaying(false);
    dragStartX.current = e.clientX;
    dragHasMoved.current = false;
    setIsDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 5) dragHasMoved.current = true;
    setDragOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    if (dragOffset > 75) prevRecord();
    else if (dragOffset < -75) nextRecord();
    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
    if (e.pointerId) (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const getCardStyle = (index: number, recordId: number): React.CSSProperties => {
    const total = RECORDS.length;
    let offset = index - activeIndex;
    while (offset > total / 2) offset -= total;
    while (offset < -total / 2) offset += total;

    let isTeleporting = false;
    const prevOffset = lastOffsets.current[recordId];
    if (prevOffset !== undefined && !isDragging) {
      if (Math.abs(prevOffset - offset) > total / 2 - 1) isTeleporting = true;
    }
    lastOffsets.current[recordId] = offset;

    const dragProgress = isDragging ? dragOffset / 300 : 0;
    const activeOffset = offset + dragProgress;

    let translateX = 0, translateY = 0, scale = 1, opacity = 1, zIndex = 100;

    if (activeOffset < 0) {
      const progress = Math.min(1, Math.abs(activeOffset));
      translateX = -progress * 60;  
      translateY = progress * 40;   
      scale = 1 + progress * 0.1;  
      opacity = 1 - progress * 1.5; 
      zIndex = 100 + Math.round(progress * 10); 
    } else {
      translateX = activeOffset * 30; 
      translateY = activeOffset * -20;
      scale = Math.max(0, 1 - activeOffset * 0.08);
      opacity = Math.max(0, 1 - activeOffset * 0.25);
      zIndex = 100 - Math.round(activeOffset * 10); 
    }

    const transitionTiming = 'cubic-bezier(0.175, 0.885, 0.32, 1.1)'; 
    const transitionRule = isDragging || isTeleporting ? 'none' : `transform 0.8s ${transitionTiming}, opacity 0.8s ease`;

    return {
      transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
      opacity: Math.max(0, opacity),
      zIndex,
      transition: transitionRule,
      willChange: 'transform, opacity',
      pointerEvents: Math.abs(activeOffset) > 2 ? 'none' : 'auto'
    };
  };

  return (
    <div
      ref={containerRef}
      className="w-full relative text-white font-sans overflow-hidden py-12"
    >
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* Main Content - 2 SPALTEN GRID */}
      <main 
        className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center relative cursor-grab active:cursor-grabbing touch-none z-10"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Background Ambient Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] rounded-full blur-[150px] opacity-20 transition-colors duration-1000 pointer-events-none" 
          style={{ backgroundColor: RECORDS[activeIndex].color }} 
        />

        {/* SPALTE 1: Steuerung (Links) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <div key={activeIndex} className="animate-fade-slide">
            <div className="mb-6 inline-block px-4 py-1.5 border border-white/10 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] bg-white/5 backdrop-blur-md">
              {RECORDS[activeIndex].genre}
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-3 tracking-tight text-white drop-shadow-lg font-display">
              {RECORDS[activeIndex].title}
            </h2>
            <p className="text-lg md:text-xl text-white/40 font-light mb-8">
              {RECORDS[activeIndex].artist}
            </p>
          </div>
          
          <div className="flex gap-5 items-center">
            <button onClick={() => { setIsPlaying(false); prevRecord(); }} className="p-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm">
              <SkipBack className="w-5 h-5 text-white/60 group-hover:text-white" />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="p-7 rounded-full bg-white text-[#013DA6] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center">
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-[#013DA6]" />
              ) : (
                <Play className="w-7 h-7 fill-[#013DA6]" />
              )}
            </button>
            <button onClick={() => { setIsPlaying(false); nextRecord(); }} className="p-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm">
              <SkipForward className="w-5 h-5 text-white/60 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* SPALTE 2: Platten (Rechts) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[250px] md:max-w-[320px] lg:max-w-[420px] aspect-square mx-auto">
            {RECORDS.map((record, index) => {
              const isActive = index === activeIndex && !isDragging;
              return (
                <div
                  key={record.id}
                  className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                  style={getCardStyle(index, record.id)}
                  onClick={(e) => {
                    if (dragHasMoved.current) { e.preventDefault(); return; }
                    setIsPlaying(false);
                    if (index !== activeIndex) setActiveIndex(index);
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 mix-blend-overlay z-10 pointer-events-none" />
                    <img src={record.coverUrl} alt={record.title} className="w-full h-full object-cover" />
                    {!isActive && (
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Progress Indicator */}
      <div className="mt-10 lg:mt-20 flex justify-center gap-2 z-10">
        {RECORDS.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => { setIsPlaying(false); setActiveIndex(idx); }}
            className={`h-1 rounded-full transition-all duration-700 ${idx === activeIndex ? 'w-12 bg-white' : 'w-3 bg-white/10 hover:bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}

// Added missing useState import
import { useState } from 'react';
