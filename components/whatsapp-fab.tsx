import { whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/icons/whatsapp'

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="דברו איתי בוואטסאפ"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <WhatsappIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">וואטסאפ</span>
    </a>
  )
}
