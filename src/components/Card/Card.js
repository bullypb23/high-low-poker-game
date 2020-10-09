import React from 'react';
import propTypes from 'prop-types';
import { Portal } from 'react-konva-portal';
import {
	Rect, Text, Group, Image,
} from 'react-konva';
import useImage from 'use-image';
import diamond from '../../assets/diamond.png';
import spade from '../../assets/spade.png';
import club from '../../assets/club.png';
import heart from '../../assets/heart.png';

const Card = ({
	card, X, Y, text, width, height,
}) => {
	let img;
	switch (card.suits) {
	case 'Club':
		img = club;
		break;
	case 'Diamond':
		img = diamond;
		break;
	case 'Spade':
		img = spade;
		break;
	case 'Heart':
		img = heart;
		break;
	default: img = heart;
	}
	const [imgSrc] = useImage(img);
	const content = (
		<Group x={X} y={Y} width={width} height={height}>
			<Rect fill="white" width={width} height={height} cornerRadius={10} stroke="black" strokeWidth={1} />
			<Text text={card.card} fill={card.color} width={width} height={height} padding={10} fontSize={width > 100 ? 28 : 20} align="left" />
			<Image image={imgSrc} x={10} y={width > 100 ? 40 : 30} width={width > 100 ? 20 : 15} height={width > 100 ? 20 : 15} />
			<Text text={card.card} fill={card.color} width={width} height={height} padding={10} rotation={180} x={width} y={height} fontSize={width > 100 ? 28 : 20} />
			<Image image={imgSrc} x={width > 100 ? width - 10 : width - 5} y={width > 100 ? height - 40 : height - 30} width={width > 100 ? 20 : 15} height={width > 100 ? 20 : 15} rotation={180} />
			<Image image={imgSrc} x={width / 4} y={(height - width / 2) / 2} width={width / 2} height={width / 2} />
			{text !== '' ? (
				<Text text={text} fill={card.color} width={width} height={height} padding={10} fontSize={width > 100 ? 28 : 20} align="left" verticalAlign="bottom" />
			) : null}
		</Group>
	);

	return <Portal>{content}</Portal>;
};

Card.propTypes = {
	card: propTypes.object.isRequired,
	X: propTypes.number.isRequired,
	Y: propTypes.number.isRequired,
	width: propTypes.number.isRequired,
	height: propTypes.number.isRequired,
	text: propTypes.string,
};

Card.defaultProps = {
	text: '',
};

export default Card;
