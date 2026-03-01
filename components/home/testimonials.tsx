const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVault",
    text: "ASCI completely transformed our digital presence. Their attention to detail and strategic approach delivered results beyond our expectations.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Founder, Nexora",
    text: "Working with ASCI was a game-changer. They understood our vision and brought it to life with exceptional design and flawless execution.",
    rating: 5,
  },
  {
    name: "Emily Roberts",
    role: "CMO, BrightPath",
    text: "The team at ASCI is incredibly talented and professional. They delivered a website that not only looks amazing but actually drives conversions.",
    rating: 5,
  },
]

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      className="text-accent"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {'// '}Testimonials
            </span>
            <h2 className="mt-2 font-mono text-2xl font-bold text-foreground md:text-4xl">
              TESTIMONIALS
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-border-dark px-4 py-2">
            <StarIcon filled />
            <span className="font-mono text-[10px] text-muted-foreground">
              4.9/5 Rated
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border-dark bg-[#0a0a0a] p-7 transition-all hover:border-accent/30 md:p-8"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} filled />
                ))}
              </div>

              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </p>

              <div>
                <p className="font-mono text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
