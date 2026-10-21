/** Bandeiras em SVG (emojis de bandeira não aparecem no Windows). */

export function FlagBR({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <clipPath id="flag-br-clip">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-br-clip)">
        <rect width="32" height="32" fill="#009C3B" />
        <path d="M16 5 L30 16 L16 27 L2 16 Z" fill="#FFDF00" />
        <circle cx="16" cy="16" r="6.2" fill="#002776" />
        <path d="M10.2 14.6 Q16 12.6 21.9 16.6" stroke="#FFFFFF" strokeWidth="1.3" fill="none" />
      </g>
    </svg>
  );
}

export function FlagUS({ size = 22 }: { size?: number }) {
  const stripes = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <clipPath id="flag-us-clip">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-us-clip)">
        <rect width="32" height="32" fill="#FFFFFF" />
        {stripes.map((i) => (
          <rect key={i} y={i * 4.92} width="32" height="2.46" fill="#B22234" />
        ))}
        <rect width="15" height="17.2" fill="#3C3B6E" />
        {[3, 7, 11].map((x) =>
          [3.5, 8.5, 13.5].map((y) => <circle key={`${x}-${y}`} cx={x + 0.5} cy={y} r="1" fill="#FFFFFF" />),
        )}
      </g>
    </svg>
  );
}
