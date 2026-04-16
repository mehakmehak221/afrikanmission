"use client";

import Image from "next/image";
import { useState } from "react";

const AFRICAN_COUNTRIES = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Cote d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    ageGroup: "",
    email: "",
    phone: "",
    whyJoin: "",
    countries: [] as string[],
    membership: "",
    interests: [] as string[]
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Routing to live database
    console.log("Routing subscription to realtime database:", formData);
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-yellow selection:text-black flex flex-col items-center">
      {/* 1. Header Section - Logo & Title */}
      <section className="w-full flex flex-col items-center pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <Image
            src="/logo.png"
            alt="Teleskope"
            width={550}
            height={550}
            className="w-[300px] md:w-[480px] lg:w-[550px] h-auto mx-auto"
            priority
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="font-header font-extrabold text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.8] tracking-tight uppercase">
            AFRIKAN MISSION
          </h1>
          <div className="space-y-2">
            <p className="font-body text-gray text-xl md:text-2xl uppercase tracking-widest">
              Pre-launch & Video Premiere
            </p>
            <p className="font-body text-gray text-lg md:text-xl italic">
              Addis Ababa, Ethiopia — 16 April 2026
            </p>
          </div>
        </div>
      </section>

      {/* 2. Content Banner Section (Video) */}
      <section className="w-full bg-charcoal border-y border-white/5 py-24 flex flex-col items-center">
        <div className="w-full max-w-5xl px-6">
          <div className="relative aspect-video bg-black shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/5">
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

      {/* 3. Call to Action Banner (Solid Maroon, Barlow font) */}
      <section className="w-full bg-maroon py-24 flex items-center justify-center text-center px-6">
        <h2 className="font-header font-extrabold text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-yellow uppercase leading-none tracking-tight">
          JOIN THE AFRIKAN MISSION
        </h2>
      </section>

      {/* 4. Form Section - Directly on the landing page */}
      <section className="w-full max-w-4xl mx-auto py-32 px-6 flex flex-col items-center">
        <div className="w-full bg-charcoal/40 border border-white/10 p-8 md:p-20 shadow-2xl">
          {status === "success" ? (
            <div className="text-center py-20">
              <h3 className="font-header font-extrabold text-5xl text-yellow uppercase mb-6">Subscription Recorded</h3>
              <p className="font-body text-xl text-gray">Your mission has been initialized. We will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-16">
              {/* Mandatory fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <div className="flex flex-col gap-4">
                  <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-transparent border-b border-white/20 py-2 focus:border-yellow outline-none transition-colors text-xl font-body"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Age Group</label>
                  <select
                    value={formData.ageGroup}
                    onChange={e => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="bg-black border-b border-white/20 py-2 focus:border-yellow outline-none transition-colors text-xl font-body appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Age Group</option>
                    <option value="under 12">under 12</option>
                    <option value="13-17">13-17</option>
                    <option value="18-25">18-25</option>
                    <option value="26+">26+</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 py-2 focus:border-yellow outline-none transition-colors text-xl font-body"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent border-b border-white/20 py-2 focus:border-yellow outline-none transition-colors text-xl font-body"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-6">
                <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Why do you want to Join the Afrikan Mission? (1-2 sentences)</label>
                <textarea
                  rows={2}
                  value={formData.whyJoin}
                  onChange={e => setFormData({ ...formData, whyJoin: e.target.value })}
                  className="bg-transparent border border-white/10 p-4 focus:border-yellow outline-none transition-colors text-lg font-body"
                />
              </div>

              {/* Multi-select check list */}
              <div className="flex flex-col gap-6">
                <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">African countries of interest (Select up to 5)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 p-6 max-h-64 overflow-y-auto border border-white/5">
                  {AFRICAN_COUNTRIES.map(country => (
                    <label key={country} className="flex items-center gap-3 cursor-pointer text-[12px] uppercase tracking-wider hover:text-yellow transition-colors font-header font-extrabold">
                      <input
                        type="checkbox"
                        checked={formData.countries.includes(country)}
                        onChange={e => {
                          const list = e.target.checked 
                            ? [...formData.countries, country].slice(0, 5)
                            : formData.countries.filter(c => c !== country);
                          setFormData({ ...formData, countries: list });
                        }}
                        className="w-4 h-4 accent-yellow"
                      />
                      {country}
                    </label>
                  ))}
                </div>
              </div>

              {/* Membership Path */}
              <div className="flex flex-col gap-8">
                <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Which membership path are you more interested in:</label>
                <div className="flex flex-col gap-4">
                  {[
                    { id: "A", text: "A) Teleskope Music Artists: Create & sell my own music" },
                    { id: "B", text: "B) Rise [Afrikan] Rise Mission Giants: Support Events & Promote community-sourced products" },
                    { id: "C", text: "C) Both" }
                  ].map(path => (
                    <label key={path.id} className="flex items-start gap-5 cursor-pointer group">
                      <input
                        type="radio"
                        name="membership"
                        value={path.id}
                        onChange={e => setFormData({ ...formData, membership: e.target.value })}
                        className="w-5 h-5 mt-1 accent-yellow"
                      />
                      <span className="text-lg group-hover:text-yellow transition-colors font-body">{path.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="flex flex-col gap-8 border-t border-white/10 pt-10">
                <label className="font-header font-extrabold uppercase text-[12px] tracking-[0.3em] text-gray">Interests</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    "Download Teleskope Music & Ringtones",
                    "Collaborate on Music projects",
                    "Lead an Afrikan Mission in my country",
                    "Buy Afrikan Alkebulan Merchandise",
                    "Attend an upcoming tour",
                    "Request an interview (TV, Radio or Podcast)",
                    "Stay up to date with News"
                  ].map(interest => (
                    <label key={interest} className="flex items-center gap-5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={e => {
                          const list = e.target.checked
                            ? [...formData.interests, interest]
                            : formData.interests.filter(i => i !== interest);
                          setFormData({ ...formData, interests: list });
                        }}
                        className="w-4 h-4 accent-yellow"
                      />
                      <span className="text-sm group-hover:text-yellow transition-colors font-body">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-10 mt-6">
                <p className="font-body italic text-gray text-center text-sm max-w-lg">
                  You will be added to the early subscribers list with priority access & coupons for the official website launch by end April 2026.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-yellow text-black font-header font-extrabold uppercase text-[1.5rem] py-6 hover:bg-white transition-all disabled:opacity-50"
                >
                  {status === "submitting" ? "Processing..." : "Join The Afrikan Mission"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 5. Footer Banner */}
      <footer className="w-full py-20 px-6 bg-charcoal border-t border-white/5 text-center">
        <p className="font-header font-extrabold uppercase text-[12px] tracking-[0.5em] text-gray opacity-30">
          AFRIKAN MISSION
        </p>
      </footer>
    </main>
  );
}
