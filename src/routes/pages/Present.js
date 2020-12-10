import React, { useEffect, useRef, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

import CanvasDrawer, { useCanvasDrawer } from 'components/CanvasDrawer';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import MouseTrail from 'components/MouseTrail';
import SlideViewer, { BigTooltipButton } from 'components/SlideViewer';
import useWatchSlide from 'store/firebase/hooks/slides/useWatchSlide';
import usePresent from 'store/firebase/hooks/usePresent';
import { ClearIcon } from 'icons';
import {
	singleViewRouterPropTypes,
	singleViewRouterDefaultProps,
} from './types';

const Present = ({
	match: {
		params: { id },
	},
}) => {
	const [idle, setIdle] = useState(false);
	const onIdle = () => setIdle(true);
	const onActive = () => setIdle(false);
	// const onAction = () => {};
	useIdleTimer({
		timeout: 1000 * 3,
		onIdle,
		onActive,
		debounce: 500,
	});

	const [page, setPage] = useState(0);
	const { slide, pending, error } = useWatchSlide(id);
	const {
		presenterCoordinates,
		updateLiveOptions,
		updatePage,
		updateDrawing,
		clearDrawing,
	} = usePresent(id);

	const onChange = ({ getSaveData }) => {
		const saveData = getSaveData();
		updateDrawing(saveData);
	};

	const { canvasProps, canvasRef } = useCanvasDrawer({
		onChange,
	});

	const onClear = () => {
		canvasRef.current.clear();
		clearDrawing();
	};

	const isCalled = useRef(false);

	useEffect(() => {
		if (!isCalled.current) {
			if (!presenterCoordinates.drawing) return;
			canvasRef.current.loadSaveData(presenterCoordinates.drawing);
			isCalled.current = true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [presenterCoordinates.drawing]);

	return (
		<ContainerWithCenteredItems vertical style={{ overflow: 'hidden' }}>
			<MouseTrail
				key={page}
				onMouseMove={updateLiveOptions}
				page={page}
			/>
			<CanvasDrawer {...canvasProps} ref={canvasRef} />
			<BigTooltipButton
				$bottomCenter
				$idle={idle}
				tooltip="Clear Drawings"
				icon={ClearIcon}
				onClick={onClear}
			/>
			{pending || error || (
				<SlideViewer
					onPageSelect={p => {
						setPage(p);
						updatePage(p);
					}}
					{...slide}
				/>
			)}
		</ContainerWithCenteredItems>
	);
};

Present.propTypes = singleViewRouterPropTypes;
Present.defaultProps = singleViewRouterDefaultProps;

export default Present;
