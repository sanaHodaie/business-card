import React from 'react';

export const BackgroundGlassScene = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Refined luminous and airy gradient base - lighter, joyful, modern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/85 via-[#1e40af]/70 to-[#312e81]/80" />

      {/* Radiant ambient glow orbs with vibrant, cheerful light diffusion */}
      {/* Top right warm sunbeam / peach & amber glow */}
      <div className="absolute -top-16 -right-16 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-amber-300/45 via-rose-400/35 to-pink-500/20 blur-[130px] pointer-events-none" />

      {/* Bottom left luminous sky blue & turquoise glow */}
      <div className="absolute -bottom-20 -left-16 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-sky-400/50 via-cyan-400/35 to-blue-600/20 blur-[140px] pointer-events-none" />

      {/* Center radiant aura - illuminates the glass card from behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/25 via-indigo-300/30 to-purple-400/25 blur-[160px] pointer-events-none" />

      {/* Cheerful emerald-mint accent glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-emerald-400/30 via-teal-300/25 to-transparent blur-[120px] pointer-events-none" />

      {/* Geometric Constellation / Cloud Mesh Network */}
      <svg
        className="absolute inset-0 w-full h-full opacity-45 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="meshLineGradVibrant" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#a5b4fc" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#fdba74" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.65" />
          </linearGradient>
          <filter id="glowFilterLight">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic network lines */}
        <g stroke="url(#meshLineGradVibrant)" strokeWidth="1.3" fill="none">
          <line x1="12%" y1="18%" x2="32%" y2="28%" />
          <line x1="32%" y1="28%" x2="52%" y2="16%" />
          <line x1="52%" y1="16%" x2="68%" y2="32%" />
          <line x1="68%" y1="32%" x2="88%" y2="22%" />
          <line x1="32%" y1="28%" x2="26%" y2="56%" />
          <line x1="52%" y1="16%" x2="70%" y2="60%" />
          <line x1="26%" y1="56%" x2="44%" y2="68%" />
          <line x1="44%" y1="68%" x2="70%" y2="60%" />
          <line x1="70%" y1="60%" x2="86%" y2="76%" />
          <line x1="68%" y1="32%" x2="92%" y2="58%" />
          <line x1="12%" y1="18%" x2="14%" y2="78%" />
          <line x1="14%" y1="78%" x2="44%" y2="68%" />
        </g>

        {/* Cheerful nodes */}
        <g opacity="1">
          <circle cx="12%" cy="18%" r="3.5" fill="#38bdf8" />
          <circle cx="32%" cy="28%" r="5" filter="url(#glowFilterLight)" fill="#fbbf24" />
          <circle cx="52%" cy="16%" r="4" fill="#fb7185" />
          <circle cx="68%" cy="32%" r="5" filter="url(#glowFilterLight)" fill="#38bdf8" />
          <circle cx="88%" cy="22%" r="4" fill="#c084fc" />
          <circle cx="26%" cy="56%" r="4" fill="#34d399" />
          <circle cx="44%" cy="68%" r="5.5" filter="url(#glowFilterLight)" fill="#f97316" />
          <circle cx="70%" cy="60%" r="5" fill="#38bdf8" />
          <circle cx="86%" cy="76%" r="4" fill="#fbbf24" />
          <circle cx="14%" cy="78%" r="3.5" fill="#a5b4fc" />
          <circle cx="92%" cy="58%" r="4" fill="#34d399" />
        </g>
      </svg>

      {/* Floating Glass Spheres with Crystal Luster and Specular Sheen */}
      <div 
        className="absolute top-12 right-[10%] w-36 h-36 rounded-full glass-sphere-vibrant animate-float-slow hidden sm:block"
      >
        <div className="absolute top-3 left-6 w-10 h-5 rounded-full bg-white/80 blur-[1px] rotate-[-25deg]" />
        <div className="absolute bottom-3 right-5 w-14 h-9 rounded-full bg-amber-400/40 blur-md" />
      </div>

      <div 
        className="absolute bottom-12 left-[8%] w-48 h-48 rounded-full glass-sphere-vibrant animate-float-delayed hidden sm:block"
      >
        <div className="absolute top-6 left-8 w-14 h-7 rounded-full bg-white/85 blur-[2px] rotate-[-20deg]" />
        <div className="absolute bottom-5 inset-x-8 h-12 rounded-full bg-rose-500/40 blur-lg" />
      </div>

      <div className="absolute top-[28%] left-[12%] w-14 h-14 rounded-full glass-sphere-vibrant animate-float-reverse opacity-80 hidden lg:block" />
      <div className="absolute bottom-[22%] right-[16%] w-20 h-20 rounded-full warm-sphere-vibrant animate-float-slow opacity-85 hidden lg:block" />

      {/* Light glass frost blur */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
};
