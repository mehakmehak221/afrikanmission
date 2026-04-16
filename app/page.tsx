import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import LivestreamSection from "@/components/LivestreamSection";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import FadeIn from "@/components/FadeIn";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <VideoSection />
      <LivestreamSection />
      <CTA />
      <Form />

      <footer className="relative px-6 md:px-10 py-16 border-t border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-pulse-glow" aria-hidden />
        <FadeIn className="relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-display uppercase tracking-stamp text-[10px] text-mute hover:text-gold/70 transition-colors duration-300 cursor-default">
              © {new Date().getFullYear()} Teleskope · <span className="text-paper hover:text-gold transition-colors duration-300">Afrikan Mission</span>
            </p>
            <div className="flex items-center gap-2 group" aria-hidden>
              <span className="block h-px w-8 bg-paper/30 group-hover:bg-gold/50 transition-colors duration-500" />
              <span className="block h-[4px] w-[4px] rotate-45 bg-gold group-hover:scale-150 transition-transform duration-500 animate-pulse" />
              <span className="block h-px w-8 bg-paper/30 group-hover:bg-gold/50 transition-colors duration-500" />
            </div>
            <p className="font-body italic text-mute text-xs hover:text-paper/80 transition-colors duration-300 cursor-default">
              Addis Ababa · 16 · IV · <span className="text-gold/70">MMXXVI</span>
            </p>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
