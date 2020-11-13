const { string, oneOf } = require('prop-types');

const propTypes = {
	html: string.isRequired,
	component: oneOf(['pre', 'div']),
	className: string,
	rel: string,
};

const defaultProps = {
	className: '',
	component: 'div',
	rel: 'json',
};

export { propTypes, defaultProps };
