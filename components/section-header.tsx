export function SectionHeader({
  title,
  badge,
}: {
  title: string
  badge?: string
}) {
  return (
    <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-4">
      <h2 className="font-mono text-2xl font-bold tracking-wider text-card lg:text-3xl">
        {title}
      </h2>
      {badge && (
        <span className="inline-flex items-center border border-border/40 px-3 py-1 font-mono text-xs text-muted-foreground">
          {badge}
        </span>
      )}
    </div>
  )
}
