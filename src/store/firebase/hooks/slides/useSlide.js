import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { useFirestore } from 'react-redux-firebase';

import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useAuth from 'store/firebase/hooks/useAuth';
import LoadingIndicator from 'components/LoadingIndicator';
import NoAccess from 'components/NoAccess';

const useSlide = slideId => {
	const { notifyError } = useNotificationProvider();
	const [isPending, setIsPending] = useState(false);
	const [hasError, setHasError] = useState('');
	const [currentSlideBuilderSlide, setCurrentSlideBuilderSlide] = useState(
		null
	);
	const { userId } = useAuth();
	const firestore = useFirestore();

	useEffect(() => {
		const getCurrentSlideBuilderSlide = async () => {
			setIsPending(true);
			try {
				const slide = await firestore
					.collection('slides')
					.where(
						firebase.firestore.FieldPath.documentId(),
						'==',
						slideId
					)
					.where('userId', '==', userId)
					.get();

				setCurrentSlideBuilderSlide(slide.docs);
			} catch (err) {
				setHasError(err);
			} finally {
				setIsPending(false);
			}
		};
		getCurrentSlideBuilderSlide();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const pending = isPending && <LoadingIndicator />;
	const error = hasError && <NoAccess />;

	const hasEditAccess = !!currentSlideBuilderSlide?.length;

	const canEdit = () => {
		if (!hasEditAccess) {
			notifyError('Missing or insufficient permissions.');
			return false;
		}
		return true;
	};

	return {
		pending,
		error,
		hasEditAccess,
		canEdit,
	};
};

export default useSlide;
