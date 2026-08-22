"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
    FB?: { XFBML: { parse: (el?: HTMLElement) => void } };
  }
}

function loadScriptOnce(src: string, id: string, onLoad: () => void) {
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) {
    onLoad();
    return;
  }
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  script.onload = onLoad;
  document.body.appendChild(script);
}

export function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    loadScriptOnce("https://www.instagram.com/embed.js", "instagram-embed-script", () => {
      window.instgrm?.Embeds.process();
    });
  }, [url]);

  return (
    <div className="flex justify-center bg-surface2 py-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ maxWidth: 540, width: "100%", margin: 0 }}
      />
    </div>
  );
}

export function FacebookEmbed({ url }: { url: string }) {
  useEffect(() => {
    loadScriptOnce("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0", "facebook-jssdk", () => {
      window.FB?.XFBML.parse();
    });
  }, [url]);

  return (
    <div className="flex justify-center bg-surface2 py-4">
      <div id="fb-root" />
      <div className="fb-video" data-href={url} data-width="540" data-show-text="false" />
    </div>
  );
}
