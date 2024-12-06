/*
 * This file is used to parse the theme.json file from the theme to generate the tailwind config
 */
import { fluidSpacing, gridSpacing, nativeSpacing } from "./spacing";
import { getScreens } from "./screens";
import { getAspectRatio } from "./aspect-ratio";
import { getContainer } from "./container";

export function themeParser(
  theme,
  prefixObject = {
    prefixScreens: "b_",
    prefixAspectRatio: "b_",
    prefixSpacing: "b_",
  },
  gridFluidSpacing = true
) {
  // get prefixes
  const { prefixScreens, prefixAspectRatio, prefixSpacing } = prefixObject;

  // import 16-grid and clamp spacing
  let spacing = {};
  if (gridFluidSpacing) {
    spacing = [...fluidSpacing(prefixSpacing), ...gridSpacing(prefixSpacing)];
  }

  // add colors
  let colors = {};
  if (theme.settings.color && theme.settings.color.palette !== undefined) {
    theme.settings.color.palette.forEach((color) => {
      colors[color.slug] = color.color;
    });
  }

  // add fonts and fontWeights
  let fonts = {};
  let fontWeights = {};
  if (
    theme.settings.typography &&
    theme.settings.typography.fontFamilies !== undefined
  ) {
    theme.settings.typography.fontFamilies.forEach((fam) => {
      fonts[fam.slug] = fam.fontFamily.split(",");
      if (fam.fontFace) {
        // generate fontWeights
        fam.fontFace.forEach((face) => {
          fontWeights[face.fontWeight] = face.fontWeight;
        });
      }
    });
  }

  // fontsizes
  let fontSizes = {};
  if (
    theme.settings.typography &&
    theme.settings.typography.fontSizes !== undefined
  ) {
    theme.settings.typography.fontSizes.forEach((size) => {
      // add font variables
      fontSizes[size.slug] = `var(--wp--preset--font-size--${size.slug})`;
    });
  }

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
