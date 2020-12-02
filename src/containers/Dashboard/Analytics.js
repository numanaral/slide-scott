import { Rating } from '@material-ui/lab';
import React from 'react';

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { Typography } from '@material-ui/core';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import Chips from 'components/Chips';
import Spacer from 'components/Spacer';

const customIcons = {
	1: {
		icon: <SentimentVeryDissatisfiedIcon />,
		label: 'Very Dissatisfied',
	},
	2: {
		icon: <SentimentDissatisfiedIcon />,
		label: 'Dissatisfied',
	},
	3: {
		icon: <SentimentSatisfiedIcon />,
		label: 'Neutral',
	},
	4: {
		icon: <SentimentSatisfiedAltIcon />,
		label: 'Satisfied',
	},
	5: {
		icon: <SentimentVerySatisfiedIcon />,
		label: 'Very Satisfied',
	},
};

function IconContainer(props) {
	// eslint-disable-next-line react/prop-types
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}

const Analytics = () => {
	const positiveWords = [
		'ethical',
		'champ',
		'spiritual',
		'angelic',
		'exquisite',
		'now',
		'satisfactory',
		'whole',
		'affluent',
		'hearty',
		'fitting',
		'masterful',
		'pretty',
		'healing',
		'productive',
		'ecstatic',
		'restored',
		'generous',
		'open',
		'instinctive',
		'beneficial',
		'quiet',
		'truthful',
		'imaginative',
		'appealing',
		'soulful',
		'one',
		'marvelous',
		'knowledgeable',
		'quality',
		'reassuring',
		'worthy',
		'effective',
		'dazzling',
		'vigorous',
		'aptitude',
		'essential',
		'choice',
		'innovate',
		'welcome',
		'cheery',
		'energized',
		'thrilling',
		'nice',
		'sparkling',
		'rewarding',
		'green',
		'elegant',
		'valued',
		'up',
	];
	const negativeWords = [
		'grave',
		'hostile',
		'sickening',
		'lose',
		'insane',
		'vicious',
		'unwise',
		'nobody',
		'abysmal',
		'quit',
		'sobbing',
		'messy',
		'corrupt',
		'ruthless',
		'plain',
		'poisonous',
		'frightful',
		'woeful',
		'gawky',
		'hard',
		'appalling',
		'vile',
		'offensive',
		'sick',
		'prejudice',
		'substandard',
		'infernal',
		'bad',
		'dreary',
		'distress',
		'yucky',
		'no',
		'misshapen',
		'hurtful',
		'renege',
		'apathy',
		'tense',
		'upset',
		'hurt',
		'fail',
		'grim',
		'terrible',
		'villainous',
		'pain',
		'stormy',
		'deformed',
	];

	return (
		<ContainerWithCenteredItems>
			<Typography component="h2" variant="h4">
				Average Student Rating:
			</Typography>
			<Spacer direction="bottom" />
			<PaperContainerWithSpacing>
				<ContainerWithCenteredItems>
					<Rating
						name="customized-icons"
						defaultValue={4.5}
						getLabelText={value => customIcons[value].label}
						IconContainerComponent={IconContainer}
					/>
				</ContainerWithCenteredItems>
			</PaperContainerWithSpacing>
			<Spacer direction="top" spacing="3" />
			<Typography component="h2" variant="h4">
				Students liked:
			</Typography>
			<Spacer direction="bottom" />
			<PaperContainerWithSpacing>
				<ContainerWithCenteredItems>
					<Chips
						color="primary"
						list={positiveWords.map(text => ({ text }))}
					/>
				</ContainerWithCenteredItems>
			</PaperContainerWithSpacing>
			<Spacer direction="top" spacing="3" />
			<Typography component="h2" variant="h4">
				Students complained about:
			</Typography>
			<Spacer direction="bottom" />
			<PaperContainerWithSpacing>
				<ContainerWithCenteredItems>
					<Chips
						color="secondary"
						list={negativeWords.map(text => ({ text }))}
					/>
				</ContainerWithCenteredItems>
			</PaperContainerWithSpacing>
		</ContainerWithCenteredItems>
	);
};

export default Analytics;
