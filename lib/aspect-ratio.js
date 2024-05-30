export const getAspectRatio = (prefix = "b_") => {
  const ratios = {};
  ratios[prefix + "portrait"] = "3 / 4";
  ratios[prefix + "landscape"] = "4 / 3";
  return ratios;
};
