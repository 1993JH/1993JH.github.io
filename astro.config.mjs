// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Hosted on GitHub Pages from the 1993JH/1993JH.github.io repo.
  site: 'https://1993jh.github.io',
  integrations: [sitemap()],
});
