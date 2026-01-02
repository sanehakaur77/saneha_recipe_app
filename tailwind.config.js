/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // include your HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // include all JS/TS/React files in src
  ],
  theme: {
    extend: {}, // custom theme settings can go here
  },
  plugins: [], // add Tailwind plugins here if needed
};
