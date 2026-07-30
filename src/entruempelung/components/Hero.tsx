import { motion, useReducedMotion, type Variants } from 'motion/react';
import { PiPhoneFill } from 'react-icons/pi';
import { site } from '../site';

/**
 * Hero-Bild: mit Higgsfield fuer diesen Brief erzeugt (leergeraeumtes
 * Altbauzimmer). Die CDN-Adresse ist ein Zwischenstand.
 * TODO: Datei vor dem Livegang nach /public/entruempelung/ legen und den
 * Pfad hier auf /entruempelung/hero-leergeraeumt.webp umstellen.
 */
const HERO_IMAGE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_2zg6kRsQgLvpBAc5mmGVtMaqZi0/hf_20260730_191645_72e9973b-c520-4fef-8ba0-10cc02601c0e.png';

/** Querformat derselben Szene fuer gestapelte Layouts unter 1024px. */
const HERO_IMAGE_WIDE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_2zg6kRsQgLvpBAc5mmGVtMaqZi0/hf_20260730_192747_43e75d5d-5c83-4d30-9d68-374db3025351.png';

/**
 * Asymmetrischer Split-Hero auf dem Navy-Band der Designvorlage.
 * Bewegung: einmaliger Eintritt in Lesereihenfolge (Zeile, Text, Buttons,
 * Bild). Zweck ist Hierarchie, nicht Dekoration. Unter reduzierter Bewegung
 * erscheint alles sofort.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const group: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.05 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="top"
      className="on-navy relative isolate min-h-[100dvh] overflow-hidden bg-navy text-on-dark"
    >
      {/* Ruhiger Tiefenverlauf im Band, kein Glow, keine Streudeko. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#070f24_0%,#0a1530_45%,#0d1a38_100%)]"
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1280px] flex-col justify-center px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-24">
        <motion.div
          variants={group}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <motion.h1
              variants={item}
              className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[3rem]"
            >
              Heute vollgestellt.
              <br />
              Übermorgen besenrein.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-[48ch] text-[16px] leading-[1.6] text-white/70 sm:mt-6 sm:text-[18px]"
            >
              Entrümpelung, Umzüge und Wohnungsauflösungen in München. Festpreis nach kostenloser
              Besichtigung, Entsorgungsnachweis inklusive.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#kontakt"
                className="inline-flex h-13 items-center justify-center whitespace-nowrap rounded-md bg-primary px-7 text-[16px] font-semibold text-white transition-colors duration-150 hover:bg-primary-pressed active:translate-y-px"
              >
                {site.ctaLabel}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex h-13 items-center justify-center gap-2.5 whitespace-nowrap rounded-md border border-white/35 px-6 text-[16px] font-medium text-white transition-colors duration-150 hover:border-white/70 active:translate-y-px"
              >
                <PiPhoneFill aria-hidden className="size-[18px]" />
                {site.phoneDisplay}
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="lg:col-span-5 lg:translate-y-4"
          >
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-mockup">
              {/* Art Direction: hochkant neben der Copy, quer wenn gestapelt. */}
              <picture>
                <source media="(min-width: 1024px)" srcSet={HERO_IMAGE} />
                <img
                  src={HERO_IMAGE_WIDE}
                  alt="Leergeräumtes Zimmer einer Altbauwohnung, ein Mitarbeiter trägt den letzten Karton hinaus"
                  width={1344}
                  height={768}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover lg:aspect-[4/5]"
                />
              </picture>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
