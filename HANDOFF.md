# HANDOFF.md

Build handoff for Lilac City ADU (lilaccityadu.com). This is the single place that lists every placeholder and every operator-supplied value still needed before promotion. COMPLIANCE_STANDARDS.md governs everything here.

Entity: Compass Camper LLC, operating as Compass Lead Group.

---

## 1. WHAT WAS BUILT

Astro 6 static site, Tailwind v4 (PostCSS), TypeScript strict, self-hosted variable fonts, @astrojs/sitemap. The build passes and produces 21 pages.

Pages (19 content pages, within the 18 to 22 target, plus 2 required compliance pages):

- Core: Home (/), About (/about), Get Matched (/get-matched).
- Services: detached, attached, garage conversion, basement and JADU (/services/...).
- Locations: hub (/spokane) plus City of Spokane, unincorporated Spokane County, Spokane Valley.
- Guides: ADU cost, garage conversion cost, ADU permits, can I build an ADU, HB 1337, ADU financing, choosing a builder.
- FAQ (/faq).
- Compliance: Privacy (/privacy), Terms and TCPA (/terms).

---

## 2. COMPLIANCE CONFIRMATIONS (verified on the built output)

- Schema whitelist clean: only Organization, Service, BreadcrumbList, FAQPage are emitted (plus their legitimate child types Question, Answer, ListItem, Audience). No LocalBusiness, Review, or AggregateRating anywhere.
- Header disclosure strip and footer entity disclaimer render on every page through the shared layout.
- TCPA consent checkbox is present on the match form, required, and never pre-checked.
- No em dashes anywhere in source or copy.
- No forbidden language in site source (vetted, our network, pre-screened, hand-selected, top-rated, family-owned, since [year], and first-person build claims). Every use of the word guarantee is a disclaimer, not a claim.
- No fabricated regulatory or fee figures. Every specific is either general and safe, or a literal [VERIFY: ...] placeholder.
- astro.config.mjs site is https://lilaccityadu.com. Sitemap resolves at https://lilaccityadu.com/sitemap-index.xml and lists all 21 URLs.

---

## 3. OPERATOR-SUPPLIED VALUES STILL NEEDED

These live in src/config.ts (or Cloudflare env vars) as placeholders.

| Value | Where it goes | Current placeholder |
|---|---|---|
| Domain | astro.config.mjs site | Done: lilaccityadu.com |
| Operating address | src/config.ts addressPlaceholder | Bracketed placeholder text |
| TextNow 509 phone | src/config.ts phonePlaceholder and phoneHref | (509) 555-0100 (fictional placeholder) |
| Contact email | src/config.ts emailPlaceholder | hello@lilaccityadu.com |
| Web3Forms access key | Committed in src/config.ts WEB3FORMS_KEY (operator choice); Cloudflare env var PUBLIC_WEB3FORMS_KEY overrides if set | Done (public-by-design key) |
| GA4 Measurement ID | Cloudflare Zaraz (not in code) | Not hardcoded by design |
| Spokane city and county ADU permit-issuance counts | Operator demand check, not in code | Pending |

---

## 4. CLOUDFLARE PAGES SETUP (operator)

1. Connect the GitHub repo to Cloudflare Pages. Framework preset: Astro. Build command: npm run build. Output directory: dist.
2. Set the production branch to main once main exists.
3. Add the environment variable PUBLIC_WEB3FORMS_KEY with your real Web3Forms access key. Do not commit it.
4. Configure GA4 through Cloudflare Zaraz with a single Measurement ID. Do not add a second GA tag in code.
5. Point the custom domain lilaccityadu.com at the Pages project.
6. Do not use Wrangler or Direct Upload for the normal flow. Merges to main auto-build.

---

## 5. PRE-PROMOTION GATE (do not skip)

The site is built correctly, but per COMPLIANCE_STANDARDS.md it is not promoted until:

1. The remaining [VERIFY: ...] placeholders (section 6) are closed against the named primary .gov source and spot-checked. Most regulatory figures were resolved from the operator VERIFY resolution packet and are now published with citations; the remainder are listed in section 6.
2. You confirm real demand with the Spokane city and county ADU permit-issuance counts.
3. You clear a final incognito geolocated SERP check.
4. Search Console and Bing Webmaster submission is held until 1 through 3 are done.

Indexing status: a temporary site-wide noindex is ON (NOINDEX_SITE = true in src/config.ts). robots.txt still allows crawl so the noindex is honored. Flip NOINDEX_SITE to false and rebuild only after the remaining VERIFY items are closed and spot-checked.

---

## 6. VERIFY PLACEHOLDERS: RESOLUTION STATUS

The operator VERIFY resolution packet has been applied. Resolved and now published with citations:
- State baseline (HB 1337 / RCW 36.70A.681 and .680): two ADUs per lot in UGAs, no owner-occupancy, no parking near major transit, 1,000 sq ft size floor, 24 ft height floor, impact fees capped at 50 percent, no required street improvements, GMA-cycle effective and preemption.
- City of Spokane: one-to-two ADU change, owner-occupancy removed (except with a short-term rental), parking rule, permit path, water GFC (3,366 / 8,415 / 26,930 dollars by meter, 2026), transportation impact fee (about 106 to 1,000 dollars, SMC 17D.075), valuation-based building permit (estimator).
- Spokane Valley: ADUs exempt from impact fees; older owner-occupancy language flagged as likely preempted (not published as current).
- Unincorporated county: the UGA-versus-non-UGA split, and the instruction to cite Title 14 rather than the BP brochures.

REMAINING OPEN VERIFY ITEMS (close against the live source, then flip NOINDEX_SITE to false):
1. City of Spokane: exact maximum ADU size, exact height standard, and post-amendment setbacks. Source: live SMC 17C.300.130. Also the exact 2026 sewer GFC amount, and confirm the Development Services Center address.
2. Unincorporated Spokane County: exact size, height, setbacks, parking, owner-occupancy for non-UGA land, conditional-use-permit zones, and permit fees. Source: live Title 14 or the County Permit Center, 509.477.3675.
3. Spokane Valley: whether the city has adopted its HB 1337 update (two ADUs per lot, removal of owner-occupancy), plus exact size, height, setbacks, parking, and permit fees. Source: live SVMC 19.40.030 and the city.
4. Construction cost ranges (not part of the regulatory packet): new detached, attached, garage conversion, basement and JADU ranges, and finish-level pricing. These remain dated-range placeholders pending current Spokane contractor pricing.

The original 46-item gather list, by page, is retained below for reference. Most line items are now resolved per the above; treat the bold REMAINING list as the live to-do.

### City of Spokane (/spokane/adu-rules-city-of-spokane). Source: my.spokanecity.org, Spokane Municipal Code and Development Services
1. Which ADU types are permitted (detached, attached, junior ADU).
2. Maximum ADUs per lot after HB 1337 (2016 overview said one per lot, likely superseded).
3. Maximum ADU size and any percent-of-primary-dwelling cap.
4. Maximum ADU height.
5. Front, side, and rear setbacks.
6. Whether off-street parking is required and any near-transit exemption under HB 1337.
7. Whether owner-occupancy is required, given HB 1337.
8. Current ADU permit fees and any system development charges.
9. Current Development Services Center address (a city document lists 808 West Spokane Falls Boulevard, Spokane, WA 99201-3336).

### Unincorporated Spokane County (/spokane/adu-rules-spokane-county). Source: spokanecounty.gov, BP-75, BP-76, county zoning code
1. Which ADU types are permitted (detached per BP-75, attached per BP-76).
2. Maximum ADUs per lot after HB 1337.
3. Maximum ADU size and any percent-of-primary cap.
4. Maximum ADU height.
5. ADU setbacks under the county zoning code.
6. Off-street parking requirement, accounting for HB 1337.
7. Whether owner-occupancy is required, given HB 1337.
8. Any septic capacity or water connection requirements.
9. Current county ADU permit fees and any charges.

### Spokane Valley (/spokane/adu-rules-spokane-valley). Source: spokanevalleywa.gov, Spokane Valley Municipal Code and permit center
1. Which ADU types Spokane Valley permits.
2. Maximum ADUs per lot after HB 1337.
3. Maximum ADU size and any percent-of-primary cap.
4. Maximum ADU height.
5. ADU setbacks under the Spokane Valley Municipal Code.
6. Off-street parking requirement, accounting for HB 1337.
7. Whether owner-occupancy is required, given HB 1337.
8. Current Spokane Valley ADU permit fees and any charges.

### ADU Cost in Spokane (/guides/adu-cost-spokane). Sources: contractor pricing (as of 2026) and each jurisdiction fee schedule
1. Typical new detached ADU cost range and cost per square foot.
2. Typical attached ADU or addition cost range.
3. Typical garage conversion cost range.
4. Typical basement ADU or JADU cost range.
5. City of Spokane ADU permit fees and any system development charges.
6. Spokane County ADU permit fees and any charges.
7. Spokane Valley ADU permit fees and any charges.
8. Installed per-square-foot ranges for laminate and engineered hardwood (Spokane, 2026).
9. Typical installed countertop pricing for laminate and stone (2026).

### HB 1337 (/guides/hb-1337-spokane). Sources: app.leg.wa.gov (HB 1337, RCW 36.70A), commerce.wa.gov
1. Number of ADUs per lot HB 1337 requires covered jurisdictions to allow.
2. Extent to which HB 1337 limits owner-occupancy requirements.
3. Limits HB 1337 places on ADU parking near major transit.
4. Any minimum ADU size jurisdictions must allow.
5. HB 1337 compliance deadline and whether the three jurisdictions have adopted compliant codes.

### ADU Permits (/guides/adu-permits-spokane). Sources: the three jurisdiction permit pages
1. City of Spokane ADU permit fees and charges.
2. Spokane County ADU permit fees and charges.
3. Spokane Valley ADU permit fees and charges.

### Can I Build an ADU (/guides/can-i-build-an-adu-spokane). Source: the relevant jurisdiction page
1. Allowed ADU types and counts for the homeowner specific zone and jurisdiction.
2. Setbacks, maximum ADU size, and height for the homeowner jurisdiction.

### Garage Conversion Cost (/guides/garage-conversion-cost-spokane). Source: contractor pricing (as of 2026)
1. Typical Spokane garage conversion cost range and cost per square foot.

---

## 7. KNOWN BUILD DECISIONS TO REVIEW

- Astro pinned to 6.x per spec. Astro 7 is available if you choose to upgrade later.
- Tailwind v4 is wired through the PostCSS plugin, not @tailwindcss/vite, because the Vite plugin is not yet compatible with Astro 6 rolldown-based Vite.
- The bark amber accent is used for borders and marks; CTA buttons use a slightly deeper bark so paper-on-button text meets WCAG AA contrast.

---

## 8. REPO AND BRANCH

- All work is on branch claude/clever-ride-9osmvt, committed one batch per commit.
- main did not exist at build time (the repo was created empty). Create main, set it as the default and the Cloudflare production branch, then open or merge the work. No content was pushed to main.
