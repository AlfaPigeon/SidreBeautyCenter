// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Custom domain: https://sidrebeauty.com
  site: 'https://sidrebeauty.com',
  // No base path needed for a custom domain at root
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
