import Image from 'next/image'
import { ArrowUpLeft } from 'lucide-react'
import { projects } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { SpotlightCard } from '@/components/spotlight-card'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-[600px] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
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
          <p className="mt-4 text-pretty text-lg font-medium text-muted-foreground">
            הצצה לחלק מהאתרים שבניתי — כל אחד עוצב והוקם מאפס בהתאמה מלאה ללקוח.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <SpotlightCard
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:glow-ring"
              >
                {/* preview חי במסגרת חלון דפדפן */}
                <div className="relative z-[1] border-b border-border">
                  <div className="flex items-center gap-2 bg-muted/60 px-3 py-2">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </span>
                    <span
                      dir="ltr"
                      className="mx-auto max-w-[70%] truncate rounded-md bg-background/70 px-3 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {p.url.replace(/^https?:\/\//, '')}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden bg-card">
                    <Image
                      src={p.image || '/placeholder.svg'}
                      alt={`תצוגה של האתר ${p.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="relative z-[1] flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold">{p.title}</h3>
                      <p className="text-sm font-semibold text-primary">{p.tagline}</p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpLeft className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
