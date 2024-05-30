/*
 * This file is used to parse the theme.json file from the theme to generate the tailwind config
 */
import { getSpacing } from "./spacing";
import { getScreens } from "./screens";
import { getAspectRatio } from "./aspect-ratio";
import { getContainer } from "./container";

export function themeParser(
  theme, prefixObject = { prefixScreens: "b_", prefixAspectRatio: "b_", prefixSpacing: "b_" }
) {

  // get prefixes
  const { prefixScreens, prefixAspectRatio, prefixSpacing } = prefixObject;
    
  // import 16-grid and clamp spacing
  const spacing = getSpacing(prefixSpacing);

  // add colors
  let colors = {};
  theme.settings.color.palette.forEach((color) => {
    colors[color.slug] = color.color;
  });

  // add fonts and fontWeights
  let fonts = {};
  let fontWeights = {};
  theme.settings.typography.fontFamilies.forEach((fam) => {
    fonts[fam.slug] = fam.fontFamily.split(",");
    if (fam.fontFace) {
      // generate fontWeights
      fam.fontFace.forEach((face) => {
        fontWeights[face.fontWeight] = face.fontWeight;
      });
    }
  });

  // fontsizes
  let fontSizes = {};
  theme.settings.typography.fontSizes.forEach((size) => {
    // add font variables
    fontSizes[size.slug] = `var(--wp--preset--font-size--${size.slug})`;
  });

  // responsive
  const screens = getScreens(prefixScreens);
  // aspect ratio
  const aspectRatio = getAspectRatio(prefixAspectRatio);
  // container
  const container = getContainer();

  // export object
  return {
    fonts: fonts,
    fontWeights: fontWeights,
    colors: colors,
    spacing: spacing,
    fontSizes: fontSizes,
    screens: screens,
    aspectRatio: aspectRatio,
    container: container,
  };
}
