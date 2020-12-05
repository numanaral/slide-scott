import { getDateFromFirebaseObject } from 'store/firebase/utils';

/**
 * @example
 * ```js
 * 	{
 * 		id: 'asdad12d12dasd',
 * 		thumbnail: `https://cdn.pixabay.com/photo/2015/10/12/14/50/calculator-983900_1280.jpg`,
 * 		creator: '',
 * 		title: 'Addition',
 * 		description: 'Teaching additions for Gr1',
 * 		date: '2020-12-02T08:25:28.816Z',
 * 		onCardClick,
 * 		headerAction,
 * 		bottomActions,
 * 	},
 * ```
 */
class CardModel {
	constructor(
		id,
		thumbnail,
		creator,
		title,
		description,
		date,
		onCardClick,
		headerAction,
		bottomActions
	) {
		this.id = id;
		this.thumbnail = thumbnail;
		this.creator = creator;
		this.title = title;
		this.description = description;
		this.date = date;
		this.onCardClick = onCardClick;
		this.headerAction = headerAction;
		this.bottomActions = bottomActions;
	}

	getProps = () => ({
		id: this.id,
		thumbnail: this.thumbnail,
		creator: this.creator,
		title: this.title,
		description: this.description,
		date: this.date,
		onCardClick: this.onCardClick,
		headerAction: this.headerAction,
		bottomActions: this.bottomActions,
	});

	static fromFirebaseObject = (firebaseObject, actions = {}) => {
		const {
			// userId,
			// createdOn,
			// slides,
			updatedOn,
			// props from firebase
			id,
			thumbnail,
			creator,
			title,
			description,
		} = firebaseObject;

		const { onCardClick, headerAction, bottomActions } = actions;

		const date = getDateFromFirebaseObject(updatedOn);

		return new CardModel(
			id,
			thumbnail,
			creator,
			title,
			description,
			date,
			onCardClick,
			headerAction,
			bottomActions
		);
	};
}

export { CardModel };
