import React from 'react';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import LazyVerticalTabs from 'components/VerticalTabs/Lazy';
import { AnalyticsIcon, LayerIcon, BookmarksIcon } from 'icons';
import Library from './Library';
import Analytics from './Analytics';
import Resources from './Resources';

const Dashboard = () => {
	const list = [
		{ label: 'Library', panel: <Library />, icon: LayerIcon },
		{ label: 'Analytics', panel: <Analytics />, icon: AnalyticsIcon },
		{ label: 'Resources', panel: <Resources />, icon: BookmarksIcon },
	];

	return (
		<>
			{/* <ContainerWithCenteredItems>Dashboard</ContainerWithCenteredItems> */}
			<ContainerWithCenteredItems vertical>
				<LazyVerticalTabs list={list} />
			</ContainerWithCenteredItems>
		</>
	);
};

export default Dashboard;
