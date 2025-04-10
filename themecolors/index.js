const plugin = require("tailwindcss/plugin");

function flattenColorPalette(colors, prefix = "") {
  return Object.entries(colors).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}-${key}` : key;
    if (typeof value === "string") {
      return [[name, value]];
    } else {
      return flattenColorPalette(value, name);
    }
  });
}

module.exports = plugin(({ addUtilities, theme, e }) => {
  const colors = theme("colors");

  const flatColors = flattenColorPalette(colors);

  const themedVarMap = {
    bg: "--theme-bg",
    text: "--theme-text",
    border: "--theme-border",
    fill: "--theme-fill",
    stroke: "--theme-stroke",
    ring: "--theme-ring",
  };

  const themedUtilities = flatColors.flatMap(([name, value]) => {
    return Object.entries(themedVarMap).map(([type, cssVar]) => {
      return {
        [`.b_theme-${type}-${e(name)}`]: {
          [cssVar]: value,
        },
      };
    });
  });

  const applyThemeClasses = {
    ".bg-b_theme": {
      "background-color": "var(--theme-bg)",
    },
    ".text-b_theme": {
      color: "var(--theme-text)",
    },
    ".border-b_theme": {
      "border-color": "var(--theme-border)",
    },
    ".fill-b_theme": {
      fill: "var(--theme-fill)",
    },
    ".stroke-b_theme": {
      stroke: "var(--theme-stroke)",
    },
    ".ring-b_theme": {
      "--tw-ring-color": "var(--theme-ring)",
    },
  };

  addUtilities(themedUtilities, {
    variants: ["responsive", "hover", "focus"],
  });

  addUtilities(applyThemeClasses, {
    variants: ["responsive", "hover", "focus"],
  });
});
