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

const Card = ({ card }) => {
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
		<Group x={500} y={20} width={150} height={250}>
			<Rect fill="white" width={150} height={250} cornerRadius={10} />
			<Text text={card.card} fill={card.color} width={150} height={250} padding={10} fontSize={28} align="left" />
			<Image image={imgSrc} x={10} y={40} width={20} height={20} />
			<Text text={card.card} fill={card.color} width={150} height={250} padding={10} rotation={180} x={150} y={240} fontSize={28} />
			<Image image={imgSrc} x={140} y={200} width={20} height={20} rotation={180} />
			<Image image={imgSrc} x={70 / 2} y={170 / 2} width={80} height={80} />
		</Group>
	);

	return <Portal>{content}</Portal>;
};

Card.propTypes = {
	card: propTypes.object.isRequired,
};

export default Card;
