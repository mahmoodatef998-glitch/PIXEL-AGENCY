import { Reveal } from "@/animations/reveal";
import type { CaseStudy } from "@/types/content";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CaseAndTestimonials({
  caseStudies,
  testimonials
}: {
  caseStudies: CaseStudy[];
  testimonials: { name: string; company: string; quote: string; initials: string }[];
}) {
  return (
    <>
      <section id="case-studies" className="bg-surface border-y border-border py-20">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Our previous work</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Projects we&apos;ve shipped (demo showcase)
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              A quick demo-style portfolio. We can tailor the same execution system to your business: offer, funnel, creative,
              website, and automation.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3 items-stretch">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,229,255,0.20)_0%,rgba(0,229,255,0)_70%)]" />

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-purple">{study.industry}</p>
                        <h3 className="mt-2 font-display text-xl font-bold">{study.title}</h3>
                      </div>
                      <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                        <Sparkles className="size-5" />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <div className="rounded-xl border border-border bg-surface p-4">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Outcome</p>
                        <p className="mt-2 font-display text-2xl font-extrabold text-accent">{study.result}</p>
                        <p className="text-sm text-muted">{study.metric}</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">What we fixed</p>
                          <p className="mt-2 text-sm text-muted line-clamp-3">{study.challenge}</p>
                        </div>
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">How we did it</p>
                          <p className="mt-2 text-sm text-muted line-clamp-3">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <blockquote className="mt-4 border-t border-border pt-4 text-sm italic text-muted">
                      “{study.quote}”
                      <cite className="mt-2 block text-xs not-italic text-text">{study.author}</cite>
                    </blockquote>

                    <div className="mt-5">
                      <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                        Build something like this <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="text-sm text-muted">
              Want a portfolio tailored to your niche? We&apos;ll share relevant examples on a free strategy call.
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
              <article className="glass h-full rounded-2xl border border-border p-6">
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

