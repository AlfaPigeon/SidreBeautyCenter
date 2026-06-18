// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://alfapigeon.github.io/SidreBeautyCenter/
  site: 'https://alfapigeon.github.io',
  base: '/SidreBeautyCenter',
  // Output straight into the folder GitHub Pages serves from.
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
