module.exports = function ({ addComponents, theme }) {
  const maxWidthLg = theme("screens.lg");
  const maxWidth2xl = theme("screens.2xl");

  const container = {
    // Main grid container
    ".b_grid-container": {
      display: "block",
      paddingLeft: "var(--b_padding, 4vw)",
      paddingRight: "var(--b_padding, 4vw)",
      [`@media (min-width: ${maxWidthLg})`]: {
        display: "grid",
        gridTemplateColumns: "1fr repeat(12, var(--b_col-width)) 1fr!important",
        paddingLeft: "0px",
        paddingRight: "0px",
      },
    },
  };

  const breakpoints = {
    [maxWidthLg]: {
      "--b_col-width": "calc((100% - ((var(--b_padding, 4vw) ) * 2)) / 12)",
      "--b_fr-size": "4vw",
    },
    [maxWidth2xl]: {
      "--b_col-width": `calc((${maxWidth2xl} - (var(--b_padding, 2rem) * 2)) / 12)`,
      "--b_padding": "0rem",
      "--b_fr-size": `calc(100% - ${maxWidth2xl} / 2)`,
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
