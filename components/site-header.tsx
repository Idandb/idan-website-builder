'use client'

import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { telLink, PHONE_DISPLAY } from '@/lib/site'
import { cn } from '@/lib/utils'

const links = [
  { href: '#services', label: 'שירותים' },
  { href: '#portfolio', label: 'תיק עבודות' },
  { href: '#process', label: 'תהליך העבודה' },
  { href: '#contact', label: 'צור קשר' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-black">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground glow-ring">
            ע
          </span>
          <span className="tracking-tight">
            עידן <span className="text-primary">בניית אתרים</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={telLink}
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 md:flex glow-ring"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
          aria-label="פתיחת תפריט"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={telLink}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
