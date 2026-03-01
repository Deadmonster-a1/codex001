import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16">
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        {/* Tag line */}
        <div className="mb-8 flex items-center gap-3 rounded-full border border-border px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Creative Agency
          </span>
        </div>

        {/* Main heading */}
        <h1 className="max-w-4xl font-mono text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Forget generic websites.{" "}
            <span className="text-muted-foreground">
              Get the tools and strategies that actually drive growth and make
              your brand shine.
            </span>
          </span>
        </h1>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="clip-corner-sm bg-accent px-8 py-3.5 font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3.5 font-mono text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            View Projects
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8 border-t border-border pt-10">
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-foreground md:text-4xl">
              50
            </span>
            <span className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Years Experience
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-foreground md:text-4xl">
              150%
            </span>
            <span className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Customer Satisfaction
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-foreground md:text-4xl">
              300+
            </span>
            <span className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Projects Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
