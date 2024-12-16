/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6d1ddb",
        primaryLight: "#C084FC",
        secondary: "#C5C6C7",
        tertiary: " #FFD700",
        backcolor: "#0B0C10",
      },
      fontFamily: {
        playfair: ["Play Fair", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
