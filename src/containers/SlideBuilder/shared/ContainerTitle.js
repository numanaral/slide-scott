import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Spacer from 'components/Spacer';

const Wrapper = styled(Grid)`
	height: 5%;
`;

const ContainerTitle = props => (
	<Wrapper container justify="center" alignItems="center">
		<Typography variant="h5" {...props} />
		<Spacer direction="bottom" spacing="5" />
	</Wrapper>
);

export default ContainerTitle;
