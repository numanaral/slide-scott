import React from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';

import PrettyLink from 'components/PrettyLink';
import AnimatedHeartIcon from './AnimatedHeartIcon';

const ColoredBox = styled(Grid)`
	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
	`}
	padding: 3px 20px;
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 5;
`;
const TypographyWrapper = props => <Typography variant="caption" {...props} />;

const Footer = () => {
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		!smAndDown && (
			<ColoredBox container item alignItems="center" justify="flex-end">
				<TypographyWrapper>Created with</TypographyWrapper>
				<AnimatedHeartIcon />
				<TypographyWrapper>by:&nbsp;</TypographyWrapper>
				<PrettyLink
					external
					variant="caption"
					to="https://numanaral.github.io/?ref=slide-scott"
				>
					Numan Aral
				</PrettyLink>
			</ColoredBox>
		)
	);
};

export default Footer;
