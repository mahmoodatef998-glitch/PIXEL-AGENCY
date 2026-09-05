import { Reveal } from "@/animations/reveal";
import type { PortfolioProject } from "@/types/content";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OurWorkSection({ portfolioProjects }: { portfolioProjects: PortfolioProject[] }) {
  const showcaseCards = portfolioProjects.slice(0, 6);
  const provenProjectsCount = portfolioProjects.filter((p) => !p.isPlaceholder).length;

  return (
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"
        />

        <div className="container relative z-10">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Case Studies</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-text">Our Previous Work</h2>
            <p className="mx-auto mt-4 max-w-2xl bg-[linear-gradient(90deg,#F6E2B8,#C39B61,#9B8CFF,#89DAFF)] bg-clip-text text-sm md:text-base font-medium text-transparent">
              Creative campaigns crafted for ambitious brands.
            </p>
            <Link href="/work" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              View all projects
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {showcaseCards.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <Link href={`/work/${project.slug}`} className="group relative block overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(150deg,rgba(18,26,40,0.92),rgba(12,16,24,0.9))] p-[1px] shadow-[0_16px_40px_rgba(0,0,0,0.28)] will-change-transform transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(0,0,0,0.34)]">
                  <div className="absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(122deg,rgba(214,222,230,0.2),rgba(176,140,255,0.18),rgba(92,176,255,0.22))]" />

                  <div className="relative rounded-[27px] border border-white/8 bg-[color-mix(in_oklab,var(--surface)_84%,transparent)] p-6 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-accent backdrop-blur-md">
                        <Sparkles className="size-3.5" />
                        {project.category}
                      </div>
                      {project.featured && (
                        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-black">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 min-h-56 md:min-h-64 bg-surface2">
                      {project.coverImage && (
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                        />
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,18,0.12)_0%,rgba(10,12,18,0.24)_55%,rgba(10,12,18,0.42)_100%)]" />
                      {project.isPlaceholder && (
                        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                          Sample slot — real project coming soon
                        </span>
                      )}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.14),rgba(255,255,255,0)_70%)]" />
                    </div>

                    <div className="mt-5">
                      <h3 className="font-display text-xl md:text-2xl font-bold leading-tight text-text">{project.title}</h3>
                      <p className="mt-2 text-sm text-muted line-clamp-1">{project.summary}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      {project.results[0] && (
                        <span className="inline-flex w-fit rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                          {project.results[0]}
                        </span>
                      )}

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-purple">
                        View Case Study
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p className="text-sm text-muted">
              Want a portfolio tailored to your niche? We&apos;ll map references to your exact market
              {provenProjectsCount > 0 ? ` (${provenProjectsCount}+ proven projects).` : "."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/work">
                <Button variant="secondary">View all projects</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="secondary">Get a tailored portfolio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}

