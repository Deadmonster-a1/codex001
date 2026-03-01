import Link from "next/link"
import { ClippedCornerShape } from "../clipped-corner-shape"
import { SectionHeader } from "../section-header"

const stats = [
  { value: "50", suffix: "//", label1: "Industry", label2: "Experience", sublabel: "Years" },
  { value: "150", suffix: "%", label1: "Customer", label2: "Satisfaction", sublabel: "" },
  { value: "300", suffix: "+", label1: "Projects", label2: "Completed", sublabel: "" },
]

export function StatsSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header text */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader title="WHY CHOOSE US" />
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              Behind every great agency are the results that prove it. With years
              of experience, countless successful launches, and clients who keep
              coming back, our credentials tell the story of a team that
              consistently delivers beyond expectations.
            </p>
            <Link
              href="/contact"
              className="bg-primary px-6 py-2.5 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col border border-border/30 bg-card md:flex-row">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-1 items-start gap-4 p-6 lg:p-8 ${
                i < stats.length - 1 ? "border-b border-border/30 md:border-b-0 md:border-r" : ""
              }`}
            >
              {/* Clipped corner icon */}
              <div className="hidden shrink-0 lg:block">
                <ClippedCornerShape size={80} />
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="font-mono text-lg font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                {stat.sublabel && (
                  <span className="font-mono text-xs text-muted-foreground">
                    {stat.sublabel}
                  </span>
                )}
                <span className="font-mono text-xs text-muted-foreground">
                  {stat.label1}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {stat.label2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
