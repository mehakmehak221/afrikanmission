"use client";

import FadeIn from "./FadeIn";

export default function Form() {
  return (
    <section id="join" className="relative pt-8 md:pt-12 pb-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-pulse-glow" aria-hidden />
      
      <div className="relative max-w-4xl mx-auto z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-display uppercase tracking-stamp text-xs text-gold mb-4 animate-pulse">
              Subscriber Form
            </p>
            <h3 className="font-display font-extrabold uppercase text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] tracking-tightest mb-6 drop-shadow-lg">
              Take Your Place
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent w-16 md:w-24" aria-hidden />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold" aria-hidden />
              <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent w-16 md:w-24" aria-hidden />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="flex justify-center mt-12 w-full">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScKBHJkLg0Y1SUPdmRuq5bCbiM-nyRr1zzA7l0k_QMvq3Tzyg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group overflow-hidden
              font-display font-extrabold uppercase tracking-stamp
              text-sm sm:text-base md:text-lg lg:text-xl
              text-ink bg-paper
              w-full sm:w-auto
              px-6 sm:px-12 md:px-16 
              py-4 md:py-6 
              rounded-sm
              transition-all duration-500 premium-ease
              border border-transparent
              hover:bg-gold hover:border-gold hover:text-white
              hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]
              hover:-translate-y-1
              text-center flex items-center justify-center
            "
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 premium-ease mix-blend-overlay" />
            <span className="absolute -inset-1 bg-gradient-to-r from-gold via-yellow-200 to-gold rounded-sm blur opacity-0 group-hover:opacity-30 transition duration-500 animate-pulse-glow pointer-events-none" aria-hidden />
            
            <span className="relative flex items-center justify-center gap-2 md:gap-4 w-full">
              <span className="truncate">Open Subscription Form</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 shrink-0">↗</span>
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
