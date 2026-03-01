"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What services does ASCI offer?",
    answer:
      "We offer a comprehensive range of digital services including web design & development, social media marketing, SEO & content marketing, and brand design & identity. Each service is tailored to meet your specific business goals and drive measurable results.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A standard website project typically takes 8-14 weeks from kickoff to launch. We'll provide a detailed timeline during our initial consultation so you know exactly what to expect.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is transparent and project-based. We provide detailed proposals with clear breakdowns so there are no surprises. Pricing depends on the scope, complexity, and specific requirements of your project.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer comprehensive post-launch support packages that include maintenance, updates, performance monitoring, and strategic consulting to ensure your digital presence continues to grow and perform.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We establish clear KPIs at the start of every project and provide regular reports with actionable insights. Success metrics may include traffic growth, conversion rates, search rankings, engagement metrics, and ROI.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            {'// '}FAQ
          </span>
          <h2 className="mt-2 font-mono text-2xl font-bold text-foreground md:text-4xl">
            FREQUENTLY ASKED
          </h2>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-border-dark">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-mono text-sm font-semibold text-foreground">
                  {faq.question}
                </span>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-border-dark">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${openIndex === index ? "rotate-45" : ""} ${openIndex === index ? "text-accent" : "text-muted-foreground"}`}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
