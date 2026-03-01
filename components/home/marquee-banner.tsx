export function MarqueeBanner() {
  const items = ["CREATIVE", "GLOBAL", "AGENCY"]

  return (
    <section className="overflow-hidden border-y border-border-dark py-6 md:py-8">
      <div className="flex animate-marquee-slow items-center gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            {items.map((text, j) => (
              <span
                key={`${i}-${j}`}
                className="shrink-0 font-mono text-4xl font-bold uppercase tracking-wider text-foreground/[0.07] md:text-6xl lg:text-7xl"
              >
                {text}
              </span>
            ))}
            <span className="shrink-0 font-mono text-4xl font-bold text-accent/20 md:text-6xl lg:text-7xl">
              *
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
