import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://majales.utb.cz',
  integrations: [
    tailwind(), 
    react(), 
    sitemap({
      filter: (page) => page !== 'https://majales.utb.cz/404',
      // Přidá i odkaz do hlavičky každé stránky
      i18n: {
        defaultLocale: 'cs',
        locales: { cs: 'cs' }
      }
    }),
    robotsTxt({
      sitemap: 'https://majales.utb.cz/sitemap-index.xml',
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/priprava/', // Zde můžeš zakázat složky, které nechceš v Googlu
        },
      ],
    }),
  ],
  server: {
    host: true,
  },
});