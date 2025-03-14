import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  server: { port: 8080 },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  site: 'https://tdk.hr',
  redirects: {
    "/nadstresnice": "/drvena-nadstresnica-pergola-izrada-po-mjeri",
  }
});
