"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-4">
      <div className="flex w-full max-w-7xl items-center justify-between rounded-lg border border-border bg-background/80 px-6 py-3 backdrop-blur-md">
        <Link href="/" className="font-mono text-lg font-bold text-foreground">
          ASCI
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/projects"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="hidden clip-corner-sm bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90 md:block"
        >
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 flex flex-col gap-4 rounded-lg border border-border bg-background/95 p-6 backdrop-blur-md md:hidden">
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="clip-corner-sm bg-accent px-5 py-2.5 text-center font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
