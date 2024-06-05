import { colors } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      /* ...colors, */
      white: "#FFFFFF",
      primary: {
        100: "#ffdfea",
        400: "#c26585",
        500: "#dd1b5e",
      },
      secondary: {
        500: "#3e2960",
      },
    },
    keyframes: {
      appear: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
  },
  plugins: [],
};
