export interface Project {
  slug: string
  title: string
  category: string
  year: number
  image: string
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image: string
  content: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface FAQ {
  question: string
  answer: string
}

export const projects: Project[] = [
  { slug: "boltshift", title: "Boltshift", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/HVhJFwx5ry3TkFcGjzpGmWE7yc.jpg" },
  { slug: "ephemeral", title: "Ephemeral", category: "Branding", year: 2025, image: "https://framerusercontent.com/images/WT8b7RIYM0L8MkP7TjrBwIUzQY.jpg" },
  { slug: "powersurge", title: "Powersurge", category: "SEO", year: 2025, image: "https://framerusercontent.com/images/JEAKRNwO7kBlS2CxGP8WJYA0lc.jpg" },
  { slug: "mastermail", title: "Mastermail", category: "Webdesign & SEO", year: 2025, image: "https://framerusercontent.com/images/QXQrVAYE1vZR19LpBKcA60wWA.jpg" },
  { slug: "warpspeed", title: "Warpspeed", category: "Branding & Marketing", year: 2025, image: "https://framerusercontent.com/images/2O7SvAT3qwEPiQ7Q6YxBKcF8kA.jpg" },
  { slug: "cloudwatch", title: "CloudWatch", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/XInHXpA1S0YU5FjJDHFg06rk7xA.jpg" },
  { slug: "skyforge", title: "Skyforge", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/vCv3I8u0FUo7hJzlrQfx5N6A.jpg" },
  { slug: "nexwave", title: "Nexwave", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/LjhP8n9cCVkwYoiHbq2z1sWh7YQ.jpg" },
  { slug: "gridlock", title: "Gridlock", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/k7Fj2rqYqAW5smWHNOq1CLxDG88.jpg" },
  { slug: "luminary", title: "Luminary", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/IVbMCGjl4x7v3hPbqZCUqjCvI.jpg" },
  { slug: "vortexio", title: "Vortexio", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/XInHXpA1S0YU5FjJDHFg06rk7xA.jpg" },
  { slug: "flashpoint", title: "Flashpoint", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/LjhP8n9cCVkwYoiHbq2z1sWh7YQ.jpg" },
  { slug: "horizon", title: "Horizon", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/k7Fj2rqYqAW5smWHNOq1CLxDG88.jpg" },
  { slug: "pulsechain", title: "Pulsechain", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/IVbMCGjl4x7v3hPbqZCUqjCvI.jpg" },
  { slug: "zenithcore", title: "Zenithcore", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/vCv3I8u0FUo7hJzlrQfx5N6A.jpg" },
  { slug: "swiftstream", title: "Swiftstream", category: "Webdesign", year: 2025, image: "https://framerusercontent.com/images/QXQrVAYE1vZR19LpBKcA60wWA.jpg" },
]

export const blogs: BlogPost[] = [
  {
    slug: "visuals-hierarchy-shapes-users-remembers",
    title: "Visuals Shapes What Users Remembers",
    category: "Web Design",
    date: "Oct 5, 2025",
    excerpt: "Design isn't just about aesthetics -- it's about attention. Visual hierarchy determines what users see first, what they ignore, and what they remember.",
    image: "https://framerusercontent.com/images/bT1Zn7QKCGc8Y2Rz8Y2IbScZ9bU.jpg",
    content: "Design isn't just about aesthetics -- it's about attention. Visual hierarchy determines what users see first, what they ignore, and what they remember. By strategically arranging elements like size, color, contrast, and spacing, designers guide the viewer's eye through a deliberate path. The goal isn't just to look good -- it's to make the right things impossible to miss. Great visual hierarchy creates an intuitive experience where users don't have to think about where to look next. It reduces cognitive load, increases comprehension, and ultimately shapes how people feel about your product. When done well, it's invisible. When done poorly, it's chaos.",
  },
  {
    slug: "why-seamless-ux-design-builds-trust",
    title: "Why seamless UX design builds trust",
    category: "Web Design",
    date: "Sep 29, 2025",
    excerpt: "A beautiful website might grab attention, but a seamless user experience keeps it. The design isn't just how it looks -- it's how it feels, moves, and guides your users without friction.",
    image: "https://framerusercontent.com/images/7E3TP0Ge4MNDi8ESPYkM2Y4F2E.jpg",
    content: "A beautiful website might grab attention, but a seamless user experience keeps it. The design isn't just how it looks -- it's how it feels, moves, and guides your users without friction. When navigation is intuitive and interactions feel natural, users develop trust in your brand. They stay longer, explore more, and convert at higher rates. Seamless UX is about removing obstacles between your user and their goal. Every unnecessary click, confusing label, or broken flow erodes trust. The brands that invest in UX aren't just building better websites -- they're building better relationships.",
  },
  {
    slug: "storytelling-design-turns-visitors-into-fans",
    title: "Storytelling design turns visitors into fans",
    category: "Strategy",
    date: "Sep 29, 2025",
    excerpt: "Stories are how humans make sense of the world. When your design tells a story, visitors don't just browse -- they connect.",
    image: "https://framerusercontent.com/images/QXQrVAYE1vZR19LpBKcA60wWA.jpg",
    content: "Stories are how humans make sense of the world. When your design tells a story, visitors don't just browse -- they connect. Storytelling design weaves narrative elements throughout the user experience, creating emotional arcs that guide visitors from curiosity to conviction. It's not about adding words -- it's about structuring the entire experience as a journey. From the hero section that sets the scene to the testimonials that provide social proof, every element plays a role in a larger narrative that transforms passive visitors into engaged fans.",
  },
  {
    slug: "every-website-needs-to-thrive-in-2026",
    title: "Every website needs to thrive in 2026",
    category: "Motion Design",
    date: "Sep 28, 2025",
    excerpt: "The web is evolving faster than ever. What worked last year might already feel outdated. Staying ahead means embracing new technologies and design patterns.",
    image: "https://framerusercontent.com/images/2O7SvAT3qwEPiQ7Q6YxBKcF8kA.jpg",
    content: "The web is evolving faster than ever. What worked last year might already feel outdated. Staying ahead means embracing new technologies and design patterns that keep your site competitive. In 2026, the bar for web experiences has never been higher. Users expect speed, personalization, and interactivity. Websites that thrive will be the ones that treat performance as a feature, accessibility as a baseline, and design as a strategic advantage.",
  },
  {
    slug: "motion-design-is-the-language-of-brands",
    title: "Motion design is the language of brands",
    category: "Motion Design",
    date: "Sep 28, 2025",
    excerpt: "Static design communicates. Motion design converses. The way elements move, transition, and respond tells users everything about your brand's personality.",
    image: "https://framerusercontent.com/images/XInHXpA1S0YU5FjJDHFg06rk7xA.jpg",
    content: "Static design communicates. Motion design converses. The way elements move, transition, and respond tells users everything about your brand's personality. Motion adds dimension to digital experiences -- it creates rhythm, guides attention, and provides feedback. When a button subtly pulses or a page transition feels smooth, it communicates care and quality. Motion design isn't decoration; it's a language that speaks directly to the subconscious, making interactions feel alive and intentional.",
  },
  {
    slug: "first-impressions-define-the-future-of-brand",
    title: "First impressions define the future of brand",
    category: "Strategy",
    date: "Sep 28, 2025",
    excerpt: "You never get a second chance at a first impression. In the digital world, that impression is made in milliseconds.",
    image: "https://framerusercontent.com/images/k7Fj2rqYqAW5smWHNOq1CLxDG88.jpg",
    content: "You never get a second chance at a first impression. In the digital world, that impression is made in milliseconds. The moment someone lands on your site, they're already forming opinions about your credibility, professionalism, and value. First impressions are shaped by visual design, loading speed, and content clarity. A well-crafted first impression doesn't just look good -- it communicates competence, builds trust, and sets the tone for every interaction that follows.",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: "Honestly? I was skeptical at first. We'd been burned by agencies before who promised the moon and delivered... well, not the moon. But ASCII just gets it. They didn't just build us a website -- they built something that actually feels like US. Our inquiries tripled in the first month. Worth every penny, and then some.",
    name: "Kathy Brains",
    role: "CEO, Kingdom Advisors",
    image: "https://framerusercontent.com/images/aYWQx0lBJMvrdcjptW8JOWMKVU.jpg",
  },
  {
    quote: "I'm not an easy client. I know that. But the ASCII team? They didn't just tolerate my endless questions and revisions -- they welcomed them. The back-and-forth felt collaborative, not combative. And the final product? Clean, fast, exactly what we needed. These folks actually care about getting it right.",
    name: "Marcus Chen",
    role: "CEO, TechFlow Solutions",
    image: "https://framerusercontent.com/images/p3FjGX2gBbcdHpd3gkCDYJMBs0.jpg",
  },
  {
    quote: "Working with ASCII felt less like hiring an agency and more like gaining a creative partner. They challenged our ideas (in the best way), pushed us to think bigger, and delivered work that made our entire team go 'damn, that's good.' Plus, they're just genuinely nice humans. Rare combo.",
    name: "James Okonkwo",
    role: "Owner, The Breakfast Spot",
    image: "https://framerusercontent.com/images/aYWQx0lBJMvrdcjptW8JOWMKVU.jpg",
  },
  {
    quote: "Fast turnaround, zero drama, stellar results. ASCII delivered our rebrand in half the time we expected without cutting corners. They anticipated problems before they happened and communicated so clearly that I never once felt lost in the process. This is how agency work should be.",
    name: "Tom Berkley",
    role: "Founder, Midnight Audio",
    image: "https://framerusercontent.com/images/p3FjGX2gBbcdHpd3gkCDYJMBs0.jpg",
  },
]

export const team: TeamMember[] = [
  { name: "Marcus Rivera", role: "Founder & Creative Director", image: "https://framerusercontent.com/images/fRuGM9LrsZaIU8Z2bNJJf1C6g.jpg" },
  { name: "Sofia Andersson", role: "Head of Design", image: "https://framerusercontent.com/images/oFNh2kPcUgKjzxDbWFqkOJGdww.jpg" },
  { name: "David Kim", role: "Lead Developer", image: "https://framerusercontent.com/images/W8drn8IcA0t8GE5W9rnRHDqJJQ.jpg" },
  { name: "Elena Vasquez", role: "Strategy Director", image: "https://framerusercontent.com/images/x5eXiNQ7BGWMq8xXB2C9ISAoZeU.jpg" },
]

export const faqs: FAQ[] = [
  {
    question: "What services does your agency offer?",
    answer: "We offer a full range of digital services including web design & development, brand identity design, SEO & content marketing, and social media marketing. Each service is tailored to your specific business needs and goals.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks, while branding projects usually take 3-6 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with clients outside your city?",
    answer: "Absolutely! We work with clients worldwide. Our process is designed for seamless remote collaboration, with regular video calls, shared project boards, and clear communication at every step.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both project-based and monthly retainer pricing. Project pricing starts at $1,499 for a complete project, while our monthly retainer is $2,499/month. We also offer custom solutions for larger needs.",
  },
  {
    question: "Can I see examples of your past work?",
    answer: "Of course! Check out our Projects page to see our latest work across various industries. Each case study includes the challenge, our approach, and the results achieved.",
  },
]

export const partnerLogos = [
  "https://framerusercontent.com/images/FP1CIxUuGJlGu8n0gr19MQUbE.svg",
  "https://framerusercontent.com/images/jMHFa8UbcoiLJ1aA2xqDFJcnvI.svg",
  "https://framerusercontent.com/images/hKiCJ1SMW4V5oLMBhj5RXb0oY.svg",
  "https://framerusercontent.com/images/x2lHwHbQSKtXQUbZzqBdWoFD0Y.svg",
  "https://framerusercontent.com/images/BECzX9IKEsTwSJJCkxnHCVvyG8.svg",
  "https://framerusercontent.com/images/Qpw4xaY7gHO5asyWGFhS6FZDQjc.svg",
]

export const services = [
  {
    number: "001",
    title: "WEB DESIGN & DEVELOPMENT",
    description: "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    tags: ["Packaging", "Branding", "Logo", "Typography", "Guidelines"],
  },
  {
    number: "002",
    title: "SOCIAL MEDIA MARKETING",
    description: "Strategic campaigns that build engaged communities, amplify your brand, and convert followers.",
    tags: ["Content", "Analytics", "Optimization", "Reporting", "Advertising"],
  },
  {
    number: "003",
    title: "SEO & CONTENT MARKETING",
    description: "Optimized content that ranks high, drives organic traffic, and establishes lasting authority.",
    tags: ["Keyword", "Research", "Backlinks", "Content"],
  },
  {
    number: "004",
    title: "BRAND DESIGN & IDENTITY",
    description: "Distinctive visual systems that capture your essence and create memorable brand impressions.",
    tags: ["Logo", "Branding", "Strategy", "Packaging", "Applications"],
  },
]

export const aboutItems = [
  {
    number: "01",
    title: "Clear Communication",
    description: "We keep you in the loop from initial concept through final delivery, ensuring you're informed, involved, and confident at every milestone of your project.",
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description: "We take the time to understand your specific goals, challenges, and vision, then craft customized strategies that align perfectly with what your business actually needs to succeed.",
  },
  {
    number: "03",
    title: "Complete Transparency",
    description: "Our pricing is clear, detailed, and straightforward from day one -- no unexpected charges, no fine print, just honest numbers that respect your budget and trust.",
  },
  {
    number: "04",
    title: "Measureable Results",
    description: "Our portfolio is built on real success stories backed by data, metrics, and satisfied clients who've seen tangible growth from our work together with them.",
  },
]
