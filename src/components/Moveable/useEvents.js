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
			'draggableClassifier',
			e.target.getAttribute('draggable-classifier')
		);
		e.dataTransfer.setData('size', e.target.getAttribute('tool-size'));
		// eslint-disable-next-line no-param-reassign
		e.dataTransfer.effectAllowed = 'copy';
	};

	const onDrop = e => {
		e.preventDefault();
		const slideId = getContainerId(e.target);
		const newElement = cloneNewElement(
			e.dataTransfer.getData('draggableClassifier'),
			e.dataTransfer.getData('size'),
			e.target,
			e.clientX,
			e.clientY
		);
		setTarget(newElement, slideId);
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
		document.querySelectorAll('.cloned-draggable').forEach(() => {
			// https://codepen.io/pistell/pen/XWWdZrv
			// https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
			const elements = document.elementsFromPoint(e.clientX, e.clientY);
			const chosenTarget = elements.find(key =>
				key.matches('.cloned-draggable')
			);

			showCurrentDeleteButtonAndHideOthers(chosenTarget);

			const parentContainer = e.target.closest('.container');
			const slideId = getContainerId(parentContainer);

			// Select / Deselect <Moveable /> control box
			if (chosenTarget) setTarget(chosenTarget, slideId);
			else setTarget(undefined, slideId);
		});
	};

	return {
		onDragStart,
		onDrop,
		allowDrop,
		onDropZoneClick,
	};
};

export default useEvents;
