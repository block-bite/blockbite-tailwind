module.exports = function ({ addComponents }) {
  // allows infinite loop for swiper continues
  const b_newsticker = {
    ".b_newsticker": {
      "& > .swiper-free-mode > .swiper-wrapper": {
        "-webkit-transition-timing-function": "linear !important",
        "-o-transition-timing-function": "linear !important",
        "transition-timing-function": "linear !important",
      },
    },
  };
  addComponents(b_newsticker);
};
