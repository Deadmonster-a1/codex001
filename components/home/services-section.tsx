import Link from "next/link"
import { services } from "@/lib/data"
import { SectionHeader } from "../section-header"

export function ServicesSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <SectionHeader title="OUR SERVICES" badge="+ 04 Services" />
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              {"Everything you need to build, launch, and scale your digital presence\u2014all under one roof."}
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start bg-primary px-6 py-2.5 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90 lg:self-auto"
          >
            Get Started
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border border-border/20 bg-card/5 p-6 lg:p-8"
            >
              {/* Code decoration line */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg text-border">{"}"}</span>
                <span className="font-mono text-xl font-bold text-primary">
                  {service.number}
                </span>
                <span className="font-mono text-lg text-border">{"{"}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border/30 px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="font-mono text-base font-bold tracking-wider text-card">
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
