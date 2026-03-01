import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects, getProjectBySlug } from "@/lib/data/projects"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }
  return { title: project.title, description: project.summary }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[900px] px-4 md:px-6">
          {/* Back link */}
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.summary}
            </p>
          </div>

          {/* Details grid */}
          <div className="mb-12 grid grid-cols-2 gap-6 border-y border-border-dark py-8 md:mb-16 md:grid-cols-4 md:py-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Year
              </span>
              <p className="mt-2 font-mono text-base font-bold text-foreground">
                {project.year}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Industry
              </span>
              <p className="mt-2 font-mono text-sm text-foreground">
                {project.industry}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Scope of Work
              </span>
              <p className="mt-2 font-mono text-sm text-foreground">
                {project.scope}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Timeline
              </span>
              <p className="mt-2 font-mono text-sm text-foreground">
                {project.timeline}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="border border-border-dark bg-[#0a0a0a] p-7 md:p-8">
              <h2 className="mb-4 font-mono text-lg font-bold text-foreground">
                Summary
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden border border-border-dark bg-[#0a0a0a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-8xl font-bold text-foreground/5">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col items-center text-center md:mt-20">
            <p className="mb-5 text-sm text-muted-foreground">
              Interested in working with us?
            </p>
            <Link
              href="/contact"
              className="clip-corner-btn bg-accent px-8 py-3 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
