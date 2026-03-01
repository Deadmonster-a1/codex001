import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data/projects"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
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
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Page header */}
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Projects
            </span>
            <h1 className="mt-3 font-mono text-4xl font-bold text-foreground md:text-6xl">
              PROJECTS
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="font-mono text-4xl font-bold text-foreground md:text-6xl">
                {projects.length}
              </span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {"We've helped businesses across industries achieve their goals. Here are some of our recent projects."}
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden border border-border bg-card transition-all hover:border-accent/30"
              >
                {/* Project image placeholder */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-6xl font-bold text-border">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project info */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-mono text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-accent group-hover:bg-accent">
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground transition-colors group-hover:text-foreground"
                    />
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
