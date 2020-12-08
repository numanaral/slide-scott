// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import {
	Typography,
	FormControl,
	RadioGroup,
	FormControlLabel,
	// FormHelperText,
	Radio,
} from '@material-ui/core';

import { SubmitIcon } from 'icons';
import TooltipButton from 'components/TooltipButton';
import Spacer from 'components/Spacer';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Wrapper from './Wrapper';

const OPTION_MAP = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D',
};

const MultipleChoiceQuestion = ({
	question,
	answerA,
	answerB,
	answerC,
	answerD,
	correctAnswer,
	hasBg,
	bg,
}) => (
	<Wrapper correctAnswer={correctAnswer} noBg={!hasBg} bg={bg}>
		{({ studentAnswer, onAnswer, error }) => (
			<>
				<Typography component="b" color="primary">
					Q:{' '}
				</Typography>
				<Typography component="span"> {question} </Typography>
				<Spacer direction="bottom" spacing="3" />
				<FormControl component="fieldset" error={error} fullWidth>
					<RadioGroup
						aria-label="quiz"
						name="quiz"
						value={studentAnswer}
						onChange={onAnswer}
					>
						{[answerA, answerB, answerC, answerD].map((a, ind) => (
							<FormControlLabel
								key={OPTION_MAP[ind]}
								value={OPTION_MAP[ind]}
								control={<Radio />}
								label={
									<>
										<Typography
											component="b"
											color="primary"
										>
											{OPTION_MAP[ind]}:{' '}
										</Typography>
										{a}
									</>
								}
							/>
						))}
					</RadioGroup>
					{/* <FormHelperText>{helperText}</FormHelperText> */}
					<ContainerWithCenteredItems horizontal>
						<TooltipButton
							tooltip="Submit"
							text="Submit"
							type="submit"
							bg="primary"
							icon={SubmitIcon}
						/>
					</ContainerWithCenteredItems>
				</FormControl>
			</>
		)}
	</Wrapper>
);

export default MultipleChoiceQuestion;
