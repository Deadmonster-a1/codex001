export function Partners() {
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

  return (
    <section className="overflow-hidden border-y border-border py-6">
      <div className="flex items-center gap-4">
        <span className="shrink-0 px-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Our Partners From Industry :
        </span>
        <div className="flex animate-marquee items-center gap-12">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-mono text-sm font-semibold tracking-wider text-muted-foreground/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
