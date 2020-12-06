/* eslint-disable no-param-reassign */
import useTool from 'containers/SlideBuilder/Toolbox/useTool';
import { useEffect, useRef, useState } from 'react';
import deepClone from 'clone-deep';

const useMoveable = setSlides => {
	const [currentlyFocusedElement, setCurrentlyFocusedElement] = useState({});
	const { draggableId: targetId, slideId } = currentlyFocusedElement;

	const currentTargetId = useRef(targetId);
	const currentSlideId = useRef(slideId);

	useEffect(() => {
		currentTargetId.current = targetId;
		currentSlideId.current = slideId;
	}, [targetId, slideId]);

	const handleDraggable = useTool(setSlides);

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
			if (!currentTargetId.current || !dragStart) return;

			setSlides(prev => {
				dragStart.set(
					prev[currentSlideId.current].frames[currentTargetId.current]
						.translateXY
				);

				return prev;
			});
		},
		onResize: ({ target, width, height, drag }) => {
			if (!currentTargetId.current) return;
			const { beforeTranslate } = drag;

			setSlides(prev => {
				return {
					...prev,
					[currentSlideId.current]: {
						frames: {
							...prev[currentSlideId.current].frames,
							[currentTargetId.current]: {
								...prev[currentSlideId.current].frames[
									currentTargetId.current
								],
								translateXY: beforeTranslate,
								widthHeight: [width, height],
							},
						},
					},
				};
			});
			target.style.width = `${width}px`;
			target.style.height = `${height}px`;
			target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
		},
		// onResizeEnd: () => {
		// 	updateTriggerCounter();
		// },
		onRotateStart: ({ set }) => {
			if (!currentTargetId.current) return;

			setSlides(prev => {
				set(
					prev[currentSlideId.current].frames[currentTargetId.current]
						.rotate
				);

				return prev;
			});
		},
		onRotate: ({ target, beforeRotate }) => {
			if (!currentTargetId.current) return;

			setSlides(prev => {
				return {
					...prev,
					[currentSlideId.current]: {
						frames: {
							...prev[currentSlideId.current].frames,
							[currentTargetId.current]: {
								...prev[currentSlideId.current].frames[
									currentTargetId.current
								],
								rotate: beforeRotate,
							},
						},
					},
				};
			});
			target.style.transform = `rotate(${beforeRotate}deg)`;
		},
		// onRotateEnd: () => {
		// 	updateTriggerCounter();
		// },
		onDragOriginStart: ({ dragStart }) => {
			if (!currentTargetId.current || !dragStart) return;

			setSlides(prev => {
				dragStart.set(
					prev[currentSlideId.current].frames[currentTargetId.current]
						.translateXY
				);

				return prev;
			});
		},
		onDragOrigin: ({ drag, transformOrigin }) => {
			if (!currentTargetId.current) return;
			const { beforeTranslate } = drag;

			setSlides(prev => {
				return {
					...prev,
					[currentSlideId.current]: {
						frames: {
							...prev[currentSlideId.current].frames,
							[currentTargetId.current]: {
								...prev[currentSlideId.current].frames[
									currentTargetId.current
								],
								translateXY: beforeTranslate,
								transformOrigin,
							},
						},
					},
				};
			});
		},
		// onDragOriginEnd: () => {
		// 	updateTriggerCounter();
		// },
		onDragStart: ({ set }) => {
			if (!currentTargetId.current) return;

			setSlides(prev => {
				set(
					prev[currentSlideId.current].frames[currentTargetId.current]
						.translateXY
				);

				return prev;
			});
		},
		onDrag: ({ beforeTranslate }) => {
			if (!currentTargetId.current) return;

			setSlides(prev => {
				return {
					...prev,
					[currentSlideId.current]: {
						frames: {
							...prev[currentSlideId.current].frames,
							[currentTargetId.current]: {
								...prev[currentSlideId.current].frames[
									currentTargetId.current
								],
								translateXY: beforeTranslate,
							},
						},
					},
				};
			});
		},
		// This is auto updating on every change, not needed
		// onDragEnd: () => {
		// 	updateTriggerCounter();
		// },
		onRender: ({ target }) => {
			if (!currentTargetId.current) return;
			const _target =
				target || document.getElementById(currentTargetId.current);

			setSlides(prev => {
				const { translateXY, rotate, transformOrigin } = prev[
					currentSlideId.current
				].frames[currentTargetId.current];
				_target.style.transformOrigin = transformOrigin;
				_target.style.transform =
					`translate(${translateXY[0]}px, ${translateXY[1]}px)` +
					` rotate(${rotate}deg)`;

				return prev;
			});
		},
	});

	const removeTarget = () => {
		setSlides(prev => {
			const clone = deepClone(prev);

			delete clone[currentSlideId.current].frames[
				currentTargetId.current
			];
			return clone;
		});
		// updateLocalStorageFrames();
	};

	const updateTarget = (target = null) => {
		setOptions(v => ({
			...v,
			target,
		}));
	};

	const addNewDraggable = (newProps, slide) => {
		updateTarget();
		handleDraggable(slide, newProps, newTargetId => {
			setTimeout(() => {
				const target = document.getElementById(newTargetId);
				updateTarget(target);
			}, 150);
		});
	};

	const updateDraggable = (draggableType, defaultValues) => {
		updateTarget();
		handleDraggable(
			currentSlideId.current,
			{ draggableType },
			newTargetId => {
				setTimeout(() => {
					const target = document.getElementById(newTargetId);
					updateTarget(target);
				}, 150);
			},
			currentTargetId.current,
			defaultValues
		);
	};

	const setTarget = (target, newElementProps = null, slide = null) => {
		updateTarget(target);
		// If we have a new draggable, add it to the slide
		if (newElementProps) {
			addNewDraggable(newElementProps, slide);
		}
	};

	return {
		currentlyFocusedElement,
		setCurrentlyFocusedElement,
		setTarget,
		removeTarget,
		options,
		addNewDraggable,
		updateDraggable,
	};
};

export default useMoveable;
