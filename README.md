# PixelPulse Agency — Next.js Production Rebuild

Premium marketing + technology agency platform built with:

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis smooth scrolling
- Lucide icons
- CMS-ready architecture (Sanity-ready fallback layer)

## Quick start

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

This project runs with local fallback content by default. Sanity is optional.

- Copy `.env.example` to `.env.local`
- Add the variables in your hosting provider (Vercel recommended)

## Project structure

- `app/` routes, API handlers, metadata, sitemap/robots
- `components/` shared UI + nav/footer + motion providers
- `sections/` homepage modules
- `lib/` utility + content access layer
- `hooks/` custom hooks (Lenis)
- `animations/` reusable motion wrappers
- `cms/` CMS bridge config (Sanity-ready)
- `content/` local fallback content
- `types/` shared TS types

## Leads

Contact form submits to `POST /api/contact` with:
- schema validation via Zod
- rate limiting via Vercel KV (Redis-backed)
- lead storage in KV + email notification via Resend (set env vars)

## Next production tasks

- Connect CRM (HubSpot/Zoho/Sheets)
- Configure Sanity content studio + queries
- Add analytics (GA4 + Meta + TikTok events)
- Add real assets (logos, dashboard screenshots, testimonials)
- Deploy to Vercel with environment variables

