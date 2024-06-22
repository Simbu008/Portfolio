/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        tourney: ["Tourney", "sans-serif"],
      },
      colors: {
        primary: "#1C1C22",
        secondary: "#00FF99",
        hover: "#00E187",
        card: "#313131",
      },
    },
  },
  plugins: [],
};
