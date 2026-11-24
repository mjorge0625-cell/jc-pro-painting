---
name: contractor-seo
description: Audit and fix search visibility for a small local contractor website (painter, concrete, roofing, handyman) that serves an area rather than a storefront. Use when asked to "SEO optimize", "rank better", "show up on Google", or before launching or handing over a contractor site.
---

# Contractor SEO

A short checklist for one-page or few-page sites for service-area businesses. Distilled from
[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) (MIT, read 2026-11-24) and cut down to what a
local contractor site needs. For keyword research, backlinks, Search Console data or a large site, install the full plugin instead.

## Rules that outrank the checklist

- **Never invent a fact.** No hours, prices, street address, license number, years in business, ratings or reviews
  unless the owner gave them. A missing fact is a question for the owner, not a gap to fill.
- **Mark up only what the page shows.** No review or rating data written by the business about itself; Google ignores it and it reads as fake.
- **Measure before and after.** A change without a number or a passing test is not done.
- **The website is the smaller half.** Google Business Profile category, reviews and matching name/phone everywhere
  move local rankings more than anything on the page. Say so in the report.

## Checklist

Work top to bottom. Each line is checkable in the rendered HTML.

### 1. Identity (name, phone, town)
- Name, phone and town appear as visible text, and are identical in the page, the `<head>`, the structured data and the Google Business Profile.
- Phone is a `tel:` link. On phones, a call button and a quote button stay on screen.
- Keep business facts in one file that the page and the structured data both import.

### 2. Head
- `<title>`: 30–60 characters, trade + town first, brand last. One per language.
- Meta description: 120–160 characters, does not repeat the title, ends with this page's call to action (phone or free quote).
- Self-referencing canonical on every page. Absolute URLs. Present in the first HTML response, not added by script.
- Link preview: `og:title`, `og:description`, `og:image` (1200×630), `twitter:card=summary_large_image`.
- `robots.txt` allows crawling and names the sitemap. `sitemap.xml` lists only canonical, indexable URLs. Leave out
  `priority` and `changefreq` (ignored). `lastmod` only when content really changed.

### 3. Headings and content
- Exactly one `<h1>`, containing the trade and the town. No skipped heading levels.
- Homepage at least 500 words of real content; a dedicated service page at least 800.
- Answer the questions customers ask (areas served, free estimates, what you do, languages) as plain visible text.
  Do not add `FAQPage` or `HowTo` structured data: Google retired those results.
- One page per service is the strongest on-site local factor. Recommend it once the owner has real photos and details
  for each service; do not pad pages with invented text to get there.

### 4. Structured data (JSON-LD in the server-rendered HTML)
- Use the most specific type: `HousePainter`, `RoofingContractor`, `Plumber`, `Electrician`, `GeneralContractor`,
  otherwise `HomeAndConstructionBusiness`.
- Always: `name`, `url`, `telephone`, `image`, `address`. A service-area business gives town, state and country and
  omits the street. `areaServed` lists the named towns shown on the page.
- Only when the owner supplied them: `openingHoursSpecification`, `priceRange`, `geo`, `sameAs` (real profiles).
- Never: `aggregateRating` or `review` for the business's own claims.

### 5. Languages
- Each language gets its own path (`/es`), never a query string, and the right `<html lang>`.
- `hreflang` on every page: one for each language including itself, plus `x-default`. They must match the canonicals exactly.
  Use one method (HTML tags for small sites). Language codes only (`en`, `es`) unless a region is truly targeted.
- Translate titles, descriptions and alt text too. Spanish runs 15–25% longer; check phone layouts.

### 6. Pictures and speed
- Real `<img>` tags, not CSS backgrounds, so pictures have alt text and can be found early.
- WebP at the widths the layout uses, JPEG fallback, `width` and `height` set.
- Budgets: main picture under 200 KB, others under 100 KB, thumbnails under 50 KB.
- The first big picture: `fetchpriority="high"`, never lazy. Everything below the fold: `loading="lazy" decoding="async"`.
- Alt text 10–125 characters describing what is in the picture; `alt=""` for decoration. Never describe stock photos as the owner's own jobs.
- Targets: largest picture or headline painted within 2.5 s, layout shift under 0.1, text contrast 4.5:1 or better.

### 7. AI search
- Same work as above: server-rendered text, clear answers near the top of each section. No `llms.txt` needed; Google says it neither helps nor hurts.
- Do not block `OAI-SearchBot`, `Claude-SearchBot` or `PerplexityBot` if the owner wants to be cited.

## How to verify

1. Add or update tests that read the rendered HTML (title and description length, canonical, hreflang, one h1, JSON-LD parses, every image has alt + size).
2. Run Lighthouse on a phone profile before and after; report performance, accessibility, SEO, largest paint time and page weight.
3. Screenshot phone and desktop in every language. Scroll the page first so lazy pictures load.
4. After deploy, the owner or Jorge pastes the live URL into Google's Rich Results Test and requests indexing in Search Console.

## Report to the owner, in plain English

What changed, the before/after numbers, and the list of things only they can do: verify the Google Business Profile
and pick the right main category, ask every finished job for a review, supply real job photos, confirm hours,
license and insurance details, and keep name and phone identical on Facebook, Yelp, Nextdoor, BBB, Bing Places and Apple.
