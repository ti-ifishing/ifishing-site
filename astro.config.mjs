import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ifishing.com.br',
  trailingSlash: 'ignore',
  redirects: {
    '/ios': 'https://apps.apple.com/br/app/ifishing-guias-de-pesca/id6769904280',
    '/android': 'https://play.google.com/store/apps/details?id=com.ifishing.app',
  },
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/guide/') && !page.includes('/chat/'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
