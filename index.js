// Import the function from the appropriate location
import { getAspectRatio } from "./lib/aspect-ratio";
import { getContainer } from "./lib/container";
import { getGridClampSpacing } from "./lib/spacing";
import { gridSpacing } from "./lib/spacing";
import { clampSpacing } from "./lib/spacing";
import { screenSpacing } from "./lib/spacing";
import { percentSpacing } from "./lib/spacing";
import { nativeSpacing } from "./lib/spacing";
import { spanSpacing } from "./lib/spacing";
import { getScreens } from "./lib/screens";
import { getColors, getColorObject } from "./lib/colors";
import { themeParser } from "./lib/theme-parser";

// Export the function so it's available for import in other files
export {
  getAspectRatio,
  getContainer,
  getGridClampSpacing,
  getColors,
  getColorObject,
  gridSpacing,
  nativeSpacing,
  clampSpacing,
  screenSpacing,
  spanSpacing,
  percentSpacing,
  getScreens,
  themeParser,
};
