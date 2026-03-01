import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
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
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "ASCI - Project Not Found" }
  return {
    title: `ASCI - ${project.title}`,
    description: `${project.title} - ${project.category} project by ASCI.`,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  // Get related projects (excluding current)
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Back button */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-card"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          {/* Project header */}
          <div className="mb-8 flex flex-col gap-2">
            <span className="font-mono text-xs tracking-wider text-primary">
              {project.category}
            </span>
            <h1 className="font-mono text-3xl font-bold tracking-wider text-card lg:text-5xl">
              {project.title}
            </h1>
            <span className="font-mono text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          {/* Project image */}
          <div className="mb-16 aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Project description */}
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 font-mono text-lg font-bold text-card">
              About this project
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.title} is a {project.category.toLowerCase()} project we
              delivered in {project.year}. Our team worked closely with the client
              to create a solution that perfectly captures their brand essence
              while driving measurable results. From initial concept to final
              delivery, every detail was carefully crafted to exceed expectations.
            </p>
          </div>

          {/* Related projects */}
          <div>
            <h2 className="mb-6 font-mono text-lg font-bold tracking-wider text-card">
              RELATED PROJECTS
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col border border-border/20 bg-card/5 transition-colors hover:bg-card/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-border/20 px-4 py-3">
                    <span className="font-mono text-sm font-semibold text-card">
                      {p.title}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground group-hover:text-primary"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
