import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chats",
  description: "Connect and chat with our team at ASCI.",
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
            <h1 className="mt-2 font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
              CHATS
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Connect and chat with our team. We are here to help you with your
              next project.
            </p>
          </div>

          {/* Chat placeholder */}
          <div className="border border-border-dark bg-[#0a0a0a] p-8 md:p-12">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-border-dark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 className="font-mono text-lg font-bold text-foreground">
                No conversations yet
              </h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Start a conversation with our team to discuss your project ideas,
                get feedback, or ask questions.
              </p>
              <Link
                href="/contact"
                className="mt-6 clip-corner-btn bg-accent px-8 py-3 font-mono text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Start a Chat
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
