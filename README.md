# Bean’s Lawn Care Services — Prospect Preview

A mobile-first Next.js concept for Bean’s Lawn Care Services in League City, Texas.

## What this preview does

- Positions the business around a simple homeowner promise: **Your yard, handled.**
- Uses only public facts that were strong enough to support in a private preview.
- Keeps the main conversion path as **Request a free estimate → open a pre-filled text → attach yard photos**.
- Does not store form data.
- Uses `previewMode: true` and `noindex,nofollow` so this concept is not presented to search engines as the official site.
- Uses an original CSS yard illustration and intentional project-photo placeholders instead of scraping Google/customer photography.

## Main files

- `config/site.ts` — centralized business data, services, colors and owner-confirmation items
- `app/page.tsx` — full homepage structure
- `app/globals.css` — custom visual system and responsive layout
- `components/YardPlanner.tsx` — service selector + pre-filled SMS estimate flow

## Real photo replacement plan

When Bean’s approves the project and provides photo rights, add files under:

- `public/images/hero/` — best wide lawn / finished-property image
- `public/images/projects/` — before/after pairs and finished work
- `public/images/about/` — owner/team photo
- `public/images/services/` — optional service-specific imagery

Then replace the CSS concept artwork and gallery placeholders in `app/page.tsx` with `next/image` components.

## Owner must confirm before public launch

- exact current service menu
- which type of work they want more of
- current service area
- current hours
- whether any published street address is customer-facing
- preferred estimate workflow
- whether SMS is the preferred quote channel
- recurring service details, if offered
- pricing, only if they want any pricing published
- owner/team names and story
- official logo and brand colors, if any
- permission to use project photos
- permission to use specific review material, if desired
- payment methods
- cancellation or scheduling policies
- any insurance / warranty claims they want displayed

## Verified public data used in preview

- Bean’s Lawn Care Services
- League City, TX
- call/text: (346) 815-7081
- email: Beanslawncareservices@gmail.com
- family-owned
- free estimates
- mowing, trimming and edging
- yard clean-ups and weed control
- mulch installs and flower-bed refreshes
- shrub trimming
- 5.0 rating appears in current local directory results; exact review count is intentionally not hard-coded because current sources disagree

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```
