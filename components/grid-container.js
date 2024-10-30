module.exports = function ({ addComponents, theme }) {
  const container = {
    // Responsive for min-width: 1440px - results 1440px;
    ".b_grid-container": {
      display: "grid",
      gridTemplateColumns:
        "1fr repeat(12, minmax(120px, 120px)) 1fr !important",

      // Responsive for min-width: 1440px - results 1280px;
      [`@media (min-width: 1536px)`]: {
        gridTemplateColumns:
          "1fr repeat(12, minmax(128px, 128px)) 1fr !important",
      },

      // Responsive for max-width: 1440px - results 1280px;
      [`@media (max-width: 1440px)`]: {
        gridTemplateColumns:
          "1fr repeat(12, minmax(90px, 90px)) 1fr !important",
      },
      // Responsive for max-width: 1080px : results 960px;
      [`@media (max-width: 1080px)`]: {
        gridTemplateColumns:
          "1fr repeat(12, minmax(80px, 80px)) 1fr !important",
      },
      // Responsive for max-width: 960px : results auto
      [`@media (max-width: 960px)`]: {
        gridTemplateColumns: "0px repeat(12, 1fr) 0px !important",
      },
    },
  };

  addComponents(container);
};
