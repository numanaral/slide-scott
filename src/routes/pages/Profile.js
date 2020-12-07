import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import React from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';

import { ThemeIcon, AnimationIcon, PaletteIcon } from 'icons';
import LazyList from 'components/List/Lazy';
import { itemTypes, SPACER } from 'components/List/constants';
import ThemeToggle from 'containers/ThemeToggle';
import TooltipButton from 'components/TooltipButton';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';

const noop = () => null;

const ComingSoon = () => (
	<TooltipButton
		tooltip="Pick a color"
		text="Pick a color"
		variant="contained"
		color="primary"
		icon={PaletteIcon}
		onClick={noop}
		disabled
	/>
);
const Switch = () => <MuiSwitch disabled />;

const PREFERENCE_LIST = [
	{
		type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
		primaryText: 'VIEW SETTINGS',
	},
	{
		primaryText: 'Theme',
		icon: ThemeIcon,
		// TODO: If I decide to add redux, won't need this complication here
		// but it's not needed right now
		secondaryAction: <ThemeToggle />,
	},
	{
		primaryText: 'Primary Color',
		icon: PaletteIcon,
		secondaryAction: ComingSoon,
	},
	{
		primaryText: 'Secondary Color',
		icon: PaletteIcon,
		secondaryAction: ComingSoon,
	},
	SPACER,
	{
		type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
		primaryText: 'ANIMATIONS',
		secondaryText: 'Disable/Modify animations',
	},
	{
		primaryText: 'Animations',
		secondaryText: 'Turns on/off all the animations',
		icon: AnimationIcon,
		secondaryAction: Switch,
		disabled: true,
	},
];

const Profile = () => (
	<ContainerWithCenteredItems vertical horizontal>
		<PaperContainerWithSpacing padding="50px !important">
			<LazyList list={PREFERENCE_LIST} />
		</PaperContainerWithSpacing>
	</ContainerWithCenteredItems>
);

export default Profile;
