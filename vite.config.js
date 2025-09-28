import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/login-page-react/',
  resolve: {
    alias: {
      img: path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        './src/assets/images'
      ),
    },
  },
});
