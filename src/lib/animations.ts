/**
 * lib/animations.ts — Compatibility shim
 * Re-exports from the canonical location: src/utils/animations.ts
 *
 * This file is intentionally kept so that all pages importing
 * "@/lib/animations" continue to work without changes.
 * New code should import from "@/utils/animations" directly.
 */

export { fadeUp, stagger } from "@/utils/animations"
