"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            FAQ
          </span>
          <h2 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-4xl">
            FREQUENTLY ASKED
          </h2>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-mono text-sm font-semibold text-foreground md:text-base">
                  {faq.question}
                </span>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border">
                  {openIndex === index ? (
                    <Minus size={14} className="text-accent" />
                  ) : (
                    <Plus size={14} className="text-muted-foreground" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
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
