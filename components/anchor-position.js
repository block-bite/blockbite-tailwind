module.exports = function ({ addComponents, theme }) {
  const anchorTopCenter = {
    ".b_anchor-top-center": {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const anchorTopLeft = {
    ".b_anchor-top-left": {
      position: "absolute",
      top: "0",
      left: "0",
    },
  };

  const anchorTopRight = {
    ".b_anchor-top-right": {
      position: "absolute",
      top: "0",
      right: "0",
    },
  };

  const anchorBottomCenter = {
    ".b_anchor-bottom-center": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translate(-50%, 50%)",
    },
  };

  const anchorBottomLeft = {
    ".b_anchor-bottom-left": {
      position: "absolute",
      bottom: "0",
      left: "0",
    },
  };

  const anchorBottomRight = {
    ".b_anchor-bottom-right": {
      position: "absolute",
      bottom: "0",
      right: "0",
    },
  };

  const anchorCenterLeft = {
    ".b_anchor-center-left": {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translate(-50%, -50%)",
    },
  };

  const anchorCenterRight = {
    ".b_anchor-center-right": {
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translate(50%, -50%)",
    },
  };

  const anchorCenterCenter = {
    ".b_anchor-center-center": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const anchorCenterTop = {
    ".b_anchor-center-top": {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%, 0%)",
    },
  };

  const anchorCenterBottom = {
    ".b_anchor-center-bottom": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translate(-50%, 0%)",
    },
  };

  addComponents([
    anchorTopCenter,
    anchorTopLeft,
    anchorTopRight,
    anchorBottomCenter,
    anchorBottomLeft,
    anchorBottomRight,
    anchorCenterLeft,
    anchorCenterRight,
    anchorCenterCenter,
    anchorCenterTop,
    anchorCenterBottom,
  ]);
};
