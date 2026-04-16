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
        black: "#000000",
        white: "#FFFFFF",
        gray: "#757575",
        yellow: "#D4AF37",
        maroon: "#7E0C02",
        deepBrown: "#3C2419",
        lightBrown: "#866441",
        deepOrange: "#DA4003",
        skyBlue: "#C1D6DA",
        ink: "#000000", // Aliases for convenience
        paper: "#FFFFFF",
      },
      fontFamily: {
        header: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
