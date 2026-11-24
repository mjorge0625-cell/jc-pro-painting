# JC Pro Painting

Bilingual marketing website for JC Pro Painting, a family-run painting company serving Nampa, the Treasure Valley, and select projects as far as McCall, Idaho.

Live site: [jcpropaintingco.com](https://jcpropaintingco.com) (English at `/`, Spanish at `/es`). Vercel preview: [jc-pro-painting.vercel.app](https://jc-pro-painting.vercel.app)

## Development

```bash
npm install
npm run dev
```

- `npm run build` validates the local Sites/Vinext build.
- `npm run build:vercel` validates the Vercel Next.js build.
- `npm test` builds the site and runs the rendered-content spec.
- `npm run graph` refreshes the code map in `graphify-out/` (needs the `.venv` described in `CLAUDE.md`).

Business facts, page titles and the data search engines read live in `app/seo.ts`. Set `SITE_URL` to change the address used in canonical links, the sitemap and link previews.

The quote form defaults to FormSubmit delivery for `jcpropaintllc@gmail.com`. Set `QUOTE_FORM_ENDPOINT` to replace that endpoint later.
