/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "custom-xl": "0.5rem", // Customize the letter spacing value
      },
      backgroundColor: {
        customOrange: "#d97c4a",
      },
      textColor: {
        customOrange: "#d97c4a",
      },
      scale: {
        98: "0.99",
      },
      padding: {
        13: "3.25rem",
      },
    },
  },
  plugins: [],
};
