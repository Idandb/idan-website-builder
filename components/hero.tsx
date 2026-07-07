import { ArrowLeft, Sparkles, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      {/* glow backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="aurora pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] max-w-full -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
        aria-hidden
      />
      <div
        className="aurora-slow pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" />
            בונים אתרים שמייצרים תוצאות — לא רק נראים טוב
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            אתרים שגורמים <br />
            <span className="text-primary glow-text">להגיד וואו</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            אני עידן — בונה אתרי תדמית, דפי נחיתה ומערכות דיגיטליות שמושכות
            לקוחות, בונות אמון ומעלות מכירות. עיצוב מרשים, ביצועים מהירים ותוצאות
            מדידות.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform hover:scale-105 glow-ring"
            >
              קבלו הצעת מחיר חינם
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </span>
              לקוחות מרוצים
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
            <span>בנייה מהירה • תמיכה אישית • מחיר הוגן</span>
          </div>
        </div>
      </div>
    </section>
  )
}
