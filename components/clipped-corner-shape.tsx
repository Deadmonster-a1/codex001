export function ClippedCornerShape({
  className = "",
  size = 200,
}: {
  className?: string
  size?: number
}) {
  const cut = Math.round(size * 0.155)
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
    >
      <defs>
        <clipPath id={`clip-${size}`}>
          <path
            d={`M 0 0 L ${size - cut} 0 L ${size} ${cut} L ${size} ${size} L ${size} ${size} L ${cut} ${size} L 0 ${size - cut} L 0 0 Z`}
          />
        </clipPath>
      </defs>
      <rect
        width={size}
        height={size}
        fill="var(--color-card)"
        clipPath={`url(#clip-${size})`}
      />
      <path
        d={`M 0 0 L ${size - cut} 0 L ${size} ${cut} L ${size} ${size} L ${size} ${size} L ${cut} ${size} L 0 ${size - cut} L 0 0 Z`}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="0.5"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
