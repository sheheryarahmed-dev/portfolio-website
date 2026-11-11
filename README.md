# Sheheryar Ahmed — Portfolio

A production-oriented foundation for Sheheryar Ahmed's personal portfolio. This repository is currently **Phase 1: project architecture and setup**. The homepage is intentionally a small setup placeholder; portfolio sections and contact submission are not implemented yet.

## Technology

- Next.js App Router and React
- TypeScript with strict checking
- Tailwind CSS v4
- Motion and Lucide React for future UI work
- Zod and React Hook Form for future form validation
- Resend for future email delivery
- ESLint and Prettier
- npm

## Architecture

```text
public/
  cv/                 Reserved for a future CV file
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

Portfolio section components, navigation UI, and footer UI are deliberately deferred to later phases. The project and biography data collections are empty until verified content is provided.

## Master visual reference

The supplied full-page portfolio image is the visual source of truth for future sections. It establishes a deep navy-to-blue background with subtle wave-shaped section transitions, warm cream typography, and selective coral-red highlights. Keep its compact, confident sans-serif type hierarchy, consistent content alignment, fine navy borders, softly layered rounded cards, and restrained shadows and motion.

Use the shared CSS variables in `src/app/globals.css` and the reusable primitives in `src/components/ui/` rather than introducing section-specific colors or card treatments. Maintain the reference's wide-screen two-column layouts where suitable and collapse them into a readable single column on smaller screens. Implement only the section in scope for each approved phase; do not reproduce the full reference page ahead of those requests.

## Prerequisites

- Node.js 20.19+, 22.13+, or 24+ (Node.js 22 LTS recommended)
- npm

## Install

```bash
npm install
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the canonical deployed URL before deployment. For local development, it may be left blank; the site uses `http://localhost:3000` as its metadata base.

Contact integration variables in `.env.example` are reserved for later phases. Do not put secret values in variables prefixed with `NEXT_PUBLIC_`; do not commit `.env.local`.

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

The contact API currently documents its future JSON request fields (`name`, `email`, `message`, `turnstileToken`) and returns HTTP 501 until the feature is implemented. Its Zod schema and email, Turnstile, and rate-limit type contracts are preparation only; no email is sent and no rate-limit or Turnstile service is active.

## Build and deployment

```bash
npm run lint
npm run type-check
npm run format:check
npm run build
```

Deploy to Vercel using the repository's supported Node.js runtime and set the canonical `NEXT_PUBLIC_SITE_URL` in the deployment environment. Add only the contact integration secrets that are needed when that feature is implemented.

## Conventions

- Keep route and page components as Server Components by default; use Client Components only for required browser interactivity.
- Keep content in typed modules under `src/data/`, and do not invent biography, employment, project, or achievement details.
- Use the CSS variables in `src/app/globals.css` for the master reference's navy, cream, and coral palette.
- Prefer semantic HTML, keyboard-visible focus, and reduced-motion-aware animation.
- Keep credentials server-side and add environment variables to `.env.example` by name only.

## Roadmap

1. Project architecture and configuration (current phase)
2. Header and Hero
3. About
4. Projects
5. Experience
6. Technical Skills
7. Education and Achievements
8. Contact
9. Footer
10. SEO, accessibility, performance optimization, and final testing
