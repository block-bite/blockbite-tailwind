module.exports = function ({ addUtilities, theme, e }) {
  const newUtilities = {};

  for (let i = 0; i <= 30; i++) {
    newUtilities[`.${e(`b_area-x-${i}`)}`] = { "--b_area-x": `${i}` };
    newUtilities[`.${e(`b_area-y-${i}`)}`] = { "--b_area-y": `${i}` };
    newUtilities[`.${e(`b_area-w-${i}`)}`] = { "--b_area-w": `${i}` };
    newUtilities[`.${e(`b_area-h-${i}`)}`] = { "--b_area-h": `${i}` };
  }

  addUtilities(newUtilities, ["responsive"]);
};
