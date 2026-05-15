import { Reveal } from "@/animations/reveal";
import type { CaseStudy } from "@/types/content";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const industryCards = [
  {
    key: "automotive",
    category: "Automotive & Luxury Cars",
    title: "Midnight Velocity Launch",
    description:
      "Cinematic campaigns built around premium visuals, night-city reflections, and high-intent test-drive funnels for luxury automotive brands.",
    result: "+312 qualified test-drive leads",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1280&q=80",
    glow: "bg-[radial-gradient(80%_120%_at_80%_15%,rgba(86,147,255,0.38)_0%,rgba(86,147,255,0)_55%),radial-gradient(60%_80%_at_20%_100%,rgba(142,64,255,0.32)_0%,rgba(142,64,255,0)_55%),linear-gradient(155deg,#08101a_0%,#0e1926_52%,#080e16_100%)]"
  },
  {
    key: "real-estate",
    category: "Luxury Real Estate",
    title: "Skyline Prestige Campaign",
    description:
      "High-end property storytelling with architectural photography, funnel-specific ad sets, and conversion-optimised landing experiences.",
    result: "4.1x inquiry growth in 8 weeks",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1280&q=80",
    glow: "bg-[radial-gradient(80%_120%_at_82%_18%,rgba(255,194,96,0.36)_0%,rgba(255,194,96,0)_58%),radial-gradient(65%_80%_at_10%_95%,rgba(123,97,255,0.28)_0%,rgba(123,97,255,0)_56%),linear-gradient(160deg,#141210_0%,#201c14_55%,#0d1018_100%)]"
  },
  {
    key: "restaurants",
    category: "Restaurants & Fine Dining",
    title: "Signature Dining Momentum",
    description:
      "Warm cinematic creatives, offer-based retargeting, and reservation-first customer journeys for premium hospitality brands.",
    result: "3x reservation volume uplift",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1280&q=80",
    glow: "bg-[radial-gradient(70%_100%_at_76%_18%,rgba(255,153,90,0.38)_0%,rgba(255,153,90,0)_60%),radial-gradient(70%_85%_at_12%_100%,rgba(255,214,120,0.28)_0%,rgba(255,214,120,0)_56%),linear-gradient(160deg,#1a1008_0%,#261808_52%,#100e12_100%)]"
  },
  {
    key: "medical",
    category: "Medical & Aesthetic Clinics",
    title: "Clinical Trust Growth System",
    description:
      "Premium clinic positioning, educational content strategy, and appointment automation tailored for modern healthcare and aesthetic brands.",
    result: "+68% appointment conversion rate",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1280&q=80",
    glow: "bg-[radial-gradient(75%_110%_at_78%_14%,rgba(0,229,255,0.28)_0%,rgba(0,229,255,0)_58%),radial-gradient(70%_85%_at_15%_98%,rgba(132,176,255,0.24)_0%,rgba(132,176,255,0)_56%),linear-gradient(158deg,#08141a_0%,#0d1e28_50%,#080f14_100%)]"
  },
  {
    key: "beauty",
    category: "Beauty & Fashion Brands",
    title: "Luminous Brand Narrative",
    description:
      "Elegant creative direction with premium product storytelling, campaign sequencing, and high-aesthetic performance media for luxury beauty.",
    result: "5.2x blended ROAS peak month",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1280&q=80",
    glow: "bg-[radial-gradient(80%_115%_at_80%_16%,rgba(247,182,213,0.34)_0%,rgba(247,182,213,0)_58%),radial-gradient(65%_85%_at_10%_96%,rgba(163,122,255,0.28)_0%,rgba(163,122,255,0)_56%),linear-gradient(160deg,#18101a_0%,#241428_48%,#0d0e18_100%)]"
  },
  {
    key: "hotels",
    category: "Hotels & Hospitality",
    title: "Prestige Stay Campaigns",
    description:
      "Immersive brand storytelling, seasonal campaign systems, and direct-booking funnels that maximise revenue for luxury hospitality brands.",
    result: "2.8x direct booking rate",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1280&q=80",
    glow: "bg-[radial-gradient(75%_110%_at_75%_16%,rgba(255,214,120,0.32)_0%,rgba(255,214,120,0)_60%),radial-gradient(65%_80%_at_14%_95%,rgba(123,97,255,0.26)_0%,rgba(123,97,255,0)_55%),linear-gradient(158deg,#141010_0%,#1e1a10_50%,#0e1018_100%)]"
  }
] as const;

export function CaseAndTestimonials({
  caseStudies,
  testimonials
}: {
  caseStudies: CaseStudy[];
  testimonials: { name: string; company: string; quote: string; initials: string }[];
}) {
  return (
    <>
      <section id="case-studies" className="relative overflow-hidden bg-surface py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 top-8 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,214,120,0.16)_0%,rgba(255,214,120,0)_72%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-6 size-[24rem] rounded-full bg-[radial-gradient(circle,rgba(118,104,255,0.2)_0%,rgba(118,104,255,0)_72%)] blur-2xl"
        />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        <div className="container relative z-10">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Industries We Grow</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-text">
              Our Previous Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl bg-[linear-gradient(90deg,#F6E2B8,#C39B61,#9B8CFF,#89DAFF)] bg-clip-text text-sm md:text-base font-medium text-transparent">
              Premium campaigns crafted for the most competitive industries in UAE and beyond.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((card, i) => (
              <Reveal key={card.key} delay={i * 0.05}>
                <article className="group relative overflow-hidden rounded-[28px] border border-white/10 p-[1px] shadow-[0_16px_40px_rgba(0,0,0,0.3)] will-change-transform transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(0,0,0,0.38)]">
                  <div className="absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(122deg,rgba(255,214,120,0.3),rgba(176,140,255,0.22),rgba(92,176,255,0.28))]" />

                  <div className="relative rounded-[27px] border border-white/6 bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] p-5 md:p-6">
                    {/* Image */}
                    <div className={`relative overflow-hidden rounded-2xl border border-white/8 min-h-52 md:min-h-60 ${card.glow}`}>
                      <Image
                        src={card.image}
                        alt={card.category}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                      />
                      {/* Overlays */}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,18,0.08)_0%,rgba(10,12,18,0.18)_50%,rgba(10,12,18,0.48)_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(55%_75%_at_18%_12%,rgba(255,214,120,0.1)_0%,rgba(255,214,120,0)_65%)]" />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0)_70%)]" />

                      {/* Category badge floating on image */}
                      <div className="absolute left-4 top-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-accent backdrop-blur-md">
                          <Sparkles className="size-3" />
                          {card.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <h3 className="font-display text-xl font-bold leading-tight text-text">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{card.description}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                        {card.result}
                      </span>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-purple"
                      >
                        Get similar results
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="text-sm text-muted">
              Don&apos;t see your industry? We adapt to any competitive market — {caseStudies.length}+ proven campaigns delivered.
            </p>
            <Link href="/#contact">
              <Button variant="secondary">Get a tailored portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                <p className="mt-3 text-sm text-muted">&ldquo;{item.quote}&rdquo;</p>
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
