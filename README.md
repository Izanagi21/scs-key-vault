# SCS Key Vault landing page

A single-page website for the Smart Fingerprint Key Holder System capstone project of the School of Computer Studies, City College of Tagaytay.

## Requirements

- Node.js 20.19 or newer (Node 22 LTS recommended)
- pnpm 10.12.1

## Local setup

```bash
cd scs-key-vault-landing
npm install --global pnpm@10.12.1
pnpm install
cp .env.example .env.local
pnpm dev
```

On PowerShell, use `Copy-Item .env.example .env.local` in place of `cp` if preferred. Open http://localhost:3000.

## Environment variables

| Variable | Purpose | Fallback |
| --- | --- | --- |
| `NEXT_PUBLIC_DASHBOARD_URL` | Absolute URL of the deployed admin dashboard | `#`, as requested |
| `NEXT_PUBLIC_SITE_URL` | Canonical landing-page origin, e.g. `https://your-domain.example` | Vercel production domain, Vercel deployment domain, then `http://localhost:3000` |

These values are public and resolved at build time. Never place credentials in them. Set them before building and redeploy after changing them. Set the canonical URL explicitly for a custom domain. A blank dashboard URL makes the Open Dashboard links point to the top of the current page; the static landing page does not supply an admin app.

## Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

`pnpm build` produces the standard Next.js production output. The landing page, not-found page, sitemap, and robots routes are statically generated. There is no custom server, database, API route, authentication service, or `output: export` setting. Standard Next.js image optimization remains available on Vercel. `next/font` downloads Inter and JetBrains Mono during the build and serves them locally; the build environment needs access to Google's font endpoints.

## Deploy on Vercel

1. Commit this project, including `pnpm-lock.yaml`, to a Git repository and push it to your Git provider.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Choose the **Next.js** framework preset. If this folder is nested in a larger repository or monorepo, set **Root Directory** to `scs-key-vault-landing` (or its full repository-relative path).
4. Use the standard `pnpm install --frozen-lockfile` install command and `pnpm build` build command. Leave Output Directory at the Next.js default. Select Node.js 22 or a newer supported version.
5. Add `NEXT_PUBLIC_DASHBOARD_URL` with the real admin app URL. Add `NEXT_PUBLIC_SITE_URL` with the production landing-page origin when known; otherwise Vercel's domain fallback is used.
6. Select **Deploy**. Check the homepage, `/robots.txt`, `/sitemap.xml`, `/images/og-image.png`, and a nonexistent route.
7. When adding a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy so canonical and social URLs use that domain.

## Editing content and assets

All visitor-facing copy and list data live in `src/data/`. `site.ts` holds shared labels, section headings, navigation, and SEO copy. Features, steps, hardware, dashboard sample data, technology groups, team, and FAQ have their own typed data files. `src/lib/constants.ts` centralizes site and dashboard URLs.

- Replace the clearly marked member and adviser placeholders in `src/data/team.ts`. Put portraits in `public/images/team/` and set each member's `image` path. The current initials are intentional placeholder avatars.
- `public/images/scs-logo.jpg` and `public/images/cct-logo.jpg` are the original logos supplied with the brief. They are displayed with `next/image` and retain their original backgrounds.
- `public/logo.svg` and `public/favicon.ico` are the Key Vault project symbol, separate from the institutional crests.
- `public/images/hero-device.png` is a conceptual cabinet illustration, not a photo of a manufactured device. The visible hero cabinet is built from HTML, SVG icons, CSS, and React so its states can change accessibly.
- `public/images/og-image.png` is a real 1200 × 630 social image. Update it if the project identity changes.
- The year is an editable project-year value in `src/data/site.ts`, not a claim about a verified graduation cohort.

## Interaction and accessibility

The hero performs one short simulated access sequence. Reset demo returns it to the ready state; Simulate fingerprint scan runs it again. With reduced motion enabled, automatic scanning is disabled and the button changes the state immediately. No fingerprint is collected. The dashboard search and event filter operate only on labeled sample data. Its KPIs and slot states describe that sample snapshot, not a live device.

The navbar highlights the current linked section, collapses on small screens, closes on link selection, and supports Escape to return focus to its toggle. FAQ items use native `details`/`summary` disclosure controls. A skip link, semantic landmarks, visible focus rings, readable color contrast, reduced-motion styles, responsive table scrolling, and explicit form labels are included.

## Verification and performance

Targets are Lighthouse Performance 90+, Accessibility 95+, and SEO 100. Measure against `pnpm build` + `pnpm start`, not the development server, and repeat on the deployed URL because hardware, network conditions, and hosting can change scores. Automated checks do not replace manual assistive-technology review. Do not represent the device simulation or the dashboard's sample figures as real operational data.

Next.js is pinned to 15.5.28 with the corresponding ESLint config; React is pinned to 19.1.10. Sharp is used by Next.js image optimization. Tailwind CSS v3 meets the permitted simpler configuration. ESLint 9 matches Next.js 15's lint integration. Keep the lockfile and review security updates before deployment.

## Main project structure

```text
public/                 School crests, project logo, favicon, device and social images
src/app/                App Router shell, page, CSS, 404, sitemap, robots
src/components/layout/  Navbar and footer
src/components/sections/All ten content sections
src/components/ui/      Reusable UI primitives
src/data/               Typed content and clearly marked demo/team placeholders
src/lib/                URL configuration and class-name helper
```
