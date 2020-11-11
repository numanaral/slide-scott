import React from 'react';

import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const NotFound = ({ location }) => {
	const referrer = location?.state?.referrer;
	return (
		<div>
			<h1>404 - PAGE NOT FOUND :(</h1>
			The page you are looking for might have been removed had its name
			changed or is temporarily unavailable.
			<br />
			<br />
			{referrer && (
				<>
					You requested the following url:
					<br />
					<a href={referrer}> {referrer} </a>
				</>
			)}
		</div>
	);
};

NotFound.propTypes = routerBasePropTypes;
NotFound.defaultProps = routerBaseDefaultProps;

export default NotFound;
