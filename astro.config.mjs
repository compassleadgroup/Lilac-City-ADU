// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The `site` value must exactly match the production domain.
// Domain is operator-confirmed: lilaccityadu.com.
// Sitemap resolves at https://lilaccityadu.com/sitemap-index.xml.
//
// Tailwind CSS v4 is wired through PostCSS (see postcss.config.mjs), not the
// @tailwindcss/vite plugin. Astro 6 ships a rolldown-based Vite that the Vite
// plugin is not yet compatible with, so the PostCSS path is used instead.
export default defineConfig({
  site: 'https://lilaccityadu.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
