import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts, getBlogBySlug } from "@/lib/data/blogs"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return { title: post.title, description: post.excerpt }
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
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[720px] px-4 md:px-6">
          {/* Back link */}
          <Link
            href="/blogs"
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Post header */}
          <div className="mb-10 md:mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {post.category}
            </span>
            <h1 className="mt-3 font-mono text-2xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 border-b border-border-dark pb-5">
              <span className="font-mono text-[10px] text-muted-foreground">
                {post.date}
              </span>
              <span className="text-border-dark">|</span>
              <div>
                <span className="font-mono text-[10px] font-medium text-foreground">
                  {post.author}
                </span>
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                  {post.authorRole}
                </span>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="space-y-5">
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
          <div className="mt-14 border-t border-border-dark pt-8">
            <p className="text-sm text-muted-foreground">
              Written by{" "}
              <span className="font-semibold text-foreground">
                {post.author}
              </span>
              , {post.authorRole} at ASCI
            </p>
          </div>

          {/* More posts */}
          <div className="mt-14">
            <h2 className="mb-5 font-mono text-base font-bold text-foreground">
              More Articles
            </h2>
            <div className="grid gap-3">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blogs/${p.slug}`}
                    className="flex items-center justify-between border border-border-dark p-4 transition-all hover:border-accent/30"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-accent">
                        {p.category}
                      </span>
                      <h3 className="font-mono text-sm font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
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
