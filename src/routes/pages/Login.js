import React from 'react';
import styled from 'styled-components';
import { Divider, Grid, Typography } from '@material-ui/core';

import LoadingIndicator from 'components/LoadingIndicator';
import { SadIcon } from 'icons';
import LazyPageContainer from 'components/PageContainer/Lazy';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const StyledSadIcon = styled(SadIcon)`
	font-size: 3rem;
	margin-left: 10px;
`;

const Login = ({ error }) => {
	return (
		<LazyPageContainer>
			<Grid container item alignItems="center" justify="center">
				<Typography variant="h3" component="h1">
					{(error && 'AUTHENTICATION FAILED') || 'AUTHENTICATING'}
				</Typography>
				{(error && <StyledSadIcon />) || <LoadingIndicator />}
			</Grid>
			{error && (
				<>
					<br />
					<Divider />
					<br />
					<Typography>{error}</Typography>
					<br />
					<Divider />
				</>
			)}
		</LazyPageContainer>
	);
};

Login.propTypes = routerBasePropTypes;
Login.defaultProps = routerBaseDefaultProps;

export default Login;
