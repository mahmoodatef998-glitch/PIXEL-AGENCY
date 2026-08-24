import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function safeHost(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, "").replace(/^(m|l|web|vm)\./, "");
  } catch {
    return null;
  }
}

/** Converts a YouTube/Vimeo/TikTok watch URL into an embeddable iframe URL. */
export function getVideoEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = safeHost(url);
    if (!host) return null;

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }
    if (host.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      if (parsed.pathname.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed/${parsed.pathname.split("/")[2]}`;
      }
    }
    if (host.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    if (host.includes("tiktok.com")) {
      const match = parsed.pathname.match(/\/video\/(\d+)/);
      if (match) return `https://www.tiktok.com/embed/v2/${match[1]}`;
    }
    return null;
  } catch {
    return null;
  }
}

/** Platforms rendered via a native widget instead of a plain iframe embed. */
export function getVideoWidgetPlatform(url: string): "instagram" | "facebook" | null {
  const host = safeHost(url);
  if (!host) return null;
  if (host.includes("instagram.com") || host === "instagr.am") return "instagram";
  if (host.includes("facebook.com") || host === "fb.watch") return "facebook";
  return null;
}

/** Best-effort thumbnail for a video link. YouTube is a deterministic URL;
 *  Vimeo/TikTok require an oEmbed fetch (see fetchVideoThumbnail). */
export function getYoutubeThumbnail(url: string): string | null {
  const embed = getVideoEmbedUrl(url);
  if (!embed) return null;
  const host = safeHost(url);
  if (!host?.includes("youtu")) return null;
  const id = embed.split("/embed/")[1];
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}

/** Fetches a thumbnail via oEmbed for platforms that expose one publicly (Vimeo, TikTok). */
export async function fetchVideoThumbnail(url: string): Promise<string | null> {
  const host = safeHost(url);
  if (!host) return null;

  try {
    if (host.includes("vimeo.com")) {
      const res = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.thumbnail_url ?? null;
    }
    if (host.includes("tiktok.com")) {
      const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.thumbnail_url ?? null;
    }
    if (host.includes("youtu")) {
      return getYoutubeThumbnail(url);
    }
    return null;
  } catch {
    return null;
  }
}
