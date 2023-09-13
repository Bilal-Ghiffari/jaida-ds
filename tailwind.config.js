/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#51459E",
  secondary: "#9698AB",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fill: {
        ...colors,
      },
    },
  },
  plugins: [],
};
