import { useEffect, useState } from 'react';

const useIndex = (items, onPageSelect) => {
	const [total, setTotal] = useState(1);
	const [index, setIndex] = useState(0);
	const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	useEffect(() => {
		setTotal(items.length);
	}, [items]);

	useEffect(() => {
		setIsPreviousDisabled(index === 0);
		setIsNextDisabled(index + 1 === total);
	}, [index, total]);

	const onPrevious = () =>
		setIndex(v => {
			const newIndex = v - 1;

			onPageSelect?.(newIndex);
			return newIndex;
		});
	const onNext = () =>
		setIndex(v => {
			const newIndex = v + 1;

			onPageSelect?.(newIndex);
			return newIndex;
		});
	const onRestart = () => {
		onPageSelect?.(0);
		setIndex(0);
	};

	return {
		index,
		setIndex,
		isPreviousDisabled,
		isNextDisabled,
		onPrevious,
		onNext,
		onRestart,
	};
};

export default useIndex;
