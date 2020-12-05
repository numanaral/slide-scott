import React from 'react';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { WrappedCard, CardModel, useCardActions } from 'components/Card';
import LoadingIndicator from 'components/LoadingIndicator';
import { Typography } from '@material-ui/core';
import useAuth from 'store/firebase/hooks/useAuth';
import { sortByFirebaseDate } from 'store/firebase/utils';

const MySlideshows = () => {
	const { userId } = useAuth();
	const { mapCardActions } = useCardActions();

	/** @see https://react-redux-firebase.com/docs/queries.html#types-of-queries */
	useFirestoreConnect({
		collection: 'slides',
		// Need composite indexing, single indexing doesn't work
		// TODO: Check when you have time
		// orderBy: ['updatedOn', 'asc'],
		where: ['userId', '==', userId],
	});
	const slides = useSelector(state => state.firestore.ordered.slides);

	// Show message while todos are loading
	if (!isLoaded(slides)) {
		return <LoadingIndicator />;
	}

	// Show message if there are no todos
	if (isEmpty(slides)) {
		return <Typography>You don&apos;t have any slides</Typography>;
	}

	return slides
		.sort(sortByFirebaseDate())
		.map(CardModel.fromFirebaseObject)
		.map(mapCardActions)
		.map(WrappedCard);
};

export default MySlideshows;
