import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import PrettyJson from 'components/PrettyJson';
import FullSizeGrid from 'components/FullSizeGrid';
import Droppable from './Droppable';
import { propTypes, defaultProps } from './types';
import ContainerTitle from '../shared/ContainerTitle';
import ContainerBody from '../shared/ContainerBody';

const SlideBox = ({ onDrop, allowDrop, onDropZoneClick, frames }) => (
	<FullSizeGrid>
		<ContainerTitle> Slide </ContainerTitle>
		<ContainerBody style={{ height: '60%' }}>
			<Droppable
				className="container"
				id="container"
				onDrop={onDrop}
				onDragOver={allowDrop}
				onClick={onDropZoneClick}
			/>
		</ContainerBody>
		<Grid container justify="center" style={{ height: '30px' }}>
			<Typography variant="h5">Config (Temporary - For Dev)</Typography>
		</Grid>
		<Grid item style={{ height: '29%' }}>
			<PrettyJson json={frames} />
		</Grid>
	</FullSizeGrid>
);

SlideBox.propTypes = propTypes;
SlideBox.defaultProps = defaultProps;

export default SlideBox;
