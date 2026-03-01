"use client"

import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between border border-border bg-surface px-5 py-3 md:px-8 md:py-4">
        {/* Left: Logo */}
        <Link href="/" className="font-mono text-base font-bold tracking-tight text-dark">
          ASCI
        </Link>

        {/* Center: Navigation links (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-mono text-xs font-medium text-muted transition-colors hover:text-dark"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="font-mono text-xs font-medium text-muted transition-colors hover:text-dark"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="font-mono text-xs font-medium text-muted transition-colors hover:text-dark"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs font-medium text-muted transition-colors hover:text-dark"
          >
            Contact
          </Link>
          <Link
            href="/chats"
            className="font-mono text-xs font-medium text-muted transition-colors hover:text-dark"
          >
            Chats
          </Link>
        </div>

        {/* Right: CTA button (desktop) */}
        <Link
          href="/contact"
          className="hidden clip-corner-btn bg-accent px-6 py-2.5 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:block"
        >
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-dark transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-dark transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-dark transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-1 flex flex-col border border-border bg-surface p-6 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="border-b border-border py-4 font-mono text-sm font-medium text-dark"
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="border-b border-border py-4 font-mono text-sm font-medium text-dark"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className="border-b border-border py-4 font-mono text-sm font-medium text-dark"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="border-b border-border py-4 font-mono text-sm font-medium text-dark"
          >
            Contact
          </Link>
          <Link
            href="/chats"
            onClick={() => setIsOpen(false)}
            className="border-b border-border py-4 font-mono text-sm font-medium text-dark"
          >
            Chats
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 clip-corner-btn bg-accent px-6 py-3 text-center font-mono text-sm font-semibold text-accent-foreground"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
