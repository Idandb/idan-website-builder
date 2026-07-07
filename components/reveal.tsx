'use client'

import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** השהיה במילי-שניות לפני הופעת האלמנט */
  delay?: number
  /** תג ה-HTML לעטיפה (ברירת מחדל: div) */
  as?: ElementType
}

// אפקט 7 — Scroll reveal מבוסס IntersectionObserver
export function Reveal({ children, className = '', delay = 0, as }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      // fallback חד-פעמי לדפדפנים ללא תמיכה — לא ניתן לדעת זאת בזמן ה-render
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
