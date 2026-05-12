import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Brush,
  Megaphone,
  PenTool,
  Share2,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { Reveal } from "@/animations/reveal";
import type { Service } from "@/types/content";

const premiumServices: {
  title: string;
  description: string;
  slug?: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Social Media Marketing",
    description: "Platform-native content systems designed to turn attention into consistent lead flow.",
    slug: "social-media-marketing",
    icon: Share2
  },
  {
    title: "Branding & Identity",
    description: "Premium brand positioning, messaging, and identity systems that elevate perceived value.",
    slug: "branding",
    icon: Sparkles
  },
  {
    title: "Web Design",
    description: "High-converting digital experiences with cinematic visuals and conversion-first architecture.",
    slug: "website-development",
    icon: PenTool
  },
  {
    title: "Paid Advertising",
    description: "Performance media buying across Meta, Google, and TikTok optimized for profitable scale.",
    slug: "media-buying",
    icon: Megaphone
  },
  {
    title: "Content Creation",
    description: "Creative production pipelines for short-form, static, and campaign assets that drive action.",
    slug: "lead-generation",
    icon: Brush
  },
  {
    title: "AI Automation",
    description: "AI-powered workflows for lead qualification, follow-up orchestration, and operating efficiency.",
    icon: Bot
  }
];

export function ServicesSection({ services }: { services: Service[] }) {
  const serviceSlugs = new Set(services.map((service) => service.slug));

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 top-16 size-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,214,120,0.14)_0%,rgba(255,214,120,0)_70%)] blur-2xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 bottom-4 size-[20rem] rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.16)_0%,rgba(123,97,255,0)_72%)] blur-2xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="container relative z-10">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-text">Our Services</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-muted">
            Creative direction, performance marketing, and technology systems in one premium execution layer.
          </p>
          <p
            className="mx-auto mt-5 max-w-xl bg-[linear-gradient(90deg,#F7E4B4,#C8A56A,#A58CFF,#8ED9FF)] bg-clip-text text-sm font-medium tracking-wide text-transparent"
          >
            Designed for brands that demand precision, elegance, and measurable growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {premiumServices.map((service, i) => {
            const hasDetailsPage = Boolean(service.slug && serviceSlugs.has(service.slug));
            const href = hasDetailsPage ? `/services/${service.slug}` : "/#contact";
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={i * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-[24px] border border-white/12 bg-[linear-gradient(145deg,rgba(18,26,40,0.7),rgba(12,17,27,0.55))] p-[1px] shadow-[0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(255,214,120,0.55),rgba(180,140,255,0.35),rgba(90,174,255,0.45))]" />
                  <div className="relative h-full rounded-[23px] border border-white/8 bg-[color-mix(in_oklab,var(--surface)_82%,transparent)] p-7">
                    <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-[linear-gradient(145deg,rgba(255,214,120,0.15),rgba(123,97,255,0.16))] text-[#F6DEAE] shadow-[0_0_24px_rgba(123,97,255,0.22)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>

                    <div className="mt-7 h-px w-14 bg-gradient-to-r from-[#F0D7A3] to-transparent transition-all duration-500 group-hover:w-24" />

                    <Link
                      href={href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F2DEB6] transition-colors hover:text-accent"
                    >
                      Explore service
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

