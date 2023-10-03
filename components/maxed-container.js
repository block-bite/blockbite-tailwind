module.exports = function ({ addComponents, theme }) {
	const container = {
	  '.maxed-container': {
		width: '99vw',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: '1rem',
		paddingRight: '1rem',
	  },
	};
  
	// Access the '2xl' screen size from Tailwind CSS configuration
	const maxWidth2xl = theme('screens.2xl');
  
	// Add a media query for screens at '2xl' size
	if (maxWidth2xl) {
	  container[`@media (min-width: ${maxWidth2xl})`] = {
		'.maxed-container': {
		  maxWidth: maxWidth2xl,
		},
	  };
	}
  
	addComponents(container);
  };
  