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
      animation: {
        slide: 'slide 600ms ease-in-out infinite alternate',
      },
      keyframes: {
        slide: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(6px)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
