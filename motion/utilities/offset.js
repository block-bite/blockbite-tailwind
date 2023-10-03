module.exports = function ({ addUtilities, theme, e }, gridSpacing) {

  const spacing = theme('spacing')


  const newUtilities = {};

  Object.entries(spacing).map(([key, value]) => {
    newUtilities[`.${e(`ani-x-${key}`)}`] = { '--an-ani-x': `${value}` };
    newUtilities[`.${e(`ani-y-${key}`)}`] = { '--an-ani-y': `${value}` };
    // newUtilities[`.${e(`-ani-y-${key}`)}`] = { '--an-ani-y': `-${value}` };
  })

  addUtilities(newUtilities, ['responsive'])
};
