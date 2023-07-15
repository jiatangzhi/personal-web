/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple':{
          '300': '#6059BE',
          '500': '#302895'
        },
        'pink':{
          '100': '#FA6CD3',
          '400': '#FC0FB9',
          '500': '#C82179',
          '600': '#A61662',
          '700': '#ff4ec0'
        },
        'yellow':{
          '500': '##8D9528'
        }
      },
      fontFamily: { 'inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif'] },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-hero-first": {
          "background-image": "url(/bg-hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".bg-card": {
          "background-image": "url(/skills/bg-card.svg)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".el-star": {
          "background-image": "url(/skills/star.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        }
      };

      addUtilities(utilities);
    })
  ],
}