import { motion } from 'motion/react';
import type { GuideSectionContent } from './content';
import { Container, Eyebrow, ReadMoreLink } from './primitives';

const revealFrom = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -32 : 32 },
  visible: { opacity: 1, x: 0 },
});

const riseIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

/**
 * One numbered row of the hiking guide: watermark numeral, eyebrow, two-line
 * serif headline, body copy, "read more" link and the paired photograph.
 *
 * `reversed` flips the column order on `lg` and up — the alternating rhythm of
 * the original layout — while the DOM order stays text-then-image so the
 * reading order is identical for screen readers at every breakpoint.
 */
export function GuideSection({ section }: { section: GuideSectionContent }) {
  const { number, id, eyebrow, title, body, image, reversed } = section;
  const headingId = `${id}-heading`;

  return (
    // `overflow-hidden` contains the watermark numeral, which is deliberately
    // pulled out into the gutter and would otherwise widen the page.
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-[104px]"
    >
      <Container>
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          {/* Text column */}
          <motion.div
            variants={revealFrom(reversed ? 'right' : 'left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`relative ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Watermark numeral. It sits in the gutter to the left of the
                copy and is vertically centred on the eyebrow, as in the design. */}
            <span
              aria-hidden="true"
              className="mntn-ghost-number pointer-events-none absolute -left-[0.26em] -top-[0.36em] text-[clamp(84px,15vw,180px)] sm:-left-[0.45em] lg:-left-[0.62em]"
            >
              {number}
            </span>

            <div className="relative">
              <Eyebrow>{eyebrow}</Eyebrow>

              <h2
                id={headingId}
                className="mntn-display mt-6 text-[clamp(1.85rem,4.6vw,3rem)] leading-[1.3] text-[var(--mntn-text)]"
              >
                {title.map((line, index) => (
                  <span key={line} className="block">
                    {line}
                    {index < title.length - 1 ? <span className="sr-only"> </span> : null}
                  </span>
                ))}
              </h2>

              <p className="mt-7 max-w-[36rem] text-[15px] font-medium leading-[1.95] text-[var(--mntn-text-muted)]">
                {body}
              </p>

              <div className="mt-9">
                <ReadMoreLink href={`#${id}`} label={`Mehr lesen über ${title.join(' ')}`} />
              </div>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className={`group overflow-hidden ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
