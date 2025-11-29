/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette for Swarajnana theme
        ragaGold: "#d4af37",
        deepMaroon: "#4b1b1b",
        templeOrange: "#e06e35",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Merriweather", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
      },
    },
  },
  plugins: [],
};
