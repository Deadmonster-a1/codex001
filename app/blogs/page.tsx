import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/data/blogs"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
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
              Blogs / Resources
            </span>
            <h1 className="mt-3 font-mono text-4xl font-bold text-foreground md:text-6xl">
              BLOGS
            </h1>
          </div>

          {/* Featured post */}
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group mb-8 block border border-border bg-card p-8 transition-all hover:border-accent/30 md:p-12"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {featuredPost.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {featuredPost.date}
              </span>
            </div>
            <h2 className="mt-4 font-mono text-2xl font-bold text-foreground md:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
              Read More
              <ArrowUpRight size={12} />
            </div>
          </Link>

          {/* Blog grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group border border-border bg-card p-6 transition-all hover:border-accent/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="mb-3 font-mono text-base font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
                  Read More
                  <ArrowUpRight size={12} />
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
