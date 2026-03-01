import Link from "next/link"

const services = [
  {
    number: "001",
    title: "WEB DESIGN & DEVELOPMENT",
    description:
      "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    tags: ["Packaging", "Branding", "Logo", "Typography", "Guidelines"],
  },
  {
    number: "002",
    title: "SOCIAL MEDIA MARKETING",
    description:
      "Strategic campaigns that build engaged communities, amplify your brand, and convert followers.",
    tags: ["Content", "Analytics", "Optimization", "Reporting", "Advertising"],
  },
  {
    number: "003",
    title: "SEO & CONTENT MARKETING",
    description:
      "Optimized content that ranks high, drives organic traffic, and establishes lasting authority.",
    tags: ["Keyword", "Research", "Backlinks", "Content"],
  },
  {
    number: "004",
    title: "BRAND DESIGN & IDENTITY",
    description:
      "Distinctive visual systems that capture your essence and create memorable brand impressions.",
    tags: ["Logo", "Branding", "Strategy", "Packaging", "Applications"],
  },
]

export function Services() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Our Services
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-4xl">
              OUR SERVICES
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <span className="font-mono text-xs text-muted-foreground">
              [ + 04 Services]
            </span>
            <p className="max-w-md text-right text-sm leading-relaxed text-muted-foreground">
              {"Everything you need to build, launch, and scale your digital presence -- all under one roof."}
            </p>
            <Link
              href="/contact"
              className="clip-corner-sm bg-accent px-6 py-2.5 font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border border-border bg-card p-8 transition-all hover:border-accent/30"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{"}"}</span>
                <span className="font-mono text-sm font-bold text-foreground">
                  {service.number}
                </span>
                <span className="font-mono text-xs text-accent">{"{"}</span>
              </div>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 font-mono text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
