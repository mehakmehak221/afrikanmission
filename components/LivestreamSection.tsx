"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function LivestreamSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-surface flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_60%)] animate-pulse-glow" aria-hidden />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-12 text-center">
        
        {/* Image */}
        <FadeIn className="w-full">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/30 to-gold/10 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow" aria-hidden />
            <div className="relative overflow-hidden rounded-sm border border-gold/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]">
              <Image 
                src="/main-image.jpeg" 
                alt="Afrikan Mission Livestream Event"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </FadeIn>

        {/* Link / Button */}
        <FadeIn delay={200}>
          <a 
            href="https://youtu.be/qCNaROn01MA?si=BI7JjPO3fsbeB5Ry"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3 group relative overflow-hidden
              font-display uppercase tracking-stamp text-xs md:text-sm
              text-paper px-8 py-5
              transition-all duration-500 premium-ease
              border border-gold/50 bg-charcoal/50 backdrop-blur-sm
              hover:border-gold hover:bg-gold/10 hover:-translate-y-1
              hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]
            "
          >
            <span className="absolute inset-0 bg-gold-shine bg-[length:200%_auto] animate-shine mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-ember animate-ping" />
              click here to watch the Pre-Launch Livestream
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
