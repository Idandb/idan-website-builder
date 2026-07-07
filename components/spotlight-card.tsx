'use client'

import { useRef } from 'react'
import type { MouseEvent } from 'react'

type SpotlightCardProps = {
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
}

// אפקט 7 — הילת עכבר (spotlight) שעוקבת אחרי הסמן על הכרטיס
export function SpotlightCard({
  children,
  className = '',
  href,
  target,
  rel,
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement | null>(null)
  const rafId = useRef<number>(0)

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const x = e.clientX
    const y = e.clientY
    cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--x', `${x - rect.left}px`)
      el.style.setProperty('--y', `${y - rect.top}px`)
    })
  }

  const classes = `spotlight-card ${className}`.trim()

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={handleMove}
      className={classes}
    >
      {children}
    </div>
  )
}
