import React from 'react';

import { WrappedCard } from 'components/Card';
import { AddIcon } from 'icons';
import useSlides from 'store/firebase/hooks/slides/useSlides';
import { getNiceDateVanilla } from 'utils';

const NewSlideshow = () => {
	const { createSlideshow } = useSlides();

	const onNewSlideshow = async () => {
		const id = await createSlideshow({
			title: `Create at ${getNiceDateVanilla(new Date())}`,
		});
		console.log('id', id);
	};

	const props = {
		id: 0,
		thumbnail: AddIcon,
		title: 'Create a new slideshow',
		onCardClick: onNewSlideshow,
	};

	return <WrappedCard {...props} />;
};

export default NewSlideshow;
