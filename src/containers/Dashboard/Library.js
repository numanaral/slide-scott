import React from 'react';
import styled from 'styled-components';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
// import { LazyIcon } from 'icons';
import Card from 'components/Card';
import { DeleteIcon, ShareIcon, StarIcon, EditIcon, TemplateIcon } from 'icons';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import TooltipButton from 'components/TooltipButton';

const Library = () => {
	const {
		notifySuccess,
		notifyError,
		notifyInfo,
		notifyWarning,
	} = useNotificationProvider();
	// const { push } = useHistory();

	// const onClick = v => {
	// 	switch (v) {
	// 		case 'delete':
	// 			notifyInfo('Coming soon');
	// 			break;
	// 		case 'templateFrom':
	// 			notifyInfo('Coming soon');
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	// const menuProps = useMenu({
	// 	label: 'Options',
	// 	// small: true,
	// 	icon: MoreItemsIcon,
	// 	options: [
	// 		{ label: 'Delete', value: 'delete' },
	// 		{ label: 'Template From', value: 'templateFrom' },
	// 	],
	// 	onClick,
	// 	iconMenu: true,
	// });

	const onDelete = () => {
		notifyError('Delete');
	};
	const onPlay = () => {
		notifySuccess('Play');
	};
	const onFavorite = () => {
		notifyInfo('Favorite');
	};
	const onShare = () => {
		notifyInfo('Share');
	};
	const onTemplate = () => {
		notifyInfo('Template');
	};
	const onEdit = () => {
		notifyWarning('Edit');
	};

	const buttons = {
		DELETE: (
			<TooltipButton
				tooltip="Delete"
				onClick={onDelete}
				icon={DeleteIcon}
			/>
		),
		FAVORITE: (
			<TooltipButton
				tooltip="Favorite"
				onClick={onFavorite}
				icon={StarIcon}
			/>
		),
		SHARE: (
			<TooltipButton tooltip="Share" onClick={onShare} icon={ShareIcon} />
		),
		TEMPLATE: (
			<TooltipButton
				tooltip="Template From"
				onClick={onTemplate}
				icon={TemplateIcon}
			/>
		),
		EDIT: (
			<TooltipButton
				tooltip="Edit"
				onClick={onEdit}
				icon={EditIcon}
				style={{ marginLeft: 'auto' }}
			/>
		),
	};

	const onCardClick = onPlay;
	// const headerAction = <Menu {...menuProps} />;
	const headerAction = buttons.DELETE;
	const bottomActions = [
		buttons.FAVORITE,
		buttons.SHARE,
		buttons.TEMPLATE,
		buttons.EDIT,
	];

	const cards = [
		{
			id: 'asdad12d12dasd',
			imageUrl: `https://cdn.pixabay.com/photo/2015/10/12/14/50/calculator-983900_1280.jpg`,
			creator: '',
			title: 'Addition',
			description: 'Teaching additions for Gr1',
			date: '2020-12-02T08:25:28.816Z',
			onCardClick,
			headerAction,
			bottomActions,
		},
		{
			id: 'asdad12ddsas12dasd',
			imageUrl: `https://cdn.pixabay.com/photo/2016/02/19/11/36/classroom-1209820_1280.jpg`,
			creator: '',
			title: 'Intro',
			description: 'Intro to X Gr1',
			date: '2020-07-02T08:25:28.816Z',
			onCardClick,
			headerAction,
			bottomActions,
		},
		{
			id: 'asfasddad12d12dasd',
			imageUrl: `https://cdn.pixabay.com/photo/2015/10/12/14/50/calculator-983900_1280.jpg`,
			creator: '',
			title: 'Multiplications',
			description: 'Teaching Multiplications for Gr1',
			date: '2020-12-02T08:25:28.816Z',
			onCardClick,
			headerAction,
			bottomActions,
		},
		{
			id: 'asdadasda12ddsas12dasd',
			imageUrl: `https://cdn.pixabay.com/photo/2016/02/19/11/15/american-1209605_1280.jpg`,
			creator: '',
			title: 'Language',
			description: 'Intro to language.',
			date: '2020-07-02T08:25:28.816Z',
			onCardClick,
			headerAction,
			bottomActions,
		},
	];

	return (
		<ContainerWithCenteredItems container horizontal spacing={3}>
			{cards.map(cardProps => (
				<ContainerWithCenteredItems
					item
					xs={12}
					md={6}
					key={cardProps.title}
				>
					<Card {...cardProps} />
				</ContainerWithCenteredItems>
			))}
		</ContainerWithCenteredItems>
	);
};

export default Library;
