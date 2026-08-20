import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/ui/button";

type AgencyComparison = {
  headline: string;
  subtitle: string;
  rows: { label: string; us: boolean; others: string }[];
};

export function ProcessAndPricing({
  pricingPlans,
  agencyComparison
}: {
  pricingPlans: { name: string; price: string; subtitle: string; features: string[]; featured?: boolean }[];
  agencyComparison?: AgencyComparison;
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
                <article className="rounded-2xl border border-border bg-surface2/50 p-5">
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
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Pick a package to get started. Every plan includes strategy, reporting, and a clear next-step roadmap.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.05}>
              <article
                className={`relative h-full rounded-2xl border p-6 overflow-hidden ${
                  plan.featured
                    ? "border-accent bg-accent/5 dark:bg-accent/10 shadow-glow"
                    : "border-border hover:border-accent bg-surface/50"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 ${
                    plan.featured
                      ? "bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,229,255,0.35)_0%,rgba(0,229,255,0)_70%)]"
                      : "bg-[radial-gradient(60%_100%_at_50%_0%,rgba(123,97,255,0.25)_0%,rgba(123,97,255,0)_70%)]"
                  }`}
                />
                {plan.featured && (
                  <span className="relative mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-black">
                    Most popular
                  </span>
                )}
                <h3 className="relative font-display text-2xl font-bold">{plan.name}</h3>
                <p className="relative mt-2 text-3xl font-extrabold tracking-tight">
                  <span className="text-text">{plan.price}</span>
                </p>
                <p className="relative mt-2 text-sm text-muted">{plan.subtitle}</p>

                <div className="relative mt-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">Includes</p>
                </div>
                <ul className="relative mt-4 space-y-2 text-sm text-muted">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 size-4 text-success" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-7 grid gap-3">
                  <Link href={`/#contact`} className="block">
                    <Button className="w-full" variant={plan.featured ? "primary" : "secondary"}>
                      Choose {plan.name}
                    </Button>
                  </Link>
                  <p className="text-center text-xs text-muted">
                    Not sure?{" "}
                    <Link className="text-accent hover:underline" href="/#contact">
                      Ask for a recommendation
                    </Link>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {agencyComparison && (
          <Reveal delay={0.1}>
            <div className="mt-16 rounded-2xl border border-border bg-surface/50 p-6 md:p-8 overflow-hidden">
              <h3 className="font-display text-xl md:text-2xl font-bold text-text">{agencyComparison.headline}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted">{agencyComparison.subtitle}</p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-[0.1em] text-muted">
                      <th className="py-3 pr-4 font-semibold">What you get</th>
                      <th className="py-3 px-4 font-semibold text-accent">PixelPulse</th>
                      <th className="py-3 pl-4 font-semibold">Typical agencies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agencyComparison.rows.map((row) => (
                      <tr key={row.label} className="border-b border-border/60 last:border-0">
                        <td className="py-3.5 pr-4 text-text">{row.label}</td>
                        <td className="py-3.5 px-4">
                          {row.us ? (
                            <span className="inline-flex items-center gap-1.5 font-semibold text-success">
                              <Check className="size-4" /> Included
                            </span>
                          ) : (
                            <Minus className="size-4 text-muted" />
                          )}
                        </td>
                        <td className="py-3.5 pl-4 text-muted">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}

