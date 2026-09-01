# ParityBit Security

Marketing site for **ParityBit Security** — intelligence-driven cybersecurity services and AI-native platforms (ATLAS, VECTOR, Trace, ZeroXphish).

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, on top of a Framer export that has been progressively refactored into content-driven React components.

## Live stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + React Router 6 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3, custom CSS, Framer export styles |
| Animation | Framer Motion |
| SEO | react-helmet-async |
| Hosting | Vercel (static SPA) |

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

## Deploy to Vercel

This repo is configured for zero-config Vercel deployment.

1. Push the repository to GitHub (or GitLab/Bitbucket).
2. Import the project in [Vercel](https://vercel.com/new).
3. Use these settings (auto-detected for Vite):

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

`vercel.json` includes SPA rewrites so client-side routes (`/about`, `/services`, `/blogs/...`) work on refresh and direct links.

### Custom domain

After deployment, add your domain in Vercel → **Project → Settings → Domains**. No code changes are required for routing.

## Project structure

```
src/
├── components/       # Custom UI (nav, sections, FAQ, marquee, etc.)
├── content/          # Copy and data (nav, products, footer, partners…)
├── pages/            # Route pages (Home is hybrid; others are Framer exports)
├── routes.tsx        # Lazy-loaded route modules
├── framer-fixes.css  # Layout/animation overrides for Framer markup
└── App.tsx           # Router + global shell

public/
├── assets/images/    # Logos, product art, Framer SVGs
├── assets/fonts/     # Local font files
└── partners/         # Partner logos
```

## Key routes

| Path | Page |
|------|------|
| `/` | Homepage (custom sections + Framer shell) |
| `/about` | About |
| `/services` | Services overview |
| `/contact` | Contact + FAQ |
| `/blogs` | Research library |
| `/case-studies` | Case studies |
| `/pricing` | Pricing |
| `/teams` | Team |
| `*` | 404 page |

## Content updates

Most marketing copy lives in `src/content/`:

- `nav.ts` — navigation and dropdowns
- `products.ts` — ATLAS, VECTOR, Trace, ZeroXphish
- `footer.ts` — footer links, newsletter, legal
- `about.ts`, `partners.ts`, `cta.ts`, `whyUs.ts`

Homepage custom sections are composed in `src/pages/Home.tsx` and pull from these data files.

## Architecture notes

- **Hybrid Framer export:** Inner pages are large Framer-generated JSX files. The homepage mixes Framer layout with custom React sections (`AboutSection`, `ProductsSection`, `PartnerMarquee`, etc.).
- **Global nav:** `SiteNav` replaces duplicated Framer headers (hidden via `framer-fixes.css`).
- **Framer runtime removed:** The legacy Uncage/Framer JS runtime was removed from `index.html` to avoid loading a second copy of React in production.
- **Code splitting:** Routes are lazy-loaded in `src/routes.tsx` to reduce the initial bundle.
- **Large `index.html`:** Framer SSR CSS is inlined in `index.html` (~4MB). This is expected for now and gzip-compresses well; future work could externalize styles.

## Known limitations

- Some inner pages still reference Framer CDN assets and old `og:url` metadata.
- Newsletter forms are UI-only (no backend wired).
- `captured-raw*.html` files in the repo root are export artifacts and are not used at runtime.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript without emitting |

## License

Private — ParityBit Security.
