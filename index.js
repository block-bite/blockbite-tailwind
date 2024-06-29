// Import the function from the appropriate location
import { getAspectRatio } from "./lib/aspect-ratio";
import { getContainer } from "./lib/container";
import { getGridClampSpacing, getNativeSpacing } from "./lib/spacing";
import { gridSpacing } from "./lib/spacing";
import { clampSpacing } from "./lib/spacing";
import { screenSpacing } from "./lib/spacing";
import { percentSpacing } from "./lib/spacing";
import { getScreens } from "./lib/screens";
import { getColors, getColorObject } from "./lib/colors";
import { themeParser } from "./lib/theme-parser";

// Export the function so it's available for import in other files
export {
  getAspectRatio,
  getContainer,
  getGridClampSpacing,
  getNativeSpacing,
  getColors,
  getColorObject,
  gridSpacing,
  clampSpacing,
  screenSpacing,
  percentSpacing,
  getScreens,
  themeParser,
};
