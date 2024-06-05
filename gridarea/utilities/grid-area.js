module.exports = function ({ addComponents, theme }) {
  const gridArea = [
    {
      ".b_area": {
        gridArea:
          "var(--b_area-y) / var(--b_area-x) / calc(var(--b_area-y) + var(--b_area-h)) / calc(var(--b_area-x) + var(--b_area-w))",
      },
      ".b_grid-area-32": {
        display: "grid",
        gridTemplateColumns: "repeat(32, 1fr)",
        gridTemplateRows: "repeat(32, 1fr)",
      },
      ".b_grid-area-64": {
        display: "grid",
        gridTemplateColumns: "repeat(64, 1fr)",
        gridTemplateRows: "repeat(64, 1fr)",
      },
    },
  ];
  addComponents(gridArea);
};
