
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.warn("Retrying to find root element...");
    setTimeout(init, 50);
    return;
  }

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
