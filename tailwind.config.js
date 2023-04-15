/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "themeBgDark": '#03071e',
      "themeBgLight": '#00253e',
      "themeOrange": '#f48c06',
      "themeBlue": '#00bbf9'
    },
    extend: {},
  },
  plugins: [],
}

