import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const domain = 'https://debebsmedia.com';

export default defineConfig({
  site: domain,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page !== `${domain}/privacy-policy/` && page !== `${domain}/admin/`,
    }),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
