/**
 * site.ts — App-wide constants & configuration
 * Central place for site name, nav links, social links, and SEO defaults.
 */

export const SITE_NAME = "Neal Foundation";
export const SITE_TAGLINE = "Care Beyond Boundaries – Touching Lives Every Day";
export const SITE_DESCRIPTION =
  "Neal Foundation supports community-led initiatives across India, fostering volunteer outreach, education, and compassionate care for families and neighborhoods in need.";

export const SITE_BASE_URL = "https://www.nealfoundation.org";

// ── Navigation ──────────────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Women Empowerment", href: "/women-empowerment" },
      { label: "Child Education", href: "/child-education" },
      { label: "Health & Nutrition", href: "/health-nutrition" },
      { label: "Animal Welfare", href: "/animal-welfare" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

// ── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
  linkedin: "",
} as const;

// ── Contact Info ─────────────────────────────────────────────────────────────

export const CONTACT_INFO = {
  email: "",
  phone: "",
  location: "India",
  responseTime: "Within 24 Business Hours",
} as const;

// ── SEO Defaults ──────────────────────────────────────────────────────────────

export const SEO_DEFAULTS = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  ogImage: "/logos/neal-foundation-logo.webp",
} as const;
