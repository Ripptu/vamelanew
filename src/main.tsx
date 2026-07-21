import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import LenisScroll from './components/LenisScroll';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SecurityProvider } from './contexts/SecurityContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <SecurityProvider>
        <HelmetProvider>
          <LenisScroll />
          <App />
        </HelmetProvider>
      </SecurityProvider>
    </ErrorBoundary>
  </StrictMode>,
);
