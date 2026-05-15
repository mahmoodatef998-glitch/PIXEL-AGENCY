"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HERO_VIDEO = "/hero-video.mp4";

export function HeroSection({ tools, stats }: { tools: string[]; stats: { label: string; value: string }[] }) {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      <section id="top" className="relative isolate min-h-[85vh] md:min-h-screen overflow-hidden">
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
            className={`absolute inset-0 bg-surface transition-opacity duration-1000 ${videoReady ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* Cinematic overlays */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] cinematic-overlay will-change-transform"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] opacity-50 dark:opacity-100 bg-[linear-gradient(112deg,rgba(10,12,18,0.78)_0%,rgba(10,12,18,0.32)_42%,rgba(10,12,18,0.08)_70%,rgba(10,12,18,0.24)_100%)] will-change-transform"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(58%_70%_at_16%_18%,rgba(255,214,120,0.12)_0%,rgba(255,214,120,0)_64%),radial-gradient(52%_60%_at_82%_20%,rgba(123,97,255,0.18)_0%,rgba(123,97,255,0)_68%)] will-change-transform"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] shadow-[inset_0_0_180px_rgba(0,0,0,0.6)] dark:block hidden will-change-transform"
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

        <div className="container relative z-10 min-h-[85vh] md:min-h-screen py-14 md:py-24 flex flex-col justify-center md:justify-end">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-xs text-muted backdrop-blur-md"
            >
              <span className="text-accent font-semibold">Creative Growth Studio</span> Cinematic strategy. Measurable performance.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[13ch] font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[0.95] text-text"
            >
              Brands built to{" "}
              <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">be seen</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-[clamp(1rem,1.8vw,1.15rem)] text-muted font-medium"
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
                <Button className="w-full sm:w-auto shadow-lg shadow-accent/20">
                  Start Your Project <ArrowRight className="size-4" />
                </Button>
              </a>
              <a href="#case-studies" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto border-border bg-surface/40 hover:border-accent hover:text-accent"
                >
                  View Our Work
                </Button>
              </a>
            </motion.div>

            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display text-2xl font-extrabold tracking-tight text-text">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-xs text-muted/80 uppercase tracking-[0.14em]">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Trusted Stack - Moved outside the video frame */}
      <div className="bg-surface border-b border-border py-10 md:py-14">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-center gap-x-10 gap-y-6"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted font-bold whitespace-nowrap">Trusted stack</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[13px] md:text-[14px] font-bold text-muted/80 flex items-center gap-2.5 transition-colors hover:text-text"
                >
                  <span className="size-1.5 rounded-full bg-accent/40" />
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
