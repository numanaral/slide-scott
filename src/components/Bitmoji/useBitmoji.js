import { useState } from 'react';

const DEFAULT_BITMOJI_SETTINGS = {
	topType: 'WinterHat3',
	accessoriesType: 'Prescription02',
	hairColor: 'BrownDark',
	facialHairType: 'Blank',
	clotheType: 'Hoodie',
	clotheColor: 'PastelBlue',
	eyeType: 'Happy',
	eyebrowType: 'Default',
	mouthType: 'Smile',
	avatarStyle: 'Transparent',
	skinColor: 'Light',
};

/**
 * @example
 * ```js
 * const [bitmoji, setBitmoji] = useBitmoji();
 * ```
 * @param {Object} props Custom props
 */
const useBitmoji = (props = {}) => {
	return useState({
		...DEFAULT_BITMOJI_SETTINGS,
		...props,
	});
};

export { DEFAULT_BITMOJI_SETTINGS };
export default useBitmoji;
