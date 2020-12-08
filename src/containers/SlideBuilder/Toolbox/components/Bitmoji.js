// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import useResizeAware from 'react-resize-aware';

import BitmojiComponent from 'components/Bitmoji';
import Wrapper from './Wrapper';

const Bitmoji = props => {
	const [resizeListener, sizes] = useResizeAware();

	return (
		<Wrapper noPadding noBg>
			{resizeListener}
			<BitmojiComponent {...props} style={{ ...sizes }} />
		</Wrapper>
	);
};

export default Bitmoji;
