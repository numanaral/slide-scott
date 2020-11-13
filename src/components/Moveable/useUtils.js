const useUtils = (onDelete, setTarget) => {
	const showCurrentDeleteButtonAndHideOthers = target => {
		try {
			// Hide all the enabled delete buttons first
			[
				...document.getElementsByClassName('cloned-delete-button'),
			].forEach(elm => {
				// eslint-disable-next-line no-param-reassign
				elm.style.display = 'none';
			});

			// Then try displaying the current one if there is a target
			if (target) {
				// eslint-disable-next-line no-param-reassign
				target.getElementsByClassName(
					'cloned-delete-button'
				)[0].style.display = 'initial';
			}
		} catch (err) {
			console.warning('Failed to hide or display delete buttons');
		}
	};
	/**
	 * Clones and configures the element style and children
	 *
	 * @param {HtmlElement} original Draggable element - cloning from
	 * @param {String} id
	 * @param {String|Number} top
	 * @param {String|Number} left
	 * @param {String|Number} width
	 * @param {String|Number} height
	 * @param {String|Number} translateX
	 * @param {String|Number} translateY
	 * @param {String|Number} rotate
	 * @param {String|Number} transformOrigin
	 */
	const cloneAndConfigure = (
		original,
		id,
		container,
		top,
		left,
		width,
		height,
		translateX = 0,
		translateY = 0,
		rotate = 0,
		transformOrigin = '50% 50%'
	) => {
		if (!original) return null;
		const clonedContainer = document.createElement('div');
		const clonedSvg = original.children[1].children[0].cloneNode(true);

		// Cloned element with stripped attributes and new styling
		clonedContainer.setAttribute(
			'style',
			`
				position: absolute;
				border-radius: 4px;
				transform: translate(${translateX}px, ${translateY}px) rotate(${rotate}deg);
				transform-origin: ${transformOrigin};
				top: ${top}px;
				left: ${left}px;
				width: ${width}px;
				height: ${height}px;
				background-color: ${window
					.getComputedStyle(original)
					.getPropertyValue('background-color')};
			`
		);
		clonedContainer.className = 'cloned-draggable';
		clonedContainer.id = id;

		// SVG
		clonedSvg.setAttribute('style', 'width: 100%; height: 100%;');
		clonedContainer.appendChild(clonedSvg);

		// Delete button
		const deleteButton = document.createElement('button');
		deleteButton.setAttribute(
			'style',
			`
				display: none;
				/* transition: 0.2s; */
				position: absolute;
				top: -40px;
				right: -40;
				font-size: 23px;
				z-index: 1;
			
				border-radius: 50%;
				width: 30px;
				height: 30px;
				justify-content: center;
				padding: 0;
			`
		);
		deleteButton.innerHTML = `<svg fill="#000" stroke="#f44336" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>`;
		deleteButton.className = 'cloned-delete-button';
		clonedContainer.appendChild(deleteButton);

		deleteButton.addEventListener('click', e => {
			e.preventDefault();
			e.stopPropagation();
			clonedContainer.remove();
			onDelete(id);
			setTarget(null);
		});

		container.appendChild(clonedContainer);

		return clonedContainer;
	};

	/** @type {cloneNewElement} */
	const cloneNewElement = (
		draggableClassifier,
		size,
		container,
		clientX,
		clientY
	) => {
		const id = `cloned-${draggableClassifier}-${Date.now()}`;
		const original = document.querySelector(
			`div[draggable-classifier="${draggableClassifier}"`
		);

		// https://stackoverflow.com/a/42111623/13161405
		// Grab the location inside the droppable area
		const rect = container.getBoundingClientRect();
		const left = clientX - rect.left; // x position within the element.
		const top = clientY - rect.top; // y position within the element.

		const clonedElement = cloneAndConfigure(
			original,
			id,
			container,
			top - size,
			left - size,
			size * 2,
			size * 2
		);

		showCurrentDeleteButtonAndHideOthers(clonedElement);

		return clonedElement;
	};

	// TODO: Pass a ref for container instead of finding by className
	// TODO2: Remove duplicate code, generate an extra method
	/** @type {generateElement} */
	const generateElement = (
		id,
		translateXY,
		widthHeight,
		topLeft,
		rotate,
		transformOrigin,
		container = null
	) => {
		const _container = container || document.getElementById('container');
		// cloned-draggable-image-1605254768341
		// cloneNameConvention - classifierNameConvention - classifierType - uid
		const idParts = id.split('-');
		const [, , classifierType] = idParts;
		const draggableClassifier = `draggable-${classifierType}`;
		const original = document.querySelector(
			`div[draggable-classifier="${draggableClassifier}"`
		);

		const [translateX, translateY] = translateXY;
		const [width, height] = widthHeight;
		const [top, left] = topLeft;
		cloneAndConfigure(
			original,
			id,
			_container,
			top,
			left,
			width,
			height,
			translateX,
			translateY,
			rotate,
			transformOrigin
		);
	};

	const generateElements = frames => {
		if (!frames) return;
		Object.keys(frames).forEach(key => {
			const {
				translateXY,
				widthHeight,
				topLeft,
				rotate,
				transformOrigin,
			} = frames[key];
			generateElement(
				key,
				translateXY,
				widthHeight,
				topLeft,
				rotate,
				transformOrigin
			);
		});
	};

	return {
		showCurrentDeleteButtonAndHideOthers,
		cloneNewElement,
		generateElement,
		generateElements,
	};
};

export default useUtils;
