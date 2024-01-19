import type { Config } from 'tailwindcss';
import { colors } from './src/ui/theme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors,
    extend: {
      fontFamily: {
        display: 'Montserrat',
        sansation: 'Sansation',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
