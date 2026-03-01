import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogs } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASCI - Blogs",
  description:
    "Insights and resources on web design, branding, and digital strategy.",
}

export default function BlogsPage() {
  const featured = blogs.slice(0, 2)
  const rest = blogs.slice(2)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Back button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-card"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Page header */}
          <div className="mb-12">
            <h1 className="font-mono text-3xl font-bold tracking-wider text-card lg:text-5xl">
              BLOGS / RESOURCES
            </h1>
          </div>

          {/* Featured blog posts (top 2 large) */}
          <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {featured.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col border border-border/20 bg-card/5 transition-colors hover:bg-card/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-mono text-base font-bold text-card">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-wider text-primary">
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {blog.date}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Remaining blog posts */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {rest.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col border border-border/20 bg-card/5 transition-colors hover:bg-card/10"
              >
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="font-mono text-sm font-bold text-card">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-wider text-primary">
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
