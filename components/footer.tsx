import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border-dark bg-background px-4 py-16 md:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        {/* Top section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="max-w-sm">
            <Link href="/" className="font-mono text-xl font-bold text-foreground">
              ASCI
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full-service creative agency crafting websites, brands, and
              experiences that convert.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                Pages
              </span>
              <Link
                href="/"
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
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
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                Utility
              </span>
              <Link
                href="/legal/privacy-policy"
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-of-service"
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start gap-4 border-t border-border-dark pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            Made by{" "}
            <span className="text-accent">Asci Studio</span>
            {" "}&copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
