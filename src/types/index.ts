/**
 * types/index.ts — Shared TypeScript interfaces and types
 * Import from here instead of defining types inline in components.
 */

// ── Navigation ────────────────────────────────────────────────────────────────

export type { NavItem } from "@/config/site";

// ── Programs / Services ───────────────────────────────────────────────────────

export interface ProgramCard {
  id: number;
  num: string;
  title: string;
  desc: string;
  image: string;
  /** Lucide icon component */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  href: string;
}

// ── Events ────────────────────────────────────────────────────────────────────

export interface EventCard {
  id: number;
  day: string;
  month: string;
  year: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  href: string;
}

// ── Gallery ───────────────────────────────────────────────────────────────────

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

// ── Testimonials ──────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// ── Stats ─────────────────────────────────────────────────────────────────────

export interface StatItem {
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
}

// ── Marquee Items ─────────────────────────────────────────────────────────────

export interface MarqueeItem {
  id: number;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

// ── Contact Form ──────────────────────────────────────────────────────────────

export type { ContactFormValues } from "@/content/contact";
