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
      h2: [
        '38px',
        {
          fontWeight: 600,
        },
      ],
      'h2-reversed': [
        '38px',
        {
          fontWeight: 700,
        },
      ],
      p: [
        '24px',
        {
          fontWeight: 400,
        },
      ],
      'p-big': [
        '28px',
        {
          fontWeight: 400,
        },
      ],
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
