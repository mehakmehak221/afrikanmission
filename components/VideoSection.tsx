"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const FALLBACK_VIDEO_ID = "qCNaROn01MA"; // Fallback to provided YouTube link

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId =
    process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || FALLBACK_VIDEO_ID;

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[960px] mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="block h-px flex-1 bg-paper/20"
              aria-hidden
            />
            <span className="font-display uppercase tracking-stamp text-xs text-mute whitespace-nowrap group-hover:text-gold transition-colors duration-300">
              The Premiere
            </span>
            <span
              className="block h-px flex-1 bg-paper/20"
              aria-hidden
            />
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="relative group">
            {/* Animated Glow Behind Video */}
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-gold/10 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow"
              aria-hidden
            />
            
            <div
              className={`
                relative p-3 md:p-4
                bg-charcoal/80 backdrop-blur-sm
                border border-hairline group-hover:border-gold/30
                shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]
                transition-all duration-500 premium-ease
                ${!isPlaying ? "cursor-pointer" : ""}
              `}
              onClick={() => !isPlaying && setIsPlaying(true)}
            >
              {/* Corner marks with animations */}
              <span
                aria-hidden
                className="absolute -top-px -left-px h-4 w-4 border-t border-l border-gold/70 group-hover:border-gold transition-colors duration-500"
              />
              <span
                aria-hidden
                className="absolute -top-px -right-px h-4 w-4 border-t border-r border-gold/70 group-hover:border-gold transition-colors duration-500"
              />
              <span
                aria-hidden
                className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-gold/70 group-hover:border-gold transition-colors duration-500"
              />
              <span
                aria-hidden
                className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-gold/70 group-hover:border-gold transition-colors duration-500"
              />

              <div className="relative w-full aspect-video overflow-hidden bg-black border border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_60%)] animate-pulse-glow pointer-events-none" />
                
                {!isPlaying ? (
                  <>
                    <Image
                      src="/poster.jpeg"
                      alt="Rise African Rise — Video Premiere Thumbnail"
                      fill
                      className="object-cover z-0 transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      priority
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 premium-ease group-hover:scale-110">
                      <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-charcoal/60 backdrop-blur-md border border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] group-hover:bg-gold/10 transition-all duration-300">
                        <div className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20" />
                        <svg
                          width="32"
                          height="32"
                          className="ml-2 w-8 h-8 md:w-10 md:h-10 text-gold drop-shadow-md"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Rise African Rise — Premiere"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full z-10"
                  />
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={240}>
          <p className="font-body italic text-mute text-sm text-center mt-8">
            "Rise African Rise" · Official Music Video · Teleskope
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
