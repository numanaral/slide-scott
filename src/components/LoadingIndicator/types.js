import { oneOf } from 'prop-types';

const propTypes = {
	size: oneOf(['small', 'medium', 'large']),
};
const defaultProps = {
	size: 'small',
};

export { propTypes, defaultProps };
