"use client";

import { useState, useTransition } from "react";
import { updateSiteSettings } from "./actions";
import { ImageUploadField } from "./image-upload-field";

export function BrandingForm({ logoUrl }: { logoUrl: string | null }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  function handleSubmit(formData: FormData) {
    setError(null);
    setSaved(false);
    startTransition(async () => {
      const result = await updateSiteSettings(formData);
      if (result?.error) {
        setError(result.error);
        return;
      }
      setSaved(true);
    });
  }

  return (
    <form action={handleSubmit} className="grid gap-4 rounded-2xl border border-border bg-surface p-6">
      <h2 className="font-display text-lg font-bold text-text">Site logo</h2>
      <p className="text-sm text-muted">
        Shown in the navbar and footer across the whole site. Upload an image or leave empty to use the text logo.
      </p>
      <ImageUploadField label="Logo" name="logo_url" folder="branding" defaultValue={logoUrl ?? ""} />

      {error && <p className="text-sm text-red-400">{error}</p>}
      {saved && !error && <p className="text-sm text-success">Saved.</p>}

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
        >
          {isPending ? "Saving…" : "Save logo"}
        </button>
      </div>
    </form>
  );
}
