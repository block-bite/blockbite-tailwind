/*
--b_container-fluid-xs: 98vw;
--b_container-fluid-xl: 95vw;
--b_padding: 1rem;
*/
module.exports = function ({ addComponents, theme, config }) {
  const important = config("important");

  const container = {
    [`.b_container-fluid`]: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "var(--b_padding, 4vw)",
      paddingRight: "var(--b_padding, 4vw)",
    },
  };

  const maxWidth2xl = theme("screens.2xl");
  // Add a media query for screens at '2xl' size
  if (maxWidth2xl) {
    container[`@media (min-width: ${maxWidth2xl})`] = {
      [` .b_container-fluid`]: {
        maxWidth: maxWidth2xl,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--b_padding, 1rem)",
        paddingRight: "var(--b_padding, 1rem)",
      },
    };
  }

  addComponents(container);
};
