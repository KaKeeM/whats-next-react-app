import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './hooks/auth';
import { ThemeProvider } from './hooks/theme';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  );
} else {
  console.error('Root container not found. Make sure the element with id "root" exists in your index.html.');
}
