# ParityBit Security

Marketing site for **ParityBit Security** — intelligence-driven cybersecurity services and AI-native platforms (ATLAS, VECTOR, Trace, ZeroXphish).

**Production domain:** [https://paritybitsecurity.com](https://paritybitsecurity.com)

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Live stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + React Router 6 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3, custom CSS, inlined layout styles |
| Animation | Motion (`framer-motion`) |
| SEO | react-helmet-async; canonical / OG / robots / sitemap use `paritybitsecurity.com` |
| Hosting | Static SPA (company production on `paritybitsecurity.com`) |

## Getting started

### Prerequisites

- **Node.js 18+**
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run preview
```

### Type check

```bash
npm run typecheck
```

## Deploy (company production)

Hand this repository to the company GitHub / hosting account and deploy the Vite static build.

Suggested settings:

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

`vercel.json` (if deploying on Vercel) includes:

- SPA rewrite to `index.html` (keeps `robots.txt` / `sitemap.xml` public)
- Redirect `www.paritybitsecurity.com` → `https://paritybitsecurity.com`

Attach **`paritybitsecurity.com`** (and optionally `www`) as the production domain on the company project. Canonicals, Open Graph, `robots.txt`, and `sitemap.xml` already point at that domain — no personal `*.vercel.app` URLs in the shipped app.

## Project structure

```
src/
├── components/       # UI (nav, sections, FAQ, marquee, booking, footer)
├── content/          # Copy and data (nav, products, footer, partners…)
├── pages/            # Home landing page
├── routes.tsx        # Lazy-loaded routes
├── framer-fixes.css  # Layout overrides for exported markup class names
└── App.tsx           # Router + global shell

public/
├── assets/images/    # Logos, product art, SVGs
├── assets/fonts/     # Local font files
├── partners/         # Partner logos
├── robots.txt        # Sitemap → https://paritybitsecurity.com/sitemap.xml
└── sitemap.xml       # Official domain URLs
```

## Routes

| Path | Behavior |
|------|----------|
| `/` | Homepage |
| `/contact` | Redirects to the homepage booking section |
| `*` | Redirects to `/` |

## Content updates

Most marketing copy lives in `src/content/`:

- `nav.ts` — navigation and dropdowns
- `products.ts` — ATLAS, VECTOR, Trace, ZeroXphish
- `footer.ts` — footer links, newsletter, legal
- `about.ts`, `partners.ts`, `cta.ts`, `whyUs.ts`, `homeServices.ts`

Homepage sections are composed in `src/pages/Home.tsx` and pull from these data files.

## Architecture notes

- **Single landing page:** Only `/` is served as a full page; other paths redirect home.
- **Global nav:** `SiteNav` is the primary header.
- **SEO:** Meta, canonical, OG, Twitter, robots, and sitemap use `https://paritybitsecurity.com`.
- **Code splitting:** Routes are lazy-loaded in `src/routes.tsx`.
- **Large `index.html`:** Layout CSS is inlined in `index.html` (~4MB). Expected for now; gzip-compresses well.

## Known limitations

- Newsletter forms are UI-only (no backend wired).
- Some platform links (Atlas / Vector / Trace / ZeroXphish) point at product URLs on the official domain.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript without emitting |

## License

Private — ParityBit Security.
