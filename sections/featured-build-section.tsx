import Link from "next/link";
import { ArrowRight, Check, Database, PenTool } from "lucide-react";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/ui/button";

const builds = [
  {
    slug: "website-development",
    icon: PenTool,
    title: "Website Development",
    tagline: "Custom, high-converting websites — not templates.",
    points: [
      "Fully custom design, built around your brand",
      "Mobile-first, fast-loading, SEO-ready",
      "Conversion-focused pages that turn visitors into leads",
      "Very competitive pricing for the quality delivered"
    ],
    cta: "Get a website quote"
  },
  {
    slug: "crm-development",
    icon: Database,
    title: "CRM Development",
    tagline: "Custom CRM systems that stop lead leakage.",
    points: [
      "Built around your real sales process, not a generic template",
      "Lead capture, routing, and automated follow-ups",
      "Clear dashboards and reporting for your whole team",
      "Enterprise-grade capability, priced for SMBs"
    ],
    cta: "Get a CRM quote"
  }
];

export function FeaturedBuildSection() {
  return (
    <section id="build" className="relative overflow-hidden py-16 md:py-20">
      <div className="container">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-black">
            Also available
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-text">
            Websites &amp; CRM systems, built in-house
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-muted">
            Beyond content and media buying, we design and build the website and CRM your growth actually runs on —
            professionally, and at prices built for growing businesses.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {builds.map((build, i) => {
            const Icon = build.icon;
            return (
              <Reveal key={build.slug} delay={i * 0.08}>
                <article className="relative h-full overflow-hidden rounded-[28px] border-2 border-accent/50 bg-[linear-gradient(155deg,rgba(0,229,255,0.08),rgba(123,97,255,0.06))] p-7 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.16)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-[linear-gradient(145deg,rgba(255,214,120,0.15),rgba(123,97,255,0.16))] text-[#F6DEAE] shadow-[0_0_24px_rgba(123,97,255,0.22)]">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-black">
                      Best value
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-text">{build.title}</h3>
                  <p className="mt-2 text-sm text-muted">{build.tagline}</p>

                  <ul className="mt-5 space-y-2.5 text-sm text-muted">
                    {build.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/#contact">
                      <Button className="shadow-lg shadow-accent/20">
                        {build.cta} <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                    <Link href={`/services/${build.slug}`}>
                      <Button variant="secondary">Learn more</Button>
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
