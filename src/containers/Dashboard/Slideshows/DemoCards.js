import { useCardActions, WrappedCard } from 'components/Card';

const DemoCards = () => {
	const { onCardClick, headerAction, bottomActions } = useCardActions();

	const demoCards = [
		{
			id: 'asdad12d12dasd',
			thumbnail: `https://cdn.pixabay.com/photo/2015/10/12/14/50/calculator-983900_1280.jpg`,
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
			thumbnail: `https://cdn.pixabay.com/photo/2016/02/19/11/36/classroom-1209820_1280.jpg`,
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
			thumbnail: `https://cdn.pixabay.com/photo/2015/10/12/14/50/calculator-983900_1280.jpg`,
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
			thumbnail: `https://cdn.pixabay.com/photo/2016/02/19/11/15/american-1209605_1280.jpg`,
			creator: '',
			title: 'Language',
			description: 'Intro to language.',
			date: '2020-07-02T08:25:28.816Z',
			onCardClick,
			headerAction,
			bottomActions,
		},
	];

	return demoCards.map(WrappedCard);
};

export default DemoCards;
