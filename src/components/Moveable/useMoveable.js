/* eslint-disable no-param-reassign */
import { useRef, useState } from 'react';

const useMoveable = (previousFrames, setPreviousFrames) => {
	const targetId = useRef('');
	const frames = useRef(previousFrames);

	// Update saved frames and trigger a refresh to update the Json
	// This won't be needed after the testing phase
	const [, setTriggerCounter] = useState(0);
	const updateLocalStorageFrames = () => {
		setPreviousFrames(frames.current);
	};
	const updateTriggerCounter = () => {
		setTriggerCounter(v => v + 1);
		updateLocalStorageFrames();
	};

	const [options, setOptions] = useState({
		// Set the target as null until someone moves and clones it onto the yellow background
		target: null,
		// If the container is null, the position is fixed. (default: parentElement(document.body))
		// container: document.getElementById('container'),
		originDraggable: true,
		originRelative: true,
		draggable: true,
		origin: true,
		rotatable: true,
		resizable: true,
		rotationPosition: 'top',
		zoom: 1,
		startDragRotate: 0,
		throttleDrag: 0,
		throttleDragRotate: 0,
		throttleRotate: 0,
		throttleResize: 0,
		padding: { left: 0, top: 0, right: 0, bottom: 0 },
		onResizeStart: ({ setOrigin, dragStart }) => {
			setOrigin(['%', '%']);
			if (!targetId.current || !dragStart) return;

			dragStart.set(frames.current[targetId.current].translateXY);
		},
		onResize: ({ target, width, height, drag }) => {
			if (!targetId.current) return;
			const { beforeTranslate } = drag;

			frames.current[targetId.current].translateXY = beforeTranslate;
			frames.current[targetId.current].widthHeight = [width, height];
			target.style.width = `${width}px`;
			target.style.height = `${height}px`;
			target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
		},
		onResizeEnd: () => {
			updateTriggerCounter();
		},
		onRotateStart: ({ set }) => {
			if (!targetId.current) return;

			set(frames.current[targetId.current].rotate);
		},
		onRotate: ({ target, beforeRotate }) => {
			if (!targetId.current) return;

			frames.current[targetId.current].rotate = beforeRotate;
			target.style.transform = `rotate(${beforeRotate}deg)`;
		},
		onRotateEnd: () => {
			updateTriggerCounter();
		},
		onDragOriginStart: ({ dragStart }) => {
			if (!targetId.current || !dragStart) return;

			dragStart.set(frames.current[targetId.current].translateXY);
		},
		onDragOrigin: ({ drag, transformOrigin }) => {
			if (!targetId.current) return;

			frames.current[targetId.current].translateXY = drag.beforeTranslate;
			frames.current[targetId.current].transformOrigin = transformOrigin;
		},
		onDragOriginEnd: () => {
			updateTriggerCounter();
		},
		onDragStart: ({ set }) => {
			if (!targetId.current) return;

			set(frames.current[targetId.current].translateXY);
		},
		onDrag: ({ beforeTranslate }) => {
			if (!targetId.current) return;

			frames.current[targetId.current].translateXY = beforeTranslate;
		},
		// This is auto updating on every change, not needed
		// onDragEnd: () => {
		// 	updateTriggerCounter();
		// },
		onRender: ({ target }) => {
			if (!targetId.current) return;

			const { translateXY, rotate, transformOrigin } = frames.current[
				targetId.current
			];
			target.style.transformOrigin = transformOrigin;
			target.style.transform =
				`translate(${translateXY[0]}px, ${translateXY[1]}px)` +
				` rotate(${rotate}deg)`;
		},
	});

	const setTarget = target => {
		setOptions(v => ({
			...v,
			target,
		}));

		// Set the current targetId
		targetId.current = target?.id;

		if (target) {
			// Update current frame
			if (!frames.current[target.id]) {
				frames.current[target.id] = {
					translateXY: [0, 0],
					widthHeight: [
						parseFloat(target.style.width),
						parseFloat(target.style.height),
					],
					topLeft: [
						parseFloat(target.style.top),
						parseFloat(target.style.left),
					],
					rotate: 0,
					transformOrigin: '50% 50%',
				};
			}
			updateLocalStorageFrames();
		}
	};

	const removeTarget = id => {
		delete frames.current[id];
		updateLocalStorageFrames();
	};

	return {
		setTarget,
		removeTarget,
		options,
		setOptions,
		frames,
	};
};

export default useMoveable;