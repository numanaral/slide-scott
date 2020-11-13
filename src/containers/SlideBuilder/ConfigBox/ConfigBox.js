import FullSizeGrid from 'components/FullSizeGrid';
import React from 'react';

import ContainerBody from '../shared/ContainerBody';
import ContainerTitle from '../shared/ContainerTitle';
import TempNoteBox from './TempNoteBox';

const ConfigBox = () => (
	<FullSizeGrid>
		<TempNoteBox />
		<ContainerTitle> Configuration </ContainerTitle>
		<ContainerBody style={{ height: '30%' }} container>
			configs here...
		</ContainerBody>
	</FullSizeGrid>
);

export default ConfigBox;
