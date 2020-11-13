import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const MARGIN = 10;

const Tool = styled(Grid)`
	${({ theme, 'tool-size': toolSize }) => `
		margin: ${MARGIN}px;
		width: ${toolSize}px;
		height: ${toolSize}px;
		cursor: grab;
		transition: ${theme.transitions.create(
			['transform', 'background-color', 'padding', 'font-size'],
			{
				easing: theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.short,
			}
		)};
		font-size: 12px;
		border-radius: ${theme.shape.borderRadius}px;
		background-color: ${theme.palette.background.default};
		padding: ${theme.spacing(1)}px;

		& .icon-text {
			margin-bottom: 5px;
		}

		& svg, & .icon-text {
			transition: ${theme.transitions.create(['font-size', 'opacity'], {
				easing: theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.short,
			})};
		}

		&:hover {
			z-index: 1;
			transform: scale(1.3);
			box-shadow: ${theme.shadows[12]};
			& svg {
				color: ${theme.palette.primary.main};
				font-size: ${toolSize}px;
			}
			.icon-text {
				opacity: 0;
				font-size: 0px;
				height: 0;
				margin: 0;
				padding: 0;
			}
			padding: 0;
		}
	`}
`;

export { MARGIN };
export default Tool;
