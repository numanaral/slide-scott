// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@material-ui/core';
import useResizeAware from 'react-resize-aware';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Bubble = styled.div`
	padding: 10px;
	overflow: auto;
	${({ theme, $width, $height }) => `	
		border-radius: ${theme.shape.borderRadius}px;
		border: 2px solid ${theme.palette.secondary.main};
		width: ${$width}px;
		height: ${$height}px;
	`}
	:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 25%;
		width: 0;
		height: 0;
		border: 1.5em solid transparent;
		${({ theme }) => `	
			border-top-color: ${theme.palette.secondary.main};
		`}
		border-bottom: 0;
		border-left: 0;
		margin-left: -0.75em;
		margin-bottom: -1.5em;
	}
`;

const ChatBubble = ({ text }) => {
	const [resizeListener, sizes] = useResizeAware();
	const { width, height } = sizes;

	return (
		<Wrapper noPadding noBg>
			{resizeListener}
			<Bubble $width={width} $height={height}>
				<Typography>{text}</Typography>
			</Bubble>
		</Wrapper>
	);
};

export { Bubble };
export default ChatBubble;
