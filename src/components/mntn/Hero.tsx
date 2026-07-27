import { motion } from 'motion/react';
import { mntnImages } from './assets';
import { guideSections } from './content';
import { ArrowDownIcon, InstagramIcon, TwitterIcon } from './icons';
import { Container, Eyebrow } from './primitives';

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/** Rotated "Follow us" rail pinned to the left edge of the hero. */
function SocialRail() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 hidden w-16 items-center xl:flex">
      <div className="pointer-events-auto flex flex-col items-center gap-6 pl-2">
        <span
          className="text-[13px] font-medium tracking-[0.2em] text-[var(--mntn-text)]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Follow us
        </span>
        <span aria-hidden="true" className="h-16 w-px bg-[var(--mntn-border)]" />
        <a
          href="#instagram"
          className="text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
        >
          <InstagramIcon size={19} />
          <span className="sr-only">MNTN auf Instagram</span>
        </a>
        <a
          href="#twitter"
          className="text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
        >
          <TwitterIcon size={19} />
          <span className="sr-only">MNTN auf Twitter</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Right-hand progress rail. The numerals brighten as the matching guide
 * section scrolls into view, so the decoration in the design doubles as a real
 * table of contents.
 */
function ProgressRail({ activeId }: { activeId: string | null }) {
  return (
    <nav
      aria-label="Abschnittsnavigation"
      className="absolute right-0 top-[28vh] z-20 hidden xl:block"
    >
      <div className="flex flex-col items-center gap-5 pr-4">
        <span className="text-[13px] font-medium text-[var(--mntn-text)]">Start</span>
        <span aria-hidden="true" className="h-10 w-px bg-[var(--mntn-text)]" />
        {guideSections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`text-[13px] font-medium tabular-nums transition-colors duration-300 hover:text-[var(--mntn-accent)] ${
                isActive ? 'text-[var(--mntn-accent)]' : 'text-[var(--mntn-text-subtle)]'
              }`}
            >
              {section.number}
              <span className="sr-only"> — {section.eyebrow}</span>
            </a>
          );
        })}
        <span aria-hidden="true" className="h-24 w-px bg-[var(--mntn-border)]" />
      </div>
    </nav>
  );
}

export function Hero({ activeId }: { activeId: string | null }) {
  const { hero } = mntnImages;

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Full-bleed photograph */}
      <img
        src={hero.src}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Darkening scrims: one for header/headline legibility, one to blend the
          photo into the page background at the bottom edge. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--mntn-bg)]/75 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-b from-transparent to-[var(--mntn-bg)]"
      />

      <SocialRail />
      <ProgressRail activeId={activeId} />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-32 pt-40 lg:justify-start lg:pt-[22vh]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="max-w-[720px]"
        >
          <motion.div variants={rise} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <Eyebrow>A Hiking Guide</Eyebrow>
          </motion.div>

          <motion.h1
            variants={rise}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mntn-display mntn-hero-title mt-7 text-[clamp(2.4rem,7.2vw,4.5rem)] text-[var(--mntn-text)]"
          >
            Be Prepared For The
            <br />
            Mountains And Beyond!
          </motion.h1>

          <motion.a
            variants={rise}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            href={`#${guideSections[0].id}`}
            className="group mt-10 inline-flex items-center gap-3 text-[15px] font-medium text-[var(--mntn-text)] transition-colors duration-300 hover:text-[var(--mntn-accent)]"
          >
            scroll down
            <ArrowDownIcon
              size={17}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
