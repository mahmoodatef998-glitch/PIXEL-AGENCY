"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection({ stats, tools }: { stats: { label: string; value: string }[]; tools: string[] }) {
  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(123, 97, 255, 0.24), transparent), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(0, 229, 255, 0.14), transparent), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0, 255, 135, 0.06), transparent)"
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div data-float className="absolute left-[10%] top-[22%] h-24 w-24 rounded-full bg-[color-mix(in_oklab,var(--accent)_20%,transparent)] blur-2xl" />
        <div data-float className="absolute right-[12%] top-[28%] h-20 w-20 rounded-full bg-[color-mix(in_oklab,var(--purple)_26%,transparent)] blur-2xl" />
        <div data-float className="absolute right-[22%] bottom-[18%] h-28 w-28 rounded-full bg-[color-mix(in_oklab,var(--accent)_12%,transparent)] blur-2xl" />
      </div>
      <div className="container relative">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
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
              className="mt-5 max-w-[16ch] font-display text-[clamp(2.2rem,6vw,4.4rem)] font-extrabold tracking-tight leading-[1.02]"
            >
              Your entire <span className="gradient-text">growth engine</span>, one team.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] text-muted"
            >
              Most agencies stop at posts and ads. PixelPulse builds campaigns, websites, CRM, and ERP in one integrated
              system so marketing actually maps to revenue.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-8 flex flex-wrap gap-3"
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

            <div className="mt-10 grid gap-3 sm:grid-cols-3 glass rounded-xl p-5">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="font-display text-2xl font-extrabold text-accent">{item.value}</div>
                  <div className="text-sm text-muted">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="w-full text-[11px] uppercase tracking-[0.14em] text-muted">Trusted stack</span>
              {tools.map((tool) => (
                <span key={tool} className="rounded-lg border border-border px-3 py-1 text-xs text-muted">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-glow">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(0,229,255,0.25)_0%,rgba(0,229,255,0)_70%)]" />
              <video
                className="relative aspect-[4/5] w-full object-cover"
                src="/hero-reel.mp4"
                poster="/hero-reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="relative border-t border-border bg-[color-mix(in_oklab,var(--bg)_70%,transparent)] p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Agency reel</p>
                <p className="mt-1 text-sm text-text font-semibold">Campaigns, web builds, systems — shipped.</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted">
              Add your 10–15s video as <span className="text-text font-semibold">public/hero-reel.mp4</span> (optional poster:
              <span className="text-text font-semibold"> public/hero-reel-poster.jpg</span>).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

