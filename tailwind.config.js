/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html, js, ts, vue}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        'brand-color': '#4C3398',
        'brand-yellow': '#ffe430',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
      },
      backgroundImage: {
        banner:
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      },
    },
  },
  plugins: [],
};
