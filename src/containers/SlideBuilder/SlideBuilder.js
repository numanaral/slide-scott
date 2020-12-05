import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import LazyMoveable from 'components/Moveable/Lazy';
import FullSizeGrid from 'components/FullSizeGrid';
import ContainerSpacingWrapper from 'components/ContainerSpacingWrapper';
import TooltipButton from 'components/TooltipButton';
import { AddIcon, SettingsIcon } from 'icons';
import PrettyJson from 'components/PrettyJson';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Spacer from 'components/Spacer';
import useLocalStorage from 'hooks/useLocalStorage';
import useMoveable from 'components/Moveable/useMoveable';
import useEvents from 'components/Moveable/useEvents';
import { smoothScroll } from 'utils';
import Drawer from 'components/Drawer';
import LazyToolBox from './Toolbox/Lazy';
import LazySlideBox from './SlideBox/Lazy';
import LazyConfigBox from './ConfigBox/Lazy';
import ContainerTitle from './shared/ContainerTitle';
import SlideSettings from './SlideSettings';

const SLIDES_LOCAL_STORAGE_KEY = 'slides-draft';

const SlideBuilder = () => {
	const [currentlyFocusedElement, setCurrentlyFocusedElement] = useState({});
	const [slides, setSlides] = useLocalStorage(SLIDES_LOCAL_STORAGE_KEY, {
		[Date.now().toString()]: {
			frames: {},
		},
	});

	const deleteSlide = slideId => {
		setSlides(prev => {
			const clone = { ...prev };
			delete clone[slideId];
			return clone;
		});
	};
	// handleDraggable('textQuestion', 'Text Question');

	const {
		setTarget,
		removeTarget,
		options,
		frames,
		handleDraggableUpdate,
	} = useMoveable(slides, setSlides);
	// const { generateElements } = useUtils(removeTarget, setTarget);
	const { onDragStart } = useEvents();

	useEffect(() => {
		const onDelete = e => {
			if (
				currentlyFocusedElement.draggableId &&
				currentlyFocusedElement.slideId &&
				e.key === 'Delete'
			) {
				setTarget(null, currentlyFocusedElement.slideId);
				removeTarget(
					currentlyFocusedElement.draggableId,
					currentlyFocusedElement.slideId
				);
			}
		};
		document.addEventListener('keyup', onDelete);
		return () => {
			document.removeEventListener('keyup', onDelete);
		};
	}, [
		currentlyFocusedElement.draggableId,
		currentlyFocusedElement.slideId,
		removeTarget,
		setTarget,
	]);

	const onAddNewSlide = () => {
		const newId = Date.now().toString();
		setSlides(prev => {
			const updatedSlides = {
				...prev,
				[newId]: {
					frames: {},
				},
			};
			frames.current = updatedSlides;
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
		handleDraggableUpdate,
		currentlyFocusedElement,
		setCurrentlyFocusedElement,
	};

	return (
		<ContainerSpacingWrapper container spacing={5}>
			<ContainerSpacingWrapper item xs={2} spacing={1} rightLeft>
				<ContainerWithCenteredItems
					style={{
						height: '3%',
					}}
				/>
				<LazyToolBox onDragStart={onDragStart} />
			</ContainerSpacingWrapper>
			<ContainerSpacingWrapper item xs={8} spacing={1} rightLeft>
				<ContainerWithCenteredItems
					style={{
						height: '3%',
					}}
				/>
				<ContainerTitle>
					Slides{' '}
					<Drawer
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
								console.log(data);
								debugger;
							}}
							defaultValues={{}}
						/>
					</Drawer>
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
							// key={slide.id}
							// frames={slide.frames}
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
				<Spacer direction="bottom" spacing="2" />
				<ContainerWithCenteredItems>
					<Typography variant="h5">
						Config (Temporary - For Dev)
					</Typography>
					<PrettyJson json={JSON.stringify(slides)} />
				</ContainerWithCenteredItems>
			</ContainerSpacingWrapper>
			<ContainerSpacingWrapper item xs={2} spacing={1} rightLeft>
				<ContainerWithCenteredItems
					style={{
						height: '3%',
					}}
				/>
				<LazyConfigBox />
				{/* <ContainerSpacingWrapper spacing={2} topBottom rightLeft>
				</ContainerSpacingWrapper> */}
			</ContainerSpacingWrapper>
		</ContainerSpacingWrapper>
	);
};

export default SlideBuilder;
