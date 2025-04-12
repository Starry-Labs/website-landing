import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Starry | Decentralized AI Astrology",
  description:
    "Discover yourself and your relationships through AI-powered astrological insights",
  openGraph: {
    title: "Starry | Decentralized AI Astrology",
    description:
      "Discover yourself and your relationships through AI-powered astrological insights",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starry | Decentralized AI Astrology",
    description:
      "Discover yourself and your relationships through AI-powered astrological insights",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#0f0e33] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
