/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi-Variable', 'sans-serif']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}