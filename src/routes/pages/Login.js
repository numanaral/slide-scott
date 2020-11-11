import React from 'react';

import LoadingIndicator from 'components/LoadingIndicator';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const Login = ({ location: { search }, error }) => {
	return (
		<div>
			<h1>{(error && 'AUTHENTICATION FAILED') || 'AUTHENTICATING'}</h1>
			{(error && ':(') || <LoadingIndicator />}
			{error && (
				<>
					<br />
					<br />
					<p>{error}</p>
					<br />
				</>
			)}
			{error && <p>ReturnUrl: {search.replace('?returnUrl=', '')}</p>}
		</div>
	);
};

Login.propTypes = routerBasePropTypes;
Login.defaultProps = routerBaseDefaultProps;

export default Login;
