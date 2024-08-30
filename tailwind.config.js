/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      marker: 'var(--font-marker)',
      inter: 'var(--font-inter)',
    },
    extend: {
      screens: {
        xxs: '320px',
        xs: '375px',
        ss: '650px',
        sm: '850px',
        md: '1060px',
        lg: '1200px',
        wide: '1440px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({}),
        addComponents({
          '.container': {
            '@apply max-w-[70rem] mx-auto py-6 px-5 sm:p-10 lg:max-w-[85rem] wide:max-w-[95rem]': {},
          },

          '.flex-container': {
            '@apply flex xxs:gap-4 gap-10 items-center xxs:flex-col md:flex-row': {},
          },

          '.flex-item': {
            '@apply flex gap-4 items-center xxs:flex-wrap xxs:justify-center md:flex-nowrap': {},
          },

          '.h1': {
            '@apply font-marker text-center text-2xl sm:text-3xl md:text-5xl wide:text-7xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply font-marker text-xl sm:text-2xl md:text-3xl wide:text-5xl font-bold leading-tight underline underline-offset-4':
              {},
          },

          '.h3': {
            '@apply text-[#5E5D5D] font-marker text-lg sm:text-xl md:text-2xl wide:text-3xl font-medium leading-tight':
              {},
          },

          '.badge': {
            '@apply py-2 px-6 font-bold': {},
          },

          '.banner': {
            '@apply p-4': {},
          },

          '.card': {
            '@apply max-w-96 grid gap-6 px-6 pb-8 pt-16 relative bg-white shadow-md text-center text-[#6B7280] z-0 justify-self-center rounded-lg':
              {},
          },

          '.card-icon': {
            '@apply p-3 absolute rounded-lg justify-self-center z-10 top-[-1.3rem]': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
