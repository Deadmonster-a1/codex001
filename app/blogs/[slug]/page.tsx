import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts, getBlogBySlug } from "@/lib/data/blogs"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4">
          {/* Back link */}
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Post header */}
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {post.category}
            </span>
            <h1 className="mt-3 font-mono text-3xl font-bold text-foreground md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 border-b border-border pb-6">
              <span className="font-mono text-xs text-muted-foreground">
                {post.date}
              </span>
              <span className="text-border">|</span>
              <div>
                <span className="font-mono text-xs text-foreground">
                  {post.author}
                </span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  {post.authorRole}
                </span>
              </div>
            </div>
          </div>

          {/* Post excerpt */}
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Post content */}
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Post footer */}
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-sm text-muted-foreground">
              Written by{" "}
              <span className="font-semibold text-foreground">
                {post.author}
              </span>
              , {post.authorRole} at ASCI
            </p>
          </div>

          {/* More posts */}
          <div className="mt-16">
            <h2 className="mb-6 font-mono text-lg font-bold text-foreground">
              More Articles
            </h2>
            <div className="grid gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blogs/${p.slug}`}
                    className="flex items-center justify-between border border-border p-4 transition-all hover:border-accent/30"
                  >
                    <div>
                      <span className="font-mono text-xs text-accent">
                        {p.category}
                      </span>
                      <h3 className="font-mono text-sm font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.date}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
