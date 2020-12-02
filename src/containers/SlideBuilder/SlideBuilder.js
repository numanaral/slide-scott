import React, { useEffect } from 'react';

import LazyMoveable from 'components/Moveable/Lazy';
import FullSizeGrid from 'components/FullSizeGrid';
import ContainerSpacingWrapper from 'components/ContainerSpacingWrapper';
import TooltipButton from 'components/TooltipButton';
import { AddIcon } from 'icons';
import PrettyJson from 'components/PrettyJson';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { Typography } from '@material-ui/core';
import Spacer from 'components/Spacer';
import useLocalStorage from 'hooks/useLocalStorage';
import useUtils from 'components/Moveable/useUtils';
import useMoveable from 'components/Moveable/useMoveable';
import useEvents from 'components/Moveable/useEvents';
import { smoothScroll } from 'utils';
import LazyToolBox from './Toolbox/Lazy';
import LazySlideBox from './SlideBox/Lazy';
import LazyConfigBox from './ConfigBox/Lazy';
import ContainerTitle from './shared/ContainerTitle';

const SLIDES_LOCAL_STORAGE_KEY = 'slides-draft';

const SlideBuilder = () => {
	const [slides, setSlides] = useLocalStorage(SLIDES_LOCAL_STORAGE_KEY, {
		[Date.now().toString()]: {
			frames: {},
		},
	});

	const setFramesForSlide = (frames, slideId) => {
		debugger;
		if (!slideId) return;
		setSlides(prev => {
			// const index = prev.findIndex(data => data.id === slideId);
			// return editItemInArray(prev, index, frames);
			return {
				...prev,
				[slideId]: {
					frames,
				},
			};
		});
	};

	const { setTarget, removeTarget, options, frames } = useMoveable(
		slides,
		setFramesForSlide
	);
	const { generateElements } = useUtils(removeTarget, setTarget);
	const { onDragStart } = useEvents();

	console.log({
		slides,
		frames,
	});

	// const [previousFrames, setPreviousFrames] = useLocalStorage(
	// 	SLIDE_BUILDER_PREVIOUS_FRAMES_KEY,
	// 	{}
	// );

	// Only generate the previous elements in the first render
	useEffect(() => {
		const generatePreviousElements = async () => {
			// NOTE: We can just call non-lazy versions but
			// this preloading is only temporary so...
			// This waits for these two components to load
			// before generating the previous frames
			await LazyToolBox.load();
			await LazySlideBox.load();
			generateElements(slides);
		};

		generatePreviousElements();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		}, 200);
	};

	const sharedProps = {
		setTarget,
		removeTarget,
		setFramesForSlide,
	};

	return (
		<FullSizeGrid container>
			<FullSizeGrid item xs={2}>
				<ContainerSpacingWrapper spacing={2} topBottom rightLeft>
					<LazyToolBox onDragStart={onDragStart} />
				</ContainerSpacingWrapper>
			</FullSizeGrid>
			<FullSizeGrid item xs={8}>
				{/* <ContainerSpacingWrapper
					spacing={2}
					topBottom
					style={{ height: 400 }}
				>
				</ContainerSpacingWrapper> */}
				<Spacer direction="top" spacing="2" />
				<ContainerTitle> Slides </ContainerTitle>
				<ContainerWithCenteredItems
					style={{
						height: 500,
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
							id={key}
							index={ind + 1}
						/>
					))}
				</ContainerWithCenteredItems>
				<Spacer direction="bottom" spacing="2" />
				<ContainerWithCenteredItems>
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
			</FullSizeGrid>
			<FullSizeGrid item xs={2}>
				<ContainerSpacingWrapper spacing={2} topBottom rightLeft>
					<LazyConfigBox />
				</ContainerSpacingWrapper>
			</FullSizeGrid>
		</FullSizeGrid>
	);
};

export default SlideBuilder;
