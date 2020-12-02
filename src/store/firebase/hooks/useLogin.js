import { useFirebase } from 'react-redux-firebase';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const useLogin = () => {
	const firebase = useFirebase();
	const { notifySuccess, notifyError } = useNotificationProvider();

	// /** @param {import('@firebase/auth-types').UserCredential} userCredentials */
	// const handleNewUser = userCredentials => {
	// 	// if (userCredentials.additionalUserInfo.isNewUser) {
	// 	// 	userCredentials;
	// 	// }
	// };

	const logOut = () => firebase.logout();

	const googleLogin = () =>
		firebase
			.login({ provider: 'google', type: 'popup' })
			// .then(s => {})
			.then(notifySuccess)
			.catch(notifyError);

	const githubLogin = () =>
		firebase
			.login({ provider: 'github', type: 'popup' })
			.then(notifySuccess)
			.catch(notifyError);

	const emailLogin = creds =>
		firebase
			// .setPersistence(.setPersistence(this.remember.checked ? fireauth.Auth.Persistence.LOCAL : fireauth.Auth.Persistence.SESSION))
			.login(creds)
			.then(notifySuccess)
			.catch(notifyError);

	return {
		googleLogin,
		githubLogin,
		emailLogin,
		logOut,
	};
};

export default useLogin;
