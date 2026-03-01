import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects, getProjectBySlug } from "@/lib/data/projects"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: project.title,
    description: project.summary,
  }
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
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-4xl px-4">
          {/* Back link */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Project header */}
          <div className="mb-16">
            <h1 className="font-mono text-4xl font-bold text-foreground md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>

          {/* Project details grid */}
          <div className="mb-16 grid grid-cols-2 gap-8 border-y border-border py-10 md:grid-cols-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Year
              </span>
              <p className="mt-2 font-mono text-lg font-bold text-foreground">
                {project.year}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Industry
              </span>
              <p className="mt-2 font-mono text-sm text-foreground">
                {project.industry}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Scope of Work
              </span>
              <p className="mt-2 font-mono text-sm text-foreground">
                {project.scope}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Timeline
              </span>
              <p className="mt-2 font-mono text-sm text-foreground">
                {project.timeline}
              </p>
            </div>
          </div>

          {/* Project content placeholder */}
          <div className="space-y-8">
            <div className="border border-border bg-card p-8">
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
                Summary
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </div>

            {/* Project image placeholder */}
            <div className="relative aspect-video w-full overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-8xl font-bold text-border">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 flex flex-col items-center text-center">
            <p className="mb-6 text-sm text-muted-foreground">
              Interested in working with us?
            </p>
            <Link
              href="/contact"
              className="clip-corner-sm bg-accent px-8 py-3.5 font-mono text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
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
