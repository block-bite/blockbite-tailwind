const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const utilities = {};

  for (let i = 10; i <= 100; i += 10) {
    utilities[`.b_w-screen-${i}`] = {
      width: `${i}vw`,
    };

    utilities[`.b_h-screen-${i}`] = {
      height: `${i}vh`,
    };

    utilities[`.b_min-h-screen-${i}`] = {
      minHeight: `${i}vh`,
    };

    utilities[`.b_max-h-screen-${i}`] = {
      maxHeight: `${i}vh`,
    };

    utilities[`.b_min-w-screen-${i}`] = {
      minWidth: `${i}vw`,
    };

    utilities[`.b_max-w-screen-${i}`] = {
      maxWidth: `${i}vw`,
    };
  }

  addUtilities(utilities);
});
