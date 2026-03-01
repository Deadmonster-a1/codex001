import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ASCI Terms of Service - Rules and guidelines for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[720px] px-4 md:px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          <div className="mb-10 md:mb-12">
            <h1 className="font-mono text-3xl font-bold text-foreground md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 font-mono text-[10px] text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-7">
            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                By accessing and using the ASCI website and services, you accept
                and agree to be bound by the terms and provisions of this
                agreement. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                2. Services
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                ASCI provides web design, development, branding, SEO, and
                digital marketing services. The specific scope, deliverables,
                and timeline for each project will be outlined in individual
                project agreements.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                3. Intellectual Property
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                All content, designs, and materials created by ASCI remain our
                intellectual property until full payment is received. Upon
                completion and payment, ownership of deliverables transfers to
                the client as specified in the project agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                4. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                ASCI shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to
                the use of our services. Our total liability shall not exceed
                the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                5. Contact
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For questions about these Terms of Service, please reach out
                through our{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
