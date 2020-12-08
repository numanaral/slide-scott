import { Typography } from '@material-ui/core';
import useLocalStorage from 'hooks/useLocalStorage';
import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

import ContainerBody from '../shared/ContainerBody';
import ContainerTitle from '../shared/ContainerTitle';

const EmphasizedAndBolded = props => (
	<Typography color="primary" component="b" {...props} />
);

const animateNotes = theme => keyframes`
		0% {
			box-shadow: 0 0 2px 2px ${theme.palette.primary.main};
		}

		50% {
			box-shadow: 0 0 10px 10px ${theme.palette.primary.main};
		}

		100% {
			box-shadow: 0 0 2px 2px ${theme.palette.primary.main};
		}
  
`;

const StyledContainerBody = styled(ContainerBody)`
	${({ theme, $highlightedNotes }) =>
		(!$highlightedNotes &&
			css`
				animation: ${animateNotes(theme)} 2s ease-in-out 5;
			`) ||
		''}
`;

const HIGHLIGHTED_NOTES_LOCAL_STORAGE_KEY = 'highlightedNotes';

const TempNoteBox = () => {
	const [highlightedNotes, setHighlightedNotes] = useLocalStorage(
		HIGHLIGHTED_NOTES_LOCAL_STORAGE_KEY,
		false
	);

	// Highlight notes once for the user
	// Make sure they check out the notes
	useEffect(() => {
		if (!highlightedNotes) {
			setTimeout(() => {
				setHighlightedNotes(true);
			}, 10000);
		}
	}, [highlightedNotes, setHighlightedNotes]);

	return (
		<>
			<ContainerTitle> Notes </ContainerTitle>
			<StyledContainerBody
				style={{ height: '55%' }}
				container
				$highlightedNotes={highlightedNotes}
			>
				<ul>
					<li>
						<Typography>
							<EmphasizedAndBolded color="secondary">
								Nothing here is final and can be changed in the
								future!
							</EmphasizedAndBolded>
						</Typography>
					</li>
					<li>
						<Typography>
							You can{' '}
							<EmphasizedAndBolded>
								drag & drop
							</EmphasizedAndBolded>
							,{` `}
							<EmphasizedAndBolded>resize</EmphasizedAndBolded>,
							{` `}
							<EmphasizedAndBolded>rotate</EmphasizedAndBolded>,
							and
							{` `}
							<EmphasizedAndBolded>
								delete
							</EmphasizedAndBolded>{' '}
							items.
						</Typography>
					</li>
					<li>
						<Typography>
							You can drag items from{' '}
							<EmphasizedAndBolded>
								Tools Section
							</EmphasizedAndBolded>
							{` `}
							into the{' '}
							<EmphasizedAndBolded>
								Slide Section
							</EmphasizedAndBolded>
							.
						</Typography>
					</li>
					<li>
						<Typography>
							<EmphasizedAndBolded>
								Changes are persistent!
							</EmphasizedAndBolded>{' '}
							Your latest design will be here until you delete all
							the items.
						</Typography>
					</li>
					<li>
						<Typography>
							Currently tools are positioned{' '}
							<EmphasizedAndBolded>
								absolutely
							</EmphasizedAndBolded>
							{` `}
							under the
							{` `}
							<EmphasizedAndBolded>
								relative
							</EmphasizedAndBolded>{' '}
							Slide Section so it&apos;s not responsive as of
							today.
						</Typography>
					</li>
				</ul>
			</StyledContainerBody>
		</>
	);
};

export default TempNoteBox;
