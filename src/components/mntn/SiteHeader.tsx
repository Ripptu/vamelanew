import { useEffect, useRef, useState } from 'react';
import { AccountIcon, CloseIcon, MenuIcon } from './icons';
import { navLinks } from './content';
import { Container } from './primitives';

/**
 * Transparent header laid over the hero, exactly as in the design. Below `lg`
 * the centre nav collapses into a full-screen overlay menu.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock the page behind the overlay and wire up Escape-to-close.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <Container className="flex items-center justify-between py-7 lg:py-9">
        <a
          href="#top"
          className="mntn-display text-2xl tracking-[0.14em] text-[var(--mntn-text)] lg:text-[26px]"
        >
          MNTN
        </a>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-[15px] font-medium text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#account"
            className="hidden items-center gap-2.5 text-[15px] font-medium text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)] lg:inline-flex"
          >
            <AccountIcon size={19} />
            Account
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mntn-mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--mntn-text)] lg:hidden"
          >
            <MenuIcon />
            <span className="sr-only">Menü öffnen</span>
          </button>
        </div>
      </Container>

      {/* Mobile overlay menu */}
      <div
        id="mntn-mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-50 bg-[var(--mntn-bg)]/98 backdrop-blur-sm lg:hidden"
      >
        <Container className="flex items-center justify-between py-7">
          <span className="mntn-display text-2xl tracking-[0.14em]">MNTN</span>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--mntn-text)]"
          >
            <CloseIcon />
            <span className="sr-only">Menü schließen</span>
          </button>
        </Container>

        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-2 px-6 pt-10 sm:px-10">
            {[...navLinks, { label: 'Account', href: '#account' }].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="mntn-display block py-3 text-3xl text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
