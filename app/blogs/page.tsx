import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/data/blogs"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights, strategies, and trends from the ASCI team to help your brand grow.",
}

export default function BlogsPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

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
              {'// '}Blogs / Resources
            </span>
            <h1 className="mt-2 font-mono text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
              BLOGS
            </h1>
          </div>

          {/* Featured post */}
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group mb-6 block border border-border-dark bg-[#0a0a0a] p-7 transition-all hover:border-accent/30 md:p-10"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                {featuredPost.category}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {featuredPost.date}
              </span>
            </div>
            <h2 className="mt-4 font-mono text-xl font-bold text-foreground md:text-2xl lg:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {featuredPost.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-accent">
              Read More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </div>
          </Link>

          {/* Blog grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group border border-border-dark bg-[#0a0a0a] p-6 transition-all hover:border-accent/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="mb-3 font-mono text-sm font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-accent">
                  Read More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
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
