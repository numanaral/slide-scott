// TODO: prop-types
/* eslint-disable react/prop-types */
import PrettyLink from 'components/PrettyLink';
import React from 'react';

import Wrapper from './Wrapper';

const Link = ({ url, displayText, arrow }) => (
	<Wrapper noPadding noBg>
		<PrettyLink arrow={arrow} to={url} external>
			{displayText}
		</PrettyLink>
	</Wrapper>
);

export default Link;
