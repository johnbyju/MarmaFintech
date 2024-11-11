/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'jb': '781px',
        'xsm': '450px',
        'ise':'400px',
        "esm":"525px"
      },
      colors :{
          'headerWhite':'#D9CCCC',
          'headerLaseWhite':'#605E5E',
          'contentWhite':'#DDD8D8',
          'contentgrey':'#938989',
          'sub-head-color' :'#BBB7B7',
        
      },
    },
  },
  plugins: [],
}
