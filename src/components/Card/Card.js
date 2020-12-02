import React, { cloneElement, Fragment, isValidElement } from 'react';
import {
	Card as MuiCard,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	CardHeader,
	Avatar,
} from '@material-ui/core';

import styled from 'styled-components';
import { getNiceDateVanilla, pascalToSentence } from 'utils';
import { propTypes, defaultProps } from './types';

const StyledCardMedia = styled(CardMedia)`
	max-height: 190px;
	max-width: 400px;
	${({ $hasHeader }) => `
		${(!$hasHeader && 'max-height: 260px') || ''}
	`}
`;

const Card = ({
	imageUrl,
	title,
	description,
	creator,
	date,
	onCardClick,
	headerAction,
	bottomActions,
}) => {
	// Get initial and last
	let avatar = '';
	if (creator) {
		const split = pascalToSentence(creator).split(' ');
		[[avatar]] = split;
		if (split.length > 1) {
			avatar += split[split.length - 1][0];
		}
	}

	const hasHeader = avatar || headerAction || creator || date;

	const cardBody = (
		<>
			{imageUrl && (
				<StyledCardMedia
					$hasHeader={hasHeader ? 1 : 0}
					component="img"
					image={imageUrl}
					// height="140"
				/>
			)}
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				{description && (
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{description}
					</Typography>
				)}
			</CardContent>
		</>
	);

	return (
		<MuiCard>
			{hasHeader && (
				<CardHeader
					{...(avatar && { avatar: <Avatar> {avatar} </Avatar> })}
					{...(headerAction && { action: headerAction })}
					{...(creator && { title: creator })}
					{...(date && { subheader: getNiceDateVanilla(date) })}
				/>
			)}
			{(onCardClick && (
				<CardActionArea onClick={onCardClick}>
					{cardBody}
				</CardActionArea>
			)) || <> {cardBody} </>}
			<CardActions>
				{bottomActions.map(
					(button, ind) =>
						(isValidElement(button) &&
							cloneElement(button, { key: ind })) ||
						(typeof button === 'object' && (
							<Button
								size="small"
								color="primary"
								key={button.label}
							>
								{button.label}
							</Button>
						))
				)}
			</CardActions>
		</MuiCard>
	);
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
