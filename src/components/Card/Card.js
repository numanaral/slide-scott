import React, {
	cloneElement,
	createElement,
	Fragment,
	isValidElement,
	useState,
} from 'react';
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
	Tooltip,
} from '@material-ui/core';
import styled from 'styled-components';

import { getNiceDateVanilla, pascalToSentence } from 'utils';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { propTypes, defaultProps } from './types';

const StyledCardMedia = styled(CardMedia)`
	max-height: 200px;
	/* max-width: 400px; */
	${({ $hasHeader }) => `
		${(!$hasHeader && 'max-height: 260px') || ''}
	`}
`;

const StyledCardActionArea = styled(CardActionArea)`
	${({ $fullHeight }) => `
		${($fullHeight && 'height: 100%; text-align: center;') || ''}
	`}
`;

const Card = ({
	id,
	thumbnail,
	title,
	description,
	creator,
	date,
	updatedOn,
	onCardClick,
	headerAction,
	bottomActions,
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const onEnter = () => setIsHovering(true);
	const onLeave = () => setIsHovering(false);

	// Get initial and last
	let avatar = '';
	if (creator) {
		const split = pascalToSentence(creator).split(' ');
		[[avatar]] = split;
		if (split.length > 1) {
			avatar += split[split.length - 1][0];
		}
	}
	const _date = updatedOn || date;
	const hasHeader = avatar || headerAction || creator || _date;
	const hasBottomActions = !!bottomActions.length;
	const fullHeightCardAction = !hasBottomActions;
	// const fullHeightCardAction = !hasHeader && !hasBottomActions;

	const cardBody = (
		<>
			{(!!thumbnail && typeof thumbnail === 'string' && (
				<StyledCardMedia
					$hasHeader={hasHeader ? 1 : 0}
					component="img"
					image={thumbnail}
					// height="140"
				/>
			)) || (
				<ContainerWithCenteredItems
					container
					// vertical
					alignItems="center"
				>
					{createElement(thumbnail, { style: { fontSize: 100 } })}
				</ContainerWithCenteredItems>
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
		<MuiCard
			raised={isHovering}
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
			style={{ width: '100%' }}
		>
			{hasHeader && (
				<CardHeader
					{...(avatar && { avatar: <Avatar> {avatar} </Avatar> })}
					{...(headerAction && {
						action: cloneElement(headerAction, {
							onClick: () => headerAction.props.onClick(id),
						}),
					})}
					{...(creator && { title: creator })}
					{...(_date && {
						subheader: (
							<Typography
								component="b"
								color="textSecondary"
								variant="body1"
							>
								<b>
									{`${
										(updatedOn && 'Updated On') ||
										'Created On'
									}: `}
								</b>
								{getNiceDateVanilla(_date)}
							</Typography>
						),
					})}
				/>
			)}
			{(onCardClick && (
				<Tooltip title="Play">
					<StyledCardActionArea
						$fullHeight={fullHeightCardAction}
						onClick={() => onCardClick(id)}
					>
						{cardBody}
					</StyledCardActionArea>
				</Tooltip>
			)) || <> {cardBody} </>}
			{hasBottomActions && (
				<CardActions>
					{bottomActions.map(
						(button, ind) =>
							(isValidElement(button) &&
								cloneElement(button, {
									key: ind,
									onClick: () => button.props.onClick(id),
								})) ||
							(typeof button === 'object' && (
								<Button
									size="small"
									color="primary"
									key={button.text}
									onClick={e => button.onClick(id)}
								>
									{button.text}
								</Button>
							))
					)}
				</CardActions>
			)}
		</MuiCard>
	);
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
