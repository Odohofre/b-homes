/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-100': "#e6e4f2",
        "dark-400": "#bbbbbb",
        "dark-700": "#1e1e1e",
        "dark-800": "#0F0F0F",
        "royal-blue": "#2949c6",
      },
      fontFamily: {
        Mont: ["Montserrat", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        default: "10px",
      },
      spacing: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
