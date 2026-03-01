"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import type { Project } from "@/lib/data/projects"

interface NewProject {
  id: string
  title: string
  category: string
  year: string
  industry: string
  scope: string
  timeline: string
  summary: string
  createdAt: string
}

export function ChatProjectList({
  initialProjects,
}: {
  initialProjects: Project[]
}) {
  const [newProjects, setNewProjects] = useState<NewProject[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [filter, setFilter] = useState<"all" | "imported" | "created">("all")
  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isCreating && titleRef.current) {
      titleRef.current.focus()
    }
  }, [isCreating])

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const title = (fd.get("title") as string).trim()
    const category = (fd.get("category") as string).trim()
    const industry = (fd.get("industry") as string).trim()
    const scope = (fd.get("scope") as string).trim()
    const timeline = (fd.get("timeline") as string).trim()
    const summary = (fd.get("summary") as string).trim()

    if (!title) return

    const project: NewProject = {
      id: crypto.randomUUID(),
      title,
      category: category || "General",
      year: new Date().getFullYear().toString(),
      industry: industry || "Unspecified",
      scope: scope || category || "General",
      timeline: timeline || "TBD",
      summary: summary || `New project: ${title}`,
      createdAt: new Date().toISOString(),
    }

    setNewProjects((prev) => [project, ...prev])
    setIsCreating(false)
    formRef.current?.reset()
  }

  const filteredImported =
    filter === "created" ? [] : initialProjects
  const filteredCreated =
    filter === "imported" ? [] : newProjects

  const totalCount =
    filter === "all"
      ? initialProjects.length + newProjects.length
      : filter === "imported"
        ? initialProjects.length
        : newProjects.length

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Filters */}
        <div className="flex gap-2">
          {(["all", "imported", "created"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`clip-corner-sm px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === f
                  ? "bg-accent text-accent-foreground"
                  : "border border-border-dark bg-transparent text-muted-foreground hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {f === "all"
                ? `All (${initialProjects.length + newProjects.length})`
                : f === "imported"
                  ? `Imported (${initialProjects.length})`
                  : `Created (${newProjects.length})`}
            </button>
          ))}
        </div>

        {/* Create button */}
        <button
          onClick={() => setIsCreating(true)}
          className="clip-corner-btn inline-flex items-center gap-2 bg-accent px-6 py-2.5 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          New Project
        </button>
      </div>

      {/* Create modal */}
      {isCreating && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg border border-border-dark bg-[#0a0a0a] p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {'// '}New Project
                </span>
                <h2 className="mt-1 font-mono text-lg font-bold text-foreground">
                  CREATE PROJECT
                </h2>
              </div>
              <button
                onClick={() => setIsCreating(false)}
                className="flex h-8 w-8 items-center justify-center border border-border-dark text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                aria-label="Close"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <form
              ref={formRef}
              onSubmit={handleCreate}
              className="flex flex-col gap-4"
            >
              {/* Title */}
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Project Name *
                </label>
                <input
                  ref={titleRef}
                  name="title"
                  required
                  placeholder="e.g. Boltshift Redesign"
                  className="w-full border border-border-dark bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                />
              </div>

              {/* Category + Industry */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Category
                  </label>
                  <input
                    name="category"
                    placeholder="Webdesign"
                    className="w-full border border-border-dark bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Industry
                  </label>
                  <input
                    name="industry"
                    placeholder="Technology"
                    className="w-full border border-border-dark bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Scope + Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Scope
                  </label>
                  <input
                    name="scope"
                    placeholder="Webdesign & SEO"
                    className="w-full border border-border-dark bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Timeline
                  </label>
                  <input
                    name="timeline"
                    placeholder="12 weeks"
                    className="w-full border border-border-dark bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Summary
                </label>
                <textarea
                  name="summary"
                  rows={3}
                  placeholder="Brief project description..."
                  className="w-full resize-none border border-border-dark bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                />
              </div>

              {/* Actions */}
              <div className="mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-6 py-2.5 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="clip-corner-btn bg-accent px-8 py-2.5 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        Showing {totalCount} project{totalCount !== 1 ? "s" : ""}
      </div>

      {/* Created projects */}
      {filteredCreated.length > 0 && (
        <div className="mb-8">
          {filter === "all" && (
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              {'// '}Created Projects
            </h2>
          )}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredCreated.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden border border-accent/30 transition-all hover:border-accent"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-7xl font-bold text-accent/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  {/* New badge */}
                  <div className="absolute top-3 right-3">
                    <span className="clip-corner-sm bg-accent px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-accent-foreground">
                      New
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-accent/30 p-5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-mono text-base font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {project.year} &middot; {project.industry}
                    </span>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 transition-all group-hover:bg-accent">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent transition-colors group-hover:text-accent-foreground"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Imported projects */}
      {filteredImported.length > 0 && (
        <div>
          {filter === "all" && newProjects.length > 0 && (
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              {'// '}Imported Projects
            </h2>
          )}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredImported.map((project) => (
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
        </div>
      )}

      {/* Empty state */}
      {totalCount === 0 && (
        <div className="border border-border-dark bg-[#0a0a0a] p-8 md:p-12">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center border border-border-dark">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h2 className="font-mono text-lg font-bold text-foreground">
              No projects found
            </h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              No projects match the current filter. Try a different filter
              or create a new project.
            </p>
            <button
              onClick={() => setIsCreating(true)}
              className="mt-6 clip-corner-btn bg-accent px-8 py-3 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Create Project
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
