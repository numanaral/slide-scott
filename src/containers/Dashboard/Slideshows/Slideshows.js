import React from 'react';
import { Typography } from '@material-ui/core';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Spacer from 'components/Spacer';
import DemoCards from './DemoCards';
import MySlideshows from './MySlideshows';

const Library = () => {
	return (
		<ContainerWithCenteredItems container horizontal spacing={3}>
			<ContainerWithCenteredItems>
				<Typography variant="h3"> My Slides </Typography>
			</ContainerWithCenteredItems>
			<MySlideshows />
			<Spacer direction="top" spacing="5" />
			<ContainerWithCenteredItems>
				<Typography variant="h3"> Demo Slideshows </Typography>
			</ContainerWithCenteredItems>
			<DemoCards />
		</ContainerWithCenteredItems>
	);
};

export default Library;
