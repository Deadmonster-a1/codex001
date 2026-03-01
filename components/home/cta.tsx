import Link from "next/link"

export function CTA() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-border bg-card p-12 md:p-20">
          {/* Background decoration */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 bg-accent/5 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 bg-accent/5 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Ready to start?
            </span>
            <h2 className="mt-4 max-w-2xl font-mono text-3xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">
                {"Let's build something extraordinary together"}
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Behind every great agency are the results that prove it. With
              years of experience, countless successful launches, and clients
              who keep coming back.
            </p>
            <Link
              href="/contact"
              className="mt-10 clip-corner-sm bg-accent px-8 py-3.5 font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
