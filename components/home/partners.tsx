const partners = [
  "VERCEL",
  "STRIPE",
  "LINEAR",
  "NOTION",
  "FIGMA",
  "FRAMER",
  "WEBFLOW",
  "SHOPIFY",
]

export function Partners() {
  return (
    <section className="overflow-hidden border-y border-border-dark py-5">
      <div className="flex items-center">
        <span className="shrink-0 px-6 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Our Partners From Industry :
        </span>
        <div className="flex animate-marquee items-center gap-10">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-mono text-sm font-medium tracking-wider text-foreground/20"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
