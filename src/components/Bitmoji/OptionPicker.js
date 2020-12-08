/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Piece } from 'avataaars';
import { Typography } from '@material-ui/core';

import VerticalTabs from 'components/VerticalTabs';
import { pascalToSentence } from 'utils';
import { PaletteIcon } from 'icons';
import Popover from 'components/Popover';
import Hr from 'components/html-components/Hr';
import config from './config';
import { TabPane, ColorContainer, Pieces, Color } from './style';
import { propTypes, defaultProps } from './types';

const ColorPicker = ({
	colorType,
	onChange,
	colors,
	colorAttribute,
	hatColors,
}) => (
	<Popover
		buttonComponent={
			<Pieces>
				<PaletteIcon color="secondary" style={{ fontSize: 100 }} />
			</Pieces>
		}
		component={
			<ColorContainer>
				{(colorType === 'color' &&
					Object.keys(colors).map(colorKey => {
						const color = colors[colorKey];
						return (
							<Color
								key={colorKey}
								$color={color}
								onClick={() =>
									onChange(colorAttribute, colorKey)
								}
							/>
						);
					})) ||
					Object.keys(hatColors).map(colorKey => {
						const { color, colorName } = hatColors[colorKey];
						return (
							<Color
								key={colorKey}
								$color={color}
								onClick={() => onChange('hatColor', colorName)}
							/>
						);
					})}
			</ColorContainer>
		}
	/>
);

const hasColors = (type, colors, topType, hats) =>
	colors &&
	!!Object.values(colors).length &&
	(type !== 'top' || hats.indexOf(topType) === -1) &&
	topType !== 'Eyepatch' &&
	topType !== 'LongHairShavedSides' &&
	topType !== 'LongHairFrida';

const hasHatColors = (hatColors, topType, hats) =>
	hatColors &&
	!!Object.values(hatColors).length &&
	hats.indexOf(topType) !== -1 &&
	topType !== 'Hat';

const Body = props => {
	const {
		onChange,
		type,
		values,
		attribute,
		transform,
		colors,
		hatColors,
		hats,
		topType,
	} = props;

	return (
		<TabPane>
			{hasColors(type, colors, topType, hats) && (
				<ColorPicker colorType="color" {...props} />
			)}
			{hasHatColors(hatColors, topType, hats) && (
				<ColorPicker colorType="hat" {...props} />
			)}
			{type === 'clothe' && <Hr />}
			{values.map(val => {
				const attr = {};
				attr[attribute] = val;
				if (transform) {
					attr.style = {
						transform,
					};
				}
				return (
					<Fragment key={val}>
						<Pieces onClick={() => onChange(attribute, val)}>
							{(type === 'avatarStyle' && (
								<Typography variant="body2">{val}</Typography>
							)) ||
								((val === 'Blank' || val === 'NoHair') && (
									<>
										<Typography variant="body2">
											None
										</Typography>
									</>
								)) || (
									<Piece
										pieceSize="100"
										pieceType={type}
										{...attr}
									/>
								)}
						</Pieces>
						{(val === 'Blank' || val === 'NoHair') && <Hr />}
					</Fragment>
				);
			})}
		</TabPane>
	);
};

const Bitmoji = ({ onChange, options }) => {
	const _onChange = (attr, val) => {
		// onChange(prev => ({
		// 	...prev,
		// 	[attr]: val,
		// }));
		onChange({
			...options,
			[attr]: val,
		});
	};

	const list = Object.keys(config).map(key => ({
		label: pascalToSentence(key),
		panel: (
			<Body
				key={key}
				{...options}
				onChange={_onChange}
				{...config[key]}
			/>
		),
	}));

	return <VerticalTabs list={list} style={{ height: 300 }} />;
};

Bitmoji.propTypes = propTypes;
Bitmoji.defaultProps = defaultProps;

export default Bitmoji;
