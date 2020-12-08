import React from 'react';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import LazyVerticalTabs from 'components/VerticalTabs/Lazy';
import { AnalyticsIcon, LayerIcon, BookmarksIcon } from 'icons';
import Slideshows from './Slideshows';
import Analytics from './Analytics';
import Resources from './Resources';

const Dashboard = () => {
	const list = [
		{ label: 'Slideshows', panel: <Slideshows />, icon: LayerIcon },
		{ label: 'Analytics', panel: <Analytics />, icon: AnalyticsIcon },
		{ label: 'Resources', panel: <Resources />, icon: BookmarksIcon },
	];

	return (
		<>
			<ContainerWithCenteredItems vertical>
				<LazyVerticalTabs list={list} />
			</ContainerWithCenteredItems>
		</>
	);
};

export default Dashboard;
