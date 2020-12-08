import TooltipButton from 'components/TooltipButton';
import styled from 'styled-components';

const SPACING = 20;
const SIZE = 70;
const TOP = '40vh';
const BigTooltipButton = styled(TooltipButton)`
	position: absolute;
	z-index: 1301;
	top: ${TOP};

	${({ theme, $left, $bottomCenter, $idle, $rightBottom }) => {
		const side =
			($bottomCenter &&
				`	
					top: auto;
					bottom: ${SPACING * 2}px;
		`) ||
			`${($left && 'left') || 'right'}: ${SPACING}px;`;

		return `
			${side}
			& .MuiSvgIcon-root {
				transition: ${theme.transitions.duration.standard}ms;
				font-size: ${($idle && '0') || SIZE}px;
			}
			${($rightBottom && `top: calc(${TOP} + ${SIZE * 1.5}px);`) || ''}
		`;
	}};
`;

export default BigTooltipButton;
