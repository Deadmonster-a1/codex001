import Link from "next/link"

export function CTA() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden border border-border-dark bg-[#0a0a0a] p-10 md:p-20">
          {/* Subtle glow effects */}
          <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 bg-accent/5 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 bg-accent/5 blur-[100px]" />

          <div className="relative flex flex-col items-center text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {'// '}Ready to start?
            </span>
            <h2 className="mt-4 max-w-2xl font-mono text-2xl font-bold text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                {"Let's build something extraordinary together"}
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Behind every great agency are the results that prove it. With
              years of experience, countless successful launches, and clients
              who keep coming back.
            </p>
            <Link
              href="/contact"
              className="mt-8 clip-corner-btn bg-accent px-8 py-3 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
