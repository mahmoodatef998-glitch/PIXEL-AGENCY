import { Reveal } from "@/animations/reveal";
import type { CaseStudy } from "@/types/content";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const showcaseCards = [
  {
    key: "luxury-cars",
    category: "Automotive Marketing",
    title: "Midnight Velocity Launch",
    description:
      "Cinematic social + paid campaign engineered around premium visuals, night-city reflections, and high-intent test-drive funnels.",
    result: "+312 qualified test-drive leads",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1280&q=72",
    glow:
      "bg-[radial-gradient(80%_120%_at_80%_15%,rgba(86,147,255,0.35)_0%,rgba(86,147,255,0)_55%),radial-gradient(60%_80%_at_20%_100%,rgba(142,64,255,0.3)_0%,rgba(142,64,255,0)_55%),linear-gradient(155deg,#0a1019_0%,#111b2b_52%,#0a0f17_100%)]"
  },
  {
    key: "real-estate",
    category: "Luxury Real Estate",
    title: "Skyline Prestige Campaign",
    description:
      "High-end property storytelling with sunset architecture shots, funnel-specific ad sets, and conversion-optimized landing experiences.",
    result: "4.1x inquiry growth in 8 weeks",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1280&q=72",
    glow:
      "bg-[radial-gradient(80%_120%_at_82%_18%,rgba(255,194,96,0.34)_0%,rgba(255,194,96,0)_58%),radial-gradient(65%_80%_at_10%_95%,rgba(123,97,255,0.28)_0%,rgba(123,97,255,0)_56%),linear-gradient(160deg,#111216_0%,#1e1b18_55%,#0d1018_100%)]"
  },
  {
    key: "restaurants",
    category: "Restaurants & Cafes",
    title: "Signature Dining Momentum",
    description:
      "Warm cinematic creatives, offer-based retargeting, and reservation-first customer journeys for hospitality brands.",
    result: "3x reservation volume uplift",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1280&q=72",
    glow:
      "bg-[radial-gradient(70%_100%_at_76%_18%,rgba(255,153,90,0.35)_0%,rgba(255,153,90,0)_60%),radial-gradient(70%_85%_at_12%_100%,rgba(255,214,120,0.26)_0%,rgba(255,214,120,0)_56%),linear-gradient(160deg,#1a1210_0%,#241917_52%,#0f1118_100%)]"
  },
  {
    key: "medical",
    category: "Medical Clinics",
    title: "Clinical Trust Growth System",
    description:
      "Premium clinic positioning, educational content strategy, and appointment automation tailored for modern healthcare brands.",
    result: "+68% appointment conversion rate",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1280&q=72",
    glow:
      "bg-[radial-gradient(75%_110%_at_78%_14%,rgba(214,179,108,0.32)_0%,rgba(214,179,108,0)_58%),radial-gradient(70%_85%_at_15%_98%,rgba(132,176,255,0.25)_0%,rgba(132,176,255,0)_56%),linear-gradient(158deg,#0f1318_0%,#181f29_50%,#0b0f14_100%)]"
  },
  {
    key: "beauty-fashion",
    category: "Beauty & Fashion Brands",
    title: "Luminous Brand Narrative",
    description:
      "Elegant creative direction with premium product storytelling, campaign sequencing, and high-aesthetic performance media.",
    result: "5.2x blended ROAS peak month",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1280&q=72",
    glow:
      "bg-[radial-gradient(80%_115%_at_80%_16%,rgba(247,182,213,0.32)_0%,rgba(247,182,213,0)_58%),radial-gradient(65%_85%_at_10%_96%,rgba(163,122,255,0.27)_0%,rgba(163,122,255,0)_56%),linear-gradient(160deg,#17101a_0%,#201626_48%,#0d1018_100%)]"
  }
] as const;

export function CaseAndTestimonials({
  caseStudies,
  testimonials
}: {
  caseStudies: CaseStudy[];
  testimonials: { name: string; company: string; quote: string; initials: string }[];
}) {
  const provenProjectsCount = caseStudies.length;

  return (
    <>
      <section id="case-studies" className="relative overflow-hidden bg-surface py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 top-8 size-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,214,120,0.18)_0%,rgba(255,214,120,0)_72%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-6 size-[22rem] rounded-full bg-[radial-gradient(circle,rgba(118,104,255,0.22)_0%,rgba(118,104,255,0)_72%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        />

        <div className="container relative z-10">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Case Studies</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-text">Our Previous Work</h2>
            <p className="mx-auto mt-4 max-w-2xl bg-[linear-gradient(90deg,#F6E2B8,#C39B61,#9B8CFF,#89DAFF)] bg-clip-text text-sm md:text-base font-medium text-transparent">
              Creative campaigns crafted for ambitious brands.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {showcaseCards.map((card, i) => (
              <Reveal key={card.key} delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(150deg,rgba(18,26,40,0.92),rgba(12,16,24,0.9))] p-[1px] shadow-[0_16px_40px_rgba(0,0,0,0.28)] will-change-transform transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(0,0,0,0.34)]">
                  <div className="absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(122deg,rgba(255,214,120,0.35),rgba(176,140,255,0.25),rgba(92,176,255,0.32))]" />

                  <div className="relative rounded-[27px] border border-white/8 bg-[color-mix(in_oklab,var(--surface)_84%,transparent)] p-6 md:p-7">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[color-mix(in_oklab,var(--surface)_52%,transparent)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#F2DBAF] backdrop-blur-md">
                        <Sparkles className="size-3.5" />
                        {card.category}
                      </div>
                    </div>

                    <div className={`relative overflow-hidden rounded-2xl border border-white/10 min-h-56 md:min-h-64 ${card.glow}`}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,18,0.12)_0%,rgba(10,12,18,0.24)_55%,rgba(10,12,18,0.42)_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(55%_80%_at_18%_15%,rgba(255,214,120,0.12)_0%,rgba(255,214,120,0)_65%),radial-gradient(45%_70%_at_82%_20%,rgba(123,97,255,0.14)_0%,rgba(123,97,255,0)_70%)]" />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.14),rgba(255,255,255,0)_70%)]" />
                    </div>

                    <div className="mt-5">
                      <h3 className="font-display text-xl md:text-2xl font-bold leading-tight text-white">{card.title}</h3>
                      <p className="mt-2 text-sm text-white/75 line-clamp-1">{card.description}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit rounded-full border border-white/16 bg-[color-mix(in_oklab,var(--surface)_60%,transparent)] px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                        {card.result}
                      </span>

                      <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F2DEB6] transition-colors hover:text-accent">
                        View Case Study
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="text-sm text-muted">
              Want a portfolio tailored to your niche? We&apos;ll map references to your exact market ({provenProjectsCount}+ proven
              projects).
            </p>
            <Link href="/#contact">
              <Button variant="secondary">Get a tailored portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-accent">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Founders who needed one accountable partner
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-surface2/80 p-6 will-change-transform shadow-lg">
                <p className="text-amber-300">★★★★★</p>
                <p className="mt-3 text-sm text-muted">{item.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple text-xs font-bold text-black">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted">{item.company}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

