# blockbite-tailwind
wordpress theme.json parser to blockbite tailwind theme 

https://github.com/merijnponzo/blockbite-tailwind


(for owner)
npm version <update_type>
npm publish


# extend your tailwindconfig for wordpress
• uses a 16px grid system for spacing and dimensions like p-16 or w-128
(easy to remember, consistent layouts)
• use dynamic font sizes in 8 steps, easy
(easy to remember, consistent layouts)


/*
  This is the default config 
*/

import { themeParser } from "blockbite-tailwind";
// load theme.json
const themeJson = require('./theme.json');
// parse it to tailwind values
const theme = themeParser(themeJson, false);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./blocks/**/*.{html,js,php}', './templates/**/*.{html,js,php}', './parts/**/*.{html,js,php}'],
  theme: {
    fontFamily: theme.fonts,
    fontWeight: theme.fontWeights,
    container: theme.container,
    extend: {
      fontSize: theme.fontSizes,
      colors: theme.colors,
      spacing: theme.spacing,
      gap: theme.spacing,
      minWidth: theme.spacing,
      maxWidth: theme.spacing,
      minHeight: theme.spacing,
      maxHeight: theme.spacing,
      aspectRatio: theme.aspectRatio,
      screens: theme.screens,
    },
  },
}