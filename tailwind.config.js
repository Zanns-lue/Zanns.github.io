/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#facc15",
        black: "#020617",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
