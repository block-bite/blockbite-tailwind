const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const utilities = {};

  for (let i = 10; i <= 100; i += 10) {
    utilities[`.w-b_screen-${i}`] = {
      width: `${i}vw`,
    };

    utilities[`.h-b_screen-${i}`] = {
      height: `${i}vh`,
    };

    utilities[`.min-h-b_screen-${i}`] = {
      minHeight: `${i}vh`,
    };

    utilities[`.max-h-b_screen-${i}`] = {
      maxHeight: `${i}vh`,
    };

    utilities[`.min-w-b_screen-${i}`] = {
      minWidth: `${i}vw`,
    };

    utilities[`.max-w-b_screen-${i}`] = {
      maxWidth: `${i}vw`,
    };
  }

  addUtilities(utilities);
});
