"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
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
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[720px] px-4 md:px-6">
          {/* Back link */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Page header */}
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {'// '}Get In Touch
            </span>
            <h1 className="mt-2 font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
              GET IN TOUCH
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Have a project in mind? Reach out to us, and we{"'"}ll discuss the
              best way to move forward.
            </p>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="border border-accent/30 bg-[#0a0a0a] p-10 text-center md:p-12">
              <h2 className="font-mono text-xl font-bold text-foreground md:text-2xl">
                Thank you!
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {"We've received your message and will get back to you shortly."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-border-dark bg-[#0a0a0a] px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border-dark bg-[#0a0a0a] px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none border border-border-dark bg-[#0a0a0a] px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="clip-corner-btn w-full bg-accent py-3 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:w-auto md:px-12"
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
