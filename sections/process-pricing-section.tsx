import { Check } from "lucide-react";
import { Reveal } from "@/animations/reveal";

export function ProcessAndPricing({
  pricingPlans
}: {
  pricingPlans: { name: string; price: string; subtitle: string; features: string[]; featured?: boolean }[];
}) {
  return (
    <>
      <section id="how-we-work" className="bg-surface border-y border-border py-20">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Process</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold tracking-tight">From vision to results in 4 steps</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Discovery", "Deep business, offer, and market diagnostics."],
              ["Build", "Website, campaigns, CRM/ERP foundations."],
              ["Optimize", "Data-led tests across funnel and creative."],
              ["Scale", "Monthly strategy loops tied to revenue outcomes."]
            ].map(([title, desc], idx) => (
              <Reveal key={title} delay={idx * 0.06}>
                <article className="rounded-2xl border border-border bg-bg p-5">
                  <div className="mb-3 inline-flex size-9 items-center justify-center rounded-full border border-accent text-sm font-bold text-accent">
                    {idx + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="container py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-accent">Pricing</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Transparent pricing. No hidden fees.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.05}>
              <article
                className={`h-full rounded-2xl border p-6 ${
                  plan.featured
                    ? "border-accent bg-[color-mix(in_oklab,var(--accent)_8%,var(--surface))]"
                    : "glass border-border"
                }`}
              >
                {plan.featured && (
                  <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-black">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-xl font-bold text-accent">{plan.price}</p>
                <p className="mt-2 text-sm text-muted">{plan.subtitle}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 size-4 text-success" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

