import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link href="/" className="font-mono text-2xl font-bold text-foreground">
              ASCI
            </Link>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Full-service creative agency crafting websites, brands, and
              experiences that convert.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pages
              </span>
              <Link
                href="/"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </span>
              <Link
                href="/legal/privacy-policy"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-of-service"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ASCI. All rights reserved.
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
