import { string, func, number } from 'prop-types';

const propTypes = {
	setTarget: func.isRequired,
	removeTarget: func.isRequired,
	id: string.isRequired,
	index: number.isRequired,
};
const defaultProps = {};

export { propTypes, defaultProps };
