
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  // Para Vercel, o base deve ser '/'
  base: '/',
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
