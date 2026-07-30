import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { PiListBold, PiPhoneFill, PiXBold } from 'react-icons/pi';
import { navItems, site } from '../site';

/**
 * Kopfzeile: eine Zeile auf Desktop, 72px hoch.
 * Transparent ueber dem Hero-Band, ab 24px Scroll bekommt sie einen soliden
 * Navy-Grund. Begruendung fuer die Bewegung: Zustandswechsel sichtbar machen,
 * damit die Leiste ueber hellen Sektionen lesbar bleibt.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 24);
  });

  // Scroll sperren, solange das mobile Menue offen ist.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className={`on-navy fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled || menuOpen ? 'bg-navy/95 backdrop-blur-sm border-b border-white/10' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-8 px-5 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-baseline gap-2 text-on-dark">
          <span className="text-[19px] font-semibold tracking-[-0.02em]">{site.name}</span>
          <span className="hidden text-[13px] text-on-dark-muted sm:inline">{site.descriptor}</span>
        </a>

        <nav aria-label="Hauptnavigation" className="ml-auto hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-[14px] font-medium text-white/85 transition-colors hover:text-white md:inline-flex"
          >
            <PiPhoneFill aria-hidden className="size-4" />
            {site.phoneDisplay}
          </a>
          <a
            href="#kontakt"
            className="hidden rounded-md bg-primary px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-primary-pressed active:translate-y-px sm:inline-block"
          >
            {site.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            className="inline-flex size-11 items-center justify-center rounded-md text-white lg:hidden"
          >
            {menuOpen ? <PiXBold className="size-5" /> : <PiListBold className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 -z-10 h-[100dvh] w-full cursor-default bg-navy-deep/80 lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-navy px-5 pb-6 pt-2 sm:px-6 lg:hidden"
          >
            <ul className="divide-y divide-white/10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-[17px] font-medium text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-primary px-5 py-3.5 text-center text-[15px] font-medium text-white active:translate-y-px"
              >
                {site.ctaLabel}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3.5 text-[15px] font-medium text-white active:translate-y-px"
              >
                <PiPhoneFill aria-hidden className="size-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
