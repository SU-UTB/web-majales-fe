/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // FontFamily necháváme zde, pokud chcete, aby 'sans' byl primárně Ladislav
    fontFamily: {
      sans: ['Ladislav', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      // Barvy v extend se přidají k těm existujícím
      colors: {
        beige: '#FBEFE3',
        violet: '#210E4F',
        pink: '#EC4887',
        lightPink: '#FFBEDF',
        orange: '#F16E2B',
        lightOrange: '#F9B162',
        blue: '#6459FD',
        darkDarkBlue: '#1F2041',
      },
      // Velikosti písma v extend se přidají k xs, sm, base, lg atd.
      fontSize: {
        'h1': ['45px', { fontWeight: '700' }],
        'h1-mobile': ['35px', { fontWeight: '700' }],
        'h2': ['38px', { fontWeight: '600' }],
        'h2-mobile': ['28px', { fontWeight: '600' }],
        'h2-reversed': ['38px', { fontWeight: '700' }],
        'h2-reversed-mobile': ['26px', { fontWeight: '700' }],
        'h3': ['30px', { fontWeight: '600' }],
        'h3-mobile': ['18px', { fontWeight: '600' }],
        'h3-reversed': ['30px', { fontWeight: '700' }],
        'h3-reversed-mobile': ['18px', { fontWeight: '700' }],
        'p': ['24px', { fontWeight: '400' }],
        'p-mobile': ['20px', { fontWeight: '400' }],
        'p-big': ['26px', { fontWeight: '400' }],
        'countdown': ['48px', { fontWeight: '500' }],
        'useful-link': ['28px', { fontWeight: '600' }],
      },
      scale: {
        175: '1.75',
        200: '2.00',
      },
      screens: {
        xs: '480px',
      },
      spacing: {
        76: '19rem',
        92: '23rem',
        108: '27rem',
        120: '30rem',
        144: '36rem',
        202: '50.5rem',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};