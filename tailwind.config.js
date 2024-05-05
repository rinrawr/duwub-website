/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#dae4fa',
        'background': '#040b1b',
        'primary': '#0dffce',
        'secondary': '#75159b',
        'accent': '#e22fd8',
       },
    },
  },
  plugins: [],
}

