import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASCI - Terms of Service",
  description: "Terms of service for ASCI creative agency.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-card"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          <h1 className="mb-12 font-mono text-3xl font-bold tracking-wider text-card lg:text-5xl">
            TERMS OF SERVICE
          </h1>

          <div className="max-w-2xl">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  By accessing and using our website and services, you accept and
                  agree to be bound by the terms and provisions of this agreement.
                  If you do not agree, please do not use our services.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  2. Services
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ASCI provides web design, development, branding, SEO, and
                  digital marketing services. The specific scope of work for each
                  project will be defined in a separate agreement between ASCI
                  and the client.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  3. Intellectual Property
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All content on this website, including text, graphics, logos, and
                  images, is the property of ASCI and is protected by copyright
                  laws. You may not reproduce, distribute, or create derivative
                  works without our written permission.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  4. Limitation of Liability
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ASCI shall not be liable for any indirect, incidental, or
                  consequential damages arising out of the use or inability to use
                  our services. Our total liability shall not exceed the amount
                  paid for the services in question.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  5. Contact
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For any questions about these terms, please reach out through
                  our{" "}
                  <Link href="/contact" className="text-primary underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
