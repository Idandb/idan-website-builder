import { Reveal } from '@/components/reveal'

const steps = [
  {
    num: '01',
    title: 'שיחת אפיון',
    description: 'נכיר את העסק, המטרות והקהל — ונגדיר בדיוק מה האתר צריך להשיג.',
  },
  {
    num: '02',
    title: 'עיצוב מותאם',
    description: 'עיצוב ייחודי שמדבר בשפת המותג שלך, עם דגש על חוויית משתמש והמרה.',
  },
  {
    num: '03',
    title: 'פיתוח והקמה',
    description: 'בנייה מהירה, רספונסיבית ומאובטחת — מוכנה לגוגל ולכל מכשיר.',
  },
  {
    num: '04',
    title: 'השקה וקידום',
    description: 'עולים לאוויר, מחברים אנליטיקס ומתחילים להביא לקוחות אמיתיים.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            תהליך העבודה
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-black md:text-5xl">
            פשוט, שקוף ובלי כאב ראש
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-muted-foreground">
            מלווה אותך יד ביד מהרעיון הראשוני ועד שהאתר עובד ומייצר לך תוצאות.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 90}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="font-display text-5xl font-black text-primary/25">
                {s.num}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
