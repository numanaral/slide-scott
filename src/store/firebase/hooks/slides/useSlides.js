import { useFirestore } from 'react-redux-firebase';
import { toFirestore } from 'store/firebase/utils';

import useAuth from '../useAuth';

const useSlides = () => {
	const { userId } = useAuth();
	const firestore = useFirestore({
		collection: 'slides',
		where: ['userId', '==', userId],
	});

	const createSlideshow = async props => {
		const date = new Date();
		const id = await firestore.add(
			'slides',
			toFirestore({
				...props,
				createdOn: date,
				updatedOn: date,
				userId,
			})
		);
		return id;
	};

	const updateSlideshow = (slideId, props) => {
		return firestore.update(`slides/${slideId}`, toFirestore(props));
	};

	const deleteSlideshow = slideId => {
		return firestore.delete(`slides/${slideId}`);
	};

	return {
		createSlideshow,
		updateSlideshow,
		deleteSlideshow,
	};
};

export default useSlides;
