"use client";

import Image from "next/image";
import Form from "@/components/Form";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-yellow selection:text-black flex flex-col items-center">
      {/* 1. Header Section - Logo & Title (All Centered, Larger Logo) */}
      <section className="w-full flex flex-col items-center pt-24 pb-16 px-6 bg-black text-center">
        <div className="mb-20">
          <Image
            src="/logo.png"
            alt="Teleskope"
            width={700}
            height={700}
            className="w-[300px] md:w-[600px] lg:w-[700px] h-auto mx-auto"
            priority
          />
        </div>
        
        <div className="space-y-8 max-w-6xl">
          <h1 className="font-header font-extrabold text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] leading-tight uppercase tracking-tight">
            AfrikanMission.com Pre-launch & Rise African Rise Music Video Premiere: Addis Ababa, Ethiopia (16 April 2026)
          </h1>
        </div>
      </section>

      {/* 2. Content Banner Section (Video middle large window within charcoal banner) */}
      <section className="w-full bg-[#1a1a1a] border-y border-white/5 py-24 md:py-32 flex flex-col items-center">
        <div className="w-full max-w-5xl px-6">
          <div className="relative aspect-video bg-black border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/qCNaROn01MA?rel=0&modestbranding=1"
              title="Rise African Rise Music Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 3. CTA Section (JOIN THE AFRIKAN MISSION, Solid Maroon Banner, Barlow Yellow Text) */}
      <section className="w-full bg-black py-24 md:py-32 flex items-center justify-center text-center px-6">
        <h2 className="font-header font-extrabold text-[3rem] md:text-[6rem] lg:text-[8rem] text-white uppercase leading-[0.8] tracking-tight">
          JOIN THE AFRIKAN MISSION
        </h2>
      </section>

      {/* 4. Form Section - Embedded Google Form Full Width */}
      <section className="w-full py-0 h-[100vh] flex flex-col items-center">
        <Form />
      </section>

      {/* 5. Footer (Minimal) */}
      <footer className="w-full py-20 px-6 bg-black border-t border-white/5 text-center">
        <p className="font-header font-extrabold uppercase text-[12px] tracking-[0.5em] text-[#757575] opacity-30">
          AFRIKAN MISSION
        </p>
      </footer>
    </main>
  );
}
