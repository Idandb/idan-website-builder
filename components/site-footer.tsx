import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, telLink, whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/icons/whatsapp'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-black">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              ע
            </span>
            עידן <span className="text-primary">בניית אתרים</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">שירותים</a>
            <a href="#portfolio" className="hover:text-foreground">תיק עבודות</a>
            <a href="#process" className="hover:text-foreground">תהליך העבודה</a>
            <a href="#contact" className="hover:text-foreground">צור קשר</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telLink}
              aria-label="התקשרו"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="וואטסאפ"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-whatsapp hover:text-white"
            >
              <WhatsappIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} עידן בניית אתרים. כל הזכויות שמורות.</p>
          <p dir="ltr">{PHONE_DISPLAY}</p>
        </div>

        <div className="mt-6 text-center text-sm font-semibold text-muted-foreground">
          נבנה על ידי{' '}
          <span className="text-primary">עידן בניית אתרים</span>
          {' · '}
          <a href={telLink} dir="ltr" className="hover:text-foreground">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  )
}
