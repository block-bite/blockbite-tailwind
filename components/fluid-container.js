module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-fluid": {
      maxWidth: "var(--container-fluid-xl)",
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
      ".b_container-fluid": {
        maxWidth: maxWidth2xl,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    };
  }
  if (maxWidthSm) {
    container[`@media (max-width: ${maxWidthSm})`] = {
      ".b_container-fluid": {
        maxWidth: "var(--container-fluid-xs)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    };
  }

  addComponents(container);
};
