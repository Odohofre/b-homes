/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        default: "10px",
      },
      colors: {
        dark: {
          50: "#989898",
          100: "#e6e4f2",
          150: "#6C6C6C",
          400: "#bbbbbb",
          700: "#1e1e1e",
          800: "#0F0F0F",
        },
        "royal-blue": "#2949c6",
        "sky-blue": "#6494BF",
      },
      fontFamily: {
        Mont: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "5xl": ["40px", "48px"],
      },
      spacing: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
