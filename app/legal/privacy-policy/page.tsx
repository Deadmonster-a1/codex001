import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ASCI Privacy Policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 font-mono text-[10px] text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-7">
            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                1. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We collect information you provide directly to us, such as when
                you fill out a contact form, subscribe to our newsletter, or
                communicate with us. This may include your name, email address,
                and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you about projects and
                updates, and to protect our business and users.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                3. Information Sharing
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. We may share information with
                trusted service providers who assist us in operating our
                business, provided they agree to keep this information
                confidential.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                4. Data Security
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-mono text-lg font-bold text-foreground">
                5. Contact Us
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us through our{" "}
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
