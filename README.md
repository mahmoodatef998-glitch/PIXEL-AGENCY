# PixelPulse Agency — Next.js Production Rebuild

Premium marketing + technology agency platform built with:

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis smooth scrolling (homepage only)
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
- `app/(marketing)/` shared marketing shell (nav, footer, motion)
- `components/` shared UI + nav/footer + motion providers
- `sections/` homepage modules
- `lib/` utility + content access layer + analytics + SEO helpers
- `hooks/` custom hooks (Lenis)
- `animations/` reusable motion wrappers
- `cms/` CMS bridge config (Sanity-ready)
- `content/` local fallback content
- `types/` shared TS types

## Leads

Contact form submits to `POST /api/contact` with:

- schema validation via Zod
- in-memory rate limiting (resets on serverless cold starts)
- email notification via Resend when env vars are set

## Analytics

Set optional public IDs in `.env.local`:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel
- `NEXT_PUBLIC_TIKTOK_PIXEL_ID` — TikTok Pixel

Tracked events: `form_submit`, `whatsapp_click`, `strategy_call_click`, `cta_click`.

## Next production tasks

- Connect CRM (HubSpot/Zoho/Sheets)
- Configure Sanity content studio + queries
- Add real assets (logos, dashboard screenshots, testimonials)
- Deploy to Vercel with environment variables
