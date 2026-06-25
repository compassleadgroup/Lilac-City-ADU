# CLAUDE.md

Standing rules and session tripwire for this repository. Read this first, every session. If anything here conflicts with another file, COMPLIANCE_STANDARDS.md is the authoritative master and wins. Flag the conflict, do not silently resolve it.

---

## SESSION-START TRIPWIRE (run before doing anything)
State these three out loud and confirm they match before you touch any file:
- NICHE: residential ADU (accessory dwelling unit) lead generation, Spokane metro only (City of Spokane, unincorporated Spokane County, City of Spokane Valley). This is a marketing and matching service, NOT a contractor.
- DESIGN SYSTEM: "Basalt and Ponderosa." Do not reuse tokens from any other portfolio site.
- REPO: the Spokane ADU repository under the compassleadgroup org.

If the niche, design system, or repo name does not match, STOP and ask the operator. A wrong-context build has happened before. This check prevents it.

ENTITY for all disclosures: Compass Camper LLC, operating publicly as Compass Lead Group.

---

## HARD GUARDRAILS (non-negotiable)
- DEPLOYMENT: Create GitHub pull requests only. The operator merges. Cloudflare Pages auto-builds from the Git connection. NEVER use Wrangler. NEVER call Cloudflare APIs directly. NEVER deploy or push straight to main. Direct Upload is an operator fallback, not yours.
- SECRETS: Never put secrets, API keys, form keys, or analytics IDs in chat or in committed plaintext. They go into Cloudflare environment variables or a terminal prompt only. Use placeholders in code.
- ONE COMMAND AT A TIME. No chained terminal commands. This is an iPad workflow.
- NO EM DASHES anywhere: not in copy, not in comments, not in commit messages. Use commas, periods, parentheses, or colons.
- CONFLICTS: If two files or instructions conflict, STOP and flag it. COMPLIANCE_STANDARDS.md overrides everything, including any legacy CLAUDE_TEMPLATE.md or PROJECT_BRIEF_TEMPLATE.md.
- PROGRAMMATIC PAGES: each location and guide page must carry genuinely unique, verified local content. No town-name-swap templates. No combinatorial service-times-jurisdiction pages.

## LEGACY TEMPLATE ERRORS TO OVERRIDE ON SIGHT
- Legacy templates wrongly specify LocalBusiness schema on the homepage. Use ProfessionalService or Organization plus Service instead.
- Legacy templates use the forbidden word "vetted." Never use it.
- Legacy templates target a 30 to 40 page footprint. The current standard is 18 to 26 pages, hard ceiling 26.

---

## COMPLIANCE QUICK REFERENCE (full detail in COMPLIANCE_STANDARDS.md)
- Position as a matching and marketing service, never a contractor. Use "licensed local ADU builders," "the builder you are matched with," "we connect you with." Never "we build," "our crews," "our projects."
- Header disclosure strip and footer entity disclaimer on EVERY page.
- TCPA consent on every form, NEVER pre-checked.
- Schema whitelist: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage. NEVER LocalBusiness, Review, or AggregateRating.
- Forbidden language: vetted, our network, pre-screened, hand-selected, top-rated, guaranteed, family-owned, since [year], certified or licensed as a first-person claim. No fabricated testimonials, team, history, tenure, or project counts.

---

## ACCURACY MANDATE (this is a YMYL-adjacent regulatory site)
- Do NOT fabricate or assume any regulatory or fee figure. Every specific number or rule must be verified against a CURRENT PRIMARY .gov source and cited.
- Where you cannot verify a figure, insert this exact placeholder and publish no guessed number: `[VERIFY: operator to confirm <item> from <primary source URL>]`.
- Third-party ADU sites (GatherADU, Maxable, contractor blogs) are NOT primary sources. Use them only to locate the primary source.
- HB 1337 (Washington, 2023) changed ADU rules. Older city or county documents may be stale. Do not publish pre-HB-1337 rules (for example a single-ADU-per-lot limit or an owner-occupancy requirement) without confirming they survive HB 1337 in that specific jurisdiction. Flag every such conflict.
- Cost figures are ranges with a date and a basis, never guarantees.

Primary sources: City of Spokane (spokanecity.org), Spokane County Building and Planning sheets BP-75 and BP-76 (spokanecounty.gov), City of Spokane Valley (spokanevalleywa.gov), Washington HB 1337 and RCW 36.70A, WA Department of Commerce (commerce.wa.gov).

---

## TECH AND DEPLOYMENT
- Astro 6.x, Tailwind CSS v4, TypeScript strict, static output. Cloud build via Cloudflare Pages and GitHub auto-build. No local build assumed. No Wrangler.
- astro.config.mjs `site` MUST exactly match the production domain. Add @astrojs/sitemap. Sitemap resolves at https://[domain]/sitemap-index.xml. Confirm before any Search Console submission.
- Web3Forms for forms (key as env var placeholder). GA4 via Cloudflare Zaraz (single Measurement ID placeholder, no conflicting IDs). TextNow 509 number as a placeholder.
- Hold Search Console and Bing Webmaster submission until the operator clears the demand and permit-count checks.

## WORKING STYLE
- Work in the batches defined in CLAUDE_CODE_BUILD_PROMPT.md. Stop for approval after each batch. Open one pull request at a time.
- Plain English before technical explanation. Tables and structured output over prose. Flag conflicts rather than resolving them silently.
