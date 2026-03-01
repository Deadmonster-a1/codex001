import Link from "next/link"
import { SectionHeader } from "../section-header"
import { Check } from "lucide-react"

const plans = [
  {
    label: "01 / Project",
    price: "$1,499",
    period: "Per project, cancel anytime.",
    features: [
      "Complete project from concept to launch",
      "Custom design tailored to your brand",
      "Responsive development",
      "2 rounds of revisions included",
      "30-day post-launch support",
    ],
  },
  {
    label: "02 / Monthly",
    price: "$2,499",
    period: "Per month, cancel anytime.",
    features: [
      "Everything in Project plan",
      "Ongoing design & development support",
      "Priority communication channel",
      "Monthly performance reports",
      "Unlimited revision rounds",
      "Dedicated account manager",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-4">
          <SectionHeader title="PRICING" />
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Add marketing, SEO, or content creation flexible tools to strengthen
            your project. {"We'll"} shape a solution that fits your business, not ours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Pricing Cards */}
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 border border-border/20 bg-card/5 p-6 lg:p-8"
            >
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                {plan.label}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-3xl font-bold text-card">
                  {plan.price}
                </span>
                <span className="text-xs text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-auto border border-border/40 py-3 text-center font-mono text-xs font-semibold tracking-wide text-card transition-colors hover:bg-card/10"
              >
                Get Started
              </Link>
            </div>
          ))}

          {/* Custom CTA */}
          <div className="flex flex-col justify-center gap-4 border border-border/20 bg-card/5 p-6 lg:p-8">
            <h3 className="font-mono text-base font-bold text-card">
              Need a custom solution?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We understand that every business has unique requirements. Contact
              our sales team to discuss a tailored solution that fits your needs.
            </p>
            <Link
              href="/contact"
              className="self-start bg-primary px-6 py-2.5 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
