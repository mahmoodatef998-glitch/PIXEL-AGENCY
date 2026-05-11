/**
 * CMS bridge (Sanity-ready).
 * For now, this project uses local content fallback.
 * Add SANITY_PROJECT_ID/SANITY_DATASET and replace fetchers in lib/content.ts.
 */
export const cmsConfig = {
  provider: "sanity",
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2026-01-01"
};

export const isCmsEnabled = Boolean(cmsConfig.projectId);

