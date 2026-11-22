interface SchemeSaathiLogoProps {
  size?: number;
  variant?: 'white' | 'lime';
  className?: string;
}

/**
 * Minimal geometric circular mark combining an abstract "S" curve with a verification checkmark.
 */
export function SchemeSaathiLogo({
  size = 38,
  variant = 'white',
  className = '',
}: SchemeSaathiLogoProps) {
  const bg = variant === 'lime' ? '#B6FF50' : '#FFFFFF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <circle cx="32" cy="32" r="32" fill={bg} />
      <path
        d="M42.5 19.5C39.8 16.9 35.9 15.5 31.4 15.5C24.2 15.5 19.5 19.2 19.5 24.4C19.5 29.8 24.3 32.1 30.8 33.4L34.3 34.1C38.1 34.9 39.8 36.1 39.8 38.4C39.8 41.3 36.8 43.3 32 43.3C28.4 43.3 25.4 42.1 23.1 39.9"
        stroke="#050505"
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 41.5L25.5 47.5L44.5 27.5"
        stroke="#050505"
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
