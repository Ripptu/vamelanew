/**
 * Generates public/sitemap.xml from the route registry in src/routes.ts.
 *
 * Run via `npm run sitemap` (also wired into `npm run build`), so the sitemap
 * can never drift from the routes the app actually serves.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allRoutes, SITE_URL } from '../src/routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.resolve(__dirname, '../public/sitemap.xml');

const lastmod = new Date().toISOString().slice(0, 10);

const body = allRoutes
  .map(({ path: routePath, changefreq, priority }) => {
    const loc = routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(outFile, xml, 'utf-8');
console.log(`sitemap.xml written with ${allRoutes.length} URLs`);
