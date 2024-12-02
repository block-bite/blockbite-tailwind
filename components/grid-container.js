module.exports = function ({ addComponents, theme }) {
  const maxWidth2xl = theme("screens.2xl");
  const maxWidthSm = theme("screens.xs")
    ? theme("screens.xs")
    : theme("screens.sm");

  const container = {
    // Main grid container
    ".b_grid-container": {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "var(--b_container-padding, 1rem)",
      paddingRight: "var(--b_container-padding, 1rem)",
      [`@media (min-width: 960px)`]: {
        display: "grid",
        gridTemplateColumns:
          "1rem repeat(12, var(--b_column-width)) 1rem !important",
      },
      [`@media (min-width: ${maxWidth2xl})`]: {
        display: "grid",
        gridTemplateColumns:
          "1fr repeat(12, var(--b_column-width)) 1fr !important",
      },
    },

    // Asymmetrical grid container half left
    ".b_grid-container-left": {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      [`@media (min-width: 960px)`]: {
        display: "grid",
        gridTemplateColumns: "1fr repeat(6, var(--b_column-width)) !important",
        "& > *": {
          gridColumnStart: "2",
          gridColumnEnd: "8",
        },
      },
    },

    // Asymmetrical grid container half right
    ".b_grid-container-right": {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      [`@media (min-width: 960px)`]: {
        display: "grid",
        gridTemplateColumns: "repeat(6, var(--b_column-width)) 1fr !important",
        "& > *": {
          gridColumnEnd: "7",
          gridColumnStart: "1",
        },
      },
    },
  };

  console.log("maxWidth2xl", maxWidth2xl);
  const breakpoints = {
    "960px": {
      "--b_column-width":
        "calc((var(--b_container-fluid-xl, 98vw) - (var(--b_container-padding, 1rem) * 2)) / 12)",
    },
    "1440px": {
      "--b_column-width":
        "calc((var(--b_container-fluid-xl, 98vw) - 2rem) / 12)",
    },
    "1536px": {
      "--b_column-width": `calc(((${maxWidth2xl}) - 2rem) / 12))`,
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
