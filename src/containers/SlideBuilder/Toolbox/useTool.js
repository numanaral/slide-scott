import React from 'react';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import Form from 'components/Form';

const useTool = setSlides => {
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

		openComponentDialog(
			`Create new ${name}`,
			<Form
				items={items}
				schema={schema}
				submitText="Save"
				defaultValues={defaultValues}
				onSubmit={data => {
					setSlides(prev => {
						const newFramesForSlide = {
							...prev[slideId].frames,
							[targetId]: {
								...prev[slideId].frames[targetId],
								...newProps,
								componentType: type,
								componentProps: data,
							},
						};

						closeDialog();
						successCallback(targetId);
						return {
							...prev,

							[slideId]: {
								frames: newFramesForSlide,
							},
						};
					});
				}}
			/>
		);
	};

	return handleDraggable;
};

export default useTool;
