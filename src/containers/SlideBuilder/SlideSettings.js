import React from 'react';
import * as yup from 'yup';

import Form, { FORM_COMPONENT_TYPES } from 'components/Form';
import { Box } from '@material-ui/core';

const items = [
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Title',
		name: 'title',
		required: true,
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Description',
		name: 'description',
		required: true,
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Thumbnail Image Url',
		name: 'thumbnailUrl',
		required: true,
	},
];

const slideSettingsSchema = yup.object().shape({
	title: yup.string().label('Title').required(),
	description: yup.string().label('Description').required(),
	thumbnailUrl: yup.string().url().label('Thumbnail Image Url'),
});

// eslint-disable-next-line react/prop-types
const SlideSettings = ({ onSubmit, defaultValues }) => {
	return (
		<Box width="100%" p={2}>
			<Form
				schema={slideSettingsSchema}
				items={items}
				onSubmit={onSubmit}
				defaultValues={defaultValues}
				style={{ width: '100%' }}
				// submitText="Submit"
			/>
		</Box>
	);
};

// SlideSettings.propTypes = propTypes;
// SlideSettings.defaultProps = defaultProps;

export default SlideSettings;
