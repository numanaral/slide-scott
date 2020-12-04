import { useState } from 'react';
// import React, { useState } from 'react';

// import { SadIcon, HappyIcon } from 'icons';

import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const useHandleSubmit = (correctAnswer = '') => {
	const [error, setError] = useState(false);
	const [studentAnswer, setStudentAnswer] = useState('');
	const { notifySuccess, notifyError } = useNotificationProvider();

	const onAnswer = e => {
		setStudentAnswer(
			(typeof e === 'string' && e) || e?.target?.value || ''
		);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (studentAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
			setError(false);
			notifySuccess('Correct answer!');
			// notifySuccess(
			// 	<>
			// 		Correct answer! <HappyIcon />
			// 	</>
			// );
			return;
		}
		setError(true);
		notifyError('Wrong answer!');
		// notifyError(
		// 	<>
		// 		Wrong answer! <SadIcon />
		// 	</>
		// );
	};

	return {
		studentAnswer,
		error,
		onAnswer,
		onSubmit,
	};
};

export default useHandleSubmit;
