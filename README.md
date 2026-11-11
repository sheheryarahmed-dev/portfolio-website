# Sheheryar Ahmed — Portfolio

A production-oriented foundation for Sheheryar Ahmed's personal portfolio. All portfolio sections and the footer are implemented. Contact delivery requires the environment configuration below.

## Technology

- Next.js App Router and React
- TypeScript with strict checking
- Tailwind CSS v4
- Motion and Lucide React for future UI work
- Zod and React Hook Form for contact validation
- Resend for contact email delivery
- ESLint and Prettier
- npm

## Architecture

```text
public/
  cv/                 Centralized download path; add the CV PDF here
  fonts/
  images/
    logos/
    photo/
    projects/
src/
  app/                App Router, metadata, SEO routes, API route
  components/ui/      Reusable presentation primitives
  data/               Typed site and portfolio data
  lib/                Shared helpers and future contact contracts
  types/              Shared TypeScript interfaces
```

Section components live in `src/components/sections/`. Project content is centralized in `src/data/projects.ts`. Projects currently includes five supplied projects with no temporary placeholders. No project links are displayed until verified destinations are supplied.

The carousel shows three cards on desktop, two on tablet, and one on mobile. Arrow and pagination controls, native touch scrolling, keyboard scrolling, and reduced-motion preferences are supported. The shared `NavyWave` component preserves the approved Hero-to-About contour and repeats it before Projects and Experience.

Experience uses the approved reference's employment details, centralized in `src/data/experience.ts`, without stale duration totals. Company initials stand in for logos until approved logo assets are supplied.

Skills uses the seven categories and technology chips from the approved reference, centralized in `src/data/skills.ts`. Cards form three columns followed by four on wide screens, two columns on tablets, and one on mobile. Its wave and background transition match the earlier sections.

## Master visual reference

The supplied full-page portfolio image is the visual source of truth for future sections. Use the approved solid deep navy page background (`#14213D`), lighter navy panels (`#192A45`), and card navy (`#223653`) for depth, with subtle wave-shaped section transitions, warm cream typography, and selective coral highlights. Keep its compact, confident sans-serif type hierarchy, consistent content alignment, fine navy borders, softly layered rounded cards, and restrained shadows and motion.

The decorative code editor uses `#192A45` for its background, `#344762` for its border, `#C9C1B3` for line numbers, `#F4EDE0` for code, and `#FF6B5B` for syntax highlights and its icon badge. Its window dots are coral (`#FF6B5B`), yellow (`#FBBF24`), and green (`#22C55E`); yellow and green are reserved for these controls, not additional portfolio accents.

Use the shared CSS variables in `src/app/globals.css` and the reusable primitives in `src/components/ui/` rather than introducing section-specific colors or card treatments. Maintain the reference's wide-screen two-column layouts where suitable and collapse them into a readable single column on smaller screens. Implement only the section in scope for each approved phase; do not reproduce the full reference page ahead of those requests.

The shared navigation and Hero container has a 1520px maximum width, with 48px desktop gutters increasing to 64px on large screens. The desktop Hero uses a content-driven height and a separate transparent portrait and coral SVG; do not apply fades or overlays to the portrait.

## Prerequisites

- Node.js 20.19+, 22.13+, or 24+ (Node.js 22 LTS recommended)
- npm

## Install

```bash
npm install
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the canonical deployed URL before deployment. For local development, it may be left blank; the site uses `http://localhost:3000` as its metadata base.

Configure contact integration variables from `.env.example` in `.env.local` or your deployment environment. Do not put secret values in variables prefixed with `NEXT_PUBLIC_`; do not commit `.env.local`.

### Contact setup

- `NEXT_PUBLIC_SITE_URL`: exact public site origin (including scheme); use `http://localhost:3000` for local testing.
- `RESEND_API_KEY`: server-only Resend key.
- `CONTACT_EMAIL_FROM`: plain email address on a verified Resend sender domain.
- `CONTACT_EMAIL_TO`: recipient email address.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`: matching Cloudflare Turnstile keys. Configure allowed production hostnames in Cloudflare; use a separate development widget/key pair for localhost.

Restart/rebuild after configuring variables. The form is explicitly disabled when configuration is absent. The recipient and sender are never accepted from client input. Mail uses plain text, a fixed subject, and the visitor's validated address as reply-to.

Verify a real submission on the configured deployment and confirm receipt before publishing. Turnstile test keys may be used for development only; never use always-pass test keys in production. Rate limiting is intentionally deferred at the user's request; Turnstile and same-origin checks are not a substitute for rate limiting.

Run `node --test tests/contact.test.mjs` for isolated contact pipeline tests. They transpile the actual handlers with the installed TypeScript compiler and mock Turnstile/Resend; no real messages or credentials are used.

The header and About Download CV buttons use the centralized path `/cv/SheheryarAhmed_SoftwareEngineer.pdf`, served from `public/cv/SheheryarAhmed_SoftwareEngineer.pdf`.

## Local development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Create the production build              |
| `npm run start`        | Serve the production build               |
| `npm run lint`         | Run ESLint                               |
| `npm run type-check`   | Run TypeScript without emitting files    |
| `npm run format`       | Format supported project files           |
| `npm run format:check` | Check formatting without modifying files |

## SEO and security foundation

Metadata, canonical URL, Open Graph/Twitter cards, the generated Open Graph image, `sitemap.xml`, and `robots.txt` are configured through the App Router. The Next.js config applies baseline response security headers. Add new external image hosts to the Next.js image allowlist only when they are actually needed.

The npm override keeps the TypeScript ESLint parser's `minimatch` dependency on a patched 11.x release while the upstream dependency range catches up.

The contact API validates JSON fields (`name`, `email`, `message`, `turnstileToken`) with Zod, rejects cross-origin requests, caps request bodies at 32 KiB, and verifies Turnstile success, hostname, and the `contact` action before sending through Resend. Invalid requests receive safe 4xx responses; missing configuration returns 503 and provider failures return 502 without exposing credentials or provider details. Success means Resend accepted the message, not a guarantee of inbox delivery.

## Build and deployment

```bash
npm run lint
npm run type-check
npm run format:check
npm run build
```

Deploy to Vercel using the repository's supported Node.js runtime and configure the site origin and contact variables above.

## Conventions

- Keep route and page components as Server Components by default; use Client Components only for required browser interactivity.
- Keep content in typed modules under `src/data/`, and do not invent biography, employment, project, or achievement details.
- Use the CSS variables in `src/app/globals.css` for the master reference's navy, cream, and coral palette.
- Prefer semantic HTML, keyboard-visible focus, and reduced-motion-aware animation.
- Keep credentials server-side and add environment variables to `.env.example` by name only.

## Roadmap

1. Project architecture and configuration (complete)
2. Header and Hero (complete)
3. About (complete)
4. Projects (implemented; remaining real project content pending)
5. Experience (implemented from approved reference)
6. Technical Skills (implemented from approved reference)
7. Education and Achievements (implemented from approved reference)
8. Contact (implemented; live delivery requires configuration and verification)
9. Footer (implemented using centralized name and contact links)
10. SEO, accessibility, performance optimization, and final testing
