// Central site configuration and shared data.
// All operator-supplied placeholders live here so there is one place to swap them.
// No secrets in this file. The Web3Forms key comes from a Cloudflare env var.

// Site-wide indexing switch.
// When true, every page emits a noindex, nofollow robots meta tag. The
// regulatory content is resolved and the site is indexable, so this is false.
// Set it back to true only if you need to pull the whole site from search.
export const NOINDEX_SITE = false;

// Web3Forms access key. This key is public by design: at build time it is
// inlined into the static page HTML and is visible in page source, so storing
// it here is no less exposed than the Cloudflare env var. Committed as a
// fallback at operator request. If the Cloudflare env var PUBLIC_WEB3FORMS_KEY
// is set, it overrides this value.
export const WEB3FORMS_KEY = '06e4d45b-3325-46b6-a4a4-2a0a381aa95a';

export const SITE = {
  name: 'Lilac City ADU',
  domain: 'https://lilaccityadu.com',
  // Legal and public-facing entity for all disclosures.
  entityLegal: 'Compass Camper LLC',
  entityDba: 'Compass Lead Group',
  tagline: 'Get matched with a licensed local Spokane ADU builder.',
  description:
    'Lilac City ADU connects Spokane-area homeowners with licensed local ADU builders across the City of Spokane, unincorporated Spokane County, and Spokane Valley. A marketing and matching service, not a contractor.',
  // Operator-supplied placeholders. Swap these before promotion.
  // TextNow 509 number. 555-01xx is a reserved fictional range used only as a placeholder.
  phonePlaceholder: '(509) 555-0100',
  phoneHref: 'tel:+15095550100',
  // Do not invent a real address. Operator supplies the LLC operating address.
  addressPlaceholder: '[Operator to provide the Compass Camper LLC operating address]',
  emailPlaceholder: 'hello@lilaccityadu.com',
} as const;

// The three jurisdictions served.
export const JURISDICTIONS = [
  {
    slug: 'adu-rules-city-of-spokane',
    short: 'City of Spokane',
    title: 'ADUs in the City of Spokane',
    blurb: 'ADU rules for homeowners inside Spokane city limits.',
  },
  {
    slug: 'adu-rules-spokane-county',
    short: 'Unincorporated Spokane County',
    title: 'ADUs in Unincorporated Spokane County',
    blurb: 'County ADU rules for parcels outside any city, with the BP-75 and BP-76 sheets.',
  },
  {
    slug: 'adu-rules-spokane-valley',
    short: 'Spokane Valley',
    title: 'ADUs in Spokane Valley',
    blurb: 'ADU rules and the permit center for the City of Spokane Valley.',
  },
] as const;

// Service pages.
export const SERVICES = [
  {
    slug: 'detached-adu',
    title: 'New Detached ADU',
    nav: 'Detached ADU',
    blurb: 'A standalone backyard home on the same lot as the main house.',
  },
  {
    slug: 'attached-adu',
    title: 'Attached ADU and Home Additions',
    nav: 'Attached ADU',
    blurb: 'A unit attached to the existing home, or an addition built for one.',
  },
  {
    slug: 'garage-conversion-adu',
    title: 'Garage Conversion ADU',
    nav: 'Garage Conversion',
    blurb: 'Converting an existing garage into a livable accessory dwelling unit.',
  },
  {
    slug: 'basement-jadu',
    title: 'Basement ADU and Junior ADU Conversion',
    nav: 'Basement and JADU',
    blurb: 'Interior conversions, including basement units and junior ADUs.',
  },
] as const;

// Guide and capture pages.
export const GUIDES = [
  {
    slug: 'adu-cost-spokane',
    title: 'ADU Cost in Spokane',
    nav: 'ADU Cost',
    blurb: 'A sourced, Spokane-specific breakdown of what an ADU costs in 2026.',
  },
  {
    slug: 'garage-conversion-cost-spokane',
    title: 'Garage Conversion Cost in Spokane',
    nav: 'Garage Conversion Cost',
    blurb: 'What it costs to convert a Spokane-area garage into an ADU.',
  },
  {
    slug: 'adu-permits-spokane',
    title: 'ADU Permits in Spokane: A Homeowner Guide',
    nav: 'ADU Permits',
    blurb: 'A plain-language walkthrough of the ADU permit process by jurisdiction.',
  },
  {
    slug: 'can-i-build-an-adu-spokane',
    title: 'Can I Build an ADU on My Lot in Spokane?',
    nav: 'Can I Build an ADU?',
    blurb: 'A feasibility checklist: zoning, lot, utilities, and your jurisdiction.',
  },
  {
    slug: 'hb-1337-spokane',
    title: 'HB 1337 Explained for Spokane Homeowners',
    nav: 'HB 1337 Explained',
    blurb: 'What the 2023 Washington ADU law changed for Spokane-area lots.',
  },
  {
    slug: 'adu-financing-washington',
    title: 'ADU Financing Options in Washington',
    nav: 'ADU Financing',
    blurb: 'A neutral overview of ways homeowners pay for an ADU in Washington.',
  },
  {
    slug: 'choosing-an-adu-builder-spokane',
    title: 'How to Choose an ADU Builder in Spokane',
    nav: 'Choosing a Builder',
    blurb: 'What to look for, what to ask, and how matching helps.',
  },
] as const;

// Primary navigation groups (used by header and footer).
export const NAV = [
  { label: 'How it works', href: '/about' },
  {
    label: 'ADU types',
    href: '/services/detached-adu',
    children: SERVICES.map((s) => ({ label: s.nav, href: `/services/${s.slug}` })),
  },
  {
    label: 'Spokane rules',
    href: '/spokane',
    children: [
      { label: 'All locations', href: '/spokane' },
      ...JURISDICTIONS.map((j) => ({ label: j.short, href: `/spokane/${j.slug}` })),
    ],
  },
  {
    label: 'Guides',
    href: '/guides/adu-cost-spokane',
    children: GUIDES.map((g) => ({ label: g.nav, href: `/guides/${g.slug}` })),
  },
  { label: 'FAQ', href: '/faq' },
] as const;
