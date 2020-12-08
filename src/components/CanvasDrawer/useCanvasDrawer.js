import { useRef } from 'react';
import { useTheme } from '@material-ui/core';

const useCanvasDrawer = props => {
	const theme = useTheme();
	const canvasRef = useRef();
	const canvasProps = {
		loadTimeOffset: 5,
		lazyRadius: 5,
		brushRadius: 2,
		brushColor: theme.palette.secondary.main,
		backgroundColor: 'transparent',
		catenaryColor: theme.palette.primary.main,
		hideGrid: true,

		canvasWidth: '100%',
		canvasHeight: '100%',
		...props,
	};

	return {
		canvasProps,
		canvasRef,
	};
};

export default useCanvasDrawer;
