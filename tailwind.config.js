/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'heroHover': '33px 33px 3px #FF78C4, -33px -33px 3px #FFBDF7',
        'hero':      '10px 10px 1px #FF78C4, -10px -10px 1px #FFBDF7',
      },
      colors: {
        'crema': '#FFECEC',
        'rosa1': '#FF78C4',
        'rosa2': '#E1AEFF',
        'rosa3': '#FFBDF7',
        'negro': '#181818'
      },
      fontFamily:{
        'dancing':'Dancing Script'
      },
      backgroundPosition: {
        'Hero': 'center center',
        'First': 'right 5%',
        'Second': 'center 15%',
        'Third': 'right 15%'
      }
    },
  },
  plugins: [],
}