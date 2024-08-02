export const getColors = () => {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "black",
    "white",
    "transparent",
    "inherit",
    "current",
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const tailwindColors = {};

  colors.forEach((color) => {
    if (
      color === "black" ||
      color === "white" ||
      color === "transparent" ||
      color === "inherit" ||
      color === "current"
    ) {
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
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "black",
    "white",
    "transparent",
    "inherit",
    "current",
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const colorObjects = colors.flatMap((color) => {
    if (
      color === "black" ||
      color === "white" ||
      color === "transparent" ||
      color === "inherit" ||
      color === "current"
    ) {
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
