"use client";

import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]
          animate-pulse-glow
        "
      />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block h-px w-12 bg-gradient-to-r from-transparent to-gold" aria-hidden />
            <p className="font-display uppercase tracking-stamp text-xs text-gold animate-pulse">
              The Call
            </p>
            <span className="block h-px w-12 bg-gradient-to-l from-transparent to-gold" aria-hidden />
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <h2
            className="
              font-display font-extrabold uppercase
              text-[clamp(3rem,12vw,10rem)]
              leading-[0.85] tracking-tightest
              text-paper drop-shadow-2xl
            "
          >
            Join The
            <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#D4AF37,#FFF8D6,#D4AF37)] bg-[length:200%_auto] animate-shine drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              Afrikan
            </span> Mission
          </h2>
        </FadeIn>

        <FadeIn delay={280}>
          <div className="flex justify-center items-center gap-2 mt-12 mb-10" aria-hidden>
             <span className="block w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }} />
             <span className="block w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '150ms' }} />
             <span className="block w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </FadeIn>

        <FadeIn delay={360}>
          <p className="font-body italic text-paper/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mix-blend-screen drop-shadow-md">
            You will be added to the early subscribers list with priority access
            &amp; coupons for the official website launch by end of April 2026.
          </p>
        </FadeIn>

        <FadeIn delay={480}>
          <a
            href="#join"
            className="
              relative inline-block mt-12 group overflow-hidden
              font-display uppercase tracking-stamp text-xs md:text-sm
              text-paper px-10 py-5
              transition-all duration-500 premium-ease
              border border-gold/30 hover:border-gold
              bg-white/5 hover:bg-gold/10 backdrop-blur-sm
              hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
              hover:-translate-y-1
            "
          >
            <span className="absolute inset-0 bg-gold-shine bg-[length:200%_auto] animate-shine mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              Enter The Mission 
              <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
