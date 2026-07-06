import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'עידן בנה לנו אתר שפשוט מהמם. כבר מהשבוע הראשון קיבלנו פניות חדשות. שירות אישי, מהיר ומקצועי.',
    name: 'רונית ל.',
    role: 'בעלת עסק',
  },
  {
    quote:
      'דף הנחיתה שעידן הקים הכפיל לנו את אחוזי ההמרה בקמפיין. ידע בדיוק מה צריך ואיפה ללחוץ.',
    name: 'אבי מ.',
    role: 'מנהל שיווק',
  },
  {
    quote:
      'סוף סוף אתר שאני גאה לשלוח ללקוחות. מהיר, יפה ומדויק. ממליץ בחום על עידן בניית אתרים.',
    name: 'דנה כ.',
    role: 'יועצת עסקית',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            לקוחות ממליצים
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-black md:text-5xl">
            מה אומרים עליי
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              as="figure"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-pretty font-medium leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
