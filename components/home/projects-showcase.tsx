import Link from "next/link"
import { getFeaturedProjects } from "@/lib/data/projects"

export function ProjectsShowcase() {
  const featured = getFeaturedProjects()

  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {'// '}Our Projects
            </span>
            <h2 className="mt-2 font-mono text-2xl font-bold text-foreground md:text-4xl">
              OUR PROJECTS
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {"We've helped businesses across industries achieve their goals. Here are some of our recent featured projects."}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden border border-border-dark transition-all hover:border-accent/40"
            >
              {/* Project image area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-7xl font-bold text-foreground/5">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Info */}
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground transition-colors group-hover:text-accent-foreground"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            {"View All Projects ->"}
          </Link>
        </div>
      </div>
    </section>
  )
}
