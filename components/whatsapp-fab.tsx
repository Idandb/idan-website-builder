import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="דברו איתי בוואטסאפ"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 glow-ring"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/40" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">וואטסאפ</span>
    </a>
  )
}
