// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The `site` value must exactly match the production domain.
// Domain is operator-confirmed: lilaccityadu.com.
// Sitemap resolves at https://lilaccityadu.com/sitemap-index.xml.
export default defineConfig({
  site: 'https://lilaccityadu.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
