import CanvasDrawer, { useCanvasDrawer } from 'components/CanvasDrawer';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import MouseTrail from 'components/MouseTrail';
import SlideViewer from 'components/SlideViewer';
import React, { useEffect, useRef } from 'react';
import useWatchSlide from 'store/firebase/hooks/slides/useWatchSlide';
import usePresent from 'store/firebase/hooks/usePresent';
import {
	singleViewRouterPropTypes,
	singleViewRouterDefaultProps,
} from './types';

const ViewSlideLive = ({
	match: {
		params: { id },
	},
}) => {
	const { slide, pending, error } = useWatchSlide(id);
	const { presenterCoordinates } = usePresent(id);

	const { canvasProps, canvasRef } = useCanvasDrawer({
		disabled: true,
		catenaryColor: 'transparent',
		brushColor: 'transparent',
	});

	const isFirstMount = useRef(true);

	useEffect(() => {
		if (isFirstMount.current) {
			if (!presenterCoordinates.drawing) return;
			canvasRef.current.loadSaveData(presenterCoordinates.drawing);
			isFirstMount.current = false;
			return;
		}
		try {
			const drawing = JSON.parse(presenterCoordinates.drawing);
			if (!drawing.lines.length) {
				canvasRef.current.clear();
				return;
			}
			const newDrawing = [...drawing.lines].pop();
			canvasRef.current.simulateDrawingLines({ lines: [newDrawing] });
		} catch (err) {
			console.log(err);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [presenterCoordinates.drawing]);

	return (
		<ContainerWithCenteredItems vertical>
			<MouseTrail points={presenterCoordinates} />
			<CanvasDrawer
				{...canvasProps}
				ref={canvasRef}
				style={{ pointerEvents: 'none' }}
			/>
			{/* <CanvasDrawer
				{...canvasProps}
				ref={ref => {
					canvasRef.current = ref;
				}}
			/> */}
			{pending || error || (
				<SlideViewer
					page={presenterCoordinates.page}
					showButtons={false}
					{...slide}
				/>
			)}
		</ContainerWithCenteredItems>
	);
};

ViewSlideLive.propTypes = singleViewRouterPropTypes;
ViewSlideLive.defaultProps = singleViewRouterDefaultProps;

export default ViewSlideLive;
