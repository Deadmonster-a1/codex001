"use client"

import { useState } from "react"

export function ContactFormFields() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="font-mono text-xs tracking-wider text-muted-foreground">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="border border-border/30 bg-transparent px-4 py-3 text-sm text-card outline-none placeholder:text-border focus:border-primary"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-mono text-xs tracking-wider text-muted-foreground">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="border border-border/30 bg-transparent px-4 py-3 text-sm text-card outline-none placeholder:text-border focus:border-primary"
          placeholder="Your email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-mono text-xs tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="resize-none border border-border/30 bg-transparent px-4 py-3 text-sm text-card outline-none placeholder:text-border focus:border-primary"
          placeholder="Your message"
        />
      </div>
      <button
        type="submit"
        className="self-start bg-primary px-8 py-3 font-mono text-sm font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
      >
        {submitted ? "Sent!" : "Submit"}
      </button>
    </form>
  )
}
