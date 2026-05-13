import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ContactNudge } from "@/components/contact-nudge";

const fontDisplay = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display"
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelpulse.agency"),
  title: {
    default: "PixelPulse Agency | Best Marketing Agency in Dubai & UAE",
    template: "%s | PixelPulse Agency Dubai"
  },
  description:
    "PixelPulse is the leading creative growth agency in Dubai. We provide social media management, performance marketing, and custom web systems for UAE brands.",
  keywords: [
    "marketing agency Dubai",
    "best marketing agency UAE",
    "social media management Dubai",
    "performance marketing UAE",
    "digital marketing Dubai",
    "وكالة تسويق في دبي",
    "أفضل وكالة تسويق في الإمارات",
    "إدارة حسابات التواصل الاجتماعي دبي"
  ],
  openGraph: {
    type: "website",
    title: "PixelPulse Agency | Creative Growth Studio Dubai",
    description:
      "Most agencies give you posts. We build your entire growth engine in Dubai: campaigns + systems + automation.",
    url: "https://pixelpulse.agency",
    siteName: "PixelPulse Agency Dubai"
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelPulse Agency Dubai",
    description:
      "A full growth infrastructure partner in Dubai — marketing + systems + automation."
  },
  alternates: {
    canonical: "https://pixelpulse.agency"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        {children}
        <ContactNudge />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

