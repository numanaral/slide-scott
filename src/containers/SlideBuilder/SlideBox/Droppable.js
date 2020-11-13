import styled from 'styled-components';

const Droppable = styled.div`
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
	${({ theme }) => `
		border: 1px dashed ${theme.palette.getContrastText(
			theme.palette.background.level2
		)};
		& svg {
			fill: ${theme.palette.getContrastText(theme.palette.background.level2)};
			
		}
	`}
`;

export default Droppable;
