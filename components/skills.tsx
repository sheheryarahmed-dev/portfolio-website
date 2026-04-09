"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Helper categories for fallback when skillsData is a flat string[]
const CATEGORIES = [
  { title: "Backend Development", icon: "🚀", count: 7 },
  { title: "Databases & Data", icon: "🗄️", count: 5 },
  { title: "Caching & Security", icon: "⚡", count: 7 },
  { title: "Frontend & Design", icon: "🎨", count: 4 },
  { title: "DevOps & Tools", icon: "☁️", count: 16 },
];

type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
  description?: string;
};

const SkillCard = ({
  category,
  position,
  isMobile,
}: {
  category: SkillCategory;
  position: number;
  isMobile: boolean;
}) => {
  const isCenter = position === 0;
  
  return (
    <motion.div
      initial={false}
      animate={{
        x: isMobile ? 0 : position * 340,
        scale: isCenter ? 1 : isMobile ? 0.98 : 0.88,
        rotateY: isMobile ? 0 : position * -24,
        z: isMobile ? 0 : isCenter ? 0 : -140,
        opacity: isCenter ? 1 : isMobile ? 0 : 0.3,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`${isMobile ? 'relative' : 'absolute'} w-full max-w-[42rem] md:max-w-[420px] min-h-0 md:min-h-[560px] p-5 md:p-8 rounded-2xl border transition-colors duration-500 flex flex-col
        ${isCenter 
          ? 'bg-slate-900/90 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-2xl' 
          : 'bg-slate-900/40 border-slate-800/50 backdrop-blur-md'
        } text-white`}
      style={{ transformStyle: isMobile ? "flat" : "preserve-3d" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">{category.icon}</span>
        <h3 className="text-base md:text-xl leading-tight font-bold tracking-wide uppercase bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent break-words">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar min-h-0 max-h-[48vh] md:max-h-none">
        {category.skills.map((skill: string) => (
          <div key={skill} className="group flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isCenter ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-slate-600'}`} />
            <span className={`text-sm font-medium transition-colors ${isCenter ? 'text-slate-200' : 'text-slate-500'}`}>
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative Corner Element */}
      {isCenter && (
        <div className="absolute bottom-4 right-4 opacity-20">
            <div className="w-12 h-12 border-r-2 border-b-2 border-blue-500 rounded-br-lg" />
        </div>
      )}
    </motion.div>
  );
};

export default function SkillsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Normalize skillsData: supports both
  // 1) flat string[]
  // 2) categorized object[]: { category, icon, description?, skills: string[] }
  const groupedSkills = useMemo<SkillCategory[]>(() => {
    const firstItem = skillsData?.[0] as unknown;

    if (
      firstItem &&
      typeof firstItem === "object" &&
      "category" in (firstItem as Record<string, unknown>) &&
      "skills" in (firstItem as Record<string, unknown>)
    ) {
      return (skillsData as Array<{
        category: string;
        icon?: string;
        description?: string;
        skills: unknown[];
      }>).map((item) => ({
        title: item.category,
        icon: item.icon ?? "✨",
        description: item.description,
        skills: Array.isArray(item.skills)
          ? item.skills.map((s) => String(s))
          : [],
      }));
    }

    let currentPos = 0;
    return CATEGORIES.map((cat) => {
      const slice = (skillsData as unknown as string[]).slice(
        currentPos,
        currentPos + cat.count
      );
      currentPos += cat.count;
      return { ...cat, skills: slice };
    });
  }, []);

  const next = () => setActiveIdx((prev) => (prev + 1) % groupedSkills.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + groupedSkills.length) % groupedSkills.length);

  return (
    <section className="relative w-full min-h-screen py-16 md:py-20 overflow-x-clip flex flex-col items-center justify-center">

      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-12 md:mb-24 tracking-tighter"
      >
        My Skills
      </motion.h2>

      <div className={`relative w-full max-w-[42rem] md:max-w-7xl ${isMobile ? 'h-auto' : 'h-[680px]'} flex items-center justify-center ${isMobile ? '' : '[perspective:2200px]'} px-0 md:px-6`}>
        {/* Navigation Controls */}
        <div className={`absolute inset-x-0 ${isMobile ? 'top-[84%]' : 'top-1/2 -translate-y-1/2'} flex justify-between px-2 md:px-4 z-50 pointer-events-none`}>
          <button 
            onClick={prev} 
            className="pointer-events-auto p-3 md:p-4 rounded-full bg-slate-900/50 border border-white/10 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all backdrop-blur-md group"
          >
            <ChevronLeft size={isMobile ? 24 : 32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={next} 
            className="pointer-events-auto p-3 md:p-4 rounded-full bg-slate-900/50 border border-white/10 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all backdrop-blur-md group"
          >
            <ChevronRight size={isMobile ? 24 : 32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Deck */}
        <div className={`relative w-full ${isMobile ? 'min-h-[520px]' : 'h-full'} flex items-center justify-center ${isMobile ? '' : '[transform-style:preserve-3d]'} overflow-visible`}>
          <AnimatePresence mode="popLayout">
            {groupedSkills.map((cat, index) => {
              let position = index - activeIdx;
              
              // Infinite loop logic
              if (position < -1) position += groupedSkills.length;
              if (position > 1) position -= groupedSkills.length;

              // On mobile, render only the active card to avoid squeezed/clipped layout.
              if (isMobile && position !== 0) return null;

              // On desktop, only render the 3 visible cards.
              if (position < -1 || position > 1) return null;

              return (
                <SkillCard 
                  key={cat.title} 
                  category={cat} 
                  position={position}
                  isMobile={isMobile}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern page indicator dots */}
      <div className="mt-12 flex gap-3">
        {groupedSkills.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
          />
        ))}
      </div>
    </section>
  );
}