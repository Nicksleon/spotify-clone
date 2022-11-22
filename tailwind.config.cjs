/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          1000: "#0C0C0C",
        },
        blue: {
          1000: "#003132",
        },
      },
      width: {
        704: "44em",
      },
      height: {
        22: "92px",
      },
      border: {
        borderWidth: {
          1: "1px",
        },
      },
      bottom: {
        26: "100px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
