"use client";

import { useState, type ChangeEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export function ImageUploadField({
  label,
  name,
  folder,
  defaultValue
}: {
  label: string;
  name: string;
  folder: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("portfolio").upload(path, file, {
        cacheControl: "3600",
        upsert: false
      });
      if (error) throw error;
      const { data } = supabase.storage.from("portfolio").getPublicUrl(path);
      setValue(data.publicUrl);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  return (
    <div>
      <label className="text-xs uppercase tracking-[0.1em] text-muted">{label}</label>
      <div className="mt-1.5 flex items-center gap-3">
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="Preview" className="size-14 rounded-lg border border-border object-cover" />
        )}
        <label className="cursor-pointer rounded-lg border border-border bg-bg px-3 py-2 text-xs font-semibold text-text hover:border-accent">
          {uploading ? "Uploading…" : "Upload image"}
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading} />
        </label>
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Or paste an image URL"
        className="mt-2 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent"
      />
      {uploadError && <p className="mt-1 text-xs text-red-400">{uploadError}</p>}
    </div>
  );
}
