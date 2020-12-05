import React, { cloneElement, useState } from 'react';
import { Drawer as MuiDrawer } from '@material-ui/core';
import styled from 'styled-components';

import { propTypes, defaultProps } from './types';

const Wrapper = styled.div`
	width: 50vw;
	height: 100vh;
	/* width: auto; */
`;

const Drawer = ({ button, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	return (
		<>
			{cloneElement(button, { onClick: onOpen })}
			<MuiDrawer anchor="right" open={isOpen} onClose={onClose}>
				<Wrapper role="presentation">{children}</Wrapper>
			</MuiDrawer>
		</>
	);
};

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

export default Drawer;
