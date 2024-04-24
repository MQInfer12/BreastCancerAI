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
        500: "#dd1b5e",
      },
      secondary: {
        500: "#3e2960",
      },
    },
  },
  plugins: [],
};
