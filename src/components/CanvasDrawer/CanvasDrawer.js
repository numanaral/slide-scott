import React, { forwardRef } from 'react';

import CanvasDraw from 'react-canvas-draw';

const CanvasDrawer = forwardRef((props, ref) => (
	<CanvasDraw
		{...props}
		style={{
			// eslint-disable-next-line react/prop-types
			...(props.style || {}),
			position: 'absolute',
		}}
		ref={ref}
	/>
));

export default CanvasDrawer;
