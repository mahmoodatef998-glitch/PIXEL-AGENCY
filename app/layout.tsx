import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ContactNudge } from "@/components/contact-nudge";
import { ThemeProvider } from "@/components/theme-provider";

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
    siteName: "PixelPulse Agency Dubai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixelPulse Agency — Creative Growth Studio Dubai"
      }
    ]
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
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"
          />
          {children}
          <ContactNudge />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
