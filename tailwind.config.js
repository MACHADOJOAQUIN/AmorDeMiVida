/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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