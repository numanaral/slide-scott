import firebase from 'firebase/app';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useAnalytics from 'store/redux/hooks/useAnalytics';

const usePageView = () => {
	const { pathname } = useLocation();
	const { isAnalyticsEnabled } = useAnalytics();

	useEffect(() => {
		if (!isAnalyticsEnabled) return;

		console.log('ga:page-view', pathname);
		firebase.analytics().logEvent('page-view', { path_name: pathname });
	}, [isAnalyticsEnabled, pathname]);
};

export default usePageView;
