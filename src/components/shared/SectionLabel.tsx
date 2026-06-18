import type { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
        <span className="h-px w-10 bg-gradient-to-r from-primary to-primary/15" />
      </span>
      <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
        {children}
      </span>
    </div>
  )
}
