import { aboutItems } from "@/lib/data"
import { SectionHeader } from "../section-header"

export function AboutSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-4">
          <SectionHeader title="ABOUT US" />
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            See how our team combines creativity, technology, and strategy to
            build powerful digital solutions.
          </p>
        </div>

        {/* About Items */}
        <div className="flex flex-col gap-0">
          {aboutItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 border-t border-border/20 py-8 lg:flex-row lg:items-start lg:gap-12"
            >
              <div className="flex items-center gap-4 lg:w-64 lg:shrink-0">
                <h3 className="font-mono text-base font-semibold text-card">
                  {item.title}
                </h3>
                <span className="font-mono text-sm font-bold text-primary">
                  {item.number}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
