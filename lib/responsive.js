export const getScreens = () => {
	// max 320px
	return {
		xs: { max: "767px" },
		md: { min: "768px", max: "1139px" },
		xl: { min: "1140px" }
	}
};
