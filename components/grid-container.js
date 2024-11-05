module.exports = function ({ addComponents, theme }) {
  const container = {
    // Main grid container
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

    // asymetrical grid container half left
    ".b_grid-container-left": {
      display: "grid",
      gridTemplateColumns: "1fr repeat(6, minmax(120px, 120px)) !important",

      "& > *": {
        gridColumnStart: "2",
        gridColumnEnd: "8",
        paddingLeft: "1rem",
      },

      // Responsive for min-width: 1440px - results 1280px;
      [`@media (min-width: 1536px)`]: {
        gridTemplateColumns: "1fr repeat(6, minmax(128px, 128px)) !important",
      },

      // Responsive for max-width: 1440px - results 1280px;
      [`@media (max-width: 1440px)`]: {
        gridTemplateColumns: "1fr repeat(6, minmax(90px, 90px)) !important",
      },
      // Responsive for max-width: 1080px : results 960px;
      [`@media (max-width: 1080px)`]: {
        gridTemplateColumns: "1fr repeat(6, minmax(80px, 80px)) !important",
      },
      // Responsive for max-width: 960px : results auto
      [`@media (max-width: 960px)`]: {
        gridTemplateColumns: "0px repeat(6, 1fr) 0px !important",
      },
    },

    // asymetrical grid container half right
    ".b_grid-container-right": {
      display: "grid",
      gridTemplateColumns: "repeat(6, minmax(120px, 120px)) 1fr !important",

      // Responsive for min-width: 1440px - results 1280px;
      [`@media (min-width: 1536px)`]: {
        gridTemplateColumns: "repeat(6, minmax(128px, 128px)) 1fr !important",
      },

      "& > *": {
        gridColumnEnd: "7",
        gridColumnStart: "1",
        paddingRight: "1rem",
      },

      // Responsive for max-width: 1440px - results 1280px;
      [`@media (max-width: 1440px)`]: {
        gridTemplateColumns: "repeat(6, minmax(90px, 90px)) 1fr !important",
      },
      // Responsive for max-width: 1080px : results 960px;
      [`@media (max-width: 1080px)`]: {
        gridTemplateColumns: "repeat(6, minmax(80px, 80px)) 1fr !important",
      },
      // Responsive for max-width: 960px : results auto
      [`@media (max-width: 960px)`]: {
        gridTemplateColumns: "0px repeat(6, 1fr) 0px !important",
      },
    },
  };

  addComponents(container);
};
