"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { DotGridLogo } from "./dot-grid-logo"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-4">
      <div className="flex w-full max-w-[1200px] items-center justify-between rounded-none border border-border bg-card px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <DotGridLogo className="h-8 w-8" />
          <span className="font-mono text-sm font-bold tracking-wider text-foreground">
            ASCI
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 bg-primary px-5 py-2.5 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90 md:flex"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[68px] z-50 border-b border-border bg-card p-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm font-medium text-foreground"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm font-medium text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm font-medium text-foreground"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm font-medium text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-primary px-5 py-3 text-center font-mono text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
