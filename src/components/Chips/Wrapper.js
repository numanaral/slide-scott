/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
// import { genericArray, chipPropsType } from 'types';
import Chips from './Chips';

const Wrapper = ({ data, chipProps }) => {
	const { push } = useHistory();
	const {
		valueKey = 'Id',
		labelKey = 'Title',
		labelGenerator,
		routePath = '',
	} = chipProps;
	const routeTo = push(routePath);
	const list = data.reduce((acc, obj) => {
		acc.push({
			id: obj[valueKey],
			text: labelGenerator?.(obj) || obj[labelKey],
		});
		return acc;
	}, []);

	return <Chips list={list} onClick={routePath ? routeTo : null} />;
};

Wrapper.propTypes = {
	// data: genericArray.isRequired,
	// chipProps: chipPropsType,
};
Wrapper.defaultProps = {
	chipProps: {},
};

export default Wrapper;
