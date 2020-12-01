import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'components/PageContainer';
import Toggle from 'components/Toggle';
import { makeSelectAnalytics } from 'store/redux/reducers/devSettings/selectors';
import { toggleAnalytics } from 'store/redux/reducers/devSettings/actions';

const DevSettings = () => {
	const isAnalyticsEnabled = useSelector(makeSelectAnalytics());
	const dispatch = useDispatch();

	// We are not really "toggling" but since we have a mechanism to
	// detect the previous state, this is fine!
	const toggleAnalyticsSetting = useCallback(
		() => dispatch(toggleAnalytics()),
		[dispatch]
	);

	return (
		<Container>
			<Toggle
				value={isAnalyticsEnabled}
				onChange={toggleAnalyticsSetting}
				options={[
					{
						value: true,
						label: 'Enabled',
					},
					{
						value: false,
						label: 'Disabled',
					},
				]}
			/>
		</Container>
	);
};

export default DevSettings;
