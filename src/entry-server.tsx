import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import App from './App';
import { AppShell } from './AppShell';

/** Re-exported so the prerender script gets the route list from the same
 *  registry the sitemap uses, without bundling it a second time. */
export { allPaths } from './routes';

export interface RenderResult {
  /** Full markup for the #root container. */
  html: string;
  /** Tags React hoisted out of the tree (title, meta, link, ld+json). */
  head: string;
}

/**
 * Renders one route to static markup.
 *
 * Uses `prerenderToNodeStream` rather than `renderToString` because several
 * routes are behind React.lazy — renderToString would emit the Suspense
 * fallback and produce an empty page. prerenderToNodeStream waits for every
 * boundary to settle before resolving.
 */
export async function render(url: string): Promise<RenderResult> {
  const { prelude } = await prerenderToNodeStream(
    <AppShell>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </AppShell>
  );

  const chunks: Buffer[] = [];
  for await (const chunk of prelude) {
    chunks.push(Buffer.from(chunk));
  }
  const rendered = Buffer.concat(chunks).toString('utf-8');

  return splitHead(rendered);
}

/**
 * React 19 hoists document metadata to the front of the output instead of
 * populating a side channel. Pull those leading tags out so they can be placed
 * in <head>, leaving the rest as body markup.
 */
function splitHead(rendered: string): { html: string; head: string } {
  const headTags: string[] = [];
  const hoistable =
    /^\s*(<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>)/;

  let rest = rendered;
  let match = rest.match(hoistable);
  while (match) {
    headTags.push(match[1]);
    rest = rest.slice(match[0].length);
    match = rest.match(hoistable);
  }

  return { html: rest, head: headTags.join('\n    ') };
}
