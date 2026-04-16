"use client";

import TeleskopeLogo from "./TeleskopeLogo";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 md:px-10 py-10 overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] animate-pulse-glow"
        aria-hidden
      />

      {/* Top stamp */}
      <FadeIn className="relative z-10 w-full pt-4 md:pt-10">
        <p className="font-display uppercase tracking-stamp text-[10px] md:text-xs text-gold/80 text-center">
          A Teleskope Transmission · Est. 2026
        </p>
      </FadeIn>

      {/* Main Content Wrapper (Grows to take available space) */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 py-16">
        {/* Logo */}
        <FadeIn delay={120}>
          <TeleskopeLogo className="mb-12 md:mb-16" />
        </FadeIn>

        {/* Event headline */}
        <FadeIn delay={240} className="max-w-5xl w-full">
          <div className="text-center">
            <p className="font-body italic text-mute text-sm md:text-base mb-4 md:mb-6">
              AfrikanMission.com Pre-launch &amp; Rise African Rise Music Video Premiere:
            </p>

            <h1
              className="
                font-display font-extrabold uppercase
                text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tightest
                bg-clip-text text-transparent
                bg-[linear-gradient(to_right,#FFFFFF,#FFFFFF,rgba(212,175,55,0.8),#FFFFFF)]
                bg-[length:200%_auto] animate-shine
                mb-6 drop-shadow-lg
              "
            >
              Rise African Rise
            </h1>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-16 md:w-24 animate-pulse" aria-hidden />
              <div className="w-2 h-2 rounded-full bg-gold animate-ping" aria-hidden />
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-16 md:w-24 animate-pulse" aria-hidden />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 font-display uppercase tracking-stamp text-[10px] md:text-sm text-paper">
              <span className="hover:text-gold transition-colors duration-500 cursor-default">Addis Ababa</span>
              <span className="hidden sm:block text-gold/50">·</span>
              <span className="hover:text-gold transition-colors duration-500 cursor-default">Ethiopia</span>
              <span className="hidden sm:block text-gold/50">·</span>
              <span className="text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] mt-2 sm:mt-0">16 April 2026</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <FadeIn delay={600} className="relative z-10 pb-4">
        <div className="flex flex-col items-center gap-3">
          <span className="font-display uppercase tracking-stamp text-[10px] text-gold/70 animate-pulse">
            Scroll
          </span>
          <div className="h-10 border-l border-gold/40 flex overflow-hidden relative">
            <span
              className="absolute top-0 left-0 w-px h-full bg-gold animate-[fade-up_1.5s_infinite]"
              aria-hidden
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
