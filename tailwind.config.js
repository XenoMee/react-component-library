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
            '@apply font-marker text-3xl sm:text-5xl xl:text-7xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply font-marker text-lg sm:text-xl xl:text-2xl font-bold leading-tight': {},
          },

          '.badge': {
            '@apply py-2 px-6 font-bold': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
