import Link from "next/link"
import { projects } from "@/lib/data"
import { SectionHeader } from "../section-header"
import { ArrowUpRight } from "lucide-react"

export function ProjectsShowcase() {
  const featured = projects.slice(0, 6)

  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <SectionHeader title="OUR PROJECTS" badge={"\u00A9 2025"} />
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              {"We've helped businesses across industries achieve their goals. Here are some of our recent featured projects."}
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
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
  )
}
