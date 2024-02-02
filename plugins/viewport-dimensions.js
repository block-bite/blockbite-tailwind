const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const utilities = {};

  for (let i = 10; i <= 100; i += 10) {
    utilities[`.w-screen-${i}`] = {
      width: `${i}vw`,
    };

    utilities[`.h-screen-${i}`] = {
      height: `${i}vh`,
    };

    utilities[`.min-h-screen-${i}`] = {
      minHeight: `${i}vh`,
    };

    utilities[`.max-h-screen-${i}`] = {
      maxHeight: `${i}vh`,
    };
  }

  addUtilities(utilities);
});
