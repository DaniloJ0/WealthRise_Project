/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tema_morado': '#AF2389',
        'tema_morado_hover': '#961F77',
      }
    },
  },
  plugins: [],
}
