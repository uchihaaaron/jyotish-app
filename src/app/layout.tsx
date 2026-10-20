import type { Metadata } from "next";
import { Mukta, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["latin", "devanagari"],
  weight: "400",
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jyotish — Astrology & Online Puja",
  description:
    "Kundali, rashifal and live online puja with experienced pandits.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mukta.variable} ${tiro.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}