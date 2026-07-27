/**
 * MNTN — image manifest.
 *
 * Single source of truth for every photograph on the page. The files currently
 * referenced are locally generated SVG stand-ins in `public/mntn/` that match
 * the composition, crop and colour temperature of the original screenshot.
 *
 * To drop in the real photographs: copy them into `public/mntn/` and change the
 * path below. Nothing else needs to be touched — aspect ratios are enforced by
 * the layout, and every image is rendered with `object-cover`.
 */
export const mntnImages = {
  /** Full-bleed hero: hiker on a grass ridge before a misty mountain range. */
  hero: {
    src: '/mntn/hero-mountains.svg',
    alt: 'Wanderer auf einem Grashügel vor einem weiten, nebligen Bergpanorama',
    width: 1600,
    height: 900,
  },
  /** Section 01: hiker on a narrow ridge trail high above a lake. */
  ridgeTrail: {
    src: '/mntn/guide-01-ridge-trail.svg',
    alt: 'Wanderer auf einem schmalen Graspfad hoch über einem See',
    width: 900,
    height: 1200,
  },
  /** Section 02: hiker with an orange pack standing on a boulder. */
  hikingGear: {
    src: '/mntn/guide-02-hiking-gear.svg',
    alt: 'Wanderer mit orangefarbenem Rucksack auf einem Felsvorsprung vor schroffen Gipfeln',
    width: 900,
    height: 1200,
  },
  /** Section 03: hand holding a compass over a green ridge. */
  mapCompass: {
    src: '/mntn/guide-03-map-compass.svg',
    alt: 'Hand hält einen Kompass über einem grünen Bergrücken unter Wolken',
    width: 900,
    height: 1200,
  },
} as const;

export type MntnImage = (typeof mntnImages)[keyof typeof mntnImages];
