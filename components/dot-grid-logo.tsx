export function DotGridLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`dot-grid ${className}`}
      style={{
        borderRadius: 2,
      }}
    />
  )
}
