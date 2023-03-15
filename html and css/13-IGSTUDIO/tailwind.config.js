/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
      colors: {
        'black': '#000000',
        'black-dark': '#111111',
        'gray-light': '#171717',
        'gray-dark': '#2e2e2e',
        'gray': '#1d1d1d',
        'yellow': '#e3b748',
        'white': '#fff',
        'silver': '#e6e6e6',
        'transparent': 'transparent',
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ['"Inter"'],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};