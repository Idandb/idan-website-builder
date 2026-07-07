'use client'

import { useEffect, useState } from 'react'
import { whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/icons/whatsapp'
import { cn } from '@/lib/utils'

export function WhatsappFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="דברו איתי בוואטסאפ"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
        left: 'max(1.25rem, env(safe-area-inset-left))',
      }}
      className={cn(
        'fixed z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-whatsapp-dark',
        visible
          ? 'translate-y-0 scale-100 opacity-100'
          : 'pointer-events-none translate-y-4 scale-75 opacity-0',
      )}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        {visible && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        )}
        <WhatsappIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">וואטסאפ</span>
    </a>
  )
}
