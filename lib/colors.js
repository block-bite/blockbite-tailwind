export const getColors = () => {
	return {
		primary: 'var(--wp--preset--color--primary)',
		'primary-light': 'var(--wp--preset--color--primary-light)',
		'primary-dark': 'var(--wp--preset--color--primary-dark)',
		secondary: 'var(--wp--preset--color--primary)',
		'secondary-light': 'var(--wp--preset--color--primary-light)',
		'secondary-dark': 'var(--wp--preset--color--primary-dark)',
		tertiary: 'var(--wp--preset--color--primary)',
		'tertiary-light': 'var(--wp--preset--color--primary-light)',
		'tertiary-dark': 'var(--wp--preset--color--primary-dark)',
		black: 'var(--wp--preset--color--black)',
		white: 'var(--wp--preset--color--white)',
	}
};

export const getColorObject = (color) => {
	return [
		{ label: 'Current', id: 'current' },
		{ label: 'Primary', id: 'primary' },
		{ label: 'Primary Light', id: 'primary-light' },
		{ label: 'Primary Dark', id: 'primary-dark' },
		{ label: 'Secondary', id: 'secondary' },
		{ label: 'Secondary Light', id: 'secondary-light' },
		{ label: 'Secondary Dark', id: 'secondary-dark' },
		{ label: 'Tertiary', id: 'tertiary' },
		{ label: 'Tertiary Light', id: 'tertiary-light' },
		{ label: 'Tertiary Dark', id: 'tertiary-dark' },
		{ label: 'White', id: 'white' },
		{ label: 'Black', id: 'black' },
		{ label: 'Transparent', id: 'transparent' },
	]
}

export default { getColors, getColorObject }