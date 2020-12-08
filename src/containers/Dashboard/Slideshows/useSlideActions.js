import React from 'react';

import {
	DeleteIcon,
	ShareIcon,
	StarIcon,
	EditIcon,
	TemplateIcon,
	PresentIcon,
} from 'icons';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import TooltipButton from 'components/TooltipButton';
import useSlide from 'store/firebase/hooks/slides/useSlide';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import { useHistory } from 'react-router-dom';
import { BASE_PATH } from 'routes/constants';
import { copyToClipboard } from 'store/firebase/utils';
import usePresent from 'store/firebase/hooks/usePresent';

const useSlideActions = () => {
	const {
		notifySuccess,
		notifyError,
		notifyInfo,
	} = useNotificationProvider();
	const { openConfirmDialog } = useDialogProvider();
	const { push } = useHistory();

	const { deleteSlideshow } = useSlide();
	const { createLiveOptions } = usePresent();

	const onDelete = async id => {
		openConfirmDialog(
			'Are you sure you want to delete this slideshow?',
			async () => {
				openConfirmDialog(
					'Are you sure you want to delete this slideshow?'
				);
				await deleteSlideshow(id);
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
		const link = `https://numanaral.github.io/slide-scott/slides/${id}`;
		copyToClipboard(
			link,
			() => {
				notifySuccess('Link has been copied to the clipboard!');
			},
			() => {
				notifyError(
					`Error copying to the clipboard.. \nThe link is: ${link}`
				);
			}
		);
	};

	const onTemplate = id => {
		notifyInfo('To be implemented');

		// try {
		// } catch (err) {
		// 	notifyError(err.message);
		// }
	};
	const onPresent = async id => {
		try {
			await createLiveOptions({}, id);
		} catch (err) {
			notifyError(err);
			return;
		}
		const link = `https://numanaral.github.io/slide-scott/live/${id}`;
		copyToClipboard(
			link,
			() => {
				notifySuccess('Share link has been copied to the clipboard!');
			},
			() => {
				notifyError(
					`Error copying to the clipboard.. \nThe link is: ${link}`
				);
			}
		);
		push(`${BASE_PATH}/present/${id}`);
	};

	const onEdit = id => {
		push(`${BASE_PATH}/create/${id}`);
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
		PRESENT: (
			<TooltipButton
				tooltip="Present"
				onClick={onPresent}
				icon={PresentIcon}
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
		buttons.PRESENT,
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
