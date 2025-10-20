import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(fileURLToPath(new URL('src/assets', import.meta.url))),
      '@components': path.resolve(fileURLToPath(new URL('src/components', import.meta.url))),
      '@features': path.resolve(fileURLToPath(new URL('src/features', import.meta.url))),
      '@helpers': path.resolve(fileURLToPath(new URL('src/helpers', import.meta.url))),
      '@styles': path.resolve(fileURLToPath(new URL('src/styles', import.meta.url))),
      '@variables': path.resolve(fileURLToPath(new URL('src/variables.scss', import.meta.url)))
    }
  }
});
