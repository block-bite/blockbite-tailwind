export const getScreens = (
  prefix = "b_",
  minxmax = { min: "768px", max: "1100px" }
) => {
  // max 320px
  const screens = {};
  screens[prefix + "xs"] = { max: minxmax.min };
  screens[prefix + "md"] = { min: minxmax.min, max: minxmax.max };
  screens[prefix + "xl"] = { min: minxmax.max };

  return screens;
};
