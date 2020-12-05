import React from 'react';
import { Typography } from '@material-ui/core';

import Spacer from 'components/Spacer';
import FullSizeGrid from 'components/FullSizeGrid';
import DemoCards from './DemoCards';
import MySlideshows from './MySlideshows';

const Library = () => {
	return (
		<FullSizeGrid container spacing={3}>
			<FullSizeGrid style={{ marginLeft: 10 }}>
				<Typography variant="h3"> My Slides </Typography>
			</FullSizeGrid>
			<MySlideshows />
			<Spacer direction="top" spacing="5" />
			<FullSizeGrid style={{ marginLeft: 10 }}>
				<Typography variant="h3"> Demo Slideshows </Typography>
			</FullSizeGrid>
			<DemoCards />
		</FullSizeGrid>
	);
};

export default Library;
