import type { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SecurityProvider } from './contexts/SecurityContext';
import LenisScroll from './components/LenisScroll';

/**
 * The provider tree shared by the browser entry and the prerender entry.
 *
 * Both entries must produce the same tree shape, otherwise hydration diverges
 * from the prerendered markup. Keeping it here means there is one definition
 * rather than two that can drift apart.
 *
 * The router itself is passed in as `children` because it differs per entry:
 * BrowserRouter in the browser, StaticRouter during prerender.
 */
export function AppShell({
  children,
  helmetContext,
}: {
  children: ReactNode;
  /** Prerender only: react-helmet-async writes the collected head tags here. */
  helmetContext?: Record<string, unknown>;
}) {
  return (
    <ErrorBoundary>
      <SecurityProvider>
        <HelmetProvider context={helmetContext}>
          <LenisScroll />
          {children}
        </HelmetProvider>
      </SecurityProvider>
    </ErrorBoundary>
  );
}
