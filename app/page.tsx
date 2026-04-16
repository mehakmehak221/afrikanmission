"use client";

import Image from "next/image";
import Form from "@/components/Form";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-yellow selection:text-black flex flex-col items-center">
      {/* 1. Header Section */}
      <section className="w-full flex flex-col items-center pt-6 pb-8 px-6 bg-black text-center">
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Teleskope"
            width={700}
            height={700}
            className="w-[160px] md:w-[260px] lg:w-[320px] h-auto mx-auto"
            priority
          />
        </div>

        <div className="mb-6">
          <Image
            src="/main-image.jpeg"
            alt="Live with Teleskope – Rise Afrika Rise Launch in Addis Ababa"
            width={600}
            height={900}
            className="w-[260px] md:w-[380px] lg:w-[440px] h-auto mx-auto rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.12)]"
          />
        </div>

        <div className="max-w-4xl">
          <h1 className="font-header font-extrabold text-[1.3rem] md:text-[2rem] lg:text-[2.5rem] leading-tight uppercase tracking-tight">
            AfrikanMission.com Pre-launch &amp; Rise African Rise Music Video Premiere: Addis Ababa, Ethiopia (16 April 2026)
          </h1>
        </div>
      </section>

      {/* 2. Video Section */}
      <section className="w-full bg-[#1a1a1a] border-y border-white/5 py-10 md:py-14 flex flex-col items-center">
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

      {/* 3. CTA Section */}
      <section className="w-full bg-black py-10 md:py-14 flex items-center justify-center text-center px-6">
        <h2 className="font-header font-extrabold text-[3rem] md:text-[6rem] lg:text-[6rem] text-white uppercase leading-[0.85] tracking-tight">
          JOIN THE AFRIKAN MISSION
        </h2>
      </section>

      {/* 4. Form Section */}
      <section className="w-full py-0 h-[100vh] flex flex-col items-center">
        <Form />
      </section>

      {/* 5. Footer */}
      <footer className="w-full py-8 px-6 bg-black border-t border-white/5 text-center">
        <p className="font-header font-extrabold uppercase text-[12px] tracking-[0.5em] text-[#757575] opacity-30">
          AFRIKAN MISSION
        </p>
      </footer>
    </main>
  );
}
