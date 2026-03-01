import { Star } from "lucide-react"

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

export function Testimonials() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Testimonials
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-4xl">
              TESTIMONIALS
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2">
            <Star size={14} className="fill-accent text-accent" />
            <span className="font-mono text-xs text-muted-foreground">
              4.9/5 Rated
            </span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="border border-border bg-card p-8 transition-all hover:border-accent/30"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>

              <div>
                <p className="font-mono text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
