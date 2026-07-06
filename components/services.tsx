import { Globe, Target, TrendingUp, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'בניית אתרי תדמית',
    description:
      'אתרים עסקיים מרשימים שבונים אמון, מספרים את הסיפור שלך ומייצגים אותך ברמה הגבוהה ביותר.',
    points: ['עיצוב מותאם אישית', 'מהיר וידידותי לגוגל', 'ניהול תוכן פשוט'],
  },
  {
    icon: Target,
    title: 'דפי נחיתה ממירים',
    description:
      'דפי נחיתה ממוקדי מטרה שהופכים מבקרים ללקוחות — בנויים לקמפיינים ולמקסימום המרות.',
    points: ['קריאה חדה לפעולה', 'טפסים חכמים', 'A/B מותאם המרה'],
  },
  {
    icon: TrendingUp,
    title: 'קידום ושיווק דיגיטלי',
    description:
      'קידום אורגני (SEO), קמפיינים בגוגל וברשתות — כדי שהעסק שלך יימצא בדיוק כשמחפשים אותו.',
    points: ['SEO טכני ותוכן', 'קמפיינים ממומנים', 'דוחות ומדידה'],
  },
  {
    icon: Wrench,
    title: 'תחזוקה וליווי',
    description:
      'ליווי שוטף אחרי ההשקה — עדכונים, גיבויים, אבטחה ושיפורים כדי שהאתר תמיד יעבוד מושלם.',
    points: ['עדכונים שוטפים', 'גיבוי ואבטחה', 'תמיכה אישית'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            השירותים שלי
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-black md:text-5xl">
            כל מה שהעסק שלך צריך כדי לבלוט
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            מהרעיון ועד ההשקה והקידום — פתרון דיגיטלי שלם תחת קורת גג אחת.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
