import React from 'react';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

// import useAuth from 'store/firebase/hooks/useAuth';
import LoadingIndicator from 'components/LoadingIndicator';
import { fromFirestore } from 'store/firebase/utils';

const NoAccess = () => (
	<Typography>
		Such slide doesn&apos;t exist or you don&apos;t have access to it
	</Typography>
);

const useWatchSlide = slideId => {
	// const { userId } = useAuth();
	useFirestoreConnect({
		collection: 'slides',
		doc: slideId,
		// where: ['userId', '==', userId],
	});

	const slide = useSelector(
		({ firestore: { data } }) => data.slides && data.slides[slideId]
	);

	if (!isLoaded(slide)) return <LoadingIndicator />;
	if (isEmpty(slide)) return <NoAccess />;

	return fromFirestore(slide);
};

export default useWatchSlide;
