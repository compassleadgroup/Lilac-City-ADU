# Lilac City ADU

Marketing and matching website for the Spokane metro ADU (accessory dwelling unit) niche. The site connects Spokane-area homeowners with licensed local ADU builders across the City of Spokane, unincorporated Spokane County, and the City of Spokane Valley. It is a marketing and lead-referral service, not a contractor.

Entity: Compass Camper LLC, operating publicly as Compass Lead Group.
Domain: lilaccityadu.com

## Governance docs (read before contributing)

- `CLAUDE.md`: standing rules and the session-start tripwire. Read first, every session.
- `COMPLIANCE_STANDARDS.md`: authoritative master. Overrides every other file. Matching-service positioning, disclosure, schema whitelist, forbidden language, accuracy mandate.
- `PROJECT_BRIEF.md`: the page-by-page build spec.
- `CONTENT_REFERENCE.md`: subject-matter, competitive, and SEO context. Regulatory and cost figures here are research leads, not verified facts.
- `CLAUDE_CODE_BUILD_PROMPT.md`: the canonical build prompt and batch sequence.

## Tech stack

- Astro 6.x, static output, TypeScript strict.
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin.
- `@astrojs/sitemap` for the sitemap. Resolves at `https://lilaccityadu.com/sitemap-index.xml`.
- Forms via Web3Forms (access key as a Cloudflare environment variable).
- Analytics via GA4 through Cloudflare Zaraz (single Measurement ID, set in Cloudflare).

## Deployment

- Hosting: Cloudflare Pages, auto-building from the Git connection.
- Deployment is pull-request only. The operator reviews and merges. No Wrangler, no direct Cloudflare API calls, no pushes straight to `main`.
- Secrets and IDs live in Cloudflare environment variables, never in the repo. See `.env.example` for the variable names.

## Local commands

Cloud build is assumed (Cloudflare Pages). For local reference only:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Status

Built in batches. See the batch sequence in `CLAUDE_CODE_BUILD_PROMPT.md`. Regulatory and fee specifics carry `[VERIFY: ...]` placeholders until the operator confirms them against the primary .gov sources. The site is not promoted until the operator clears the demand and permit-count checks.
