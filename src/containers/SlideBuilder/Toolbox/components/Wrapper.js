// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import useHandleSubmit from './useHandleSubmit';

const FormWrapper = ({ correctAnswer, children }) => {
	const { onSubmit, ...formProps } = useHandleSubmit(correctAnswer);

	return <form onSubmit={onSubmit}>{children({ ...formProps })}</form>;
};

const Wrapper = ({ noPadding, noBg, correctAnswer, children, ...props }) => (
	<PaperContainerWithSpacing
		containerProps={{ style: { height: '100%' } }}
		noBg={noBg}
		{...(noPadding && { p: '0! important' })}
		height="100%"
		width="100%"
		display="flex"
		alignItems="center"
		justifyContent="center"
		{...props}
	>
		{(correctAnswer && (
			<FormWrapper correctAnswer={correctAnswer}>{children}</FormWrapper>
		)) ||
			children}
	</PaperContainerWithSpacing>
);
export default Wrapper;
