import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      midnight: "#172339",
      slate: "#49566D",
      cream: "#F3EDE7",
      linen: "#FAF8F6",
      lavender: "#A060FF",
      magenta: "#CB30E3",
      sunset: "#FFA84E",
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
