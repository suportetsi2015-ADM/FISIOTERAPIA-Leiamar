import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AdminPortal } from './components/AdminPortal';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AdminPortal
        onBackToSite={() => {
          const search = typeof window !== 'undefined' ? window.location.search : '';
          window.location.href = '/' + (search || '');
        }}
      />
    </ErrorBoundary>
  </StrictMode>
);
