import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppShell } from './AppShell';
import './index.css';

const container = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <AppShell>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppShell>
  </StrictMode>
);

// Prerendered HTML is hydrated; a bare shell (dev server, or a route that was
// not prerendered and fell through to the SPA rewrite) is mounted normally.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
