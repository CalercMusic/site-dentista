
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  // Base relativa './' é a mais universal para evitar erros de 404 em assets
  base: './',
  plugins: [
    react(),
    EnvironmentPlugin(['API_KEY'])
  ],
  server: {
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
