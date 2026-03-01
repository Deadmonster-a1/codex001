import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data/projects"
import Link from "next/link"
import type { Metadata } from "next"
import { ChatProjectList } from "@/components/chats/chat-project-list"

export const metadata: Metadata = {
  title: "Chats",
  description: "Browse imported projects and create new ones.",
}

export default function ChatsPage() {
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
              {'// '}Chats
            </span>
            <div className="mt-2 flex items-baseline gap-4">
              <h1 className="font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
                CHATS
              </h1>
              <span className="font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
                {projects.length}
              </span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              All imported projects are listed below. Create a new project
              folder to start organizing your work.
            </p>
          </div>

          <ChatProjectList initialProjects={projects} />
        </div>
      </main>
      <Footer />
    </>
  )
}
