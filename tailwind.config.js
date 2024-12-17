/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6d1ddb",
        primaryLight: "#C084FC",
        secondary: "#C5C6C7",
        tertiary: " #151030",
        backcolor: "#0B0C10",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
