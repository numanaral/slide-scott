// TODO: prop-types
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useIdleTimer } from 'react-idle-timer';

import FullSizeGrid from 'components/FullSizeGrid';
import Droppable from 'containers/SlideBuilder/SlideBox/Droppable';
import ContainerBody from 'containers/SlideBuilder/shared/ContainerBody';
import { TOOL_COMPONENTS } from 'containers/SlideBuilder/Toolbox/config';
import { PreviousIcon, NextIcon, ReplayIcon, SubmitIcon } from 'icons';
import useDeepCompareEffect from 'use-deep-compare-effect';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import { propTypes, defaultProps } from './types';
import useIndex from './useIndex';
import BigTooltipButton from './BigTooltipButton';
import FeedbackForm from './FeedbackForm';

const Wrapper = styled.div`
	position: absolute;
	${({ theme, $positionProps }) => {
		const { rotate, translateXY, widthHeight, topLeft } = $positionProps;
		const [translateX, translateY] = translateXY;
		const [width, height] = widthHeight;
		const [top, left] = topLeft;

		return `
			borderRadius: ${theme.shape.borderRadius};
			transform: translate(${translateX}px, ${translateY}px) rotate(${rotate}deg);
			top: ${top}px;
			left: ${left}px;
			width: ${width}px;
			height: ${height}px;
		`;
	}}
`;

const DraggableElement = ({ frames, draggableId }) => {
	const {
		draggableType,
		componentType,
		componentProps,
		...positionProps
	} = frames[draggableId];

	if (!componentType) return null;

	const Component = TOOL_COMPONENTS[componentType];

	return (
		<Wrapper
			draggable-type={componentType}
			key={draggableId}
			id={draggableId}
			$positionProps={positionProps}
		>
			<Component {...componentProps} />
		</Wrapper>
	);
};

const SlideBox = ({ frames, index }) => (
	<>
		<ContainerWithCenteredItems container alignItems="flex-end">
			<Typography> Slide {index + 1} </Typography>
		</ContainerWithCenteredItems>
		<Droppable>
			{Object.keys(frames).map(key => (
				<DraggableElement frames={frames} draggableId={key} key={key} />
			))}
		</Droppable>
	</>
);

const generateSlideList = slides =>
	Object.keys(slides).map((key, ind) => ({
		key,
		frames: slides[key].frames,
		index: ind,
	}));

const SlideViewer = ({
	slides,
	page,
	onPageSelect,
	showButtons,
	hasSubmit,
}) => {
	const { openComponentDialog } = useDialogProvider();
	const [slideList, setSlideList] = useState(() => generateSlideList(slides));

	const {
		index,
		setIndex,
		isPreviousDisabled,
		isNextDisabled,
		onPrevious,
		onNext,
		onRestart,
	} = useIndex(slideList, onPageSelect);

	useDeepCompareEffect(() => {
		const newList = generateSlideList(slides);
		setSlideList(newList);
		const newLength = newList.length;
		setIndex(prev => {
			const newIndex =
				index >= newLength
					? (newLength >= 1 && newLength - 1) || 0
					: prev;
			onPageSelect?.(newIndex);
			return newIndex;
		});
	}, [slides]);

	const [idle, setIdle] = useState(false);
	const onIdle = () => setIdle(true);
	const onActive = () => setIdle(false);
	// const onAction = () => {};
	useIdleTimer({
		timeout: 1000 * 3,
		onIdle,
		onActive,
		debounce: 500,
	});

	const [sent, setSent] = useState(false);

	const onSubmitFeedback = () => {
		openComponentDialog('Feedback', <FeedbackForm setSent={setSent} />);
	};

	return (
		<FullSizeGrid>
			{(slideList?.length && (
				<ContainerBody
					style={{
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					{showButtons && (
						<>
							<BigTooltipButton
								$left
								$idle={idle}
								tooltip="Previous"
								icon={PreviousIcon}
								onClick={onPrevious}
								disabled={isPreviousDisabled}
							/>
							{(!isNextDisabled && (
								<BigTooltipButton
									$idle={idle}
									tooltip="Next"
									icon={NextIcon}
									onClick={onNext}
									disabled={isNextDisabled}
								/>
							)) || (
								<>
									<BigTooltipButton
										$idle={idle}
										tooltip="Restart"
										icon={ReplayIcon}
										onClick={onRestart}
									/>
									{hasSubmit && !sent && (
										<BigTooltipButton
											$idle={idle}
											$rightBottom
											tooltip="Submit Feedback"
											icon={SubmitIcon}
											onClick={onSubmitFeedback}
										/>
									)}
								</>
							)}
						</>
					)}
					<SlideBox {...slideList[page || index]} />
				</ContainerBody>
			)) || (
				<ContainerWithCenteredItems vertical>
					<PaperContainerWithSpacing>
						<Typography variant="h3" component="h1">
							Either the slide does not exist or it&apos;s empty.
						</Typography>
					</PaperContainerWithSpacing>
				</ContainerWithCenteredItems>
			)}
		</FullSizeGrid>
	);
};

SlideViewer.propTypes = propTypes;
SlideViewer.defaultProps = defaultProps;

export { BigTooltipButton };
export default SlideViewer;
