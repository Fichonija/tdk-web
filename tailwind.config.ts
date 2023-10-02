import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Montserrat',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
