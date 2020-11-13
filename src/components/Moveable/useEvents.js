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
		const newElement = cloneNewElement(
			e.dataTransfer.getData('draggableClassifier'),
			e.dataTransfer.getData('size'),
			e.target,
			e.clientX,
			e.clientY
		);
		setTarget(newElement);
	};

	const allowDrop = e => {
		e.preventDefault();
	};

	const onDropZoneClick = e => {
		document.querySelectorAll('.cloned-draggable').forEach(() => {
			// https://codepen.io/pistell/pen/XWWdZrv
			// https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
			const elements = document.elementsFromPoint(e.clientX, e.clientY);
			const chosenTarget = elements.find(key =>
				key.matches('.cloned-draggable')
			);

			showCurrentDeleteButtonAndHideOthers(chosenTarget);

			// Select / Deselect <Moveable /> control box
			if (chosenTarget) setTarget(chosenTarget);
			else setTarget(undefined);
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
