module.exports = function ({ addComponents, theme }) {
  const container = {
    // Shared base styles for smaller screens
    ".b_grid-container, .b_grid-container-left, .b_grid-container-right": {
      [`@media (max-width: 959px)`]: {
        display: "block",
        maxWidth: "var(--b_container-fluid-xs, 98vw)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--b_container-padding, 1rem)",
        paddingRight: "var(--b_container-padding, 1rem)",
      },
    },

    // Main grid container
    ".b_grid-container": {
      [`@media (min-width: 960px)`]: {
        display: "grid",
        gridTemplateColumns:
          "1fr repeat(12, var(--b_column-width)) 1fr !important",
      },
    },

    // Asymmetrical grid container half left
    ".b_grid-container-left": {
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
  const breakpoints = {
    "960px": {
      "--b_column-width":
        "calc((var(--b_container-fluid-xl, 95vw) - (var(--b_container-padding, 1rem) * 2)) / 12)",
    },
    "1440px": {
      "--b_column-width":
        "calc((120px * 12 - (var(--b_container-padding, 1rem) * 2)) / 12)", // Adjusted to properly account for padding.
    },
    "1536px": {
      "--b_column-width":
        "calc((128px * 12 - (var(--b_container-padding, 1rem) * 2)) / 12)", // Consistent calculation for padding subtraction.
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
