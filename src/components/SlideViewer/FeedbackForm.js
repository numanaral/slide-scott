// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import * as yup from 'yup';

import Form, { FORM_COMPONENT_TYPES } from 'components/Form';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';

const feedbackSchema = yup.object().shape({
	rating: yup
		.number()
		.label('Rating')
		.oneOf([1, 2, 3, 4, 5])
		.typeError('Must be a number, between 1 to 5.')
		.required(),
	whatDidYouLike: yup.string().label('What Did You Like').required(),
	whatDidYouDislike: yup.string().label('What Did You Dislike').required(),
});

const items = [
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'Rating',
		name: 'rating',
		required: true,
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'What Did You Like',
		name: 'whatDidYouLike',
		required: true,
	},
	{
		type: FORM_COMPONENT_TYPES.TEXT,
		label: 'What Did You Dislike',
		name: 'whatDidYouDislike',
		required: true,
	},
];

// Temporarily-fake feedback form
const FeedbackForm = ({ setSent }) => {
	const { closeDialog } = useDialogProvider();
	const { notifySuccess } = useNotificationProvider();

	const onSubmit = () => {
		notifySuccess('Feedback submission was successfully sent!');
		closeDialog();
		setSent(true);
	};

	return <Form schema={feedbackSchema} items={items} onSubmit={onSubmit} />;
};

export default FeedbackForm;
