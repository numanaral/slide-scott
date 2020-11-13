import React, { createElement, useEffect, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';

import FullSizeGrid from 'components/FullSizeGrid';
import * as icons from './icons';
import { propTypes, defaultProps } from './types';
import Tool, { MARGIN } from './Tool';
import ContainerTitle from '../shared/ContainerTitle';
import ContainerBody from '../shared/ContainerBody';

const Toolbox = ({ onDragStart }) => {
	const toolboxRef = useRef();
	const [toolSize, setToolSize] = useState(70);

	useEffect(() => {
		const handleResize = () => {
			if (toolboxRef.current) {
				// margin on left, in-between and right
				const itemSize =
					(toolboxRef.current.clientWidth - MARGIN * 8) / 2;
				if (itemSize > 60) setToolSize(itemSize);
				else setToolSize(toolboxRef.current.clientWidth - MARGIN * 4);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	console.log(toolSize);

	return (
		<FullSizeGrid innerRef={toolboxRef}>
			<ContainerTitle> Tools </ContainerTitle>
			<ContainerBody container alignContent="flex-start">
				{Object.keys(icons).map(icon => (
					<Tool
						container
						key={icon}
						tool-size={toolSize}
						draggable="true"
						onDragStart={onDragStart}
						draggable-classifier={`draggable-${icon.toLowerCase()}`}
					>
						<Grid
							className="icon-text"
							container
							item
							xs={12}
							justify="center"
							alignItems="flex-end"
						>
							{icon}
						</Grid>
						<Grid
							container
							item
							xs={12}
							justify="center"
							alignItems="flex-start"
						>
							{createElement(icons[icon])}
						</Grid>
					</Tool>
				))}
				more tools here...
			</ContainerBody>
		</FullSizeGrid>
	);
};

Toolbox.propTypes = propTypes;
Toolbox.defaultProps = defaultProps;

export default Toolbox;
