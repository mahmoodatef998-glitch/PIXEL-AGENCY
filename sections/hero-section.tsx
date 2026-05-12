"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HERO_POSTER = "/hero-reel-poster.jpg";

export function HeroSection({ stats, tools }: { stats: { label: string; value: string }[]; tools: string[] }) {
  return (
    <section
      id="top"
      className="relative isolate min-h-[min(92vh,920px)] overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24"
    >
      {/* Full-bleed background image */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="relative h-full min-h-[min(92vh,920px)] w-full">
          <Image
            src={HERO_POSTER}
            alt="PixelPulse — growth marketing, web, and systems"
            fill
            priority
            sizes="100vw"
            className="hero-ken object-cover object-[center_22%]"
          />
        </div>
      </div>

      {/* Readability & brand overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,12,20,0.55)_0%,rgba(8,12,20,0.35)_28%,rgba(8,12,20,0.82)_72%,#080C14_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(8,12,20,0.92)_0%,rgba(8,12,20,0.45)_42%,rgba(8,12,20,0.12)_68%,rgba(8,12,20,0.35)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 shadow-[inset_0_0_160px_rgba(0,0,0,0.55)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(rgba(240,244,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(240,244,255,0.08)_1px,transparent_1px)] bg-[length:56px_56px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mix-blend-overlay opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 18% 18%, rgba(123, 97, 255, 0.35), transparent 60%), radial-gradient(ellipse 50% 40% at 82% 30%, rgba(0, 229, 255, 0.22), transparent 55%)"
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
          className="mt-12 grid gap-3 sm:grid-cols-3 rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_55%,transparent)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
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
