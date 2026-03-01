import Link from "next/link"

const stats = [
  { number: "50", suffix: "//", label1: "Years", label2: "Industry", label3: "Experience" },
  { number: "150", suffix: "%", label1: "", label2: "Customer", label3: "Satisfaction" },
  { number: "300", suffix: "+", label1: "", label2: "Projects", label3: "Completed" },
]

function StatCard({ number, suffix, label2, label3 }: {
  number: string
  suffix: string
  label1: string
  label2: string
  label3: string
}) {
  return (
    <div className="flex flex-col items-center bg-card clip-stat-card border border-border p-4 md:p-6">
      <div className="mb-3 flex items-baseline gap-1">
        <span className="font-mono text-3xl font-bold text-dark md:text-[44px] leading-tight">
          {number}
        </span>
        <span className="font-mono text-sm font-medium text-accent">{suffix}</span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {label2}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {label3}
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-surface px-4 pt-24 pb-0 md:px-6 md:pt-28">
      {/* Dotted background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />

      <div className="relative mx-auto max-w-[1200px] pt-8 pb-0 md:pt-16">
        {/* Top label */}
        <div className="mb-6 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {'// '}Creative Agency
          </span>
        </div>

        {/* Main heading */}
        <h1 className="max-w-[900px] font-mono text-3xl font-bold leading-[1.15] text-dark md:text-5xl lg:text-[56px]">
          <span className="text-balance">
            Forget generic websites.{" "}
            <span className="text-muted">
              Get the tools and strategies that actually drive growth and make
              your brand shine.
            </span>
          </span>
        </h1>

        {/* CTA row */}
        <div className="mt-8 flex items-center gap-6 md:mt-10">
          <Link
            href="/contact"
            className="clip-corner-btn bg-accent px-7 py-3 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <Link
            href="/projects"
            className="font-mono text-xs font-medium text-muted transition-colors hover:text-dark"
          >
            Our Projects
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-3 md:mt-16 md:grid-cols-6 md:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
          {/* Duplicate for 6 cards on desktop, 3 on mobile */}
          {stats.map((stat, i) => (
            <StatCard key={`dup-${i}`} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
