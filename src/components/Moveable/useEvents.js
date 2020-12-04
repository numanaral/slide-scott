/**
 *
 * @param {cloneNewElement} cloneNewElement
 * @param {cloneNewElement} setTarget
 */
const useEvents = (
	cloneNewElement,
	setTarget,
	showCurrentDeleteButtonAndHideOthers
) => {
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

		setTarget(null, slideId, newElementProps);
	};

	const allowDrop = e => {
		e.preventDefault();
	};

	/**
	 * @typedef {object} HtmlElement
	 * @property {HTMLElement} target
	 */

	/**
	 * @typedef {Event&HtmlElement} EventWithElement
	 * @listens Event
	 */

	/**
	 * @param {EventWithElement} e - The observable event.
	 */
	const onDropZoneClick = e => {
		// document.querySelectorAll('.cloned-draggable').forEach(() => {
		// 	// https://codepen.io/pistell/pen/XWWdZrv
		// 	// https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
		// 	const elements = document.elementsFromPoint(e.clientX, e.clientY);
		// 	const chosenTarget = elements.find(key =>
		// 		key.matches('.cloned-draggable')
		// 	);
		// 	showCurrentDeleteButtonAndHideOthers(chosenTarget);
		// 	const parentContainer = e.target.closest('.container');
		// 	const slideId = getContainerId(parentContainer);
		// 	// Select / Deselect <Moveable /> control box
		// 	if (chosenTarget) {
		// 		if (!chosenTarget.classList.contains('clone')) return;
		// 		setTarget(chosenTarget, slideId);
		// 	} else {
		// 		debugger;
		// 		setTarget(undefined, slideId);
		// 	}
		// });
	};

	return {
		onDragStart,
		onDrop,
		allowDrop,
		onDropZoneClick,
	};
};

export default useEvents;
