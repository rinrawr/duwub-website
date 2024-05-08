const plugin = require('tailwindcss/plugin')
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#e9effc',
          100: '#d2def9',
          200: '#a5bef3',
          300: '#789ded',
          400: '#4b7de7',
          500: '#1f5ce0',
          600: '#184ab4',
          700: '#123787',
          800: '#0c255a',
          900: '#06122d',
          950: '#030916',
        },
        'background': {
          50: '#e9eefc',
          100: '#d3def8',
          200: '#a6bdf2',
          300: '#7a9ceb',
          400: '#4e7be4',
          500: '#215ade',
          600: '#1b48b1',
          700: '#143685',
          800: '#0d2459',
          900: '#07122c',
          950: '#030916',
        },
        'primary': {
          50: '#e5fffa',
          100: '#ccfff5',
          200: '#99ffeb',
          300: '#66ffe0',
          400: '#33ffd6',
          500: '#00ffcc',
          600: '#00cca3',
          700: '#00997a',
          800: '#006652',
          900: '#003329',
          950: '#001a14',
        },
        'secondary': {
          50: '#ecf6f9',
          100: '#d9eef2',
          200: '#b3dce6',
          300: '#8ccbd9',
          400: '#66b9cc',
          500: '#40a8bf',
          600: '#338699',
          700: '#266573',
          800: '#19434d',
          900: '#0d2226',
          950: '#061113',
        },
        'accent': {
          50: '#fce9fb',
          100: '#f9d2f7',
          200: '#f3a5ef',
          300: '#ed78e7',
          400: '#e74bdf',
          500: '#e01fd7',
          600: '#b418ac',
          700: '#871281',
          800: '#5a0c56',
          900: '#2d062b',
          950: '#160315',
        },
       },       
       animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'jellyfish': "url('https://cdn.duwub.dev/assets/jellyfish.jpg')",
        'website-bg': "url('https://cdn.duwub.dev/assets/website/shelterVHS.png')",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    addVariablesForColors,
        function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

