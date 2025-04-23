import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  // Ensure proper handling of asset files
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp'],
  base: '/spicy-family-restaurant/',
  build: {
    outDir: 'build',
  },
});
