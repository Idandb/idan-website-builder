const stats = [
  { value: '+50', label: 'אתרים שנבנו' },
  { value: '100%', label: 'רספונסיבי לנייד' },
  { value: '<2 שנ׳', label: 'זמן טעינה' },
  { value: '24/7', label: 'זמינות ותמיכה' },
]

export function Stats() {
  return (
    <section className="relative border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center md:py-10">
            <div className="font-display text-3xl font-black text-primary md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
