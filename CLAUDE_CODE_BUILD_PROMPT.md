# CLAUDE_CODE_BUILD_PROMPT.md

Canonical build prompt for the Spokane ADU matching site. COMPLIANCE_STANDARDS.md is the authoritative master and overrides this file and all others. If anything here conflicts with a project file, or two files conflict, STOP and flag it.

---

## 0. SESSION-START TRIPWIRE (run this check first, every session)
Before doing anything, confirm you are in the correct project. State out loud:
- NICHE: residential ADU (accessory dwelling unit) lead generation, Spokane metro only (City of Spokane, unincorporated Spokane County, City of Spokane Valley). This is a marketing and matching service, NOT a contractor.
- DESIGN SYSTEM: "Basalt and Ponderosa" (Inland Northwest palette, defined in section 7). Do not reuse tokens from any other portfolio site.
- REPO: the Spokane ADU repository under the compassleadgroup org. If the repo name, niche, or design system does not match, STOP and ask the operator. This tripwire exists because a wrong-context build has happened before.
- ENTITY: Compass Camper LLC, operating publicly as Compass Lead Group.

If any of the three do not match, stop and confirm with the operator before proceeding.

---

## 1. HARD GUARDRAILS (non-negotiable)
- DEPLOYMENT: You create GitHub pull requests only. The operator merges. Cloudflare Pages auto-builds from the Git connection. You NEVER use Wrangler, NEVER call Cloudflare APIs directly, NEVER deploy, and NEVER push straight to main. Direct Upload is a fallback the operator triggers, not you.
- SECRETS: Never put secrets, API keys, form keys, or analytics IDs in chat or in committed plaintext. They go into Cloudflare environment variables or a terminal prompt only. Use placeholders in code.
- ONE COMMAND AT A TIME. No chained terminal commands. This is an iPad workflow.
- NO EM DASHES anywhere: not in copy, not in comments, not in commit messages. Use commas, periods, parentheses, or colons.
- CONFLICTS: If any instruction here conflicts with a project file, or two project files conflict, STOP and flag it. Do not silently resolve. COMPLIANCE_STANDARDS.md is the authoritative master and overrides all other files, including any legacy CLAUDE_TEMPLATE.md or PROJECT_BRIEF_TEMPLATE.md.
- LEGACY TEMPLATE ERRORS TO OVERRIDE ON SIGHT: the legacy templates wrongly specify LocalBusiness schema on the homepage (use ProfessionalService or Organization plus Service instead), use the forbidden word "vetted," and target a 30 to 40 page footprint. The current standard is 18 to 26 pages with a hard ceiling of 26.

---

## 2. COMPLIANCE: HONEST MATCHING SERVICE (from COMPLIANCE_STANDARDS.md)
This site connects homeowners with licensed local ADU builders. It is not a builder and must never imply it is.
- POSITIONING: Use "licensed local ADU builders," "the builder you are matched with," "we connect you with." Never first-person construction claims ("we build," "our crews," "our projects").
- DISCLOSURE: Every page carries a header disclosure strip identifying this as a matching and marketing service, and a footer entity disclaimer naming Compass Camper LLC operating as Compass Lead Group. No exceptions.
- FORMS: TCPA consent checkbox on every form, NEVER pre-checked. Plain-language consent text. Use Web3Forms (key as an environment variable placeholder).
- SCHEMA WHITELIST: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage ONLY. NEVER LocalBusiness, Review, or AggregateRating. Do not invent review markup even though competitors show star ratings; you cannot match that and must not fake it.
- FORBIDDEN LANGUAGE portfolio-wide: vetted, our network, pre-screened, hand-selected, top-rated, guaranteed, family-owned, since [year], and certified or licensed as a first-person claim. No fabricated testimonials, team bios, company history, tenure, or project counts. No "we built X ADUs."
- NO GOOGLE BUSINESS PROFILE and no implication of a retail storefront. A real operating address for the LLC may appear on About and Contact (operator supplies it as a placeholder value).

---

## 3. ACCURACY MANDATE (this is a YMYL-adjacent regulatory site; treat it as such)
ADU rules, permit steps, size caps, setbacks, height limits, owner-occupancy, parking, system development charges, and cost ranges are the core ranking content AND the core liability. Getting them wrong destroys Trust and rankings.

RULES:
- Do NOT fabricate or assume any regulatory or fee figure. Every specific number or rule must be verified against a CURRENT PRIMARY .gov source.
- Where you can fetch and verify a figure from a primary source, state it and cite the source inline and in a per-page References section with the URL.
- Where you cannot verify a figure, insert a clearly marked placeholder in this exact format and do NOT publish a guessed number: `[VERIFY: operator to confirm <specific item> from <primary source URL>]`. The operator will fill these before promotion.
- Flag conflicts between sources explicitly. Known traps to watch:
  - HB 1337 (Washington, 2023) changed the rules. Older city or county documents (for example a 2016 City of Spokane ADU overview stating "only one ADU per lot") may be STALE. HB 1337 generally requires Growth Management Act jurisdictions in Urban Growth Areas to allow up to two ADUs per lot and limits owner-occupancy and near-transit parking requirements. Do not publish the old single-ADU or owner-occupancy rules without confirming they survive HB 1337 in that specific jurisdiction. Spokane's compliance deadline was June 30, 2025.
  - Third-party ADU sites (GatherADU, Maxable, contractor blogs) are NOT primary sources. Do not cite them for rules. Use them only to find which primary source to check.
- Cost ranges must be presented as ranges with a date and a basis ("as of 2026," "for new detached construction"), tied to Spokane-specific context where possible, and never stated as a guarantee.

PRIMARY SOURCES TO USE (verify against these, fetch where possible):
- City of Spokane municipal code and Development Services ADU materials (static.spokanecity.org, my.spokanecity.org)
- Spokane County zoning code and Building and Planning ADU sheets BP-75 (detached) and BP-76 (attached) (spokanecounty.gov)
- City of Spokane Valley permit center and municipal code (spokanevalleywa.gov)
- Washington HB 1337 (2023) and the relevant RCW (for example RCW 36.70A) and WA Department of Commerce ADU guidance (commerce.wa.gov)

If web fetch is unavailable in this environment, write the content structure with every regulatory specific as a `[VERIFY: ...]` placeholder and tell the operator exactly which sources to pull.

---

## 4. SEO AND RANKING STRATEGY (tailored to the live Spokane SERP)
A geolocated SERP check established the following, and the build must exploit it:
- "adu builder spokane": owned by THIN local builder pages (Schaff Homes, Integrity Remodeling, Hug Construction, Brio Tiny Homes). No marketplace, no AI Overview. WIN by being genuinely deeper, more current, and more locally specific than these pages.
- "adu cost spokane": one programmatic competitor (aduzoning.org) holds the top with a per-city cost page; the rest are beatable. OUT-DEPTH it with a more thorough, verified, Spokane-specific cost guide.
- "adu permit spokane" and "can i build an adu spokane": topped by City of Spokane and Spokane County .gov PDFs, with People Also Ask boxes. Do NOT try to outrank the government application PDFs. SIT JUST BELOW them with a homeowner-friendly guide that catches the searcher who bounces off the unfriendly .gov document. This lane is wide open: no commercial operator owns it.
- No AI Overview fired on any of the four money terms in Spokane. So the cost and feasibility guides ARE lead-capturable, not just link bait. Put soft CTAs and a matching form on them.

WINNABLE MONEY KEYWORDS TO TARGET:
- Capture lane: "can I build an ADU in Spokane / on my lot," ADU feasibility, "how to choose an ADU builder in Spokane" (comparison framing).
- Cost lane: "ADU cost Spokane," "ADU construction cost Spokane," "garage conversion cost Spokane," "how much does an ADU cost Spokane."
- Permit and feasibility lane: "ADU permit Spokane," "ADU rules Spokane," "Spokane Valley ADU," "ADU rules Spokane County."
- Link bait and topical authority: "HB 1337 explained," "ADU financing Washington."

QUERIES TO DELIBERATELY IGNORE:
- "ADU builder near me" and "best ADU builder Spokane" (map pack and review-star owned; you have neither).
- Generic national "ADU cost" (out of scope, no local intent).
- The literal permit-application transactional terms owned by the .gov PDFs (you support these with a friendlier guide, you do not try to outrank the application form itself).

RANKING MECHANICS:
- TRUST is the binding constraint. Demonstrate it through accuracy, brand-as-author (author the guides as Compass Lead Group), transparent matching disclosure, and authoritative outbound .gov citations. Zero fake signals.
- UNIQUE PER-JURISDICTION CONTENT is the moat that survives scaled-content-abuse enforcement. The three jurisdiction pages (City of Spokane, Spokane County, Spokane Valley) must carry genuinely DIFFERENT verified data (size caps, setbacks, parking, owner-occupancy status under HB 1337, permit process, fees). No town-name-swap templates.
- Tight footprint, strong internal linking: each jurisdiction page links to the relevant guides and the get-matched page; each guide links back to the jurisdiction pages.
- Title, meta, and H1 patterns target the money query plainly, for example H1 "How Much Does an ADU Cost in Spokane? (2026 Guide)" with H2s for new build cost, garage conversion cost, permit and SDC fees, and an FAQ.
- FAQPage schema only on guide and FAQ pages, populated with real People Also Ask style questions ("Do you need a permit for an ADU in Washington?", "What is the size limit for an ADU in Spokane County?").

---

## 5. SITE ARCHITECTURE (target 18 to 22 content pages, hard ceiling 26)
Build a thin bare-links locations hub, no combinatorial service-times-jurisdiction pages.

Core and service pages:
- Home: matching-service explainer, how getting matched works, primary get-matched CTA, ProfessionalService or Organization plus Service schema.
- New Detached ADU (service).
- Attached ADU and home additions (service).
- Garage Conversion ADU (service; this is the less-contested cost wedge, give it real depth).
- Basement ADU and Junior ADU conversion (service).
- How the matching service works / About (matching positioning, real operating address placeholder, brand-as-author).
- Get Matched / Contact (Web3Forms, unchecked TCPA consent).

Jurisdiction pages (the unique-content moat, verified per-jurisdiction data):
8. ADUs in the City of Spokane.
9. ADUs in Unincorporated Spokane County (reference BP-75 and BP-76).
10. ADUs in Spokane Valley.
11. Locations hub (thin, bare links to the three jurisdiction pages).

Guide and capture cluster (the winnable lanes):
12. ADU Cost in Spokane (out-depth aduzoning.org; verified ranges, local basis, FAQ).
13. ADU Permits in Spokane: a Homeowner's Guide (sits below the .gov PDFs; process, not the application form).
14. Can I Build an ADU on My Lot in Spokane? (feasibility, top capture lane, soft form).
15. HB 1337 Explained for Spokane Homeowners (state-law link bait, cite RCW and Commerce).
16. ADU Financing Options in Washington (financing guide).
17. Garage Conversion Cost in Spokane (less-contested cost wedge).
18. How to Choose an ADU Builder in Spokane (comparison framing, capture oriented, no review stars).
19. ADU FAQ (FAQPage schema).

Required compliance pages (do not count toward the content footprint target but must exist):
- Privacy Policy.
- Terms / TCPA and consent disclosures.

---

## 6. TECH STACK AND BUILD CONFIG
- Framework: Astro 6.x with Tailwind CSS v4, static output, TypeScript strict. Cloud build only (Cloudflare Pages via GitHub auto-build). No local build step assumed, no Wrangler.
- astro.config.mjs: the site value MUST exactly match the production domain (operator supplies; use a clearly marked placeholder until then). Add @astrojs/sitemap. Confirm the sitemap resolves at https://[domain]/sitemap-index.xml before any Search Console submission.
- Forms: Web3Forms, access key as an environment variable placeholder. Unchecked TCPA consent. Success and error states.
- Analytics: GA4 via Cloudflare Zaraz. Use a single Measurement ID placeholder; do not hardcode and do not create conflicting IDs.
- Phone: a TextNow VoIP number with a Spokane 509 area code, as a placeholder the operator will swap in. Do not invent a real number.
- Performance: static output, minimal JS, optimized images, strong Core Web Vitals by default.
- Indexing: robots and sitemap correct, but hold Search Console and Bing Webmaster submission until the operator clears the demand and permit-count checks.

---

## 7. DESIGN SYSTEM: "BASALT AND PONDEROSA"
A distinct Inland Northwest identity. Do not copy tokens from any prior portfolio site.
- Palette: basalt charcoal (#2B2D2A) for primary text and dark sections; ponderosa pine green (#3E5233) as the primary brand color; warm bark amber (#B5703B) as the single accent for CTAs; Palouse wheat (#E3D6B8) as a soft secondary surface; off-white paper (#F7F4EE) as the base background. Keep the accent rare and purposeful.
- Type: a sturdy humanist sans for body and UI (for example Source Sans or Inter), paired with a slightly characterful slab or transitional serif for headings (for example Bitter or Fraunces), loaded statically from a self-hosted or Google Fonts source. One heading face, one body face, no more.
- Layout: generous whitespace, clear hierarchy, restrained. Photography or illustration should evoke Inland Northwest homes and backyards without implying these are the operator's own projects (use generic or clearly licensed imagery, never imply ownership of the builds).
- Accessibility: AA contrast minimum, focus states, semantic HTML.

---

## 8. BATCHED BUILD SEQUENCE (stop for approval after each batch, one PR at a time)
- Batch 1: Generate the per-site governance docs first: CLAUDE.md (with the section 0 tripwire and these standing rules), PROJECT_BRIEF.md (the section 5 architecture as a full page-by-page spec), and a site-specific COMPLIANCE addendum that defers to the portfolio COMPLIANCE_STANDARDS.md and lists the ADU-specific accuracy mandate from section 3. Scaffold the Astro project, Tailwind v4, TypeScript strict, astro.config.mjs with the site placeholder and sitemap. Open PR. Stop.
- Batch 2: Design system implementation: tokens, base styles, layout shell, header disclosure strip, footer entity disclaimer, navigation. Open PR. Stop.
- Batch 3: Home plus the four service pages, with schema and CTAs. Open PR. Stop.
- Batch 4: The three jurisdiction pages plus the thin locations hub, with all regulatory specifics either verified-and-cited or marked `[VERIFY: ...]`. Open PR. Stop.
- Batch 5: The cost cluster (ADU Cost in Spokane, Garage Conversion Cost) with verified ranges or placeholders and FAQ schema. Open PR. Stop.
- Batch 6: The permit and feasibility guides (ADU Permits homeowner guide, Can I Build an ADU, HB 1337 explainer, ADU Financing) with citations and capture CTAs. Open PR. Stop.
- Batch 7: How to Choose an ADU Builder, the ADU FAQ page, About, and Get Matched (Web3Forms, unchecked TCPA). Open PR. Stop.
- Batch 8: Privacy, Terms and TCPA disclosures, schema audit (confirm whitelist only), internal-linking pass, sitemap and robots, performance and accessibility pass. Open PR. Stop.
- Batch 9: Final review: confirm no forbidden language, no em dashes, no fabricated regulatory numbers, all `[VERIFY: ...]` placeholders listed in one place for the operator, schema whitelist clean, and the site value and sitemap pattern correct. Produce a short handoff note listing every placeholder and every operator-supplied value still needed. Open PR. Stop.

---

## 9. OPERATOR INPUTS NEEDED (placeholders until supplied; never put real secrets in chat)
- DOMAIN: lilaccityadu.com (operator-confirmed and purchased).
- Real operating address for About and Contact.
- TextNow 509 phone number.
- Web3Forms access key (Cloudflare env var).
- GA4 Measurement ID (Cloudflare env var, via Zaraz).
- The verified regulatory figures to replace every `[VERIFY: ...]` placeholder, from the primary .gov sources, before promotion.
