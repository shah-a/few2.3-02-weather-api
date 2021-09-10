const { teal, emerald } = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { teal, emerald }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
