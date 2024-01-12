module.exports = function ({ addComponents, theme }) {
  const anchorTopCenter = {
    ".anchor-top-center": {
      position: "absolute%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const anchorTopLeft = {
    ".anchor-top-left": {
      position: "absolute",
      top: "0",
      left: "0",
    },
  };

  const anchorTopRight = {
    ".anchor-top-right": {
      position: "absolute",
      top: "0",
      right: "0",
    },
  };

  const anchorBottomCenter = {
    ".anchor-bottom-center": {
      position: "absolute",
      bottom: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const anchorBottomLeft = {
    ".anchor-bottom-left": {
      position: "absolute",
      bottom: "0",
      left: "0",
    },
  };

  const anchorBottomRight = {
    ".anchor-bottom-right": {
      position: "absolute",
      bottom: "0",
      right: "0",
    },
  };

  const anchorCenterLeft = {
    ".anchor-center-left": {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translate(0, -50%)",
    },
  };

  const anchorCenterRight = {
    ".anchor-center-right": {
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translate(0, -50%)",
    },
  };

  const anchorCenterCenter = {
    ".anchor-center-center": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const anchorCenterTop = {
    ".anchor-center-top": {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%, 0)",
    },
  };

  const anchorCenterBottom = {
    ".anchor-center-bottom": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translate(-50%, 0)",
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
