"use client";

import Image from "next/image";

/**
 * TeleskopeLogo
 * --------------------------------------------------------------
 * Uses the official logo from the public directory.
 * Includes premium animations (float and pulse-glow) for a high-end look.
 */

interface Props {
  className?: string;
}

export default function TeleskopeLogo({ className = "" }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      aria-label="Teleskope"
    >
      <div className="relative animate-float">
        {/* Glow behind the logo */}
        <div 
          className="absolute inset-0 bg-gold/20 blur-[50px] rounded-full animate-pulse-glow"
          aria-hidden
        />
        
        {/* Logo Image */}
        <Image 
          src="/logo.png" 
          alt="Teleskope" 
          width={400} 
          height={400} 
          className="relative z-10 w-[200px] md:w-[300px] lg:w-[400px] h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* Bottom hairline kiss with gold bead */}
      <span className="flex items-center gap-3 mt-8" aria-hidden>
        <span className="block h-px w-10 bg-paper/50" />
        <span className="block h-[6px] w-[6px] rotate-45 bg-gold animate-pulse" />
        <span className="block h-px w-10 bg-paper/50" />
      </span>
    </div>
  );
}
