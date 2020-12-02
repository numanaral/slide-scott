import { useSelector } from 'react-redux';

import { makeSelectAuth } from 'store/redux/reducers/firebase/selectors';

// Important values returned from Google
// const exampleLoggedInUserInfo = {
// 	uid: 'a556IY2u7TScw9jgCIDoAGhlZMr2',
// 	displayName: 'Ahmet Numan Aral',
// 	photoURL:
// 		'https://lh3.googleusercontent.com/a-/AOh14GhRUTMFGmUNUfSZb16mXsrMVfu16GApSR4ql_csOw=s96-c',
// 	email: 'ahmetnuman96@gmail.com',
// 	lastLoginAt: '1606856753080',
// 	createdAt: '1606856753080',
// 	isEmpty: false,
// 	isLoaded: true,
// };

const useAuth = () => {
	/** @type {import('react-redux-firebase').FirebaseReducer.AuthState} */
	const { isLoaded, isEmpty, ...user } = useSelector(makeSelectAuth());

	const isAuthorizing = !isLoaded;

	const isLoggedIn =
		!isAuthorizing && !isEmpty && (user.displayName || user.email);

	return { isAuthorizing, isLoggedIn, user };
};

export default useAuth;
