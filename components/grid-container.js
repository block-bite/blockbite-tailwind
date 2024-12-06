module.exports = function ({ addComponents, theme }) {
  const maxWidth2xl = theme("screens.2xl");
  const maxWidthLg = theme("screens.lg");

  const container = {
    // Main grid container
    ".b_grid-container": {
      display: "grid",
      paddingLeft: "var(--b_padding, 1rem)",
      paddingRight: "var(--b_padding, 1rem)",
      marginLeft: "auto",
      marginRight: "auto",
      [`@media (max-width: ${maxWidthLg})`]: {
        display: "block",
      },
      [`@media (min-width: ${maxWidthLg})`]: {
        display: "grid",
        gridTemplateColumns:
          "1rem repeat(12, var(--b_col-width)) 1rem !important",
      },
      [`@media (min-width: ${maxWidth2xl})`]: {
        display: "grid",
        gridTemplateColumns:
          "1fr repeat(12, var(--b_col-width)) 1fr !important",
      },
    },
  };

  const breakpoints = {
    [maxWidthLg]: {
      "--b_col-width":
        "calc((var(--b_fluid-xs, 98vw) - (var(--b_padding, 1rem) * 2)) / 12)",
      "--b_fr-size": "1rem",
    },
    "1440px": {
      "--b_col-width":
        "calc((var(--b_fluid-xl, 95vw) - (var(--b_padding, 1rem) * 2)) / 12)",
    },
    [maxWidth2xl]: {
      "--b_col-width": `calc((${maxWidth2xl} - (var(--b_padding, 1rem) * 2)) / 12)`,
      "--b_fr-size":
        "calc((100vw - (var(--b_col-width) * 12 + var(--b_padding, 1rem) * 2)) / 2 )",
    },
  };

  // Add breakpoint-specific variables
  for (const [breakpoint, vars] of Object.entries(breakpoints)) {
    container[`@media (min-width: ${breakpoint})`] = {
      ":root": vars,
    };
  }

  addComponents(container);
};
