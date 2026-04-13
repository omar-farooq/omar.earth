# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (Docker - preferred)
docker compose up -d          # Start dev server at http://localhost:3021
docker compose down           # Stop containers

# Without Docker
npm run dev                   # Start dev server
npm run build                 # Build static export (outputs to ./out)
npm run lint                  # Run ESLint
npm run test                  # Run all tests
npx jest __tests__/home.test.jsx  # Run a single test file
```

## Architecture

This is a **Next.js static site** (output: 'export') deployed to AWS S3. There is no server-side runtime — all pages are pre-rendered at build time. TypeScript build errors are intentionally ignored (`ignoreBuildErrors: true`).

### Content System

Blog posts and projects are file-based, stored as Markdown with gray-matter frontmatter:

- `posts/*.md` — blog posts. Required frontmatter: `title`, `date`, `backgroundImage`, `shortDescription`
- `projects/*.md` — project entries. Required frontmatter: `title`, `image`

`lib/posts.js` and `lib/projects.js` read these files at build time using Node `fs` — these functions only work in server components or `generateStaticParams`, not in client components.

### Page Structure

- `app/layout.tsx` — root layout (fonts, global CSS, metadata)
- `app/baseLayout.tsx` — shared shell used by all pages: navigation bar, hamburger menu, contact modal
- `app/page.tsx` — home page (client component)
- `app/blog/[slug]/page.tsx` — dynamic blog post page; uses `generateStaticParams` to enumerate all posts
- `app/projects/[slug]/page.tsx` — dynamic project page; same pattern

`BaseLayout` accepts a `page` prop (`"home"`, `"blog"`, `"about"`) used to highlight the active nav link.

### Contact Form

The contact form (`app/contactFormModal.jsx`) is a modal triggered from the nav. It posts to an AWS Lambda function (GoLang runtime) which sends email via AWS SES. The Lambda URL is external to this repo.

### Styling

Tailwind CSS with the typography plugin (`@tailwindcss/typography`). Custom colors (e.g. `bg-soft-stone`) are defined in `app/globals.css`. Images are unoptimized (required for static export).

### Tests

Tests live in `__tests__/` and use Jest + React Testing Library with jsdom. They test component rendering — run with `npm test`.

### CI/CD

GitHub Actions (`.github/workflows/aws-deploy.yml`) runs `npm ci && npm test && npm build` then syncs `./out` to the S3 bucket `omar.earth` on every push.
