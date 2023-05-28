/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [".public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      simpsons: ["Simpsonfont"],
      ...defaultTheme.fontFamily,
    },
  },
  plugins: [daisyui],
};
