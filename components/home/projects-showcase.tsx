import Link from "next/link"
import { getFeaturedProjects } from "@/lib/data/projects"
import { ArrowUpRight } from "lucide-react"

export function ProjectsShowcase() {
  const featured = getFeaturedProjects()

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Our Projects
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-4xl">
              OUR PROJECTS
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {"We've helped businesses across industries achieve their goals. Here are some of our recent featured projects."}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden border border-border bg-card transition-all hover:border-accent/30"
            >
              {/* Project image placeholder area */}
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

        {/* View all */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
