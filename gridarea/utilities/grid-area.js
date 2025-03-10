const plugin = require("tailwindcss/plugin");

module.exports = function ({ addComponents, matchUtilities, theme, config }) {
  const important = config("important");
  const prefix = typeof important === "string" ? important : "";
  // Predefined grid-area utilities
  addComponents({
    [`${prefix} .b_area`]: {
      gridArea:
        "var(--b_area-y) / var(--b_area-x) / calc(var(--b_area-y) + var(--b_area-h)) / calc(var(--b_area-x) + var(--b_area-w))",
    },
    ".b_grid-area": {
      display: "grid",
    },
    ".b_grid-area-16": {
      gridTemplateColumns: "repeat(16, 1fr)",
      gridTemplateRows: "repeat(16, 1fr)",
    },
    ".b_grid-area-32": {
      gridTemplateColumns: "repeat(32, 1fr)",
      gridTemplateRows: "repeat(32, 1fr)",
    },
    ".b_grid-area-64": {
      gridTemplateColumns: "repeat(64, 1fr)",
      gridTemplateRows: "repeat(64, 1fr)",
    },
    ".b_grid-area-96": {
      gridTemplateColumns: "repeat(96, 1fr)",
      gridTemplateRows: "repeat(96, 1fr)",
    },
  });
  matchUtilities(
    {
      b_area: (value) => {
        console.log("value", value);
        // Remove the square brackets and split the value by "/"
        const parts = value.split("-"); // slice to remove the square brackets
        if (parts.length === 4) {
          return {
            "grid-area": `${parts[0]} / ${parts[1]} / ${parts[2]} / ${parts[3]}`,
          };
        }
      },
    },
    { values: {} } // Allow arbitrary values like b_area[1/4/4/3]
  );
};
