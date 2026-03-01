import Link from "next/link"
import { SpinnerOrb } from "../spinner-orb"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 text-center">
        {/* Spinner Orb */}
        <SpinnerOrb className="h-16 w-16 lg:h-20 lg:w-20" />

        {/* Headline */}
        <h1
          className="max-w-4xl text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-card md:text-5xl lg:text-7xl"
          style={{ fontFamily: "var(--font-display), var(--font-mono)" }}
        >
          BUILDING FUTURE DESIGN
        </h1>

        {/* Sub-headline */}
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
          Forget generic websites. Get the tools and strategies that actually
          drive growth and make your brand shine.
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-primary px-8 py-3 font-mono text-sm font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
