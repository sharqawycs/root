// @ts-check
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';
import compress from 'vite-plugin-compression';
import htmlMinifier from 'vite-plugin-html-minifier';

const sitemapConfig = sitemap({
  filenameBase: 'sitemap',
});

const htmlMin = htmlMinifier({
  minify: true,
});

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sharq.tech',
  integrations: [mdx(), preact(), sitemapConfig],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  compressHTML: true,
  build: {
    inlineStylesheets: `never`,
  },

  vite: {
    plugins: [tailwindcss(), compress(), htmlMin],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    build: {
      minify: 'terser',
      terserOptions: {
        format: {
          comments: false, // remove all comments
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined, // force single chunk
        },
      },
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
