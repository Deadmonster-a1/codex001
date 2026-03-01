const aboutItems = [
  {
    number: "01",
    title: "Clear Communication",
    description:
      "We keep you in the loop from initial concept through final delivery, ensuring you're informed, involved, and confident at every milestone of your project.",
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description:
      "We take the time to understand your specific goals, challenges, and vision, then craft customized strategies that align perfectly with what your business actually needs to succeed.",
  },
  {
    number: "03",
    title: "Complete Transparency",
    description:
      "Our pricing is clear, detailed, and straightforward from day one -- no unexpected charges, no fine print, just honest numbers that respect your budget and trust.",
  },
  {
    number: "04",
    title: "Measurable Results",
    description:
      "Our portfolio is built on real success stories backed by data, metrics, and satisfied clients who've seen tangible growth from our work together with them.",
  },
]

export function About() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            About Us
          </span>
          <h2 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-4xl">
            ABOUT US
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            See how our team combines creativity, technology, and strategy to
            build powerful digital solutions.
          </p>
        </div>

        {/* About items */}
        <div className="grid gap-0 divide-y divide-border">
          {aboutItems.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col gap-4 py-8 md:flex-row md:items-start md:gap-12"
            >
              <div className="flex shrink-0 items-center gap-4">
                <span className="font-mono text-lg font-bold text-foreground">
                  {item.title}
                </span>
                <span className="font-mono text-sm text-accent">
                  {item.number}
                </span>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:ml-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
