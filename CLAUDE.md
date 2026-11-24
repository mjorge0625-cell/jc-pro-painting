# jc-pro-painting: rules for every session

Bilingual marketing website for JC Pro Painting (Junior Cosio, Nampa, Idaho). A JM Technologies client site.
Live at jcpropaintingco.com, deployed by Vercel from `main`.

## Never
- Invent a business fact: hours, prices, street address, license, years in business, ratings or reviews. Ask Jorge, who asks Junior.
- Present stock photos or our own promises as customer work or customer reviews.
- Push to `main` without Jorge's OK. `main` publishes to the live site.
- Send anything to a real person, or submit the live quote form. Drafts only; Jorge sends.
- Commit secrets. `.env*` is ignored.

## Ponytail ladder (pinned: DietrichGebert/ponytail v4.10.0)
Take the first rung that works and name it in the commit:
1. Configure something the site already uses (Next.js metadata, Vercel, FormSubmit).
2. Plain HTML and CSS, or the Node standard library.
3. One well-known library, with a written reason.
4. Minimal new code that passes the tests.
Never removes validation, accessibility or honesty safeguards.

## graphify (pinned: graphifyy==0.9.71 in `.venv`)
After a change to the code: `npm run graph`. Query `graphify-out/graph.json` instead of re-reading files.
Set up once with `python3 -m venv .venv && .venv/bin/pip install graphifyy==0.9.71`.

## Layout
- `app/seo.ts` business facts (name, phone, towns, site address), page titles, and the data search engines read. Change a fact here only.
- `app/home.tsx` the page and all its words, English and Spanish side by side.
- `app/(en)/` English at `/`. `app/(es)/es/` Spanish at `/es`. Each has its own layout so the page language is declared correctly.
- `app/globals.css` all styling.
- `public/` pictures. Each photo has WebP copies at the widths the layout uses plus a JPEG fallback.
- `tests/rendered-html.test.mjs` the spec: what the built page must and must not say.
- `.claude/skills/contractor-seo/` the SEO checklist used on this site.

## House style
Plain names, one job per file. Comments explain why. Tests read like the spec and are written before the code.
Every change in English gets the same change in Spanish. Report results to Jorge in plain English with evidence.

## Commands
- `npm test` builds the site and runs the spec.
- `npm run build:vercel` the build Vercel runs. Must pass before any push.
- `npm run lint` code style.
- `npm run dev` local preview.
