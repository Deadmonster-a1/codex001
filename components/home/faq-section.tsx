"use client"

import { useState } from "react"
import { faqs } from "@/lib/data"
import { SectionHeader } from "../section-header"
import { Plus, Minus } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <SectionHeader title="FAQ" />
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-border/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-mono text-sm font-semibold text-card">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus size={16} className="shrink-0 text-primary" />
                ) : (
                  <Plus size={16} className="shrink-0 text-muted-foreground" />
                )}
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
