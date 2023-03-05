/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#0F0F0F",
        "royal-blue": "#2949c6",
        "grey-brown": "#bbbbbb",
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
