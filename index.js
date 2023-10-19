// Import the function from the appropriate location
import { getAspectRatio } from './lib/aspect-ratio';
import { getContainer } from './lib/container';
import { getSpacing } from './lib/spacing';
import { gridSpacing } from './lib/spacing';
import { clampSpacing } from './lib/spacing';
import { getScreens } from './lib/screens';
import { getScreenDimensions } from './lib/screen-dimensions';
import { getColors, getColorObject} from './lib/colors';
import { themeParser } from './lib/theme-parser';


// Export the function so it's available for import in other files
export { getAspectRatio, getContainer, getSpacing, getColors, getColorObject, gridSpacing, clampSpacing, getScreens, getScreenDimensions, themeParser };