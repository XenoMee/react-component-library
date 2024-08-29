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
            '@apply font-marker text-3xl sm:text-5xl wide:text-7xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply font-marker text-lg sm:text-xl wide:text-2xl font-bold leading-tight': {},
          },

          '.badge': {
            '@apply py-2 px-6 text-lg font-bold leading-[1.5]': {},
          },

          '.badge-gray': {
            '@apply bg-gray-200 text-gray-900': {},
          },

          '.badge-red': {
            '@apply bg-red-200 text-red-900': {},
          },

          '.badge-yellow': {
            '@apply bg-yellow-200 text-yellow-900': {},
          },

          '.badge-green': {
            '@apply bg-green-200 text-green-900': {},
          },

          '.badge-blue': {
            '@apply bg-blue-200 text-blue-900': {},
          },

          '.badge-indigo': {
            '@apply bg-indigo-200 text-indigo-900': {},
          },

          '.badge-puprle': {
            '@apply bg-purple-200 text-purple-900': {},
          },

          '.badge-pink': {
            '@apply bg-pink-200 text-pink-900': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
