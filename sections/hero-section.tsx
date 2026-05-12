"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/** Served from /public — plain <img> avoids Sharp failing on some JPG/JFIF renames */
const HERO_BG_PRIMARY = "/hero-reel-poster.jpg";
const HERO_BG_FALLBACK = "/hero-reel-poster.jpg.jfif";

export function HeroSection({ stats, tools }: { stats: { label: string; value: string }[]; tools: string[] }) {
  const [bgSrc, setBgSrc] = useState(HERO_BG_PRIMARY);

  return (
    <section
      id="top"
      className="relative isolate min-h-[min(92vh,920px)] overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24"
    >
      {/* Full-bleed background — positive z-index avoids “disappearing” behind stacking contexts */}
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[min(92vh,920px)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- hero bg must bypass optimizer for tricky encodings */}
        <img
          src={bgSrc}
          alt=""
          aria-hidden
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="hero-ken absolute inset-0 block h-full min-h-[min(92vh,920px)] w-full object-cover object-[center_22%]"
          onError={() => {
            if (bgSrc !== HERO_BG_FALLBACK) setBgSrc(HERO_BG_FALLBACK);
          }}
        />
      </div>

      {/* Readability & brand overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(8,12,20,0.5)_0%,rgba(8,12,20,0.28)_32%,rgba(8,12,20,0.78)_78%,#080C14_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(115deg,rgba(8,12,20,0.88)_0%,rgba(8,12,20,0.38)_45%,rgba(8,12,20,0.1)_72%,rgba(8,12,20,0.32)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] shadow-[inset_0_0_140px_rgba(0,0,0,0.5)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05] bg-[linear-gradient(rgba(240,244,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(240,244,255,0.1)_1px,transparent_1px)] bg-[length:56px_56px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-overlay opacity-35"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 18% 18%, rgba(123, 97, 255, 0.32), transparent 60%), radial-gradient(ellipse 50% 40% at 82% 30%, rgba(0, 229, 255, 0.2), transparent 55%)"
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-muted"
          >
            <span className="text-success font-semibold">Limited availability:</span> We onboard up to 3 partners monthly.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 max-w-[18ch] font-display text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold tracking-tight leading-[1.02] text-text drop-shadow-[0_2px_48px_rgba(0,0,0,0.45)]"
          >
            Your entire <span className="gradient-text">growth engine</span>, one team.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-2xl text-[clamp(1rem,2vw,1.15rem)] text-muted/95 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          >
            Most agencies stop at posts and ads. PixelPulse builds campaigns, websites, CRM, and ERP in one integrated
            system so marketing actually maps to revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contact">
              <Button>
                Start Growing Today <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#case-studies">
              <Button variant="secondary">See Our Work</Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-12 grid gap-3 sm:grid-cols-3 rounded-2xl border border-white/20 bg-[color-mix(in_oklab,var(--surface)_14%,transparent)] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm"
        >
          {stats.map((item) => (
            <div key={item.label}>
              <div className="font-display text-2xl font-extrabold text-accent drop-shadow-sm">{item.value}</div>
              <div className="text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          <span className="w-full text-[11px] uppercase tracking-[0.14em] text-muted/90">Trusted stack</span>
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-white/10 bg-[color-mix(in_oklab,var(--surface)_40%,transparent)] px-3 py-1 text-xs text-muted backdrop-blur-md"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
