import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import styled, { css, keyframes } from 'styled-components';
import isDeepEqual from 'fast-deep-equal';

import LazyMoveable from 'components/Moveable/Lazy';
import ContainerSpacingWrapper from 'components/ContainerSpacingWrapper';
import TooltipButton from 'components/TooltipButton';
import { AddIcon, SettingsIcon } from 'icons';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import useMoveable from 'components/Moveable/useMoveable';
import useEvents from 'components/Moveable/useEvents';
import { getNiceDateTimeVanilla, smoothScroll } from 'utils';
import Drawer from 'components/Drawer';
import {
	singleViewRouterPropTypes,
	singleViewRouterDefaultProps,
} from 'routes/pages/types';
import useWatchSlide from 'store/firebase/hooks/slides/useWatchSlide';
import useSlide from 'store/firebase/hooks/slides/useSlide';
import NoAccess from 'components/NoAccess';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import LazyToolBox from './Toolbox/Lazy';
import LazySlideBox from './SlideBox/Lazy';
import ContainerTitle from './shared/ContainerTitle';
import SlideSettings from './SlideSettings';

const highlightText = theme => keyframes`
	0% {
		color: ${theme.palette.text.primary};
	}

	50% {
		color: ${theme.palette.primary.main};
	}

	100% {
		color: ${theme.palette.text.primary};
	}
`;

const highlightTextAnimation = ({ theme }) => css`
	animation: ${highlightText(theme)} 1s ease-in-out 2;
`;

const HighlightedText = styled(Typography)`
	${highlightTextAnimation};
`;

// eslint-disable-next-line react/prop-types
const SaveLogger = ({ time }) => (
	<HighlightedText component="span" key={time}>
		Last updated on: {getNiceDateTimeVanilla(time)}
	</HighlightedText>
);

const Wrapper = ({ /* id, */ slide, updateSlideshow, children }) => {
	const [lastSave, setLastSave] = useState('');

	// We want to keep a local state because we don't want to make a request to
	// firebase with every single change. This would fill up the quota really fast.
	// For now set this to 1 min, and maybe give a different option for paid users?
	const [slides, setSlides] = useState(slide.slides);

	const setSlidesIfHasPermissions = valueOrFunction => {
		setSlides(prev => {
			const value =
				valueOrFunction instanceof Function
					? valueOrFunction(prev)
					: valueOrFunction;
			return value;
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			// Make sure we get the latest values
			setSlides(prev => {
				if (!isDeepEqual(slide.slides, prev)) {
					setLastSave(new Date());
					updateSlideshow({ slides: prev });
				}

				return prev;
			});
		}, 3 * 1000);

		return () => {
			clearInterval(interval);
		};
	}, [setSlides, slide.slides, updateSlideshow]);

	const deleteSlide = slideId => {
		setSlidesIfHasPermissions(prev => {
			const clone = { ...prev };
			delete clone[slideId];
			return clone;
		});
	};
	// handleDraggable('textQuestion', 'Text Question');

	const {
		currentlyFocusedElement,
		setCurrentlyFocusedElement,
		setTarget,
		removeTarget,
		options,
		// addNewDraggable,
		updateDraggable,
	} = useMoveable(setSlidesIfHasPermissions);
	const { onDragStart } = useEvents();

	useEffect(() => {
		const onDeleteButtonPress = e => {
			if (
				currentlyFocusedElement.draggableId &&
				currentlyFocusedElement.slideId &&
				e.key === 'Delete'
			) {
				setTarget();
				// setTarget(null, currentlyFocusedElement.slideId);
				removeTarget();
			}
		};
		document.addEventListener('keyup', onDeleteButtonPress);
		return () => {
			document.removeEventListener('keyup', onDeleteButtonPress);
		};
	}, [
		currentlyFocusedElement.draggableId,
		currentlyFocusedElement.slideId,
		removeTarget,
		setTarget,
	]);

	const onAddNewSlide = () => {
		const newId = Date.now().toString();
		setSlidesIfHasPermissions(prev => {
			const updatedSlides = {
				...prev,
				[newId]: {
					frames: {},
				},
			};

			return updatedSlides;
		});
		// Wait for state to update and render and scroll into view
		// I better put this in useEffect but will keep it here for now
		setTimeout(() => {
			smoothScroll(document.getElementById(`container-${newId}`));
		}, 100);
	};

	const sharedProps = {
		setTarget,
		removeTarget,
		deleteSlide,
		updateDraggable,
		currentlyFocusedElement,
		setCurrentlyFocusedElement,
	};

	return children({
		slides,
		lastSave,
		onDragStart,
		options,
		sharedProps,
		onAddNewSlide,
	});
};

const SlideBuilder = ({
	match: {
		params: { id },
	},
}) => {
	const { notifySuccess } = useNotificationProvider();
	const { slide, pending, error } = useWatchSlide(id);
	const {
		hasEditAccess,
		updateSlideshow,
		pending: hasEditAccessPending,
		error: hasEditAccessError,
	} = useSlide(id);

	const wrapperProps = {
		id,
		slide,
		updateSlideshow,
	};

	const drawerRef = useRef();

	return (
		pending ||
		error ||
		hasEditAccessPending ||
		hasEditAccessError ||
		(!hasEditAccess && <NoAccess />) || (
			<Wrapper {...wrapperProps}>
				{({
					slides,
					lastSave,
					onDragStart,
					options,
					sharedProps,
					onAddNewSlide,
				}) => (
					<ContainerSpacingWrapper container spacing={5}>
						<ContainerSpacingWrapper
							item
							xs={2}
							spacing={1}
							rightLeft
						>
							<ContainerWithCenteredItems
								style={{
									height: '3%',
								}}
							/>
							<LazyToolBox onDragStart={onDragStart} />
						</ContainerSpacingWrapper>
						<ContainerSpacingWrapper
							item
							xs={10}
							spacing={1}
							rightLeft
						>
							<ContainerWithCenteredItems
								style={{
									height: '3%',
								}}
							/>
							<ContainerTitle>
								Slides{' '}
								<Drawer
									ref={drawerRef}
									button={
										<TooltipButton
											tooltip="Open settings"
											// This will be overridden
											onClick={() => null}
											icon={SettingsIcon}
										/>
									}
								>
									<SlideSettings
										onSubmit={data => {
											updateSlideshow(data);
											drawerRef.current?.click();
											notifySuccess(
												`Slide configuration was successfully updated`
											);
										}}
										defaultValues={{
											title: slide.title,
											description: slide.description,
											thumbnail: slide.thumbnail,
										}}
									/>
								</Drawer>
								{lastSave && <SaveLogger time={lastSave} />}
							</ContainerTitle>
							<ContainerWithCenteredItems
								style={{
									height: '85%',
									overflow: 'auto',
									position: 'relative',
								}}
							>
								<LazyMoveable {...options} />
								{Object.keys(slides).map((key, ind) => (
									<LazySlideBox
										key={key}
										{...sharedProps}
										{...slides[key]}
										slideId={key}
										index={ind + 1}
									/>
								))}
							</ContainerWithCenteredItems>
							<ContainerWithCenteredItems
								style={{
									height: '3%',
								}}
							>
								<TooltipButton
									tooltip="Add new slide"
									text="Add new slide"
									fullWidth
									onClick={onAddNewSlide}
									icon={AddIcon}
								/>
							</ContainerWithCenteredItems>
							{/* <Spacer direction="bottom" spacing="2" />
							<ContainerWithCenteredItems>
								<Typography variant="h5">
									Config (Temporary - For Dev)
								</Typography>
								<PrettyJson json={JSON.stringify(slides)} />
							</ContainerWithCenteredItems> */}
						</ContainerSpacingWrapper>
						{/* <ContainerSpacingWrapper
							item
							xs={2}
							spacing={1}
							rightLeft
						>
							<ContainerWithCenteredItems
								style={{
									height: '3%',
								}}
							/>
							<LazyConfigBox />
						</ContainerSpacingWrapper> */}
					</ContainerSpacingWrapper>
				)}
			</Wrapper>
		)
	);
};

SlideBuilder.propTypes = singleViewRouterPropTypes;
SlideBuilder.defaultProps = singleViewRouterDefaultProps;

export default SlideBuilder;
