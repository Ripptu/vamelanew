/**
 * Writes a static HTML file per route.
 *
 * Runs after both Vite builds:
 *   1. `vite build`                      -> dist/            (client bundle + template)
 *   2. `vite build --ssr src/entry-server.tsx --outDir dist-ssr`
 *   3. this script                       -> dist/<route>/index.html
 *
 * Without this the deployed HTML is an empty <div id="root">, so every crawler
 * that does not execute JavaScript — Bing, GPTBot, PerplexityBot, social
 * preview scrapers — sees no content and no per-route title.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const templatePath = path.join(distDir, 'index.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const SITE_URL = 'https://vamela.info';

/** motion serialises its `initial` state as inline opacity:0. Clients that run
 *  JS animate it away; clients that do not would see a blank page, so give
 *  them — and only them — a stylesheet that neutralises it. */
const NOSCRIPT_REVEAL =
  '<noscript><style>[style*="opacity:0"]{opacity:1!important}</style></noscript>';

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function stripTags(value) {
  return String(value).replace(/<[^>]*>/g, '');
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing ${templatePath}. Run \`vite build\` first.`);
  }
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing ${serverEntry}. Run the --ssr build first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render, allPaths: routes } = await import(pathToFileURL(serverEntry).href);

  if (!Array.isArray(routes) || routes.length === 0) {
    throw new Error('entry-server did not export a non-empty allPaths array.');
  }

  const seoBlock = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;
  if (!seoBlock.test(template)) {
    throw new Error('Template is missing the <!--seo-start--> / <!--seo-end--> markers.');
  }

  let written = 0;
  const failures = [];

  for (const route of routes) {
    let result;
    try {
      result = await render(route);
    } catch (error) {
      failures.push(`${route}: ${error.message}`);
      continue;
    }

    const { html, head: hoisted } = result;

    const titleMatch = hoisted.match(/<title[^>]*>([\s\S]*?)<\/title>/);
    if (!titleMatch) {
      failures.push(`${route}: rendered without a <title>`);
      continue;
    }
    if (!/<link[^>]+rel="canonical"/.test(hoisted)) {
      failures.push(`${route}: rendered without a canonical link`);
      continue;
    }

    // Social tags derived from the per-route title/description so previews are
    // not stuck on the homepage defaults.
    const titleText = stripTags(titleMatch[1]);
    const descMatch = hoisted.match(/<meta name="description" content="([^"]*)"/);
    const description = descMatch ? descMatch[1] : '';
    const canonical = `${SITE_URL}${route === '/' ? '/' : route}`;

    const head = [
      hoisted,
      `<meta property="og:title" content="${escapeAttr(titleText)}" />`,
      description ? `<meta property="og:description" content="${description}" />` : '',
      `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
      '<meta property="og:type" content="website" />',
      '<meta property="og:image" content="https://s1.directupload.eu/images/260311/4p548rp9.png" />',
      '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
      '<meta name="author" content="VAMELA" />',
      NOSCRIPT_REVEAL,
    ]
      .filter(Boolean)
      .join('\n    ');

    const page = template
      .replace(seoBlock, head)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page, 'utf-8');
    written += 1;
  }

  if (failures.length) {
    console.error(`\nPrerender failed for ${failures.length} route(s):`);
    for (const failure of failures) console.error(`  - ${failure}`);
    process.exit(1);
  }

  console.log(`prerendered ${written} routes`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
