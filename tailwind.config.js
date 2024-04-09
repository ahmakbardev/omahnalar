/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  '../**/*.{html,js}',
],
  theme: {
    extend: {
      colors: {
        'primary': '#5D50C6',
        'own-pink': '#F85E9F'
      }
    },
  },
  plugins: [],
}

