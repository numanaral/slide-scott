import {
	string,
	arrayOf,
	func,
	node,
	shape,
	oneOfType,
	elementType,
} from 'prop-types';

import { date } from 'components/types';
import { LayerIcon } from 'icons';

const propTypes = {
	thumbnail: oneOfType([string, elementType]),
	title: string.isRequired,
	description: string,
	creator: string,
	date,
	updatedOn: date,
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
	thumbnail: LayerIcon,
	description: '',
	creator: '',
	date: '',
	updatedOn: '',
	onCardClick: null,
	headerAction: null,
	bottomActions: [],
};

export { propTypes, defaultProps };
