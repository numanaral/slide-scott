import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import SlideViewer from 'components/SlideViewer';
import React from 'react';
import useWatchSlide from 'store/firebase/hooks/slides/useWatchSlide';
import {
	singleViewRouterPropTypes,
	singleViewRouterDefaultProps,
} from './types';

// const PasswordLock = () => {

// }

const ViewSlide = ({
	match: {
		params: { id },
	},
}) => {
	const { slide, pending, error } = useWatchSlide(id);
	return (
		<ContainerWithCenteredItems vertical>
			{pending || error || <SlideViewer hasSubmit {...slide} />}
		</ContainerWithCenteredItems>
	);
};

ViewSlide.propTypes = singleViewRouterPropTypes;
ViewSlide.defaultProps = singleViewRouterDefaultProps;

export default ViewSlide;
