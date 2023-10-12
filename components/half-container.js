module.exports = function ({ addComponents, theme }) {
	const container = {
	  '.container-half': {
		maxWidth: '99vw',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: '1rem',
		paddingRight: '1rem',
	  },
	};
  
	// Access the '2xl' screen size from Tailwind CSS configuration
	const maxWidth2xl = theme('screens.2xl');
	const maxWidthXl = theme('screens.xl');
  
	// Add a media query for screens at '2xl' size
	if (maxWidth2xl) {
	  container[`@media (min-width: ${maxWidth2xl})`] = {
		'.container-half': {
		  maxWidth: calc(maxWidth2xl / 2),
		},
	  };
	}
	if (maxWidthXl) {
		container[`@media (min-width: ${maxWidthXl})`] = {
		  '.container-half': {
			maxWidth: calc(maxWidthXl / 2),
		  },
		};
	  }
  
	addComponents(container);
  };
  