/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SatoshiBold: ["SatoshiBold", "sans-serif"],
        SatoshiMedium: ["SatoshiMedium", "sans-serif"],
        SatoshiItalic: ["SatoshiItalic", "sans-serif"],
        SatoshiRegular: ["SatoshiRegular", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "theme-color": "#FDBB4D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
