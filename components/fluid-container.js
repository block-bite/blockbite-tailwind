module.exports = function ({ addComponents, theme }) {
  const container = {
    ".container-fluid": {
      maxWidth: "95vw",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  };

  const maxWidth2xl = theme("screens.2xl");
  const maxWidthSm = theme("screens.xs");

  // Add a media query for screens at '2xl' size
  if (maxWidth2xl) {
    container[`@media (min-width: ${maxWidth2xl})`] = {
      ".container-fluid": {
        maxWidth: maxWidth2xl,
      },
    };
  }
  if (maxWidthSm) {
    container[`@media (max-width: ${maxWidthSm})`] = {
      ".container-fluid": {
        maxWidth: "98vw",
      },
    };
  }

  addComponents(container);
};
