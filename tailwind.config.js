/** @type {import('tailwindcss').Config} */

import { getContainer } from "./lib/container.js";

module.exports = {
  content: ["./vite.html", "./vite.js"],
  theme: {
    extend: {
      container: getContainer(),
    },
  },
  plugins: [
    require("./gridarea"),
    require("./components/fluid-container.js"),
    require("./components/grid-container.js"),
    require("./themecolors"),
  ],
};
