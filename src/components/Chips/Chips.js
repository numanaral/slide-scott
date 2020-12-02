import React from 'react';
import {
	shape,
	arrayOf,
	func,
	string,
	number,
	element,
	oneOfType,
} from 'prop-types';
import { Chip as MuiChip } from '@material-ui/core';
import styled from 'styled-components';

const StyledChip = styled(MuiChip)`
	margin: 5px;
	max-width: 100%;
`;

const Chips = ({ list, onClick, onDelete, ...rest }) => {
	const handleOnClick = id => () => onClick(id);
	const handleOnDelete = id => () => onDelete(id);
	const hasOnClick = onClick !== null;
	const hasOnDelete = onDelete !== null;

	return list.map(item => (
		<StyledChip
			key={item.id || item.text}
			variant="outlined"
			color={hasOnClick ? 'primary' : 'default'}
			label={item.text}
			avatar={item.avatar}
			onClick={hasOnClick ? handleOnClick(item.id) : null}
			onDelete={hasOnDelete ? handleOnDelete(item.id) : null}
			{...rest}
		/>
	));
};

Chips.propTypes = {
	list: arrayOf(
		shape({
			id: oneOfType([string, number]),
			text: string,
			avatar: element,
		})
	).isRequired,
	onClick: func,
	onDelete: func,
};

Chips.defaultProps = {
	list: [],
	onClick: null,
	onDelete: null,
};

export default Chips;
