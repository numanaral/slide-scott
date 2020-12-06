import { useFirestore } from 'react-redux-firebase';
import { toFirestore } from 'store/firebase/utils';

import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useAuth from '../useAuth';

const useSlides = slideId => {
	const { notifyError } = useNotificationProvider();
	const { userId } = useAuth();
	const firestore = useFirestore({
		collection: 'slides',
		where: ['userId', '==', userId],
	});

	const createSlideshow = async props => {
		const date = new Date();
		const { id } = await firestore.add(
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

	const updateSlideshow = async props => {
		try {
			await firestore.update(`slides/${slideId}`, toFirestore(props));
		} catch (err) {
			notifyError(err);
		}
	};

	const deleteSlideshow = () => {
		return firestore.delete(`slides/${slideId}`);
	};

	return {
		createSlideshow,
		updateSlideshow,
		deleteSlideshow,
	};
};

export default useSlides;
