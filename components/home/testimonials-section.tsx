import { testimonials } from "@/lib/data"
import { SectionHeader } from "../section-header"

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <SectionHeader title="TESTIMONIALS" badge="4.9/5 Rated" />
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              {"We've delivered 56+ projects that help companies generate real results."}
            </p>
          </div>
          <a
            href="#"
            className="self-start border border-border/40 px-5 py-2.5 font-mono text-xs font-semibold tracking-wide text-card transition-colors hover:bg-card/10 lg:self-auto"
          >
            Leave Review
          </a>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 border border-border/20 bg-card/5 p-6 lg:p-8"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-mono text-sm font-semibold text-card">
                    {t.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
