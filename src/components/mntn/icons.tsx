/**
 * MNTN — icon set.
 *
 * Hand-rolled rather than pulled from an icon package: it is six glyphs, they
 * all share one stroke weight, and inlining them keeps the page free of an
 * icon dependency whose export names drift between versions.
 *
 * All icons inherit `currentColor` and are `aria-hidden` — labelling is the
 * caller's job so the icon never duplicates an accessible name.
 */
type IconProps = {
  className?: string;
  /** Rendered size in px; defaults to a 1em-ish 20. */
  size?: number;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false as const,
});

export function InstagramIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4.5a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1A4.2 4.2 0 0 0 11.5 7a4.4 4.4 0 0 0 .1 1A11.9 11.9 0 0 1 3 3.7a4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.05a4.2 4.2 0 0 0 3.4 4.1 4.3 4.3 0 0 1-1.9.07 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 17.6a11.9 11.9 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.54A8.5 8.5 0 0 0 22 4.5z" />
    </svg>
  );
}

export function AccountIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.2 18.4a6.5 6.5 0 0 1 11.6 0" />
    </svg>
  );
}

export function ArrowDownIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4v16" />
      <path d="m6.5 14.5 5.5 5.5 5.5-5.5" />
    </svg>
  );
}

/** Long, thin arrow used by the "read more" links. */
export function ArrowRightIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      viewBox="0 0 32 16"
      width={size * 2}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 8h30" />
      <path d="m23.5 2 6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
