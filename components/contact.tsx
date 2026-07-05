'use client'

import { useState } from 'react'
import { Phone, Clock } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_INTL, telLink, whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/icons/whatsapp'

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'אתר תדמית', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `שלום עידן! שמי ${form.name || '—'}.
טלפון: ${form.phone || '—'}
מעוניין ב: ${form.service}
${form.message ? `פרטים: ${form.message}` : ''}`
    window.open(
      `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              בואו נדבר
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-black md:text-5xl">
              מוכנים לאתר שגורם <span className="text-primary glow-text">להגיד וואו?</span>
            </h2>
            <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-muted-foreground">
              השאירו פרטים או דברו איתי ישירות בטלפון או בוואטסאפ — הייעוץ הראשוני
              חינם, ואני חוזר במהירות עם הצעה מותאמת בדיוק לעסק שלכם.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={telLink}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">התקשרו עכשיו</span>
                  <span className="block font-bold" dir="ltr">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-whatsapp/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-whatsapp/15 text-whatsapp">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">וואטסאפ</span>
                  <span className="block font-bold">שלחו הודעה מהירה</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">זמינות</span>
                  <span className="block font-bold">א׳-ה׳ 09:00-19:00 • מענה מהיר</span>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 glow-ring"
          >
            <h3 className="font-display text-xl font-bold">קבלו הצעת מחיר חינם</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              ממלאים, שולחים — וממשיכים בוואטסאפ.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  שם מלא
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="איך קוראים לך?"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  טלפון
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="05X-XXXXXXX"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                  מה מעניין אותך?
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option>אתר תדמית</option>
                  <option>דף נחיתה</option>
                  <option>קידום ושיווק דיגיטלי</option>
                  <option>חנות אונליין</option>
                  <option>אחר</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  פרטים נוספים (אופציונלי)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="ספרו לי קצת על הפרויקט..."
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-bold text-white transition-all hover:scale-[1.02] hover:bg-whatsapp-dark"
              >
                <WhatsappIcon className="h-5 w-5" />
                שליחה בוואטסאפ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
