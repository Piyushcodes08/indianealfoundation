import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({
  value,
  label,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1800
    const steps = 60
    const increment = value / steps
    const interval = duration / steps

    const timer = window.setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        window.clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)

    return () => window.clearInterval(timer)
  }, [isInView, value])

  return (
    <div
      ref={ref}
      className="text-center"
      data-testid={`stat-${label.toLowerCase().replace(/ /g, "-")}`}
    >
      <div className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-3 tabular-nums leading-none">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
