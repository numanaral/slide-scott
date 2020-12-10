import React, {
	createElement,
	Fragment,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Grid, Typography } from '@material-ui/core';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Spacer from 'components/Spacer';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import { propTypes, defaultProps } from './types';
import Tool, { MARGIN } from './Tool';
import ContainerTitle from '../shared/ContainerTitle';
import ContainerBody from '../shared/ContainerBody';
import TOOLS from './config';

const Toolbox = ({ onDragStart }) => {
	const { notifyInfo } = useNotificationProvider();
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

	const toolList = Object.keys(TOOLS).reduce(
		(acc, key) => {
			const tool = TOOLS[key];
			acc[(tool.interactive && 'Interactive') || 'Static'].push(tool);
			return acc;
		},
		{
			Interactive: [],
			Static: [],
		}
	);

	return (
		<ContainerWithCenteredItems
			style={{
				height: '94%',
				overflow: 'auto',
				position: 'relative',
			}}
			innerRef={toolboxRef}
		>
			<ContainerTitle> Tools </ContainerTitle>
			<ContainerBody
				container
				justify="flex-start"
				alignContent="flex-start"
			>
				{Object.keys(toolList).map(key => (
					<Fragment key={key}>
						<Spacer direction="top" spacing="2" />
						<ContainerWithCenteredItems horizontal>
							<Typography>{key}</Typography>
						</ContainerWithCenteredItems>
						{toolList[key].map(
							({ settings: { icon, name, type } }) => (
								<Tool
									onClick={() =>
										notifyInfo(
											'Drag into the slide container.'
										)
									}
									container
									key={name}
									tool-size={toolSize}
									draggable="true"
									onDragStart={onDragStart}
									draggable-type={type}
								>
									<Grid
										className="icon-text"
										container
										item
										xs={12}
										justify="center"
										alignItems="flex-end"
										style={{ textAlign: 'center' }}
									>
										{name}
									</Grid>
									<Grid
										container
										item
										xs={12}
										justify="center"
										alignItems="flex-start"
									>
										{createElement(icon)}
									</Grid>
								</Tool>
							)
						)}
					</Fragment>
				))}
			</ContainerBody>
		</ContainerWithCenteredItems>
	);
};

Toolbox.propTypes = propTypes;
Toolbox.defaultProps = defaultProps;

export default Toolbox;
