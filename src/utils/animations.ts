/**
 * utils/animations.ts
 * Framer Motion animation variants shared across pages.
 * Moved from src/lib/animations.ts → src/utils/animations.ts
 *
 * NOTE: src/lib/animations.ts is kept as a re-export shim so that any
 * existing imports from "@/lib/animations" continue to work without changes.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
