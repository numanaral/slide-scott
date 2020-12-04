// TODO: prop-types
/* eslint-disable react/prop-types */
import { Typography } from '@material-ui/core';
import React from 'react';

import Wrapper from './Wrapper';

const Text = ({ text }) => (
	<Wrapper noPadding>
		<Typography>{text}</Typography>
	</Wrapper>
);

export default Text;
