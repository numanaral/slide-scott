import { node } from 'prop-types';

const propTypes = {
	button: node.isRequired,
	children: node.isRequired,
};

const defaultProps = {};

export { propTypes, defaultProps };
