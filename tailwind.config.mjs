/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Ladislav'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      beige: '#FFFCD9',
      orange: '#EF5A23',
      blue: '#4400FF',
      purple: '#EA92F4',
    },
    fontSize: {
      p: [
        '18px',
        {
          fontWeight: 400,
        },
      ],
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
