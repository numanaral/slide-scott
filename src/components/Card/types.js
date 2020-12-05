import { string, arrayOf, func, node, shape, oneOfType } from 'prop-types';

import { date } from 'components/types';

const propTypes = {
	thumbnail: string,
	title: string.isRequired,
	description: string,
	creator: string,
	date,
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
	thumbnail: '',
	description: '',
	creator: '',
	date: '',
	onCardClick: null,
	headerAction: null,
	bottomActions: [],
};

export { propTypes, defaultProps };
