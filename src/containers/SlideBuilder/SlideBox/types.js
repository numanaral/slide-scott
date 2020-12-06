import { string, func, number, shape, object } from 'prop-types';

const propTypes = {
	frames: object.isRequired,
	slideId: string.isRequired,
	index: number.isRequired,
	setTarget: func.isRequired,
	removeTarget: func.isRequired,
	draggableId: string.isRequired,
	updateDraggable: func.isRequired,
	addOrUpdateDraggable: func.isRequired,
	currentlyFocusedElement: shape({
		draggableId: string,
		slideId: string,
	}).isRequired,
	setCurrentlyFocusedElement: func.isRequired,
};
const defaultProps = {};

export { propTypes, defaultProps };
