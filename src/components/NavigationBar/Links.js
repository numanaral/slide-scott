import { Link } from '@material-ui/core';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { NAV_LIST } from 'routes/Routes';

import styled from 'styled-components';

const StyledLink = styled(Link)`
	margin-left: 20px;
`;

// TODO: When user roles are created, ensure the links
// don't show up if the user doesn't have the role
const Links = () =>
	// Ignore home as we got the logo link
	NAV_LIST.filter(link => link.text !== 'Home').map(link => (
		<StyledLink
			component={ReactRouterLink}
			variant="h6"
			underline="none"
			color="textPrimary"
			key={link.to}
			to={link.to}
		>
			{link.text}
		</StyledLink>
	));

export default Links;
