import { team } from "@/lib/data"
import { SectionHeader } from "../section-header"

export function TeamSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <SectionHeader title="OUR TEAM" />
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col gap-3">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-sm font-semibold text-card">
                  {member.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
