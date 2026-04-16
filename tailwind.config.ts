import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
        mute: "#757575",
        gold: "#D4AF37",
        maroon: "#7E0C02",
        cocoa: "#3C2419",
        hazel: "#866441",
        ember: "#DA4003",
        sky: "#C1D6DA",
        charcoal: "#0C0C0C",
        surface: "#111111",
        hairline: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        display: ["var(--font-barlow)", "Impact", "sans-serif"],
        body: ["var(--font-lora)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        cinematic: "0.02em",
        stamp: "0.35em",
      },
      animation: {
        "fade-up": "fade-up 900ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shine: "shine 8s linear infinite",
        "spin-slow": "spin 15s linear infinite",
        "scale-in": "scale-in 1000ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)", filter: "drop-shadow(0 0 10px rgba(212,175,55,0.3))" },
          "50%": { opacity: ".8", transform: "scale(1.02)", filter: "drop-shadow(0 0 25px rgba(212,175,55,0.6))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
        "gold-shine":
          "linear-gradient(to right, transparent, rgba(212,175,55,0.2) 20%, rgba(212,175,55,0.8) 50%, rgba(212,175,55,0.2) 80%, transparent)",
      },
      transitionTimingFunction: {
        "premium-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
