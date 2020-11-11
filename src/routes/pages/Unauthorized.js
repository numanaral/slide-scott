import React from 'react';

import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const Unauthorized = ({ location }) => {
	const referrer = location?.state?.referrer;
	return (
		<div>
			<h1>403 - FORBIDDEN :(</h1>
			You do not have access to this page!
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

Unauthorized.propTypes = routerBasePropTypes;
Unauthorized.defaultProps = routerBaseDefaultProps;

export default Unauthorized;
