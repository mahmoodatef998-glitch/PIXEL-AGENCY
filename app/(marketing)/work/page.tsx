import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getPortfolioProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Restaurant, medical, beauty salon, and automotive content and campaigns produced by PixelPulse Agency."
};

export default async function WorkPage() {
  const projects = await getPortfolioProjects();

  return (
    <main className="container py-20">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">Our Work</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-extrabold tracking-tight">Real projects, real industries</h1>
      <p className="mt-4 max-w-2xl text-muted">
        A look at the content and campaigns we build for restaurants, clinics, salons, and automotive brands.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
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
              {project.isPlaceholder && (
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                  Sample slot — real project coming soon
                </span>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-accent">{project.category}</p>
              <h2 className="mt-2 font-display text-xl font-bold text-text">{project.title}</h2>
              <p className="mt-2 text-sm text-muted line-clamp-2">{project.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                View project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
