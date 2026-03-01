export function SpinnerOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-primary ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 128 128"
        className="animate-spin-cw"
        style={{ shapeRendering: "geometricPrecision" }}
      >
        <g
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="64" cy="64" r="34" style={{ pointerEvents: "none" }} />
          <line x1="64" y1="30" x2="64" y2="40" />
          <line x1="64" y1="88" x2="64" y2="98" />
          <line x1="30" y1="64" x2="40" y2="64" />
          <line x1="88" y1="64" x2="98" y2="64" />
          <line x1="40" y1="40" x2="47" y2="47" />
          <line x1="81" y1="81" x2="88" y2="88" />
          <line x1="40" y1="88" x2="47" y2="81" />
          <line x1="81" y1="47" x2="88" y2="40" />
        </g>
      </svg>
    </div>
  )
}
