# COMPLIANCE_STANDARDS.md (Spokane ADU site addendum)

This is the site-specific compliance addendum for the Spokane ADU matching site. It defers to and inherits the portfolio master COMPLIANCE_STANDARDS.md. Where the portfolio master is present in the repo or project, the master governs and this addendum adds ADU-specific and Spokane-specific requirements. If anything in any other file conflicts with compliance, compliance wins. Flag the conflict.

Entity for all disclosures: Compass Camper LLC, operating publicly as Compass Lead Group.

---

## 1. POSITIONING: MATCHING AND MARKETING SERVICE, NOT A CONTRACTOR
This site connects homeowners with licensed local ADU builders. It does not design, permit, or build anything.
- Approved phrasing: "licensed local ADU builders," "the builder you are matched with," "we connect Spokane homeowners with," "get matched with a builder."
- Banned phrasing: any first-person construction or design claim. Never "we build," "our crews," "our team designs," "our projects," "we handle your permits." The builder does those things, not us.
- Never imply the site operator holds a contractor license, a design credential, or a physical construction business.

## 2. DISCLOSURE (every page, no exceptions)
- Header disclosure strip on every page: a short line identifying the site as a marketing and matching service that connects homeowners with independent licensed local builders, not a contractor.
- Footer entity disclaimer on every page: names Compass Camper LLC operating as Compass Lead Group, states the site is an advertising and lead-referral service, and that all construction is performed by independent licensed third-party builders the homeowner contracts with directly.

## 3. FORMS AND TCPA
- TCPA consent checkbox on every form. NEVER pre-checked.
- Plain-language consent text covering contact by phone, text, and email by the operator and the matched builder, with a way to opt out.
- Web3Forms for submission. Access key is an environment variable placeholder, never in plaintext.
- No form may promise a specific price, timeline, financing approval, or permit outcome.

## 4. SCHEMA WHITELIST (strict)
- Allowed: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage.
- Banned: LocalBusiness, Review, AggregateRating, and any aggregate or individual rating or testimonial markup.
- Competitors in this SERP show star ratings. You cannot match that and must not fake it. Do not add review or rating markup of any kind.

## 5. FORBIDDEN LANGUAGE (portfolio-wide, enforced here)
vetted, our network, pre-screened, hand-selected, top-rated, guaranteed, family-owned, since [year], certified or licensed used as a first-person claim. No fabricated testimonials, team bios, company history, tenure, or project counts. No "we built X ADUs," no invented years in business, no stock-photo people presented as staff or as the operator's crews or completed projects.

## 6. ACCURACY (ADU is YMYL-adjacent: a high-cost decision with regulatory and financial consequence)
- No regulatory or fee figure may be published unless verified against a current primary .gov source and cited inline plus in a per-page References section.
- Any unverifiable figure becomes a placeholder in this exact form and is never guessed: `[VERIFY: operator to confirm <item> from <primary source URL>]`.
- Third-party ADU sites are not primary sources.
- HB 1337 (Washington, 2023) stale-data trap: do not publish pre-HB-1337 rules (such as a one-ADU-per-lot limit or an owner-occupancy requirement) without confirming they still apply in that specific jurisdiction after HB 1337. Flag every conflict between an older local document and HB 1337.
- All cost content is presented as dated ranges with a stated basis, never as guarantees or quotes.

## 7. NO GBP, NO STOREFRONT IMPLICATION
- The site relies on classic organic ranking only. It does not use or imply a Google Business Profile or a retail storefront.
- A real operating address for the LLC may appear on the About and Contact pages, supplied by the operator as a placeholder value. Do not invent an address.

## 8. IMAGERY
- Use generic or clearly licensed imagery of Inland Northwest homes and backyards. Never imply the depicted ADUs are the operator's own projects or the work of a specific matched builder unless that builder has provided and authorized the image.

## 9. PRE-PROMOTION GATE (operator-owned, do not bypass)
- The site is built correctly regardless, but it is not promoted until the operator confirms demand with the Spokane city and county ADU permit-issuance counts, and clears a final incognito geolocated SERP check.
- All `[VERIFY: ...]` placeholders must be resolved with verified figures before any page is promoted.
