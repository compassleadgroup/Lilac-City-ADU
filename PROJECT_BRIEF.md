# PROJECT_BRIEF.md

Full page-by-page specification for the Spokane ADU matching site. This is the build spec. COMPLIANCE_STANDARDS.md overrides anything here that conflicts. Target 18 to 22 content pages, hard ceiling 26. Thin bare-links locations hub. No combinatorial service-times-jurisdiction pages.

Entity: Compass Camper LLC operating as Compass Lead Group. Domain: lilaccityadu.com (operator-confirmed). Phone: TextNow 509 placeholder. Address: operator-supplied placeholder.

---

## STRATEGY SUMMARY (why the pages are shaped this way)
A geolocated Spokane SERP check established the winnable lanes:
- "adu builder spokane" is held by thin local builder pages (Schaff Homes, Integrity Remodeling, Hug Construction, Brio Tiny Homes). Win by being deeper, more current, more locally specific.
- "adu cost spokane" is topped by one programmatic competitor (aduzoning.org). Out-depth it with a more thorough, verified, Spokane-specific cost guide.
- "adu permit spokane" and "can i build an adu spokane" are topped by City of Spokane and Spokane County .gov PDFs. Do not fight the application PDFs. Rank just below them with homeowner-friendly guides that catch the searcher who bounces off the unfriendly government document.
- No AI Overview fired on any of the four money terms. So the cost and feasibility guides capture leads, not just earn links. Put soft CTAs and a matching form on them.

Trust is the binding ranking constraint: accuracy, brand-as-author (Compass Lead Group), transparent disclosure, authoritative outbound .gov citations, zero fake signals. The three jurisdiction pages carry distinct verified data, which is the moat that survives scaled-content enforcement.

---

## GLOBAL ELEMENTS (every page)
- Header disclosure strip (matching service, not a contractor).
- Footer entity disclaimer (Compass Camper LLC dba Compass Lead Group, advertising and lead-referral service, construction by independent licensed builders).
- Primary CTA: "Get matched with a Spokane ADU builder."
- Schema: site-wide Organization (or ProfessionalService) plus BreadcrumbList. Page-level schema as noted.
- No em dashes. Plain, accurate, locally specific copy.

---

## CORE AND SERVICE PAGES

1. Home (/)
- Purpose: explain the matching service, how it works in three steps, primary get-matched CTA.
- Target intent: branded and general Spokane ADU entry.
- Schema: ProfessionalService or Organization plus Service. Not LocalBusiness.
- Content: what an ADU is (brief), what the service does (connects to licensed local builders), the three Spokane jurisdictions served, links to cost, permit, and feasibility guides, and the get-matched CTA.

2. New Detached ADU (/services/detached-adu)
- Purpose: service page for standalone backyard ADUs.
- Schema: Service.
- Content: what a detached ADU is, typical uses, what the matched builder handles, link to cost and feasibility guides. No first-person build claims.

3. Attached ADU and Home Additions (/services/attached-adu)
- Purpose: service page for attached units and additions.
- Schema: Service.

4. Garage Conversion ADU (/services/garage-conversion-adu)
- Purpose: service page for garage conversions. This is the less-contested cost wedge, so give it real depth.
- Schema: Service.
- Content: feasibility considerations, typical scope, link to the garage conversion cost guide.

5. Basement ADU and Junior ADU Conversion (/services/basement-jadu)
- Purpose: service page for interior conversions and JADUs.
- Schema: Service.

6. How the Matching Service Works / About (/about)
- Purpose: matching-service positioning, brand-as-author, trust.
- Content: who Compass Lead Group is, how matching works, why it is free to the homeowner, the real operating address placeholder, the disclosure restated. No fabricated history, team, or tenure.

7. Get Matched / Contact (/get-matched)
- Purpose: lead capture.
- Form: Web3Forms, unchecked TCPA consent, plain consent text. Fields: name, contact, jurisdiction, project type, lot or timeline notes. Success and error states.

---

## JURISDICTION PAGES (unique-content moat, verified per-jurisdiction data)
Each page carries DIFFERENT verified data: allowed ADU types and counts, size caps, setbacks, height, parking, owner-occupancy status under HB 1337, permit process, and fees. Every specific is cited to a primary .gov source or marked `[VERIFY: ...]`. Flag any conflict between an older local document and HB 1337.

8. ADUs in the City of Spokane (/spokane/adu-rules-city-of-spokane)
- Primary sources: City of Spokane municipal code and Development Services ADU materials (spokanecity.org). Confirm post-HB-1337 status of any single-ADU or owner-occupancy rule.
- Schema: optional FAQPage if a Q and A block is included.

9. ADUs in Unincorporated Spokane County (/spokane/adu-rules-spokane-county)
- Primary sources: Spokane County Building and Planning sheets BP-75 (detached) and BP-76 (attached), Spokane County zoning code (spokanecounty.gov).

10. ADUs in Spokane Valley (/spokane/adu-rules-spokane-valley)
- Primary sources: City of Spokane Valley municipal code and permit center (spokanevalleywa.gov).

11. Locations Hub (/spokane)
- Thin, bare links to the three jurisdiction pages and a one-line orientation. No boilerplate padding.

---

## GUIDE AND CAPTURE CLUSTER (the winnable lanes)
FAQPage schema on guide pages where a genuine Q and A block exists, populated with real People Also Ask style questions. Soft get-matched CTA on each.

12. ADU Cost in Spokane (/guides/adu-cost-spokane)
- Goal: out-depth aduzoning.org. Verified Spokane-specific ranges with date and basis, broken into new detached, attached, garage conversion, plus permit and system development charge costs, plus an FAQ. Every figure cited or `[VERIFY: ...]`.

13. ADU Permits in Spokane: A Homeowner's Guide (/guides/adu-permits-spokane)
- Goal: sit below the .gov application PDFs with a friendly walkthrough of the process (steps, who issues, what to expect), not a copy of the application form. Cite the city and county sources. Link to the jurisdiction pages.

14. Can I Build an ADU on My Lot in Spokane? (/guides/can-i-build-an-adu-spokane)
- Goal: top capture lane. Feasibility checklist (zoning, lot, utilities, jurisdiction), with a soft get-matched form. Cite rules or `[VERIFY: ...]`.

15. HB 1337 Explained for Spokane Homeowners (/guides/hb-1337-spokane)
- Goal: state-law link bait and topical authority. What HB 1337 changed, what it means for Spokane-area lots, cite RCW and WA Commerce. Flag where local implementation is still being confirmed.

16. ADU Financing Options in Washington (/guides/adu-financing-washington)
- Goal: financing guide. General options framed neutrally, no financing guarantees or approval promises. Not financial advice; route to lenders and the matched builder.

17. Garage Conversion Cost in Spokane (/guides/garage-conversion-cost-spokane)
- Goal: capture the less-contested cost wedge with verified ranges and an FAQ.

18. How to Choose an ADU Builder in Spokane (/guides/choosing-an-adu-builder-spokane)
- Goal: comparison-framed capture page. What to look for (licensing, permitting experience, references), framed as guidance, no review stars, no ranking of named firms. Strong get-matched CTA.

19. ADU FAQ (/faq)
- Schema: FAQPage. Real questions drawn from People Also Ask (permit need, size limits, cost, timeline, owner-occupancy under HB 1337). Every regulatory answer cited or `[VERIFY: ...]`.

---

## REQUIRED COMPLIANCE PAGES (exist but do not count toward the content target)
- Privacy Policy (/privacy)
- Terms and TCPA Disclosures (/terms)

---

## INTERNAL LINKING
- Each jurisdiction page links to the cost, permit, and feasibility guides and to get-matched.
- Each guide links back to the three jurisdiction pages and to get-matched.
- Service pages link to the relevant cost guide and to get-matched.
- Home links to the locations hub, the three top guides, and get-matched.

## OPEN PLACEHOLDERS TO TRACK
Domain (lilaccityadu.com confirmed), real operating address, TextNow 509 number, Web3Forms key, GA4 Measurement ID, and every `[VERIFY: ...]` regulatory figure. List all of them in the Batch 9 handoff note.
