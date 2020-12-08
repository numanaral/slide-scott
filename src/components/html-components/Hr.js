import styled from 'styled-components';

const Hr = styled.hr`
	width: 100%;
	${({ theme }) => `
		border-color: ${theme.palette.primary.main};
	`}
`;

export default Hr;
