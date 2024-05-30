# blockbite-tailwind

wordpress theme.json parser to blockbite tailwind theme

https://github.com/merijnponzo/blockbite-tailwind

(for owner)
npm version <update_type>
npm publish

# extend your tailwindconfig for wordpress

• uses a 16px grid system for spacing and dimensions like p-16 or w-128, or with default prefixing b_p-16 etc
(easy to remember, consistent layouts)
• use dynamic font sizes in 8 steps, easy
(easy to remember, consistent layouts)

example

```
import { themeParser } from 'blockbite-tailwind'
const fluidContainer = require('blockbite-tailwind/components/fluid-container')

// load theme.json
const themeJson = require('./theme.json')
// parse it to tailwind values
// https://www.blockbite.dev/documentation/api/themeParser
const theme = themeParser(themeJson, {
	prefixScreens: 'b_',
	prefixAspectRatio: 'b_',
	prefixContainer: 'b_',
	prefixSpacing: 'b_',
})

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./blocks/**/*.{html,js,php}',
		'./templates/**/*.{html,js,php}',
		'./views/**/*.twig',
	],
	/* give the blockbite class a lower priority then the inline editor styles from the plugin ! */
	important: '.theme',
	safelist: [
		'container-fluid',
		'relative',
		'w-full',
		'-right-512',
		'right-0',
		'shadow-xl',
		'bg-white',
	],
	theme: {
		fontFamily: theme.fonts,
		container: theme.container,
		extend: {
			fontSize: theme.fontSizes,
			fontWeight: theme.fontWeights,
			colors: theme.colors,
			spacing: theme.spacing,
			gap: theme.spacing,
			minWidth: theme.spacing,
			maxWidth: theme.spacing,
			minHeight: theme.spacing,
			maxHeight: theme.spacing,
			aspectRatio: theme.aspectRatio,
			screens: theme.screens,
			backgroundImage: {
				'bk-circle': "url('../resources/images/bgcircle.svg')",
			},
		},
	},
	plugins: [fluidContainer],
}
```
