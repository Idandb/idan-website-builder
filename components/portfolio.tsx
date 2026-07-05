import { ArrowUpLeft } from 'lucide-react'
import { projects } from '@/lib/site'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            תיק עבודות
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-black md:text-5xl">
            פרויקטים אמיתיים. תוצאות אמיתיות.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            הצצה לחלק מהאתרים שבניתי — כל אחד עוצב והוקם מאפס בהתאמה מלאה ללקוח.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:glow-ring"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image || '/placeholder.svg'}
                  alt={`תצוגה של האתר ${p.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="text-sm text-primary">{p.tagline}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpLeft className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
