import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getPortfolioProjects } from "@/lib/content";
import type { PortfolioProject } from "@/types/content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Restaurant, medical, beauty salon, and automotive content and campaigns produced by PixelPulse Agency.",
  alternates: { canonical: "/work" }
};

function groupByCategory(projects: PortfolioProject[]) {
  const groups = new Map<string, PortfolioProject[]>();
  for (const project of projects) {
    const list = groups.get(project.category) ?? [];
    list.push(project);
    groups.set(project.category, list);
  }
  return groups;
}

export default async function WorkPage() {
  const projects = await getPortfolioProjects();
  const groups = groupByCategory(projects);

  return (
    <main className="container py-20">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">Our Work</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-extrabold tracking-tight">Real projects, real industries</h1>
      <p className="mt-4 max-w-2xl text-muted">
        A look at the content and campaigns we build for restaurants, clinics, salons, and automotive brands.
      </p>

      {[...groups.entries()].map(([category, items]) => (
        <section key={category} className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text">{category}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {items.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent"
              >
                <div className="relative h-56 w-full overflow-hidden bg-surface2">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {project.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-black">
                      Featured
                    </span>
                  )}
                  {project.isPlaceholder && (
                    <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                      Sample slot — real project coming soon
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-text">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{project.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View project
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
