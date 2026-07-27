import { footerColumns } from './content';
import { Container } from './primitives';

export function SiteFooter() {
  return (
    <footer className="pb-14 pt-20 sm:pt-24 lg:pb-20 lg:pt-28">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          <div>
            <a
              href="#top"
              className="mntn-display inline-block text-[28px] tracking-[0.14em] text-[var(--mntn-text)]"
            >
              MNTN
            </a>
            <p className="mt-6 max-w-[18rem] text-[15px] font-medium leading-[1.85] text-[var(--mntn-text-muted)]">
              Get out there &amp; discover your next slope, mountain &amp; destination!
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-[15px] font-bold text-[var(--mntn-accent)]">{column.heading}</h2>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-[var(--mntn-text-muted)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 text-[14px] font-medium text-[var(--mntn-text-subtle)] lg:mt-20">
          Copyright 2019 MNTN, Inc. Terms &amp; Privacy
        </p>
      </Container>
    </footer>
  );
}
