module.exports = function ({ addUtilities, theme, e }, gridSpacing) {
  const spacing = theme("spacing");
  const newUtilities = {};

  Object.entries(spacing).map(([key, value]) => {
    newUtilities[`.${e(`b_ani-x-${key}`)}`] = { "--an-ani-x": `${value}` };
    newUtilities[`.${e(`b_ani-y-${key}`)}`] = { "--an-ani-y": `${value}` };
  });

  addUtilities(newUtilities, ["responsive"]);
};
