import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ifishing.com.br',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !['/guide/', '/chat/', '/redefinir-senha/', '/email-confirmado/', '/android/', '/ios/'].some(p => page.includes(p)),
      changefreq: 'weekly',
      serialize(item) {
        if (item.url === 'https://ifishing.com.br/') item.priority = 1.0;
        else if (['/como-funciona/', '/para-guias/', '/baixar/'].some(p => item.url.endsWith(p))) item.priority = 0.8;
        else item.priority = 0.5;
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
