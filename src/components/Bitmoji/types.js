import { func } from 'prop-types';

const propTypes = {
	// value: object.isRequired,
	onChange: func,
};

const defaultProps = {
	onChange: null,
};

export { propTypes, defaultProps };
