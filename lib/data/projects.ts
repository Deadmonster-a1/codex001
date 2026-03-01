export interface Project {
  slug: string
  title: string
  category: string
  year: string
  industry: string
  scope: string
  timeline: string
  summary: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "boltshift",
    title: "Boltshift",
    category: "Webdesign",
    year: "2025",
    industry: "Logistics & Supply Chain",
    scope: "Webdesign",
    timeline: "12 weeks",
    summary:
      "In 2024, AeroLogix, a leading logistics and supply chain management company, approached Boltshift to redesign their outdated website. The goal was to create a modern, high-performance platform that would streamline their customer experience, improve brand perception, and enhance lead generation.",
    featured: true,
  },
  {
    slug: "ephemeral",
    title: "Ephemeral",
    category: "Branding",
    year: "2025",
    industry: "Fashion & Lifestyle",
    scope: "Branding",
    timeline: "8 weeks",
    summary:
      "Ephemeral needed a complete brand overhaul to match their evolving vision. We crafted a distinctive identity system that captures their essence and creates memorable brand impressions across all touchpoints.",
    featured: true,
  },
  {
    slug: "powersurge",
    title: "Powersurge",
    category: "SEO",
    year: "2025",
    industry: "Energy & Utilities",
    scope: "SEO",
    timeline: "16 weeks",
    summary:
      "Powersurge required a comprehensive SEO strategy to dominate their market. We implemented optimized content that ranks high, drives organic traffic, and establishes lasting authority in the energy sector.",
    featured: true,
  },
  {
    slug: "mastermail",
    title: "Mastermail",
    category: "Webdesign & SEO",
    year: "2025",
    industry: "Email Marketing",
    scope: "Webdesign & SEO",
    timeline: "14 weeks",
    summary:
      "Mastermail needed both a modern website and strong search presence. We delivered a complete digital transformation with responsive design and data-driven SEO strategies.",
  },
  {
    slug: "warpspeed",
    title: "Warpspeed",
    category: "Branding & Marketing",
    year: "2025",
    industry: "Technology",
    scope: "Branding & Marketing",
    timeline: "10 weeks",
    summary:
      "Warpspeed approached us to build a cohesive brand identity and marketing strategy that would accelerate their growth in the competitive tech landscape.",
  },
  {
    slug: "cloudwatch",
    title: "CloudWatch",
    category: "Webdesign",
    year: "2025",
    industry: "Cloud Computing",
    scope: "Webdesign",
    timeline: "12 weeks",
    summary:
      "CloudWatch required a sleek, professional website that would communicate complex cloud services in an accessible and visually engaging way.",
  },
  {
    slug: "skyforge",
    title: "Skyforge",
    category: "Webdesign",
    year: "2025",
    industry: "Aerospace",
    scope: "Webdesign",
    timeline: "10 weeks",
    summary:
      "Skyforge needed a cutting-edge website to showcase their aerospace innovations and attract top-tier clients and talent.",
  },
  {
    slug: "nexwave",
    title: "Nexwave",
    category: "Webdesign",
    year: "2025",
    industry: "Telecommunications",
    scope: "Webdesign",
    timeline: "11 weeks",
    summary:
      "Nexwave required a modern digital presence that would position them as a leader in next-generation telecommunications solutions.",
  },
  {
    slug: "gridlock",
    title: "Gridlock",
    category: "Webdesign",
    year: "2025",
    industry: "Transportation",
    scope: "Webdesign",
    timeline: "9 weeks",
    summary:
      "Gridlock needed a user-friendly platform to showcase their smart transportation solutions and improve customer engagement.",
  },
  {
    slug: "luminary",
    title: "Luminary",
    category: "Webdesign",
    year: "2025",
    industry: "Education",
    scope: "Webdesign",
    timeline: "13 weeks",
    summary:
      "Luminary required an engaging educational platform that would inspire learning and connect students with innovative resources.",
  },
  {
    slug: "vortexio",
    title: "Vortexio",
    category: "Webdesign",
    year: "2025",
    industry: "Gaming",
    scope: "Webdesign",
    timeline: "8 weeks",
    summary:
      "Vortexio needed an immersive website experience that would capture the energy and excitement of their gaming products.",
  },
  {
    slug: "flashpoint",
    title: "Flashpoint",
    category: "Webdesign",
    year: "2025",
    industry: "Cybersecurity",
    scope: "Webdesign",
    timeline: "12 weeks",
    summary:
      "Flashpoint required a professional, trust-building website to communicate their cybersecurity expertise to enterprise clients.",
  },
  {
    slug: "horizon",
    title: "Horizon",
    category: "Webdesign",
    year: "2025",
    industry: "Real Estate",
    scope: "Webdesign",
    timeline: "10 weeks",
    summary:
      "Horizon needed a visually stunning property showcase platform that would elevate their luxury real estate brand.",
  },
  {
    slug: "pulsechain",
    title: "Pulsechain",
    category: "Webdesign",
    year: "2025",
    industry: "Blockchain",
    scope: "Webdesign",
    timeline: "14 weeks",
    summary:
      "Pulsechain required a modern, technical website that would build trust and communicate complex blockchain concepts clearly.",
  },
  {
    slug: "zenithcore",
    title: "Zenithcore",
    category: "Webdesign",
    year: "2025",
    industry: "AI & Machine Learning",
    scope: "Webdesign",
    timeline: "11 weeks",
    summary:
      "Zenithcore needed an innovative website to showcase their AI capabilities and attract enterprise partnerships.",
  },
  {
    slug: "swiftstream",
    title: "Swiftstream",
    category: "Webdesign",
    year: "2025",
    industry: "Streaming & Media",
    scope: "Webdesign",
    timeline: "9 weeks",
    summary:
      "Swiftstream required a dynamic, content-rich website that would highlight their streaming platform capabilities and attract content creators.",
  },
]

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
