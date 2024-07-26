module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-fluid-1/2-start": {
      maxWidth: "var(--container-fluid-xl)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    ".b_container-fluid-1/2-end": {
      maxWidth: "var(--container-fluid-xl)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  };

  const maxWidth2xl = theme("screens.2xl");
  const maxWidthXl = theme("screens.xl");

  if (maxWidthXl) {
    container[`@media (min-width: ${maxWidthXl})`] = {
      ".b_container-fluid-1/2-start": {
        maxWidth: `calc(${maxWidthXl} / 2)`,
        marginLeft: `calc((100vw - ${maxWidthXl} - 1rem) / 2)`,
      },
      ".b_container-fluid-1/2-end": {
        maxWidth: `calc(${maxWidthXl} / 2)`,
        marginRight: `calc((100vw - ${maxWidthXl} - 1rem) / 2 )`,
      },
    };
  }
  if (maxWidth2xl) {
    container[`@media (min-width: ${maxWidth2xl})`] = {
      ".b_container-fluid-1/2-start": {
        maxWidth: `calc(${maxWidth2xl} / 2)`,
        marginLeft: `calc((100vw - ${maxWidth2xl} - 1rem) / 2)`,
      },
      ".b_container-fluid-1/2-end": {
        maxWidth: `calc(${maxWidth2xl} / 2)`,
        marginRight: `calc((100vw - ${maxWidth2xl} - 1rem) / 2)`,
      },
    };
  }

  addComponents(container);
};
