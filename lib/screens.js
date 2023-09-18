export const getScreens = () => {
	return {
		xs: { max: "var(--screen-xs)" },
		md: { min: "var(--screen-xs)", max: "var(--screen-md)" },
		xl: { min: "var(--screen-xl)" }
	}
};
