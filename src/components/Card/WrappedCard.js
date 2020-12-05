import React from 'react';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Card from './Card';

const WrappedCard = cardProps => (
	<ContainerWithCenteredItems item xs={12} md={6} key={cardProps.id}>
		<Card {...cardProps} />
	</ContainerWithCenteredItems>
);

export default WrappedCard;
