module.exports = function ({ addComponents, theme }) {
  const container = {
    // Main grid container
    ".b_grid-container": {
      // Default to flexbox or block for screens below 960px
        display: "block",
        maxWidth: "var(--b_container-fluid-xl)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--b_container-padding)",
        paddingRight: "var(--b_container-padding)",

      // Use grid layout only above 960px
      [`@media (min-width: 960px)`]: {
        display: "grid",
        maxWidth: "100%",
        gridTemplateColumns:
          "1fr repeat(12, calc(120px - (var(--b_container-padding, 0px) / 12))) 1fr !important",
      },

      [`@media (min-width: 1536px)`]: {
        gridTemplateColumns:
          "1fr repeat(12, calc(128px - (var(--b_container-padding, 0px) / 12))) 1fr !important",
      },
      [`@media (max-width: 1440px)`]: {
        gridTemplateColumns:
          "1fr repeat(12, calc(90px - (var(--b_container-padding, 0px) / 12))) 1fr !important",
      },
      [`@media (max-width: 1080px)`]: {
        gridTemplateColumns:
          "1fr repeat(12, calc(80px - (var(--b_container-padding, 0px) / 12))) 1fr !important",
      },
    },

    // Asymmetrical grid container half left
    ".b_grid-container-left": {
      display: "block",
      maxWidth: "var(--b_container-fluid-xl)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "var(--b_container-padding)",
      paddingRight: "var(--b_container-padding)",


      [`@media (min-width: 960px)`]: {
        display: "grid",
        maxWidth: "100%",
        gridTemplateColumns:
          "1fr repeat(6, calc(120px - (var(--b_container-padding, 0px) / 6))) !important",
      },

      [`@media (min-width: 1536px)`]: {
        gridTemplateColumns:
          "1fr repeat(6, calc(128px - (var(--b_container-padding, 0px) / 6))) !important",
      },

      [`@media (max-width: 1440px)`]: {
        gridTemplateColumns:
          "1fr repeat(6, calc(90px - (var(--b_container-padding, 0px) / 6))) !important",
      },
      [`@media (max-width: 1080px)`]: {
        gridTemplateColumns:
          "1fr repeat(6, calc(80px - (var(--b_container-padding, 0px) / 6))) !important",
      },

      // Child styles only above 960px
      [`@media (min-width: 960px)`]: {
        "& > *": {
          gridColumnStart: "2",
          gridColumnEnd: "8",
        },
      },
    },

    // Asymmetrical grid container half right
    ".b_grid-container-right": {
      display: "block",
      maxWidth: "var(--b_container-fluid-xl)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "var(--b_container-padding)",
      paddingRight: "var(--b_container-padding)",

      [`@media (min-width: 960px)`]: {
        display: "grid",
        maxWidth: "100%",
        gridTemplateColumns:
          "repeat(6, calc(120px - (var(--b_container-padding, 0px) / 6))) 1fr !important",
      },

      [`@media (min-width: 1536px)`]: {
        gridTemplateColumns:
          "repeat(6, calc(128px - (var(--b_container-padding, 0px) / 6))) 1fr !important",
      },

      [`@media (max-width: 1440px)`]: {
        gridTemplateColumns:
          "repeat(6, calc(90px - (var(--b_container-padding, 0px) / 6))) 1fr !important",
      },
      [`@media (max-width: 1080px)`]: {
        gridTemplateColumns:
          "repeat(6, calc(80px - (var(--b_container-padding, 0px) / 6))) 1fr !important",
      },

      // Child styles only above 960px
      [`@media (min-width: 960px)`]: {
        "& > *": {
          gridColumnEnd: "7",
          gridColumnStart: "1",
        },
      },
    },
  };

  addComponents(container);
};
