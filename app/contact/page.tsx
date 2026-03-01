"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Page header */}
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Get In Touch
            </span>
            <h1 className="mt-3 font-mono text-4xl font-bold text-foreground md:text-6xl">
              GET IN TOUCH
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Have a project in mind? Reach out to us, and we{"'"}ll discuss the
              best way to move forward.
            </p>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="border border-accent/30 bg-card p-12 text-center">
              <h2 className="font-mono text-2xl font-bold text-foreground">
                Thank you!
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                {"We've received your message and will get back to you shortly."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="clip-corner-sm w-full bg-accent py-3.5 font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90 md:w-auto md:px-12"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
