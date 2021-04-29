import { useMediaQuery } from '@material-ui/core';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useLocalStorage from './useLocalStorage';

const NOT_MOBILE_FRIENDLY_LOCAL_STORAGE_KEY = 'not-mobile-friendly';
const useIsNotMobileFriendly = () => {
	const { notifyWarning } = useNotificationProvider();
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('xs'));
	const [seenPopUp, setSeenPopup] = useLocalStorage(
		NOT_MOBILE_FRIENDLY_LOCAL_STORAGE_KEY,
		false
	);

	if (!seenPopUp && smAndDown) {
		setSeenPopup(true);
		notifyWarning(
			`This website was not intended to be mobile friendly for its initial purpose. Please use on a larger screen until this changes in the future!`
		);
	}
};

export default useIsNotMobileFriendly;
