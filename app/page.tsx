import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PartnersMarquee } from "@/components/home/partners-marquee"
import { ProjectsShowcase } from "@/components/home/projects-showcase"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesSection } from "@/components/home/services-section"
import { AboutSection } from "@/components/home/about-section"
import { MarqueeBanner } from "@/components/home/marquee-banner"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PricingSection } from "@/components/home/pricing-section"
import { TeamSection } from "@/components/home/team-section"
import { FAQSection } from "@/components/home/faq-section"
import { ContactFormSection } from "@/components/home/contact-form-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersMarquee />
      <ProjectsShowcase />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <MarqueeBanner />
      <TestimonialsSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
