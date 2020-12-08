import React from 'react';
import { useHistory } from 'react-router-dom';

import { WrappedCard } from 'components/Card';
import { AddIcon } from 'icons';
import useSlide from 'store/firebase/hooks/slides/useSlide';
import { getNiceDateVanilla } from 'utils';
import { BASE_PATH } from 'routes/constants';

const NewSlideshow = () => {
	const { createSlideshow } = useSlide();
	const { push } = useHistory();

	const onNewSlideshow = async () => {
		const id = await createSlideshow({
			title: `Create at ${getNiceDateVanilla(new Date())}`,
			slides: {
				[Date.now().toString()]: {
					frames: {},
				},
			},
		});

		push(`${BASE_PATH}/create/${id}`);
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
