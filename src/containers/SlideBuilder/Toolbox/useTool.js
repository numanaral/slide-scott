import React from 'react';

import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import Form from 'components/Form';
import useProfile from 'store/firebase/hooks/useProfile';
import { TOOL_TYPES } from './config';

const useTool = setSlides => {
	const { bitmoji } = useProfile();
	const { openComponentDialog, closeDialog } = useDialogProvider();

	const handleDraggable = async (
		slideId,
		newProps,
		successCallback,
		draggableId = null,
		defaultValues = {}
	) => {
		const { draggableType } = newProps;
		const { default: TOOLS } = await import('./config');
		const { name, schema, items, type } = TOOLS[draggableType].settings;

		const targetId = draggableId || `cloned-${draggableType}-${Date.now()}`;

		const updateSlides = (
			componentProps = null,
			shouldCloseDialog = false
		) => {
			setSlides(prev => {
				const newFramesForSlide = {
					...prev[slideId].frames,
					[targetId]: {
						...prev[slideId].frames[targetId],
						...newProps,
						componentType: type,
						componentProps: componentProps || {},
					},
				};

				if (shouldCloseDialog) closeDialog();
				successCallback(targetId);
				return {
					...prev,

					[slideId]: {
						frames: newFramesForSlide,
					},
				};
			});
		};

		if (!items) {
			if (type === TOOL_TYPES.BITMOJI) {
				updateSlides(bitmoji);
				return;
			}
			// prop-less elements
			updateSlides();
		}

		openComponentDialog(
			`Create new ${name}`,
			<Form
				items={items}
				schema={schema}
				submitText="Save"
				defaultValues={defaultValues}
				onSubmit={data => {
					updateSlides(data, true);
				}}
			/>
		);
	};

	return handleDraggable;
};

export default useTool;
