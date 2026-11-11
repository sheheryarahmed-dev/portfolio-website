export function NavyWave({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none h-[calc(3rem+1px)] w-full sm:h-[calc(4rem+1px)] xl:h-[calc(5rem+1px)] ${className}`}
      focusable="false"
      preserveAspectRatio="none"
      viewBox="0 0 1440 96"
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2="96"
          colorInterpolation="sRGB"
        >
          <stop offset="0" stopColor="var(--navy-secondary)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--navy-secondary) 90%, var(--navy))"
          />
        </linearGradient>
      </defs>
      <path
        d="M0 48C140 16 250 4 360 4C650 4 800 84 1060 84C1220 84 1350 48 1440 10V96H0Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
