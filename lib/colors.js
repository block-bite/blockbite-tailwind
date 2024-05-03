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
		gray: 'var(--wp--preset--color--gray)',
		transparant: 'var(--wp--preset--color--transparent)',
	}
};

export const getColorObject = () => {
	return [
		{ label: 'Current', id: 'b_current' },
		{ label: 'Primary', id: 'b_primary' },
		{ label: 'Primary Light', id: 'b_primary-light' },
		{ label: 'Primary Dark', id: 'b_primary-dark' },
		{ label: 'Secondary', id: 'secondary' },
		{ label: 'Secondary Light', id: 'b_secondary-light' },
		{ label: 'Secondary Dark', id: 'b_secondary-dark' },
		{ label: 'Tertiary', id: 'b_tertiary' },
		{ label: 'Tertiary Light', id: 'b_tertiary-light' },
		{ label: 'Tertiary Dark', id: 'b_tertiary-dark' },
		{ label: 'Gray', id: 'b_gray' },
		{ label: 'White', id: 'b_white' },
		{ label: 'Black', id: 'bb_lack' },
		{ label: 'Transparent', id: 'b_transparent' },
	]
}

export default { getColors, getColorObject }