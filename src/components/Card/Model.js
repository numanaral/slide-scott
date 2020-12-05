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
		updatedOn,
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
		this.updatedOn = updatedOn;
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
		updatedOn: this.updatedOn,
		onCardClick: this.onCardClick,
		headerAction: this.headerAction,
		bottomActions: this.bottomActions,
	});
}

export { CardModel };
