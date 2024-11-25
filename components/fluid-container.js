/*
--b_container-fluid-xs: 98vw;
--b_container-fluid-xl: 95vw;
--b_container-padding: 1rem;
*/
module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-fluid": {
      maxWidth: "var(--b_container-fluid-xl, 95vw)",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "var(--b_container-padding, 1rem)",
      paddingRight: "var(--b_container-padding, 1rem)",
    },
  };

  const maxWidth2xl = theme("screens.2xl");
  const maxWidthSm = theme("screens.xs")
    ? theme("screens.xs")
    : theme("screens.sm");

  console.log("maxWidth2xl", maxWidth2xl);
  console.log("maxWidthSm", maxWidthSm);

  // Add a media query for screens at '2xl' size
  if (maxWidth2xl) {
    container[`@media (min-width: ${maxWidth2xl})`] = {
      ".b_container-fluid": {
        maxWidth: maxWidth2xl,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--b_container-padding, 1rem)",
        paddingRight: "var(--b_container-padding, 1rem)",
      },
    };
  }
  if (maxWidthSm) {
    container[`@media (max-width: ${maxWidthSm})`] = {
      ".b_container-fluid": {
        maxWidth: "var(--b_container-fluid-xs, 98vw)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--b_container-padding, 1rem)",
        paddingRight: "var(--b_container-padding, 1rem)",
      },
    };
  }

  addComponents(container);
};
