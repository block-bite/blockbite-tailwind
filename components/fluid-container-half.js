module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-fluid-half-r": {
      width: "var(--container-fluid-xs)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    ".b_container-fluid-half-l": {
      width: "var(--container-fluid-xs)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  };

  const maxWidth2xl = theme("screens.2xl");
  const minWidthLg = theme("screens.lg");

  if (minWidthLg) {
    container[`@media (min-width: ${minWidthLg})`] = {
      ".b_container-fluid-half-l": {
        width: "50%",
        marginLeft: `calc((100% - var(--container-fluid-xl)) / 2)`,
      },
      ".b_container-fluid-half-r": {
        width: "50%",
        marginRight: `calc((100% - var(--container-fluid-xl)) / 2 )`,
      },
    };
  }
  if (maxWidth2xl) {
    container[`@media (min-width: ${maxWidth2xl})`] = {
      ".b_container-fluid-half-l": {
        width: `calc(${maxWidth2xl} / 2)`,
        marginLeft: `calc((100% - ${maxWidth2xl}) / 2)`,
      },
      ".b_container-fluid-half-r": {
        width: `calc(${maxWidth2xl} / 2)`,
        marginRight: `calc((100% - ${maxWidth2xl}) / 2)`,
      },
    };
  }

  addComponents(container);
};
