import React, { useEffect } from 'react';

import useMoveable from 'components/Moveable/useMoveable';
import useEvents from 'components/Moveable/useEvents';
import LazyMoveable from 'components/Moveable/Lazy';
import FullSizeGrid from 'components/FullSizeGrid';
import ContainerSpacingWrapper from 'components/ContainerSpacingWrapper';
import useLocalStorage from 'hooks/useLocalStorage';
import useUtils from 'components/Moveable/useUtils';
import LazyToolBox from './Toolbox/Lazy';
import LazySlideBox from './SlideBox/Lazy';
import LazyConfigBox from './ConfigBox/Lazy';

const SLIDE_BUILDER_PREVIOUS_FRAMES_KEY = 'previous-frames';

const SlideBuilder = () => {
	const [previousFrames, setPreviousFrames] = useLocalStorage(
		SLIDE_BUILDER_PREVIOUS_FRAMES_KEY,
		{}
	);
	const { setTarget, removeTarget, options, frames } = useMoveable(
		previousFrames,
		setPreviousFrames
	);

	const {
		showCurrentDeleteButtonAndHideOthers,
		cloneNewElement,
		generateElements,
	} = useUtils(removeTarget, setTarget);
	const { onDragStart, onDrop, allowDrop, onDropZoneClick } = useEvents(
		cloneNewElement,
		setTarget,
		showCurrentDeleteButtonAndHideOthers
	);

	// Only generate the previous elements in the first render
	useEffect(() => {
		const generatePreviousElements = async () => {
			// NOTE: We can just call non-lazy versions but
			// this preloading is only temporary so...
			// This waits for these two components to load
			// before generating the previous frames
			await LazyToolBox.load();
			await LazySlideBox.load();
			generateElements(previousFrames);
		};

		generatePreviousElements();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FullSizeGrid container>
			<FullSizeGrid item xs={2}>
				<ContainerSpacingWrapper topBottom rightLeft>
					<LazyToolBox onDragStart={onDragStart} />
				</ContainerSpacingWrapper>
			</FullSizeGrid>
			<FullSizeGrid item xs={8}>
				<ContainerSpacingWrapper topBottom>
					<LazyMoveable {...options} />
					<LazySlideBox
						onDrop={onDrop}
						allowDrop={allowDrop}
						onDropZoneClick={onDropZoneClick}
						frames={frames.current}
					/>
				</ContainerSpacingWrapper>
			</FullSizeGrid>
			<FullSizeGrid item xs={2}>
				<ContainerSpacingWrapper topBottom rightLeft>
					<LazyConfigBox />
				</ContainerSpacingWrapper>
			</FullSizeGrid>
		</FullSizeGrid>
	);
};

export default SlideBuilder;
