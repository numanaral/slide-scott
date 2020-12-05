import React from 'react';

import { DeleteIcon, ShareIcon, StarIcon, EditIcon, TemplateIcon } from 'icons';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import TooltipButton from 'components/TooltipButton';
import useSlides from 'store/firebase/hooks/slides/useSlides';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import { useHistory } from 'react-router-dom';
import { BASE_PATH } from 'routes/constants';

const useSlideActions = () => {
	const {
		notifySuccess,
		notifyError,
		notifyInfo,
	} = useNotificationProvider();
	const { openConfirmDialog } = useDialogProvider();
	const { push } = useHistory();

	const { deleteSlideshow } = useSlides();

	const onDelete = async id => {
		openConfirmDialog(
			'Are you sure you want to delete this slideshow?',
			async () => {
				openConfirmDialog(
					'Are you sure you want to delete this slideshow?'
				);
				deleteSlideshow(id);
			}
		);
	};

	const onPlay = id => {
		push(`${BASE_PATH}/slides/${id}`);
	};

	const onFavorite = id => {
		notifyInfo(
			`This will be implemented when slideshows can be shared between users`
		);
	};

	const onShare = id => {
		notifyInfo('To be implemented');
	};

	const onTemplate = id => {
		notifyInfo('To be implemented');

		// try {
		// } catch (err) {
		// 	notifyError(err.message);
		// }
	};

	const onEdit = id => {
		push(`${BASE_PATH}/slide-builder/${id}`);
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

	const mapSlideActions = props => ({
		...props,
		onCardClick,
		headerAction,
		bottomActions,
	});

	return {
		onCardClick,
		headerAction,
		bottomActions,
		mapSlideActions,
	};
};

export default useSlideActions;
