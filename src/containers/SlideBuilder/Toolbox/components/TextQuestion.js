// TODO: prop-types
/* eslint-disable react/prop-types */
import React from 'react';
import {
	TextField,
	Typography,
	InputAdornment,
	FormHelperText,
} from '@material-ui/core';

import { SubmitIcon } from 'icons';
import TooltipButton from 'components/TooltipButton';
import Spacer from 'components/Spacer';
import Wrapper from './Wrapper';

const TextQuestion = ({ question, correctAnswer, hasBg, bg }) => (
	<Wrapper correctAnswer={correctAnswer} noBg={!hasBg} bg={bg}>
		{({ studentAnswer, onAnswer }) => (
			<>
				<Typography component="b" color="primary">
					Q:{' '}
				</Typography>

				<Typography component="span"> {question} </Typography>
				<Spacer direction="bottom" spacing="3" />
				<TextField
					value={studentAnswer}
					onChange={onAnswer}
					onClick={e => {
						e.target.focus();
					}}
					name="answer"
					label="Answer"
					variant="outlined"
					type="search"
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<TooltipButton
									tooltip="Submit"
									// disabled={!input}
									color="primary"
									icon={SubmitIcon}
									iconSize="small"
									type="submit"
								/>
							</InputAdornment>
						),
					}}
				/>
				<FormHelperText>Case insensitive</FormHelperText>
			</>
		)}
	</Wrapper>
);

export default TextQuestion;
