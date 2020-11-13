import React from 'react';
import styled from 'styled-components';

import FullSizeGrid from 'components/FullSizeGrid';
import { propTypes, defaultProps } from './types';

const Wrapper = styled(FullSizeGrid)`
	${({ theme, $topBottom, $rightLeft }) => {
		const spacing = `${theme.spacing(1)}px`;
		const topBottom = ($topBottom && spacing) || '0';
		const rightLeft = ($rightLeft && spacing) || '0';
		return `
			padding: ${topBottom} ${rightLeft};
		`;
	}}
`;

const ContainerSpacingWrapper = ({ topBottom, rightLeft, ...rest }) => (
	<Wrapper $topBottom={topBottom} $rightLeft={rightLeft} {...rest} />
);

ContainerSpacingWrapper.propTypes = propTypes;
ContainerSpacingWrapper.defaultProps = defaultProps;

export default ContainerSpacingWrapper;
