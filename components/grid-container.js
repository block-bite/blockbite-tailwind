module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_grid-container": {
      display: "grid",
      gridTemplateColumns:
        "1fr repeat(12, minmax(var(--b_column), var(--b_column))) 1fr",
      gap: "var(--b_gap)",
    },
  };

  addComponents(container);
};
