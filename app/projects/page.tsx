import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASCI - Projects",
  description:
    "We've helped businesses across industries achieve their goals. Here are some of our recent projects.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Back button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-card"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Page header */}
          <div className="mb-12 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h1 className="font-mono text-3xl font-bold tracking-wider text-card lg:text-5xl">
                PROJECTS
              </h1>
              <span className="inline-flex items-center border border-border/40 px-3 py-1 font-mono text-xs text-muted-foreground">
                {projects.length}
              </span>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              {"We've helped businesses across industries achieve their goals. Here are some of our recent projects."}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col border border-border/20 bg-card/5 transition-colors hover:bg-card/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-card/90 px-2 py-1 font-mono text-[10px] font-medium tracking-wider text-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-border/20 px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-sm font-semibold text-card">
                      {project.title}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    View
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
