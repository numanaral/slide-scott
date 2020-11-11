import { Link } from '@material-ui/core';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { NAV_LIST } from 'routes/Routes';

// TODO: When user roles are created, ensure the links
// don't show up if the user doesn't have the role
const Links = () =>
	NAV_LIST.map(link => (
		<Link
			component={ReactRouterLink}
			key={link.to}
			to={link.to}
			style={{ marginRight: 10 }}
		>
			{link.text}
		</Link>
	));

export default Links;
