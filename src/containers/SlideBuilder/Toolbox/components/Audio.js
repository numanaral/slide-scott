// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';

import Wrapper from './Wrapper';

const Audio = ({ src, alt }) => (
	<Wrapper noPadding noBg>
		{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
		<audio src={src} alt={alt} controls width="100%" height="100%" />
	</Wrapper>
);

export default Audio;
