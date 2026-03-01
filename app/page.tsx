import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Partners } from "@/components/home/partners"
import { ProjectsShowcase } from "@/components/home/projects-showcase"
import { Services } from "@/components/home/services"
import { About } from "@/components/home/about"
import { MarqueeBanner } from "@/components/home/marquee-banner"
import { Testimonials } from "@/components/home/testimonials"
import { BlogPreview } from "@/components/home/blog-preview"
import { FAQ } from "@/components/home/faq"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <ProjectsShowcase />
        <CTA />
        <Services />
        <About />
        <MarqueeBanner />
        <Testimonials />
        <BlogPreview />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
