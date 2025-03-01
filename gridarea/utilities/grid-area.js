const plugin = require("tailwindcss/plugin");

module.exports = function ({ addComponents, matchUtilities, theme, config }) {
  const important = config("important");
  const prefix = typeof important === "string" ? important : "";

  const gridArea = [
    {
      [`${prefix} .b_area`]: {
        gridArea:
          "var(--b_area-y) / var(--b_area-x) / calc(var(--b_area-y) + var(--b_area-h)) / calc(var(--b_area-x) + var(--b_area-w))",
      },
      [`${prefix} .b_grid-area`]: {
        display: "grid",
      },
      [`${prefix} .b_grid-area-16`]: {
        gridTemplateColumns: "repeat(16, 1fr)",
        gridTemplateRows: "repeat(16, 1fr)",
      },
      [`${prefix} .b_grid-area-32`]: {
        gridTemplateColumns: "repeat(32, 1fr)",
        gridTemplateRows: "repeat(32, 1fr)",
      },
      [`${prefix} .b_grid-area-64`]: {
        gridTemplateColumns: "repeat(64, 1fr)",
        gridTemplateRows: "repeat(64, 1fr)",
      },
      [`${prefix} .b_grid-area-96`]: {
        gridTemplateColumns: "repeat(96, 1fr)",
        gridTemplateRows: "repeat(96, 1fr)",
      },
    },
  ];

  addComponents(gridArea);

  // Add matchUtilities to support `b_area-1/1/4/4`
  matchUtilities(
    {
      b_area: (value) => {
        const [startRow, startCol, endRow, endCol] = value
          .split("/")
          .map(Number);
        return {
          gridArea: `${startRow} / ${startCol} / ${endRow} / ${endCol}`,
        };
      },
    },
    { values: {} }
  );
};
