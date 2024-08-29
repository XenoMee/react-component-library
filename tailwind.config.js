/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      marker: 'var(--font-marker)',
      inter: 'var(--font-inter)',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({}),
        addComponents({
          '.h1': {
            '@apply font-marker text-center text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply font-marker text-xl sm:text-2xl md:text-3xl font-bold leading-tight underline underline-offset-4':
              {},
          },

          '.h3': {
            '@apply text-[#5E5D5D] font-marker text-lg sm:text-xl md:text-2xl font-medium leading-tight': {},
          },

          '.badge': {
            '@apply py-2 px-6 font-bold': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
