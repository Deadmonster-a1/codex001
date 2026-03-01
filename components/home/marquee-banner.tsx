export function MarqueeBanner() {
  const text = "CREATIVE GLOBAL AGENCY"

  return (
    <section className="overflow-hidden border-y border-border py-8">
      <div className="flex animate-marquee items-center gap-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="shrink-0 font-mono text-4xl font-bold uppercase tracking-wider text-foreground/10 md:text-6xl"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}
