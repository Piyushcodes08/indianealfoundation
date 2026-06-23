/**
 * utils/cn.ts
 * Tailwind class-name merge utility.
 * Moved from src/lib/utils.ts → src/utils/cn.ts
 *
 * NOTE: src/lib/utils.ts is kept as a re-export shim so that shadcn/ui
 * primitives that import from "@/lib/utils" continue to work without changes.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
