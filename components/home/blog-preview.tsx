import Link from "next/link"
import { blogPosts } from "@/lib/data/blogs"
import { ArrowUpRight } from "lucide-react"

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Blog
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-4xl">
              LATEST INSIGHTS
            </h2>
          </div>
          <Link
            href="/blogs"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Blog grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
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
    </section>
  )
}
