import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import { SettingsIcon } from 'icons';
import TooltipButton from 'components/TooltipButton';
import Bitmoji, { OptionPicker } from 'components/Bitmoji';
import styled from 'styled-components';
import useProfile from 'store/firebase/hooks/useProfile';

const OptionWrapper = styled.div`
	overflow: hidden;
	width: 0%;

	${({ $isOpen }) => `
		${($isOpen && 'width: 100%;') || ''}
	`};
`;

const AnimatingContainerWithCenteredItems = styled(ContainerWithCenteredItems)`
	position: relative;
	& div {
		${({ theme }) => `
			transition: ${theme.transitions.create([''], {
				easing: theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.complex,
			})};
		`};
	}
`;

const RelativeGrid = styled(Grid)`
	position: relative;
`;

const CustomizationPanelToggle = styled(TooltipButton)`
	position: absolute;
	top: -10px;
	right: -10px;
	& .MuiSvgIcon-root {
		font-size: 50px;
	}
`;

const BitmojiPicker = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { bitmoji, updateBitmoji } = useProfile();

	const onToggleOptionPicker = () => {
		setIsOpen(v => !v);
	};

	return (
		<AnimatingContainerWithCenteredItems container alignItems="center">
			<Grid container justify="center" item xs={(isOpen && 4) || 11}>
				<RelativeGrid item xs="auto">
					<Bitmoji {...bitmoji} />
					<CustomizationPanelToggle
						tooltip="Customize Bitmoji"
						onClick={onToggleOptionPicker}
						icon={SettingsIcon}
					/>
				</RelativeGrid>
			</Grid>
			<Grid item xs={(isOpen && 8) || 1}>
				<OptionWrapper $isOpen={isOpen}>
					<OptionPicker options={bitmoji} onChange={updateBitmoji} />
				</OptionWrapper>
			</Grid>
		</AnimatingContainerWithCenteredItems>
	);
};

export default BitmojiPicker;
