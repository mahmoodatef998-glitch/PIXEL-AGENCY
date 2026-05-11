import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

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
    default: "PixelPulse Agency | Full Growth Infrastructure Partner",
    template: "%s | PixelPulse Agency"
  },
  description:
    "Marketing + Technology under one roof. Social, paid ads, custom websites, CRM, ERP, and automation — built to turn attention into revenue.",
  keywords: [
    "marketing agency UAE",
    "media buying",
    "social media management",
    "website development",
    "CRM development",
    "ERP development",
    "lead generation agency"
  ],
  openGraph: {
    type: "website",
    title: "PixelPulse Agency",
    description:
      "Most agencies give you posts. We build your entire growth engine: campaigns + website + CRM + ERP.",
    url: "https://pixelpulse.agency",
    siteName: "PixelPulse Agency"
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelPulse Agency",
    description:
      "A full growth infrastructure partner — marketing + systems + automation."
  },
  alternates: {
    canonical: "https://pixelpulse.agency"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}

