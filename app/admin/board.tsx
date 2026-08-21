"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { deleteProject } from "./actions";
import { ProjectForm } from "./project-form";
import type { PortfolioProjectRow } from "@/lib/supabase/types";

export function AdminBoard({ projects }: { projects: PortfolioProjectRow[] }) {
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="mt-8 space-y-6">
      {adding ? (
        <ProjectForm onDone={() => setAdding(false)} />
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
        >
          <Plus className="size-4" /> Add new project
        </button>
      )}

      <div className="space-y-4">
        {projects.length === 0 && <p className="text-sm text-muted">No projects yet. Add your first one above.</p>}

        {projects.map((project) =>
          editingId === project.id ? (
            <ProjectForm key={project.id} project={project} onDone={() => setEditingId(null)} />
          ) : (
            <article key={project.id} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-text">{project.title}</h3>
                    {project.featured && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-black">
                        Featured
                      </span>
                    )}
                    {!project.published && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-muted">
                        Draft
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {project.category} · {project.client}
                  </p>
                  {project.summary && <p className="mt-2 text-sm text-text">{project.summary}</p>}
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => setEditingId(project.id)}
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-text hover:border-accent"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${project.title}"? This can't be undone.`)) {
                        deleteProject(project.id);
                      }
                    }}
                    className="rounded-full border border-red-500/40 px-4 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/10"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}
