export function MarqueeBanner() {
  const text = "CREATIVE GLOBAL AGENCY"
  const items = Array(8).fill(text)

  return (
    <section className="overflow-hidden border-y border-border/20 py-6 lg:py-8">
      <div className="flex animate-marquee-slow items-center gap-8">
        {items.map((t, i) => (
          <span
            key={i}
            className="shrink-0 font-mono text-3xl font-bold tracking-wider text-card/20 lg:text-5xl"
            style={{ fontFamily: "var(--font-display), var(--font-mono)" }}
          >
            {t}
          </span>
        ))}
        {items.map((t, i) => (
          <span
            key={`dup-${i}`}
            className="shrink-0 font-mono text-3xl font-bold tracking-wider text-card/20 lg:text-5xl"
            style={{ fontFamily: "var(--font-display), var(--font-mono)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
