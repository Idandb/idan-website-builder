'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  /** ערך יעד לספירה; אם חסר — מוצג display כפי שהוא (למשל 24/7) */
  target?: number
  prefix?: string
  suffix?: string
  display?: string
  label: string
}

const stats: Stat[] = [
  { target: 50, prefix: '+', label: 'אתרים שנבנו' },
  { target: 100, suffix: '%', label: 'רספונסיבי לנייד' },
  { target: 2, prefix: '<', suffix: ' שנ׳', label: 'זמן טעינה' },
  { display: '24/7', label: 'זמינות ותמיכה' },
]

function useCountUp(target: number | undefined, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || target === undefined) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    let raf = 0
    let start: number | null = null
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.target, active)
  const content =
    stat.display ?? `${stat.prefix ?? ''}${value}${stat.suffix ?? ''}`

  return (
    <div className="px-4 py-8 text-center md:py-10">
      <div className="font-display text-3xl font-black text-primary md:text-4xl">
        {content}
      </div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} active={active} />
        ))}
      </div>
    </section>
  )
}
