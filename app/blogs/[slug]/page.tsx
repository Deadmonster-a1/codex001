import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogs } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return { title: "ASCI - Blog Not Found" }
  return {
    title: `ASCI - ${blog.title}`,
    description: blog.excerpt,
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) notFound()

  // Get related blogs (excluding current)
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Back button */}
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-card"
          >
            <ArrowLeft size={14} />
            Back to Blogs
          </Link>

          {/* Blog header */}
          <div className="mb-8 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-wider text-primary">
                {blog.category}
              </span>
              <span className="text-xs text-muted-foreground">{blog.date}</span>
            </div>
            <h1 className="max-w-3xl font-mono text-2xl font-bold tracking-wider text-card lg:text-4xl">
              {blog.title}
            </h1>
          </div>

          {/* Blog image */}
          <div className="mb-12 aspect-[16/7] overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Blog content */}
          <div className="mb-16 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              {blog.content}
            </p>
          </div>

          {/* Related blogs */}
          <div>
            <h2 className="mb-6 font-mono text-lg font-bold tracking-wider text-card">
              MORE ARTICLES
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((b) => (
                <Link
                  key={b.slug}
                  href={`/blogs/${b.slug}`}
                  className="group flex flex-col border border-border/20 bg-card/5 p-4 transition-colors hover:bg-card/10"
                >
                  <h3 className="mb-2 font-mono text-sm font-bold text-card">
                    {b.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-wider text-primary">
                      {b.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {b.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
