module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-fluid": {
      maxWidth: "var(--b_container-fluid-xl)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "var(--b_container-padding",
      paddingRight: "var(--b_container-padding)",
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
        paddingLeft: "var(--b_container-padding)",
        paddingRight: "var(--b_container-padding)",
      },
    };
  }
  if (maxWidthSm) {
    container[`@media (max-width: ${maxWidthSm})`] = {
      ".b_container-fluid": {
        maxWidth: "var(--b_container-fluid-xs)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--b_container-padding)",
        paddingRight: "var(--b_container-padding)",
      },
    };
  }

  addComponents(container);
};
