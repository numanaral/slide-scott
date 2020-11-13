import { func } from 'prop-types';

const propTypes = {
	onDrop: func.isRequired,
	allowDrop: func.isRequired,
	onDropZoneClick: func.isRequired,
};
const defaultProps = {};

export { propTypes, defaultProps };
