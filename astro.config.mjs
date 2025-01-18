import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  server: { port: 8080 },
  integrations: [react(), tailwind(), sitemap()],
  site: 'https://tdk.hr',
});
