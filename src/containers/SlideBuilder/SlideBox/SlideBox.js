/* eslint-disable react/prop-types */
import React, { createRef, useEffect, useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useOuterClick from 'hooks/useOuterClick';
import FullSizeGrid from 'components/FullSizeGrid';
import useEvents from 'components/Moveable/useEvents';
import TooltipButton from 'components/TooltipButton';
import { DeleteIcon, EditIcon, PaletteIcon } from 'icons';
import useRoleWrapper from 'store/firebase/hooks/useRoleWrapper';
import Droppable from './Droppable';
import { propTypes, defaultProps } from './types';
import ContainerBody from '../shared/ContainerBody';
import { TOOL_COMPONENTS } from '../Toolbox/config';

const StyledTooltipButton = styled(TooltipButton)`
	top: 10px;
	position: absolute;
	z-index: 1;
	${({ $isFocused, $secondary, $forSlide }) => `
		display: ${(($forSlide || $isFocused) && 'initial') || 'none'};
		${($secondary && 'left: 10') || 'right: 10'}px;
		${($forSlide && 'right: 0; top: 0;') || ''};
	`}
`;

const DraggableElement = ({
	frames,
	slideId,
	setTarget,
	removeTarget,
	draggableId,
	updateDraggable,
	currentlyFocusedElement,
	setCurrentlyFocusedElement,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	// const containerRef = useRef();

	// Close open cards when when clicked elsewhere
	const currentDraggable = useOuterClick(() => {
		setTarget(null);
		// setTarget(null, slideId);
		setIsFocused(false);
	}, 'div[class^="moveable-"]');

	useEffect(() => {
		if (isFocused && currentlyFocusedElement.draggableId !== draggableId) {
			setIsFocused(false);
		}
	}, [currentlyFocusedElement.draggableId, draggableId, isFocused]);

	const {
		draggableType,
		componentType,
		componentProps,
		translateXY,
		widthHeight,
		topLeft,
		rotate,
		transformOrigin,
	} = frames[draggableId];

	if (!componentType) return null;

	const Component = TOOL_COMPONENTS[componentType];

	const [translateX, translateY] = translateXY;
	const [width, height] = widthHeight;
	const [top, left] = topLeft;

	const style = {
		position: 'absolute',
		borderRadius: 4,
		transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
		transformOrigin,
		top: `${top}px`,
		left: `${left}px`,
		width: `${width}px`,
		height: `${height}px`,
		// background: (isFocused && 'red') || 'initial',
		// background-color: rgb(33, 33, 33);
		// border: '1px dashed red',
	};

	// const placeholder = document.getElementById(draggableId);
	// if (placeholder?.classList.contains('clone')) {
	// 	placeholder.remove();
	// 	// previousClone.innerHTML = '';
	// }

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
		<div
			ref={currentDraggable}
			style={style}
			className={`cloned-draggable ${(isFocused && 'isFocused') || ''}`}
			draggable-type={componentType}
			key={draggableId}
			id={draggableId}
			// role="button"
			onMouseEnter={e => {
				// We don't want to switch target whilst resizing
				const leftMouseButtonDown = e.nativeEvent.buttons === 1;
				if (!isFocused && !leftMouseButtonDown) {
					setTarget(currentDraggable.current);
					// setTarget(currentDraggable.current, slideId);
					setIsFocused(true);
					setCurrentlyFocusedElement({
						draggableId,
						slideId,
					});
				}
			}}
			// tabIndex={0}
			// onKeyPress={() => {
			// 	setTarget(containerRef.current, slideId);
			// }}
		>
			<Component {...componentProps} />
			<StyledTooltipButton
				$isFocused={isFocused}
				$secondary
				tooltip="Edit tool"
				// className="cloned-delete-button"
				onClick={() => {
					updateDraggable(draggableType, componentProps);
				}}
				icon={EditIcon}
			/>
			<StyledTooltipButton
				$isFocused={isFocused}
				tooltip="Remove tool"
				// className="cloned-delete-button"
				onClick={() => {
					removeTarget();
					// This should automatically be called in useMoveable
					setTarget();
					// setTarget(null);
				}}
				icon={DeleteIcon}
			/>
		</div>
	);
};

const SlideBox = ({
	frames,
	slideId,
	index,
	setTarget,
	removeTarget,
	deleteSlide,
	...rest
}) => {
	const { notifyInfo } = useNotificationProvider();
	const wrapPaidFeature = useRoleWrapper();

	const { onDrop, allowDrop } = useEvents(setTarget);

	// const [selected, setSelected] = useState(false);

	const containerRefs = useRef({});
	useEffect(() => {
		Object.keys(frames).forEach(key => {
			containerRefs.current[key] = createRef();
		});
	}, []);

	return (
		<FullSizeGrid>
			<ContainerBody style={{ position: 'relative' }}>
				<Typography> Slide {index} </Typography>

				<StyledTooltipButton
					$forSlide
					tooltip="Remove slide"
					onClick={() => {
						deleteSlide(slideId);
					}}
					icon={DeleteIcon}
				/>
				<StyledTooltipButton
					$forSlide
					$secondary
					tooltip="Select a color"
					onClick={() => {
						wrapPaidFeature(() => {
							notifyInfo('Not yet implemented.');
						});
					}}
					icon={PaletteIcon}
				/>
				<Droppable
					className="container"
					id={`container-${slideId}`}
					onDrop={onDrop}
					onDragOver={allowDrop}
				>
					{Object.keys(frames).map(key => (
						<DraggableElement
							frames={frames}
							slideId={slideId}
							setTarget={setTarget}
							removeTarget={removeTarget}
							key={key}
							draggableId={key}
							{...rest}
						/>
					))}
				</Droppable>
			</ContainerBody>
		</FullSizeGrid>
	);
};

SlideBox.propTypes = propTypes;
SlideBox.defaultProps = defaultProps;

export default SlideBox;
