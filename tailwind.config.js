/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'brand-color': '#4C3398',
        'brand-yellow': '#ffe430',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
      },
    },
  },
  plugins: [],
};
