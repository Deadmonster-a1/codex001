import { partnerLogos } from "@/lib/data"

export function PartnersMarquee() {
  return (
    <section className="border-y border-border/20 py-6">
      <div className="mx-auto max-w-[1200px] px-4">
        <p className="mb-6 font-mono text-xs tracking-wider text-muted-foreground">
          OUR PARTNERS FROM INDUSTRY :
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee items-center gap-16">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Partner logo"
              className="h-6 w-auto shrink-0 opacity-60 grayscale invert"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
