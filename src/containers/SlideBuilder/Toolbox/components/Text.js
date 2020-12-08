// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@material-ui/core';

import Wrapper from './Wrapper';

const Text = ({ text, hasBg, bg }) => (
	<Wrapper noPadding noBg={!hasBg} bg={bg}>
		<Typography>{text}</Typography>
	</Wrapper>
);

export default Text;
