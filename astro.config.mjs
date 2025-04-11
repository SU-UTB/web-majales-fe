import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://majales.utb.cz/',
  server: {
    host: true, // Allow local network access
  },
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
});
