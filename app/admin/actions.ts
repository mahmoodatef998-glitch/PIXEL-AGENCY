"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { fetchVideoThumbnail } from "@/lib/utils";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function linesToArray(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/admin", "layout");
}

export async function createProject(formData: FormData) {
  const supabase = await createClient();

  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const videoUrls = linesToArray(String(formData.get("video_urls") ?? ""));
  let coverImage = String(formData.get("cover_image") ?? "").trim() || null;

  if (!coverImage && videoUrls[0]) {
    coverImage = await fetchVideoThumbnail(videoUrls[0]);
  }

  const { error } = await supabase.from("portfolio_projects").insert({
    title,
    slug: slugInput ? slugify(slugInput) : slugify(title),
    category: String(formData.get("category") ?? "").trim(),
    client: String(formData.get("client") ?? "").trim(),
    summary: String(formData.get("summary") ?? "").trim(),
    challenge: String(formData.get("challenge") ?? "").trim(),
    solution: String(formData.get("solution") ?? "").trim(),
    results: linesToArray(String(formData.get("results") ?? "")),
    cover_image: coverImage,
    gallery: linesToArray(String(formData.get("gallery") ?? "")),
    video_urls: videoUrls,
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on"
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/work");
  revalidatePath("/");
  return { error: null };
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient();

  const videoUrls = linesToArray(String(formData.get("video_urls") ?? ""));
  let coverImage = String(formData.get("cover_image") ?? "").trim() || null;

  if (!coverImage && videoUrls[0]) {
    coverImage = await fetchVideoThumbnail(videoUrls[0]);
  }

  const { error } = await supabase
    .from("portfolio_projects")
    .update({
      title: String(formData.get("title") ?? "").trim(),
      slug: slugify(String(formData.get("slug") ?? "")),
      category: String(formData.get("category") ?? "").trim(),
      client: String(formData.get("client") ?? "").trim(),
      summary: String(formData.get("summary") ?? "").trim(),
      challenge: String(formData.get("challenge") ?? "").trim(),
      solution: String(formData.get("solution") ?? "").trim(),
      results: linesToArray(String(formData.get("results") ?? "")),
      cover_image: coverImage,
      gallery: linesToArray(String(formData.get("gallery") ?? "")),
      video_urls: videoUrls,
      featured: formData.get("featured") === "on",
      published: formData.get("published") === "on",
      updated_at: new Date().toISOString()
    })
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/work");
  revalidatePath("/");
  return { error: null };
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  await supabase.from("portfolio_projects").delete().eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/work");
  revalidatePath("/");
}

export async function updateSiteSettings(formData: FormData) {
  const supabase = await createClient();
  const logoUrl = String(formData.get("logo_url") ?? "").trim() || null;

  const { error } = await supabase
    .from("site_settings")
    .update({ logo_url: logoUrl, updated_at: new Date().toISOString() })
    .eq("id", 1);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  revalidatePath("/admin");
  return { error: null };
}
