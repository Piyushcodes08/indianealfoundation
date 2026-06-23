/**
 * lib/utils.ts — Compatibility shim
 * Re-exports from the canonical location: src/utils/cn.ts
 *
 * This file is intentionally kept so that shadcn/ui primitives which import
 * "@/lib/utils" continue to work without any changes.
 * New code should import from "@/utils/cn" directly.
 */

export { cn } from "@/utils/cn"
