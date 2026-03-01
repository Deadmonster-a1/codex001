import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ASCI Privacy Policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          <div className="mb-12">
            <h1 className="font-mono text-4xl font-bold text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
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
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you about projects and
                updates, and to protect our business and users.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
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
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
                4. Data Security
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
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
