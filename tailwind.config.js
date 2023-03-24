/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: "'Lobster', cursive",
        edu: "'Edu NSW ACT Foundation', cursive",
        Bebas: "'Bebas Neue', cursive",
      },
      backgroundImage: {
        food: "url('http://127.0.0.1:3000/food.PNG')",
        drinks: "url('http://127.0.0.1:3000/drinks.PNG')",
      },
    },
  },
  plugins: [],
};