import Link from "next/link"
import { blogPosts } from "@/lib/data/blogs"

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {'// '}Blog
            </span>
            <h2 className="mt-2 font-mono text-2xl font-bold text-foreground md:text-4xl">
              LATEST INSIGHTS
            </h2>
          </div>
          <Link
            href="/blogs"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            {"View All ->"}
          </Link>
        </div>

        {/* Blog grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
