module.exports = function ({ addComponents, theme, config }) {
  const maxWidthLg = theme("screens.lg");
  const maxWidth2xl = theme("screens.2xl");

  const important = config("important");
  const cssVars = config("cssVars") | false;
  const prefix = typeof important === "string" ? important : "";

  const container = {
    [`${prefix} .b_grid-container`]: {
      display: "grid",
      gridTemplateColumns: "1fr repeat(12, var(--b_col-width)) 1fr!important",
    },
  };
  // skip adding the breakpoint-specific variables if cssVars is false
  if (cssVars) {
    const breakpoints = {
      [maxWidthLg]: {
        "--b_col-width": "calc((100% - ((var(--b_padding, 4vw) ) * 2)) / 12)",
        "--b_fr-size": "4vw",
      },
      [maxWidth2xl]: {
        "--b_col-width": `calc((${maxWidth2xl} - (var(--b_padding, 1rem) * 2)) / 12)`,
        "--b_padding": "var(--b_padding, 1rem)",
        "--b_fr-size": `calc(100% - ${maxWidth2xl} / 2)`,
      },
    };

    // Add breakpoint-specific variables
    for (const [breakpoint, vars] of Object.entries(breakpoints)) {
      container[`@media (min-width: ${breakpoint})`] = {
        ":root": vars,
      };
    }
  }
  addComponents(container);
};
