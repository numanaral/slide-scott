import { string, arrayOf, func, node, shape, oneOfType } from 'prop-types';

import { date } from 'components/types';

const propTypes = {
	imageUrl: string,
	title: string.isRequired,
	description: string,
	creator: string,
	date: date.isRequired,
	onCardClick: func,
	headerAction: node,
	bottomActions: arrayOf(
		oneOfType([
			shape({
				text: string,
				onClick: func,
			}),
			node,
		])
	),
};

const defaultProps = {
	imageUrl: '',
	description: '',
	creator: '',
	onCardClick: null,
	headerAction: null,
	bottomActions: [],
};

export { propTypes, defaultProps };
