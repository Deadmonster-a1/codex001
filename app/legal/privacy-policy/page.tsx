import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASCI - Privacy Policy",
  description: "Privacy policy for ASCI creative agency.",
}

export default function PrivacyPolicyPage() {
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
            PRIVACY POLICY
          </h1>

          <div className="max-w-2xl">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  1. Information We Collect
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We collect information you provide directly to us, such as when
                  you fill out a contact form, subscribe to our newsletter, or
                  communicate with us. This may include your name, email address,
                  and any message content you submit.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  2. How We Use Your Information
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We use the information we collect to respond to your inquiries,
                  provide our services, send you updates about our work, and
                  improve our website and services. We do not sell your personal
                  information to third parties.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  3. Data Security
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We take reasonable measures to protect the information we
                  collect from loss, theft, misuse, and unauthorized access. However,
                  no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  4. Cookies
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our website may use cookies to enhance your browsing experience.
                  You can choose to disable cookies through your browser settings,
                  though this may affect some site functionality.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-base font-bold text-card">
                  5. Contact Us
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  If you have any questions about this privacy policy, please
                  contact us through our{" "}
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
