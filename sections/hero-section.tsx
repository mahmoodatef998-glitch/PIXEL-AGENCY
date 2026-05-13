"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HERO_VIDEO = "/hero-video.mp4";

export function HeroSection({ tools }: { tools: string[] }) {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      {/* Cinematic video background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 will-change-transform ${videoReady ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.png"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Fallback while video loads */}
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(123,97,255,0.35)_0%,rgba(123,97,255,0)_52%),radial-gradient(circle_at_82%_28%,rgba(0,229,255,0.2)_0%,rgba(0,229,255,0)_56%),linear-gradient(145deg,#090d15_0%,#0f1725_55%,#0a0f17_100%)] transition-opacity duration-1000 ${videoReady ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Cinematic overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,9,14,0.54)_0%,rgba(7,9,14,0.24)_38%,rgba(7,9,14,0.68)_82%,#080C14_100%)] will-change-transform"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(112deg,rgba(10,12,18,0.78)_0%,rgba(10,12,18,0.32)_42%,rgba(10,12,18,0.08)_70%,rgba(10,12,18,0.24)_100%)] will-change-transform"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(58%_70%_at_16%_18%,rgba(255,214,120,0.12)_0%,rgba(255,214,120,0)_64%),radial-gradient(52%_60%_at_82%_20%,rgba(123,97,255,0.18)_0%,rgba(123,97,255,0)_68%)] will-change-transform"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] shadow-[inset_0_0_180px_rgba(0,0,0,0.6)] will-change-transform"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04] bg-[linear-gradient(rgba(240,244,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(240,244,255,0.1)_1px,transparent_1px)] bg-[length:56px_56px] will-change-transform"
      />

      {/* Floating particles / ambient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[7%] top-[22%] z-[2] hidden md:block size-28 rounded-full bg-[color-mix(in_oklab,var(--purple)_26%,transparent)] blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-[18%] z-[2] hidden md:block size-24 rounded-full bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[28%] bottom-[16%] z-[2] hidden lg:block size-20 rounded-full bg-[rgba(255,214,120,0.2)] blur-3xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 min-h-[92svh] md:min-h-screen py-14 md:py-20 flex flex-col justify-between">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-[color-mix(in_oklab,var(--surface)_46%,transparent)] px-4 py-2 text-xs text-muted backdrop-blur-md"
          >
            <span className="text-[#F2D9A6] font-semibold">Creative Growth Studio</span> Cinematic strategy. Measurable performance.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[13ch] font-display text-[clamp(2rem,5.6vw,4.25rem)] font-extrabold tracking-tight leading-[0.99] text-text drop-shadow-[0_8px_44px_rgba(0,0,0,0.5)]"
          >
            Brands built to{" "}
            <span className="bg-[linear-gradient(90deg,#F6E2B8,#C39B61,#A58CFF)] bg-clip-text text-transparent">be seen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-[clamp(0.96rem,1.75vw,1.08rem)] text-muted/92 drop-shadow-[0_4px_18px_rgba(0,0,0,0.38)]"
          >
            Where strategy meets cinematic storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto shadow-[0_0_24px_rgba(0,229,255,0.2)]">
                Start Your Project <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#case-studies" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full sm:w-auto border-white/25 bg-[color-mix(in_oklab,var(--surface)_40%,transparent)] hover:border-[#F2D9A6]/60 hover:text-[#F2D9A6]"
              >
                View Our Work
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="pt-14 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="w-full text-[10px] uppercase tracking-[0.14em] text-muted/80">Trusted stack</span>
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-white/10 bg-[color-mix(in_oklab,var(--surface)_28%,transparent)] px-2.5 py-1 text-[11px] text-muted/85 backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
