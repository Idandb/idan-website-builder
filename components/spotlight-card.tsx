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

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
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
