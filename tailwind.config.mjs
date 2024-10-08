/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#07183c",
      },
      backdropBlur: {
        light: "1px",
      },
    },
  },
  plugins: [],
};
