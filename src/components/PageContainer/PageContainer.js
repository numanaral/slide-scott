import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const PageContainer = styled(Paper)`
	&.MuiPaper-root {
		background-color: #424242;
		color: white;
	}
	width: 100%;
	height: 100%;
	justify-content: center;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow-y: auto;
	overflow-x: hidden;
	padding: 16px;
	@media only screen and (min-width: 768px) {
		justify-content: center;
		padding: 80px;
	}
`;

export default PageContainer;
