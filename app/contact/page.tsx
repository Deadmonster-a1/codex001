import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactFormFields } from "@/components/contact-form-fields"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASCI - Contact",
  description:
    "Have a project in mind? Reach out to us, and we'll discuss the best way to move forward.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Back button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-card"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Page header */}
          <div className="mb-12 flex flex-col gap-4">
            <h1 className="font-mono text-3xl font-bold tracking-wider text-card lg:text-5xl">
              GET IN TOUCH
            </h1>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Have a project in mind? Reach out to us, and {"we'll"} discuss the
              best way to move forward.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-xl">
            <ContactFormFields />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
