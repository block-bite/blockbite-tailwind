/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./vite.html", "./vite.js"],
  theme: {
    extend: {},
  },
  plugins: [require("./gridarea")],
};
