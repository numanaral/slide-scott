import React from 'react';

import { WrappedCard } from 'components/Card';
import useWatchSlides from 'store/firebase/hooks/slides/useWatchSlides';
import useSlideActions from './useSlideActions';
import NewSlideshow from './NewSlideshow';

const MySlideshows = () => {
	const { slides, pending, error } = useWatchSlides();
	const { mapSlideActions } = useSlideActions();

	return (
		pending || [
			<NewSlideshow key={-1} />,
			error || slides.map(mapSlideActions).map(WrappedCard),
		]
	);
};

export default MySlideshows;
