import { useSelector } from 'react-redux';

import { makeSelectProfile } from 'store/redux/reducers/firebase/selectors';

const useProfile = () => {
	/** @type {{import('react-redux-firebase').FirebaseReducer.Profile<{}>}} */
	const { isLoaded, isEmpty, ...profile } = useSelector(makeSelectProfile());

	const isAuthorizing = !isLoaded;

	return { isAuthorizing, profile };
};

export default useProfile;
