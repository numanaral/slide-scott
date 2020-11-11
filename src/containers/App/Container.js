import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled(Grid)`
	&.MuiGrid-root {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default Container;
