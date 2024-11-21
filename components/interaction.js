module.exports = function ({ addComponents }) {
  const b_tileslide_in = {
    ".b_tileslide_in": {
      position: "absolute",
      top: 0,
      left: "-100%",
      right: 0,
      bottom: 0,
      zIndex: 10,
      overflow: "hidden",
      transition: "transform 0.5s",
      transform: "translateX(0)", // Default position
    },
    ".b_active .b_tileslide_in": {
      transform: "translateX(100%)",
    },
  };

  const b_tilefade_in = {
    ".b_tilefade_in": {
      opacity: 0,
      transition: "opacity 0.5s",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
      overflow: "hidden",
    },
    ".b_active .b_tilefade_in": {
      opacity: 1,
    },
  };

  addComponents([b_tileslide_in, b_tilefade_in]);
};
