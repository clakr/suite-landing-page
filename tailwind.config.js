import plugin from "tailwindcss/plugin";
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".font-preset-xl": {
          "font-weight": "700",
          "font-size": "7.2rem",
          "line-height": "7.8rem",
          "letter-spacing": "-.1rem",
        },
        ".font-preset-l": {
          "font-weight": "700",
          "font-size": "4.8rem",
          "line-height": "5.6rem",
          "letter-spacing": "-.05rem",
        },
        ".font-preset-m": {
          "font-weight": "700",
          "font-size": "1.8rem",
          "line-height": "3.2rem",
          "letter-spacing": "-.02rem",
        },
        ".font-preset-s": {
          "font-weight": "700",
          "font-size": "1.6rem",
          "line-height": "2.6rem",
          "letter-spacing": "-2.5rem",
        },
        ".font-preset-quote": {
          "font-size": "2rem",
          "line-height": "3.5rem",
          "letter-spacing": "0",
        },
        ".font-preset-body": {
          "font-size": "1.8rem",
          "line-height": "3.2rem",
          "letter-spacing": "0",
        },
        ".font-preset-footer": {
          "font-size": "1.5rem",
          "line-height": "3.2rem",
          "letter-spacing": "0",
        },
      });
    }),
  ],
};
