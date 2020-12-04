import { string, func, number, shape } from 'prop-types';

const propTypes = {
	setTarget: func.isRequired,
	removeTarget: func.isRequired,
	handleDraggableUpdate: func.isRequired,
	slideId: string.isRequired,
	index: number.isRequired,
	currentlyFocusedElement: shape({
		draggableId: string,
		slideId: string,
	}).isRequired,
	setCurrentlyFocusedElement: func.isRequired,
};
const defaultProps = {};

export { propTypes, defaultProps };
