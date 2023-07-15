/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#d8b4fe",
          500: "#a78bfa",
        },
        pink: {
          100: "#ffe4e6",
          400: "#fda4af",
          500: "#f9a8d4",
          600: "#818cf8",
          700: "#be185d",
        },
      },
      fontFamily: { inter: ["Inter", "Helvetica", "Arial", "sans-serif"] },
      transitionDuration: {
        2000: "2000ms",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero-first": {
          "background-image": "url(/bg-hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
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
        },
      };

      addUtilities(utilities);
    }),
  ],
};
