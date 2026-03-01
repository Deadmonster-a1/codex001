import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data/projects"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "We've helped businesses across industries achieve their goals. Here are some of our recent projects.",
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
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
              {'// '}Projects
            </span>
            <div className="mt-2 flex items-baseline gap-4">
              <h1 className="font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
                PROJECTS
              </h1>
              <span className="font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
                {projects.length}
              </span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {"We've helped businesses across industries achieve their goals. Here are some of our recent projects."}
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden border border-border-dark transition-all hover:border-accent/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-7xl font-bold text-foreground/5">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="flex items-center justify-between border-t border-border-dark p-5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-mono text-base font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-dark transition-all group-hover:border-accent group-hover:bg-accent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground transition-colors group-hover:text-accent-foreground">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
