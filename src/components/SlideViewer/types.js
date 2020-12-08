import { string, arrayOf, object, bool } from 'prop-types';

const propTypes = {
	title: string.isRequired,
	slides: object.isRequired,
	presenterPosition: arrayOf(string),
	showButtons: bool,
	hasSubmit: bool,
};

const defaultProps = {
	presenterPosition: null,
	showButtons: true,
	hasSubmit: false,
};

export { propTypes, defaultProps };
