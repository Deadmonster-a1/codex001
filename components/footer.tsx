import Link from "next/link"
import { BoltIcon } from "./bolt-icon"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left: Logo + Description */}
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="dot-grid h-8 w-8 rounded-sm" />
              <span className="font-mono text-sm font-bold tracking-wider text-card">
                ASCI
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Full-service creative agency crafting websites, brands, and
              experiences that convert.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            {/* Pages */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-border">
                PAGES
              </h4>
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Contact
              </Link>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-border">
                LEGAL
              </h4>
              <Link
                href="/legal/privacy-policy"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-of-service"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Terms of Service
              </Link>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-border">
                SOCIAL
              </h4>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-card"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 lg:flex-row">
          <div className="flex items-center gap-2">
            <BoltIcon className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              {"Powered by creativity and code."}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            {"2025 ASCI. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
