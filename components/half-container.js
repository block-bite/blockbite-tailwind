module.exports = function ({ addComponents, theme }) {
	const container = {
	  '.container-half': {
		width: '100%'
	  },
	};
  
	// Access the '2xl' screen size from Tailwind CSS configuration
	const maxWidth2xl = theme('screens.2xl');
	const maxWidthXl = theme('screens.xl');

	console.log(maxWidth2xl, maxWidthXl);
  
	addComponents(container);
  };
  