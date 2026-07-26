import { niches } from './data/niches';
import { locations } from './data/locations';

/**
 * Single source of truth for every crawlable URL on the site.
 *
 * Consumed by:
 *  - scripts/generate-sitemap.ts  (public/sitemap.xml)
 *  - scripts/prerender.mjs        (static HTML per route)
 *
 * Adding a route here is enough to get it prerendered and into the sitemap.
 */

export const SITE_URL = 'https://vamela.info';

export type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RouteDef {
  /** Path with leading slash, no trailing slash (except the root). */
  path: string;
  changefreq: ChangeFreq;
  priority: number;
}

export const staticRoutes: RouteDef[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/leistungen', changefreq: 'monthly', priority: 0.9 },
  { path: '/referenzen', changefreq: 'monthly', priority: 0.8 },
  { path: '/ueber-mich', changefreq: 'monthly', priority: 0.7 },
  { path: '/strategie-workshop', changefreq: 'monthly', priority: 0.7 },
  { path: '/branchen', changefreq: 'monthly', priority: 0.8 },
];

export const legalRoutes: RouteDef[] = [
  { path: '/impressum', changefreq: 'yearly', priority: 0.2 },
  { path: '/datenschutz', changefreq: 'yearly', priority: 0.2 },
  { path: '/agb', changefreq: 'yearly', priority: 0.2 },
];

export const nicheRoutes: RouteDef[] = niches.map((niche) => ({
  path: `/branchen/${niche.slug}`,
  changefreq: 'monthly',
  priority: 0.7,
}));

/** Local landing pages — the primary target for "Webdesign <Stadt>" queries. */
export const locationRoutes: RouteDef[] = locations.map((location) => ({
  path: `/webdesign/${location.slug}`,
  changefreq: 'monthly',
  priority: 0.9,
}));

/** Every route that should be prerendered and listed in the sitemap. */
export const allRoutes: RouteDef[] = [
  ...staticRoutes,
  ...locationRoutes,
  ...nicheRoutes,
  ...legalRoutes,
];

export const allPaths: string[] = allRoutes.map((r) => r.path);
