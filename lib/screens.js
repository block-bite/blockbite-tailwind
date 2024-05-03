export const getScreens = () => {
	// max 320px
	return {
		b_xs: { max: "767px" },
		b_md: { min: "768px", max: "1139px" },
		b_xl: { min: "1140px" }
	}
};
