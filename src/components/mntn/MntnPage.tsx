import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { guideSections } from './content';
import { GuideSection } from './GuideSection';
import { Hero } from './Hero';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { useActiveSection } from './useActiveSection';
import './mntn.css';

/**
 * MNTN — "A Hiking Guide" landing page.
 *
 * A standalone reconstruction rendered at `/mntn`. It deliberately shares
 * nothing with the surrounding app's theme: all of its tokens are scoped to the
 * `.mntn` root in `mntn.css`.
 */
export default function MntnPage() {
  const sectionIds = useMemo(() => guideSections.map((section) => section.id), []);
  const activeId = useActiveSection(sectionIds);

  // The app's global stylesheet leaves `body` transparent against a light page
  // background; this page is dark edge to edge, including the overscroll area.
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#0b1d26';
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, []);

  return (
    <div className="mntn min-h-screen">
      <Helmet>
        <html lang="en" />
        <title>MNTN — Be Prepared For The Mountains And Beyond!</title>
        <meta
          name="description"
          content="A hiking guide: work out what level of hiker you are, pick the right gear, and learn to read your map and timing before you head out."
        />
        <meta name="theme-color" content="#0b1d26" />
        {/* Design study on a live business domain — keep it out of the index. */}
        <meta name="robots" content="noindex, nofollow" />
        {/* Display serif for this page only; Inter is already loaded globally. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
        />
      </Helmet>

      <a
        href="#guide"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded focus:bg-[var(--mntn-accent)] focus:px-4 focus:py-2 focus:text-[15px] focus:font-bold focus:text-[var(--mntn-bg)]"
      >
        Zum Inhalt springen
      </a>

      <SiteHeader />

      <main id="guide">
        <Hero activeId={activeId} />

        <div className="pt-6 lg:pt-12">
          {guideSections.map((section) => (
            <GuideSection key={section.id} section={section} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
