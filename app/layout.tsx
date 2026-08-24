import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { ContactNudge } from "@/components/contact-nudge";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteSettings } from "@/lib/content";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display"
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export async function generateMetadata(): Promise<Metadata> {
  const { logoUrl } = await getSiteSettings();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: "PixelPulse Agency | Best Marketing Agency in Dubai & UAE",
      template: "%s | PixelPulse Agency Dubai"
    },
    description: siteConfig.description,
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
    icons: logoUrl ? { icon: logoUrl, apple: logoUrl } : undefined,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      title: "PixelPulse Agency | Creative Growth Studio Dubai",
      description:
        "Most agencies give you posts. We build your entire growth engine in Dubai: campaigns + systems + automation.",
      url: siteConfig.url,
      siteName: "PixelPulse Agency Dubai",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "PixelPulse Agency Dubai",
      description: "A full growth infrastructure partner in Dubai — marketing + systems + automation.",
      images: [absoluteUrl("/opengraph-image")]
    },
    alternates: {
      canonical: siteConfig.url
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AnalyticsScripts />
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
