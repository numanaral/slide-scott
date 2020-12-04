// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';

import Wrapper from './Wrapper';

const Image = ({ src, alt }) => (
	<Wrapper noPadding noBg>
		<img src={src} alt={alt} width="100%" height="100%" />
	</Wrapper>
);

export default Image;
