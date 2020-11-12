import styled from 'styled-components';

const StyledWrapper = styled.span`
	${({ theme, $direction, $spacing }) => `
		margin-${$direction}: ${theme.spacing($spacing)}px;
	`}
`;

export default StyledWrapper;
