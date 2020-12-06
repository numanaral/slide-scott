/**
 *
 * @param {cloneNewElement} cloneNewElement
 * @param {cloneNewElement} setTarget
 */
const useEvents = setTarget => {
	const getContainerId = element => element?.id.replace('container-', '');

	const onDragStart = e => {
		e.dataTransfer.setData(
			'draggableType',
			e.target.getAttribute('draggable-type')
		);
		e.dataTransfer.setData('size', e.target.getAttribute('tool-size'));
		// eslint-disable-next-line no-param-reassign
		e.dataTransfer.effectAllowed = 'copy';
	};

	const onDrop = e => {
		e.preventDefault();

		const slideId = getContainerId(e.target);
		const size = e.dataTransfer.getData('size');
		const container = e.target;

		const rect = container.getBoundingClientRect();
		const left = e.clientX - rect.left - size; // x position within the element.
		const top = e.clientY - rect.top - size; // y position within the element.
		const width = size * 2;
		const height = size * 2;

		const newElementProps = {
			draggableType: e.dataTransfer.getData('draggableType'),
			translateXY: [0, 0],
			widthHeight: [width, height],
			topLeft: [top, left],
			rotate: 0,
			transformOrigin: '50% 50%',
		};

		setTarget(null, newElementProps, slideId);
		// setTarget(null, slideId, newElementProps);
	};

	const allowDrop = e => {
		e.preventDefault();
	};

	return {
		onDragStart,
		onDrop,
		allowDrop,
	};
};

export default useEvents;
