/**
 * hooks/use-scroll-animation.ts
 * Reusable hook for IntersectionObserver-based scroll animations.
 * Use this instead of manually setting up whileInView in every component.
 *
 * @example
 * const { ref, isInView } = useScrollAnimation()
 * return <div ref={ref} style={{ opacity: isInView ? 1 : 0 }}>...</div>
 */

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  /** Root margin for the observer (default: "-80px") */
  margin?: string
  /** Only trigger once (default: true) */
  once?: boolean
  /** Intersection threshold 0–1 (default: 0) */
  threshold?: number
}

export function useScrollAnimation({
  margin = "-80px",
  once = true,
  threshold = 0,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { rootMargin: margin, threshold }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [margin, once, threshold])

  return { ref, isInView }
}
