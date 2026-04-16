import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Lora } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AfrikanMission.com — Rise Afrikan Rise | Teleskope",
  description:
    "Pre-launch of AfrikanMission.com and the Rise African Rise music video premiere. Addis Ababa, Ethiopia — 16 April 2026. Join the movement.",
  openGraph: {
    title: "AfrikanMission.com — Rise Afrikan Rise",
    description:
      "Pre-launch & music video premiere. Addis Ababa, 16 April 2026. Join the Afrikan Mission.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${lora.variable}`}>
      <body className="bg-ink text-paper font-body antialiased">
        {children}
      </body>
    </html>
  );
}
