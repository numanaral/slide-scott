import React from 'react';

import { DeleteIcon, ShareIcon, StarIcon, EditIcon, TemplateIcon } from 'icons';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import TooltipButton from 'components/TooltipButton';

const useCardActions = () => {
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

	const onDelete = id => {
		notifyError(`Delete ${id}`);
	};
	const onPlay = id => {
		notifySuccess(`Play ${id}`);
	};
	const onFavorite = id => {
		notifyInfo(`Favorite ${id}`);
	};
	const onShare = id => {
		notifyInfo(`Share ${id}`);
	};
	const onTemplate = id => {
		notifyInfo(`Template ${id}`);
	};
	const onEdit = id => {
		notifyWarning(`Edit ${id}`);
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

	const mapCardActions = props => ({
		...props,
		onCardClick,
		headerAction,
		bottomActions,
	});

	return {
		onCardClick,
		headerAction,
		bottomActions,
		mapCardActions,
	};
};

export default useCardActions;
