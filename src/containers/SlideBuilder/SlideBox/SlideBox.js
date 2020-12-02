import React from 'react';
import { Typography } from '@material-ui/core';

import FullSizeGrid from 'components/FullSizeGrid';
import useUtils from 'components/Moveable/useUtils';
import useEvents from 'components/Moveable/useEvents';
import Droppable from './Droppable';
import { propTypes, defaultProps } from './types';
import ContainerBody from '../shared/ContainerBody';

const SlideBox = ({ setTarget, removeTarget, id, index }) => {
	const { showCurrentDeleteButtonAndHideOthers, cloneNewElement } = useUtils(
		removeTarget,
		setTarget
	);

	const { onDrop, allowDrop, onDropZoneClick } = useEvents(
		cloneNewElement,
		setTarget,
		showCurrentDeleteButtonAndHideOthers
	);
	return (
		<FullSizeGrid>
			<ContainerBody style={{ position: 'relative' }}>
				<Typography> Slide {index} </Typography>
				<Droppable
					className="container"
					id={`container-${id}`}
					onDrop={onDrop}
					onDragOver={allowDrop}
					onClick={onDropZoneClick}
				/>
			</ContainerBody>
		</FullSizeGrid>
	);
};

SlideBox.propTypes = propTypes;
SlideBox.defaultProps = defaultProps;

export default SlideBox;
