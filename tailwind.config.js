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
          'bgVedioWhite' :' #EFEBEB',
          'bgVedioGray':'#747373',
          'missionWhite':'#747373',
          'missionGray':'#515050',
          'productGray':'#575353',
          'officalPosition': '#C9C7C782',
          'largeHeader':'#EAEAEA'
      },
    },
  },
  plugins: [],
}
