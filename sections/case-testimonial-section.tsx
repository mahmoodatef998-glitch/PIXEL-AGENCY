import { Reveal } from "@/animations/reveal";
import type { CaseStudy } from "@/types/content";

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
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Case studies</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold tracking-tight">Numbers don&apos;t lie</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-bg p-6">
                  <p className="text-xs uppercase tracking-[0.12em] text-purple">{study.industry}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{study.title}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.08em] text-muted">Challenge</p>
                  <p className="text-sm text-muted">{study.challenge}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.08em] text-muted">Solution</p>
                  <p className="text-sm text-muted">{study.solution}</p>
                  <p className="mt-4 font-display text-2xl font-extrabold text-accent">{study.result}</p>
                  <p className="text-sm text-muted">{study.metric}</p>
                  <blockquote className="mt-4 border-t border-border pt-4 text-sm italic text-muted">
                    “{study.quote}”
                    <cite className="mt-2 block text-xs not-italic text-text">{study.author}</cite>
                  </blockquote>
                </article>
              </Reveal>
            ))}
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

