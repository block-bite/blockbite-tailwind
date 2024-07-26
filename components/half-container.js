module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-half-left": {
      width: "100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    ".b_container-half-right": {
      width: "100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  };

  const maxWidth2xl = theme("screens.2xl");
  const maxWidthXl = theme("screens.xl");

  if (maxWidthXl) {
    container[`@media (min-width: ${maxWidthXl})`] = {
      ".b_container-half-left": {
        maxWidth: `calc(${maxWidthXl} / 2)`,
        marginLeft: `calc((100vw - ${maxWidthXl} - 3rem) / 2)`,
      },
      ".b_container-half-right": {
        maxWidth: `calc(${maxWidthXl} / 2)`,
        marginRight: `calc((100vw - ${maxWidthXl}) - 3rem / 2 )`,
      },
    };
  }
  if (maxWidth2xl) {
    container[`@media (min-width: ${maxWidth2xl})`] = {
      ".b_container-half-left": {
        maxWidth: `calc(${maxWidth2xl} / 2)`,
        marginLeft: `calc((100vw - ${maxWidth2xl}) - 3rem / 2)`,
      },
      ".b_container-half-right": {
        maxWidth: `calc(${maxWidth2xl} / 2)`,
        marginRight: `calc((100vw - ${maxWidth2xl}) - 3rem / 2)`,
      },
    };
  }

  addComponents(container);
};
