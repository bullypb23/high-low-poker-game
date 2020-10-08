/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import useImage from 'use-image';
import {
	Layer, Image,
} from 'react-konva';
import { Stage } from 'react-konva-portal';
import { Wrapper, Container, Heading } from './Game.styles';
// import * as actions from '../../store/actions/game';
import imgSrc from '../../assets/card.jpg';
import Card from '../Card/Card';

const Game = ({ name, cards, cardOnTable }) => {
	const [img] = useImage(imgSrc);
	return (
		<Wrapper>
			<Container>
				<Stage width={window.innerWidth} height={400}>
					<Layer>
						{cards.map((card, index) => (
							<Image
								key={index}
								image={img}
								x={20}
								y={20}
								width={150}
								height={250}
							/>
						))}
					</Layer>
					<Card card={cardOnTable} />
				</Stage>
			</Container>
			<Heading>{name}</Heading>
		</Wrapper>
	);
};

Game.propTypes = {
	name: propTypes.string.isRequired,
	cards: propTypes.array.isRequired,
	cardOnTable: propTypes.object.isRequired,
};

const mapStateToProps = state => (
	{
		name: state.game.name,
		cards: state.game.cards,
		cardOnTable: state.game.cardOnTable,
	}
);

const mapDispatchToProps = () => (
	{

	}
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
