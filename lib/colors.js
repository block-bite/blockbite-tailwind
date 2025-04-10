const colors = [
  "black",
  "white",
  "transparent",
  "inherit",
  "current",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const isSpecialColor = (color) =>
  ["black", "white", "transparent", "inherit", "current", "b_theme"].includes(
    color
  );

export const getColors = () => {
  const tailwindColors = {};

  colors.forEach((color) => {
    if (isSpecialColor(color)) {
      tailwindColors[color] = color;
    } else {
      shades.forEach((shade) => {
        tailwindColors[`${color}-${shade}`] = `${color}-${shade}`;
      });
    }
  });

  return tailwindColors;
};

export const getColorObject = () => {
  const colorObjects = colors.flatMap((color) => {
    if (isSpecialColor(color)) {
      return {
        label: `${color.charAt(0).toUpperCase() + color.slice(1)}`,
        id: color,
      };
    } else {
      return shades.map((shade) => ({
        label: `${color.charAt(0).toUpperCase() + color.slice(1)} ${shade}`,
        id: `${color}-${shade}`,
      }));
    }
  });

  return colorObjects;
};

export default { getColors, getColorObject };
