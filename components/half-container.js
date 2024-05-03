module.exports = function ({ addComponents, theme }) {
  const container = {
    ".b_container-half": {
      width: "100%",
    },
  };

  // Access the '2xl' screen size from Tailwind CSS configuration
  const maxWidth2xl = theme("screens.2xl");
  const maxWidthXl = theme("screens.xl");
  addComponents(container);
};
