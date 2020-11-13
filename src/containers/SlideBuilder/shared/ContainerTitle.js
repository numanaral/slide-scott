import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled(Grid)`
	height: 5%;
`;

const ContainerTitle = props => (
	<Wrapper container justify="center" alignItems="center">
		<Typography variant="h5" {...props} />
	</Wrapper>
);

export default ContainerTitle;
