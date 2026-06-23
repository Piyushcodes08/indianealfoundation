/**
 * data/index.ts — Compatibility shim
 * Re-exports everything from the canonical src/content/ directory.
 *
 * Kept for backward compatibility. New code should import from "@/content" directly.
 */

export * from "@/content/home"
export * from "@/content/about"
export * from "@/content/contact"
