import type { ReactNode } from 'react';
import { ArrowRightIcon } from './icons';

/**
 * Gold rule + wide-tracked uppercase label. Used above every headline on the
 * page — hero and all three guide sections.
 */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-6 ${className}`}>
      <span
        aria-hidden="true"
        className="h-px w-14 shrink-0 bg-[var(--mntn-accent)] sm:w-[72px]"
      />
      <span className="mntn-eyebrow text-[11px] text-[var(--mntn-accent)] sm:text-[13px]">
        {children}
      </span>
    </p>
  );
}

/**
 * "read more →" call to action. The arrow slides on hover; the underline is
 * drawn with a pseudo-free span so it can animate independently of the text.
 */
export function ReadMoreLink({
  href,
  children = 'read more',
  label,
}: {
  href: string;
  children?: ReactNode;
  /** Accessible name — the visible "read more" is not descriptive on its own. */
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex items-center gap-4 text-[15px] font-bold text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--mntn-accent)] transition-transform duration-300 group-hover:scale-x-100"
        />
      </span>
      <ArrowRightIcon
        size={12}
        className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </a>
  );
}

/** Page-wide horizontal rhythm. Matches the 1240px content column of the design. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
