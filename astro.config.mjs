import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import playformCompress from '@playform/compress'
import AutoImport from 'astro-auto-import'
import { defineConfig } from 'astro/config'

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://debebsmedia.com',
  redirects: {
    '/admin': '/keystatic'
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [
  // example auto import component into blog post mdx files
  AutoImport({
    imports: [
    // https://github.com/delucis/astro-auto-import
    '@components/Admonition/Admonition.astro', '@components/AffiliateLink/AffiliateLink.astro', {
      '@components/Cta/NewsletterBlogPost.astro': [['default', 'Newsletter']]
    }]
  }), mdx(), react(), keystatic(), tailwind(), sitemap(), playformCompress(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })],
  adapter: vercel()
});