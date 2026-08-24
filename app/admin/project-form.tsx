"use client";

import { useState, useTransition } from "react";
import { createProject, updateProject } from "./actions";
import { ImageUploadField } from "./image-upload-field";
import type { PortfolioProjectRow } from "@/lib/supabase/types";

const CATEGORY_OPTIONS = ["Restaurants & Cafes", "Medical & Clinics", "Beauty & Salons", "Automotive"];

export function ProjectForm({ project, onDone }: { project?: PortfolioProjectRow; onDone?: () => void }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = project ? await updateProject(project.id, formData) : await createProject(formData);
      if (result?.error) {
        setError(result.error);
        return;
      }
      onDone?.();
    });
  }

  return (
    <form action={handleSubmit} className="grid gap-4 rounded-2xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Project title" name="title" defaultValue={project?.title} required />
        <Field label="URL slug (leave blank to auto-generate)" name="slug" defaultValue={project?.slug} />
        <div>
          <label className="text-xs uppercase tracking-[0.1em] text-muted">Category</label>
          <input
            name="category"
            list="category-options"
            defaultValue={project?.category}
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent"
          />
          <datalist id="category-options">
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
        <Field label="Client / restaurant name" name="client" defaultValue={project?.client} required />
      </div>

      <Field label="Short summary (shown on the project card)" name="summary" defaultValue={project?.summary} textarea />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Challenge" name="challenge" defaultValue={project?.challenge} textarea />
        <Field label="Solution" name="solution" defaultValue={project?.solution} textarea />
      </div>

      <Field
        label="Results (one per line, e.g. '3x more reservations')"
        name="results"
        defaultValue={project?.results?.join("\n")}
        textarea
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Video links (one per line — YouTube, Vimeo, TikTok, Instagram, or Facebook post URLs)"
          name="video_urls"
          defaultValue={project?.video_urls?.join("\n")}
          textarea
        />
        <ImageUploadField label="Cover image" name="cover_image" folder="covers" defaultValue={project?.cover_image ?? ""} />
      </div>

      <Field
        label="Extra photo URLs (one per line, optional)"
        name="gallery"
        defaultValue={project?.gallery?.join("\n")}
        textarea
      />

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" name="featured" defaultChecked={project?.featured} className="size-4" />
          Featured (shows first, and on the homepage)
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" name="published" defaultChecked={project?.published ?? true} className="size-4" />
          Published (visible on the live site)
        </label>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
        >
          {isPending ? "Saving…" : project ? "Save changes" : "Add project"}
        </button>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  textarea
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.1em] text-muted">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          defaultValue={defaultValue}
          required={required}
          rows={3}
          className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent"
        />
      ) : (
        <input
          name={name}
          defaultValue={defaultValue}
          required={required}
          className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent"
        />
      )}
    </div>
  );
}
