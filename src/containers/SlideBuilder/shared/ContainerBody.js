import React from 'react';
import styled from 'styled-components';
import FullSizeGrid from 'components/FullSizeGrid';

const Wrapper = styled(FullSizeGrid)`
	padding: 10px;
	overflow: auto;
	height: 94%;
	${({ theme }) => `
		border-radius: ${theme.shape.borderRadius}px;
		background-color: ${theme.palette.background.paper}
	`}
`;

const ContainerBody = props => (
	<Wrapper container item justify="center" {...props} />
);

export default ContainerBody;
